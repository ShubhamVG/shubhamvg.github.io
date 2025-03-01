import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';
import 'aurora_background.dart';

class Main extends StatelessComponent {
  const Main(
    this.children, {
    super.key,
    required this.metaTitle,
    required this.metaDesc,
    required this.metaKeywords,
    this.visibleAurora = true,
  });

  final bool visibleAurora;
  final String metaTitle, metaDesc, metaKeywords;
  final List<Component> children;

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Document.head(meta: {
      "title": metaTitle,
      "description": metaDesc,
      "keywords": metaKeywords,
    });

    if (!visibleAurora) {
      yield AuroraBackground.hideStyle();
    }

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
