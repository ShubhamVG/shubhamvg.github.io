import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';
import '../constants/routes.dart';
import '../utils/interfaces.dart';

class Contacts extends StatelessComponent implements IPage {
  const Contacts({super.key});

  @override
  Route get route {
    return Route(
      path: NavbarRoute.contacts.path,
      title: 'Contacts & Socials',
      builder: (_, __) => this,
    );
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: "Contacts & Socials",
      metaDesc: "Best way to reach out LaV.",
      metaKeywords: "socials, contacts, LaV, reach out",
      [MarkdownText(_markdown)],
    );
  }
}

final _markdown = """
# Reach out LaV
All of my socials are mentioned on this page. Reach me out with whichever you 
like the most. Here they are:
- <a href="$emailLink" class='badge'>Email</a> - Honestly, the best way to 
reach me out lol.
- <a href="$githubLink" class='badge'>GitHub</a> - If you ain't a coder, then 
you may not understand what this is for :p
- <a href="$blueSkyLink" class='badge'>BlueSky</a> - I will try to be more 
active there. Feel free to ping me and say hi!
- <a href="$kofiLink" class='badge'>Ko-fi</a> - In case you feel generous to 
donate LoL.
- <a href="$youtubeLink" class='badge'>YouTube</a> - Channel name is inspired 
by bo'oh'o'wa'er haha.
- <a href="$cvLink" class='badge'>Resume</a> - I mean, not a social but yk, 
just tryna fill this page xD

That's everything, I guess. I'm not a big social media person. I prefer living 
in the moment instead.
I have a Discord but I don't wanna share that. If you know me, then you know 
me :p

BTW, if were expecting a LinkedIn but surprised that it ain't present, then 
check out my blog about <a 
href="${NavbarRoute.blogs.path}/why_i_will_never_have_a_linkedin" 
class='wavy-text'>*why I will never have a LinkedIn*</a>.
""";
