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
    css(':root')
        .text(fontFamily: FontFamily(titliWeb))
        .raw({'color-scheme': 'dark'}),
    css('a').text(
      color: Colors.white,
      decoration: TextDecoration(style: TextDecorationStyle.unset),
    ),
  ];
}
