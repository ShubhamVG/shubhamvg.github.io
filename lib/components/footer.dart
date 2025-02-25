import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../constants/routes.dart';

class Footer extends StatelessComponent {
  const Footer({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield footer(
      styles: Styles(color: Colors.darkGray, textAlign: TextAlign.center),
      const [
        Text('Made by '),
        Link(classes: 'wavy-text', to: githubLink, child: Text('LaV')),
      ],
    );
  }
}
