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
    css('main').styles(
        maxWidth: maxScrnWidth,
        margin: Margin.symmetric(horizontal: Unit.auto, vertical: 1.rem)),
    css.media(smolScrnMediaQry, [
      css('main').styles(margin: Margin.symmetric(horizontal: 0.63.rem)),
    ]),
  ];
}
