import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../constants/routes.dart';

class Navbar extends StatelessComponent {
  const Navbar({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield nav(
      styles: Styles.raw({'height': 'fit-content'})
          // .background(color: Colors.red)
          .box(
        margin: EdgeInsets.symmetric(vertical: Unit.auto),
      ),
      NavbarRoute.values.map((route) {
        return Link(to: route.path, child: text(route.label));
      }).toList(growable: false),
    );
  }
}
