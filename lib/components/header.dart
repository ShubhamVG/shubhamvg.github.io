import 'package:jaspr/jaspr.dart';

import 'navbar.dart';
import 'time.dart';

@client
class Header extends StatelessComponent {
  const Header({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield header(const [Time(), Navbar()]);
  }

  @css
  static final styles = <StyleRule>[
    css.media(MediaQuery.screen(maxWidth: 50.rem), [
      css('header').box(
        margin: EdgeInsets.only(left: 0.65.rem, right: 0.65.rem, top: 0.65.rem),
        position: Position.relative(),
      )
    ]),
    css('header')
        .box(
            display: Display.flex,
            maxWidth: 62.5.rem,
            margin: EdgeInsets.symmetric(horizontal: Unit.auto))
        .flexbox(justifyContent: JustifyContent.spaceBetween),
  ];
}
