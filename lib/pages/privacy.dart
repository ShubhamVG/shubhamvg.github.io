import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';
import '../constants/routes.dart';
import '../utils/interfaces.dart';

class Privacy extends StatelessComponent implements IPage {
  const Privacy({super.key});

  @override
  Route get route {
    return Route(
      path: AdditionalRoutes.privacy.path,
      title: 'Privacy',
      builder: (_, __) => this,
    );
  }

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
