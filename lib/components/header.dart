import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';
import 'navbar.dart';
import 'time.dart';

class Header extends StatelessComponent {
  const Header({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield header(const [Time(), Navbar()]);
  }

  @css
  static final styles = <StyleRule>[
    css('header').styles(
        display: Display.flex,
        zIndex: ZIndex(10),
        maxWidth: maxScrnWidth,
        margin: Margin.symmetric(horizontal: Unit.auto),
        justifyContent: JustifyContent.spaceBetween),
    css.media(smolScrnMediaQry, [
      css('header').styles(
        position: Position.relative(),
        margin: Margin.only(left: 0.65.rem, right: 0.65.rem, top: 0.65.rem),
      )
    ]),
  ];
}
