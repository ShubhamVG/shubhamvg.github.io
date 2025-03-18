import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';

@client
class YearProgress extends StatelessComponent {
  const YearProgress(this.year);

  final int year;

  @override
  Iterable<Component> build(BuildContext context) sync* {
    // First year progress is whatever was calculated during build and the
    // other is populating the progress based on the current date (on the
    // client)
    int yearProgress = _yearProgress();
    if (kIsWeb) {
      yearProgress = _yearProgress();
    }

    yield div(
      id: 'year-progress',
      styles: Styles(raw: {'--progress': '$yearProgress%'}),
      [
        span([Text("$year's goals")])
      ],
    );
  }

  @css
  static final styles = <StyleRule>[
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
  ];

  int _yearProgress() {
    final indianTimeNow = DateTime.now().add(const Duration(
      hours: 5,
      minutes: 30,
    ));
    final duration = indianTimeNow.difference(DateTime(year));
    final yearProgressPercentage = duration.inDays * 100 ~/ 365;

    if (yearProgressPercentage >= 100) {
      return 100;
    }

    return yearProgressPercentage;
  }
}
