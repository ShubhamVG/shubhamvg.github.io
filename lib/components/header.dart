import 'package:jaspr/jaspr.dart';

import 'navbar.dart';
import 'time.dart';

class Header extends StatelessComponent {
  const Header({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield header(
      styles: Styles.box(display: Display.flex).flexbox(
        justifyContent: JustifyContent.spaceBetween,
      ),
      const [Time(), Navbar()],
    );
  }
}
