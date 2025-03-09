import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';
import '../components/typewriter.dart';
import '../constants/routes.dart';
import '../utils/interfaces.dart';

class Home extends StatelessComponent implements IPage {
  const Home({super.key});

  @override
  Route get route {
    return Route(
      path: '/',
      title: "LaV's Digital Home",
      builder: (_, __) => this,
    );
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: "LaV's Digital Home",
      metaDesc: "Everything about me should be present on this website.",
      metaKeywords: "LaV, home, homepage, website, portfolio, resume, CV, "
          "programmer, coder, creator, aurora",
      [
        const Typewriter(messages: [
          'Hello!',
          'Interested to know me?',
          'Or, maybe in my stuff',
          'Thanks for dropping by!',
        ]),
        MarkdownText(_markdown),
      ],
    );
  }
}

final _markdown = """
# Welcome to LaV's Digital Home
First, let me tell you about myself so I go by LaV and I am a 20 y/o lad who 
likes to build stuff (**not** limited to coding).<br>
Previously, I used to tell everyone that I am a problem solver but lately, I 
haven't came across any "problem" to solve so here I am, building beautiful 
stuff like this website!

You can check out my projects on the <a href="${NavbarRoute.project.path}" 
class="badge">Project Page</a> or on my <a href="$githubLink" 
class="wavy-text">GitHub</a> if it is open-sourced.<br>
(Do drop me a follow and star the repos that you like ;)

Read my random thoughts as my <a href="${NavbarRoute.blogs.path}" 
class="badge">Blogs!</a> Or, if you wanna get in touch? Check out the <a 
href="${NavbarRoute.contacts.path}" class="badge">Contacts & Socials!</a> Be 
careful about my time tho'. I won't be able to reply quickly if you text me at 
2 AM LoL. You can see my time on the top-left of your screen ;)

If you are the type who is here for my resume, then here you go: <a 
href='$cvLink' class='fancy-badge' target='_blank'><span>CV / Resume<span></a>

Everything on this page is well organized and present in the navbar so choose 
whatever you wanna read without getting overwhelmed! e.g.,
- You like my stuff and wanna support me? In that case, I'm glad, haha, and 
you should check out the <a href="${NavbarRoute.supports.path}" class="badge">
Support page!</a> 
- Wanna know what tech I use and my favorite programming languages? If you are 
a programmer, then you will know how many people ask you this question haha. 
That's why I have dedicated a page to it. Check out <a 
href="${NavbarRoute.favTech.path}" class="badge">Fav Tech!</a>

I hope you like being here. Enjoy your stay!
""";
