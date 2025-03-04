import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';
import '../utils/interfaces.dart';

class BlogPage extends StatelessComponent implements IPage {
  const BlogPage(
    this.markdown, {
    super.key,
    required this.stub,
    required this.title,
    required this.metaDesc,
    required this.metaKeyword,
  });

  final String stub, title, metaDesc, metaKeyword;
  final String markdown;

  @override
  Route get route {
    return Route(
      title: title,
      path: stub,
      builder: (_, __) => this,
    );
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: title,
      metaDesc: metaDesc,
      metaKeywords: metaKeyword,
      visibleAurora: false,
      [MarkdownText(markdown)],
    );
  }
}
