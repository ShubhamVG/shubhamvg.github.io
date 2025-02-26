import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import 'components/aurora_background.dart';
import 'components/header.dart';
import 'components/footer.dart';
import 'constants/theme.dart';
import 'pages/goals.dart';
import 'pages/home.dart';

@client
class App extends StatelessComponent {
  const App({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div([
      const AuroraBackground(),
      const Header(),
      Router(routes: [
        Route(
          path: '/',
          title: 'Home',
          builder: (_, __) => const Home(),
        ),
        Route(
          path: '/goals',
          title: 'Goals',
          builder: (_, state) => Goals(year: state.params['year']),
        ),
        Route(
          path: '/goals/:year',
          title: 'Goals',
          builder: (_, state) => Goals(year: state.params['year']),
        ),
        Route(
          path: '/goals/:year',
          title: 'Goals',
          builder: (_, state) => Goals(year: state.params['year']),
        ),
      ])
    ]);

    yield Footer();
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
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
        fontWeight: FontWeight.bold,
        backgroundColor: Colors.black,
        raw: {
          // 'background': fancyBadgeBgCss,
          '--progress-start': '20%',
          '--progress-end': '42%',
        }),
    css('.fancy-badge::before').styles(
        content: '',
        position: Position.absolute(),
        width: 95.percent,
        height: 95.percent,
        radius: BorderRadius.circular(9999.rem),
        raw: {'background': 'black'}),
    css('.font-large').styles(fontSize: 1.5.rem),
    css('.wavy-text').styles(
      textDecoration: TextDecoration(
        line: TextDecorationLine.underline,
        style: TextDecorationStyle.wavy,
        thickness: TextDecorationThickness.value(0.06.rem),
      ),
    ),
  ];
}
