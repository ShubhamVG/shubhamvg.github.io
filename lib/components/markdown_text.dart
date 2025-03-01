import 'package:jaspr/jaspr.dart';
import 'package:markdown/markdown.dart' as md;

class MarkdownText extends StatelessComponent {
  const MarkdownText(this.markdown, {super.key});

  final String markdown;

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield RawText(md.markdownToHtml(markdown));
  }
}
