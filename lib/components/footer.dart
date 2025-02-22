import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../constants/routes.dart';

class Footer extends StatelessComponent {
  const Footer({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield footer(
      styles: Styles.text(align: TextAlign.center),
      const [
        Text('Made by '),
        Link(to: githubLink, child: Text('LaV')),
      ],
    );
  }
}
