import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';
import '../constants/routes.dart';
import '../utils/interfaces.dart';

class Projects extends StatelessComponent implements IPage {
  const Projects({super.key});

  @override
  Route get route {
    return Route(
      path: NavbarRoute.project.path,
      title: "LaV's Fancy Projects",
      builder: (_, __) => this,
    );
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: "LaV's Fancy Projects",
      metaDesc: "Some of the projects I made that I really like & wanted to "
          "share.",
      metaKeywords: "projects, LaV",
      [MarkdownText(_markdown)],
    );
  }
}

const _markdown = """
# Projects
Thinking which ones to add here. Till then, check out my <a href="$githubLink" 
class='badge'>GitHub</a> Thanks!
""";
