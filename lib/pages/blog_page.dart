import 'package:jaspr/jaspr.dart';

import '../components/aurora_background.dart';
import '../components/main_.dart';
import '../components/markdown_text.dart';

class BlogPage extends StatelessComponent {
  const BlogPage(this.markdown, {super.key});

  final String markdown;

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield AuroraBackground.hideStyle();
    yield Main([MarkdownText(markdown)]);
  }
}
