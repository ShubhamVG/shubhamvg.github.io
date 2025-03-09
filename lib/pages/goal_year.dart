import 'dart:convert';
import 'dart:io';

import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../constants/routes.dart';
import '../constants/theme.dart';
import '../components/main_.dart';
import '../utils/interfaces.dart';

class GoalYear extends StatelessComponent implements IPage {
  const GoalYear(this.year, {super.key});

  final String year;

  @override
  Route get route {
    return Route(
      path: year,
      title: '$year Goals',
      builder: (_, __) => this,
    );
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    // Read the json and extract goals/tasks from them
    final jsonFile = File('lib/goals/$year.json').readAsStringSync();
    final jsonList =
        (jsonDecode(jsonFile) as List).cast<Map<String, dynamic>>();

    // Convert the json into a class
    final goals = <_Goal>[];
    for (final json in jsonList) {
      goals.add(_Goal(
        iconUrl: json['icon']!,
        text: json['text']!,
        progress: json['progress']!,
      ));
    }

    // Sort the goals based on which one has more progress
    goals.sort((g1, g2) => g2.progress - g1.progress);

    // Seperate pending goals and finished goals
    final pendingGoals = <_Goal>[];
    final finishedGoals = <_Goal>[];
    for (final goal in goals) {
      if (goal.progress == 100) {
        finishedGoals.add(goal);
      } else {
        pendingGoals.add(goal);
      }
    }

    yield Document.head(
      children: [link(href: NavbarRoute.goals.path, rel: 'canonical')],
    );

    yield Main(
      metaTitle: "LaV's $year Goals",
      metaDesc: "These are all the goals I wanna achieve in $year.",
      metaKeywords: 'goals, $year, LaV, new year resolution',
      [
        // Year container
        div(id: 'year-container', [
          div(
            id: 'year-progress',
            styles: Styles(raw: {'--progress': '${_yearProgress()}%'}),
            [
              span([Text("$year's goals")])
            ],
          ),
          div(id: 'year-text', [
            p(
              classes: 'font-large',
              [Text('This is how much of $year has passed.')],
            ),
            p([
              Text(
                'And below is everything LaV expects to achieve before it '
                'ends.',
              ),
            ]),
          ]),
        ]),

        // Pending goals container
        div([
          p(
              classes: 'goals-category-title',
              [const Text('Goals in progress:')]),
          div(
            classes: 'goals-container',
            pendingGoals.map((e) => _pendingGoal(e)).toList(growable: false),
          ),
        ]),

        // Finished goals container
        div([
          p(
            classes: 'goals-category-title',
            [const Text('Goals finished so far:')],
          ),
          div(
            classes: 'goals-container',
            finishedGoals.map((e) => _finishedGoal(e)).toList(growable: false),
          ),
        ]),
      ],
    );
  }

  Component _finishedGoal(final _Goal goal) {
    return div(classes: 'goal', [
      // goal text
      div(classes: 'goal-text', [Text(goal.text)]),

      // goal progress and logo
      div(
        classes: 'goal-progress',
        styles: Styles(raw: {'--progress': '100%'}),
        [
          img(src: '/images/crown.svg', classes: 'crown'),
          img(
            src: goal.iconUrl.startsWith('https://')
                ? goal.iconUrl
                : '/images/${goal.iconUrl}',
            classes: 'goal-logo',
          )
        ],
      ),
    ]);
  }

  Component _pendingGoal(final _Goal goal) {
    return div(classes: 'goal', [
      // goal progress and logo
      div(
        classes: 'goal-progress',
        styles: Styles(raw: {'--progress': '${goal.progress}%'}),
        [
          img(
            src: goal.iconUrl.startsWith('https://')
                ? goal.iconUrl
                : '/images/${goal.iconUrl}',
            classes: 'goal-logo',
          )
        ],
      ),

      // goal text
      div(classes: 'goal-text', [Text(goal.text)]),
    ]);
  }

  int _yearProgress() {
    final duration = DateTime.now().difference(DateTime(2025));
    final yearProgressPercentage = duration.inDays * 100 ~/ 365;
    return yearProgressPercentage;
  }

