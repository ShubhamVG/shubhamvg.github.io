import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import 'components/aurora_background.dart';
import 'components/header.dart';
import 'components/footer.dart';
import 'constants/theme.dart';
import 'pages/home.dart';

@client
class App extends StatelessComponent {
  const App({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield const AuroraBackground();
    yield const Header();
    yield Router(routes: [
      Route(
        path: '/',
        title: 'Home',
        builder: (context, state) => const Home(),
      ),
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
    css('.wavy-text').styles(
      textDecoration: TextDecoration(
        line: TextDecorationLine.underline,
        style: TextDecorationStyle.wavy,
        thickness: TextDecorationThickness.value(0.06.rem),
      ),
    ),
  ];
}
