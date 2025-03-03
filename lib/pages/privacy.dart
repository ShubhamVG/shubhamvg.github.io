import 'package:jaspr/jaspr.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';

class Privacy extends StatelessComponent {
  const Privacy({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: "Privacy Page",
      metaDesc: "Privacy & Terms of Service or whatever it is called",
      metaKeywords: "privacy, ToS, terms of service",
      [MarkdownText(_markdown)],
    );
  }
}

const _markdown = """
# Privacy
Nothing identifiable is being collected. You can enjoy your anonymity ;)
""";