  @css
  static final styles = <StyleRule>[
    css('.crown').styles(
        position: Position.absolute(right: (-0.4).rem, top: (-1.25).rem),
        width: 2.rem,
        height: 2.rem,
        raw: {'rotate': '30deg'}),
    css('.goal').styles(
        display: Display.flex,
        width: 100.percent,
        padding: Padding.all(0.5.rem),
        alignItems: AlignItems.center),
    css('.goal-logo').styles(
        zIndex: ZIndex(1),
        width: 80.percent,
        height: 80.percent,
        radius: BorderRadius.circular(9999.rem)),
    css('.goal-progress').styles(
        display: Display.flex,
        position: Position.relative(),
        width: 3.5.rem,
        height: 3.5.rem,
        radius: BorderRadius.circular(9999.rem),
        shadow: BoxShadow(
            offsetX: Unit.zero,
            offsetY: Unit.zero,
            blur: 0.5.rem,
            color: auroraColor),
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
        raw: {'background': progressBgCss}),
    css('.goal-progress::before').styles(
        content: '',
        position: Position.absolute(),
        width: 80.percent,
        height: 80.percent,
        radius: BorderRadius.circular(9999.rem),
        raw: {'background': bgGradient}),
    css('.goal-text').styles(
        width: 80.percent,
        minHeight: 2.rem,
        padding: Padding.all(1.rem),
        margin: Margin.all(0.5.rem),
        radius: BorderRadius.circular(0.5.rem),
        shadow: BoxShadow(
          offsetX: Unit.zero,
          offsetY: Unit.zero,
          blur: 0.4.rem,
          color: auroraColor,
        ),
        backgroundColor: goalTextContainerColor),
    css('.goals-category-title').styles(
        margin: Margin.only(bottom: Unit.zero, top: 2.rem), fontSize: 1.2.rem),
    css('.goals-container').styles(
        display: Display.grid,
        margin: Margin.only(bottom: 2.rem, right: 0.8.rem),
        gridTemplate: GridTemplate(
          columns: GridTracks([
            GridTrack(TrackSize.fr(1)),
            GridTrack(TrackSize.fr(1)),
          ]),
        ),
        raw: {'column-gap': '1.5rem'}),
    css('#year-container').styles(
        display: Display.flex,
        width: Unit.fitContent,
        margin: Margin.symmetric(horizontal: Unit.auto)),
    css('#year-progress').styles(
        display: Display.flex,
        position: Position.relative(),
        width: 10.rem,
        height: 10.rem,
        radius: BorderRadius.circular(9999.rem),
        shadow: BoxShadow(
          offsetX: Unit.zero,
          offsetY: Unit.zero,
          blur: 0.5.rem,
          color: auroraColor,
        ),
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
        raw: {'background': progressBgCss}),
    css('#year-progress::before').styles(
        content: '',
        position: Position.absolute(),
        width: 90.percent,
        height: 90.percent,
        radius: BorderRadius.circular(9999.rem),
        shadow: BoxShadow(
          offsetX: Unit.zero,
          offsetY: Unit.zero,
          blur: 0.5.rem,
          color: auroraColor,
        ),
        raw: {'background': progressCircGradient}),
    css('#year-progress > span').styles(
        zIndex: ZIndex(1),
        width: 80.percent,
        textAlign: TextAlign.center,
        fontSize: 1.3.rem),
    css('#year-text').styles(
        display: Display.flex,
        margin: Margin.only(left: 1.5.rem),
        flexDirection: FlexDirection.column,
        justifyContent: JustifyContent.center),
    css.media(smolScrnMediaQry, [
      css('.goal').styles(width: Unit.fitContent),
      css('.goal:nth-child(even)')
          .styles(margin: Margin.only(left: Unit.auto, right: Unit.zero)),
      css('.goal-text').styles(width: 70.percent),
      css('.goals-container').styles(display: Display.block),
    ]),
    css.media(MediaQuery.screen(maxWidth: 39.rem), [
      css('.goal').styles(width: 80.percent),
      css('.goal-text').styles(width: Unit.expression('calc(90% - 5rem)')),
      css('#year-container').styles(display: Display.block),
      css('#year-progress')
          .styles(margin: Margin.symmetric(horizontal: Unit.auto)),
      css('#year-text').styles(display: Display.block),
    ]),
  ];
}

final class _Goal {
  const _Goal({
    required this.iconUrl,
    required this.text,
    required this.progress,
  });

  final String iconUrl;
  final String text;
  final int progress;
}
