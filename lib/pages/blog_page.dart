import 'package:jaspr/jaspr.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';

class BlogPage extends StatelessComponent {
  const BlogPage(
    this.markdown, {
    super.key,
    required this.metaTitle,
    required this.metaDesc,
    required this.metaKeyword,
  });

  final String metaTitle, metaDesc, metaKeyword;
  final String markdown;

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: metaTitle,
      metaDesc: metaDesc,
      metaKeywords: metaKeyword,
      visibleAurora: false,
      [MarkdownText(markdown)],
    );
  }
}
