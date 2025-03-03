import 'dart:io';

import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';
import 'package:yaml/yaml.dart';

import 'components/aurora_background.dart';
import 'components/footer.dart';
import 'components/header.dart';
import 'constants/routes.dart';
import 'constants/theme.dart';
import 'pages/blog_page.dart';
import 'pages/blogs.dart';
import 'pages/fav_tech.dart';
import 'pages/goal_year.dart';
import 'pages/goals.dart';
import 'pages/home.dart';
import 'pages/journey.dart';
import 'pages/support.dart';

class App extends StatelessComponent {
  const App({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div([
      if (!kDebugMode) const AuroraBackground(),
      const Header(),
      Router(routes: [
        Route(
          path: '/',
          title: 'LaV',
          builder: (_, __) => const Home(),
        ),
        Route(
          path: NavbarRoute.goals.path,
          title: 'Goals',
          builder: (_, state) => const Goals(),
          routes: _goalYearRoutes(),
        ),
        Route(
          path: NavbarRoute.favTech.path,
          title: 'Tech Stack',
          builder: (_, __) => const FavTech(),
        ),
        Route(
          path: NavbarRoute.blogs.path,
          title: 'Blogs',
          builder: (_, __) => const Blogs(),
          routes: _blogPosts(),
        ),
        Route(
          path: NavbarRoute.journey.path,
          title: 'Journey',
          builder: (_, __) => const Journey(),
        ),
        Route(
          path: NavbarRoute.supports.path,
          title: 'Support',
          builder: (_, __) => const Support(),
        ),
      ])
    ]);

    yield Footer();
  }

  List<Route> _blogPosts() {
    final data = File('lib/blogs/posts.yaml').readAsStringSync();
    final posts = loadYaml(data) as YamlList;
    final routes = <Route>[];

    for (int i = 0; i < posts.length; i++) {
      final post = posts[i] as YamlMap;
      final blogMd =
          File('lib/blogs/markdowns/${post['stub']!}.md').readAsStringSync();

      routes.add(Route(
        title: post['title']!,
        path: post['stub']!,
        builder: (_, __) => BlogPage(
          blogMd,
          metaTitle: post['title']!,
          metaDesc: post['desc']!,
          metaKeyword: post['keywords']!,
        ),
      ));
    }

    return routes;
  }

  List<Route> _goalYearRoutes() {
    final goalFiles = Directory('lib/goals').listSync();
    final years = goalFiles.map((e) {
      final start = e.path.length - 9;
      return e.path.substring(start, start + 4);
    }).toList(growable: false);

    final routes = years
        .map((year) => Route(
            path: year,
            title: '$year Goals',
            builder: (_, __) => GoalYear(year)))
        .toList(growable: false);

    return routes;
  }

  @css
  static final styles = <StyleRule>[
    css.import(titliWebUrl),
    css(':root').styles(
        fontFamily: FontFamily(titliWeb), raw: {'color-scheme': 'dark'}),
    css('a').styles(color: Colors.white, textDecoration: TextDecoration.none),
    css('.badge').styles(
        display: Display.inlineBlock,
        padding: Padding.all(0.25.rem),
        radius: BorderRadius.circular(0.4.rem),
        outline: Outline(
          color: shinyGreen,
          style: OutlineStyle.solid,
          width: OutlineWidth(0.06.rem),
        ),
        transition: Transition('all', duration: 300, curve: Curve.ease),
        backgroundColor: darkGreen),
    css('.badge:hover').styles(
        shadow: BoxShadow(
          offsetX: Unit.zero,
          offsetY: Unit.zero,
          color: Colors.black,
        ),
        raw: {'scale': '120%', 'backdrop-filter': 'blur(1rem)'}),
    css('body').styles(
      display: Display.flex,
      position: Position.relative(),
      minHeight: 100.vh,
      flexDirection: FlexDirection.column,
      justifyContent: JustifyContent.spaceBetween,
    ),
    css('.fancy-badge').styles(
        display: Display.inlineFlex,
        position: Position.relative(),
        padding: Padding.symmetric(vertical: 0.4.rem, horizontal: 0.5.rem),
        margin: Margin.symmetric(horizontal: 0.5.rem),
        radius: BorderRadius.circular(9999.rem),
        transition: Transition('all', duration: 300),
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
        fontWeight: FontWeight.bold,
        backgroundColor: Colors.black,
        raw: {
          'background': fancyBadgeBgCss,
          '--progress-start': '20%',
          '--progress-end': '42%',
          'animation': 'dance 10s linear infinite alternate',
        }),
    css('.fancy-badge:hover').styles(
      transition: Transition('all', duration: 300),
      raw: {'scale': '120%'},
    ),
    css('.fancy-badge::before').styles(
        content: '',
        position: Position.absolute(),
        width: 95.percent,
        height: 95.percent,
        radius: BorderRadius.circular(9999.rem),
        raw: {'background': 'black'}),
    css('.fancy-badge:hover::before')
        .styles(width: 90.percent, height: 90.percent),
    css('.fancy-badge > span')
        .styles(zIndex: ZIndex(1), textAlign: TextAlign.center),
    css('.font-large').styles(fontSize: 1.5.rem),
    css('.wavy-text').styles(
      textDecoration: TextDecoration(
        line: TextDecorationLine.underline,
        style: TextDecorationStyle.wavy,
        thickness: TextDecorationThickness.value(0.06.rem),
      ),
    ),
    css('@property --pe').styles(raw: {
      'syntax': "'<percentage>'",
      'initial-value': '20%',
      'inherits': 'false',
    }),
    css('@property --ps').styles(raw: {
      'syntax': "'<percentage>'",
      'initial-value': '0%',
      'inherits': 'false',
    }),
    css.keyframes('dance', {
      '100%': Styles(
        raw: {'--ps': '80%', '--pe': '100%'},
      ),
    }),
  ];
}
