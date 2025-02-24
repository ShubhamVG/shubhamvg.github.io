import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';

class Main extends StatelessComponent {
  const Main(this.children, {super.key});

  final List<Component> children;

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield main_(children);
  }

  @css
  static final styles = <StyleRule>[
    css('main').box(
        margin: EdgeInsets.symmetric(horizontal: Unit.auto),
        maxWidth: 62.5.rem),
    css.media(smolScrnMediaQry, [
      css('main').box(margin: EdgeInsets.symmetric(horizontal: 0.63.rem)),
    ]),
  ];
}
