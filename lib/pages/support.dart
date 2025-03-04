import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';
import '../constants/routes.dart';
import '../utils/interfaces.dart';

class Support extends StatelessComponent implements IPage {
  const Support({super.key});

  @override
  Route get route {
    return Route(
      path: NavbarRoute.supports.path,
      title: 'Support',
      builder: (_, __) => this,
    );
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: "Support's page",
      metaDesc: "Support LaV & his endeavours.",
      metaKeywords: "support, LaV, kofi, endeavours",
      [MarkdownText(_markdown)],
    );
  }
}

final _markdown = """
# Support LaV
There are multiple ways of supporting me and my endeavours. For example, by 
financial means or by providing indirect support. I have briefly described 
them below.

## Donations
I have a <a href="$kofiLink" class='badge'>Ko-fi</a> page for my <a 
href="https://brainiacs.in/" class='wavy-text'>Brainiacs.in</a> website. 
You can donate there if you have the means.

## Hire me for your projects
I'd be glad to work on new stuff and that will also keep me engaged. BTW, even 
if you are not a company or organization, but still want me to work on one of 
your projects, then don't hesitate to reach out! If I like the idea and have 
free time, then I won't mind contributing. The best way to reach me for either 
reason can be found on the <a href="${NavbarRoute.contacts.path}" 
class='badge'>Contact's Page</a>.

## Indirect Support
This would include liking/starring my stuff on <a href="$githubLink" 
class='badge'>GitHub</a> and other <a href="${NavbarRoute.contacts.path}" 
class='wavy-text'>socials</a>. Keep using my stuff and share them with your 
friends and such.

And lastly, thank you for using my stuff and I hope you liked them! I guess 
that is what made you end up on this page haha. I hope to continue making cool 
stuff in the future. Thanks again ;)
""";
