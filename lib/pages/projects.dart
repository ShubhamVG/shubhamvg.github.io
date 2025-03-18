import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../components/carousel.dart';
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
      metaKeywords: "projects, brainiacs.in, anime, cine, snek-meth, AST, "
          "recyclopia, hackathon, LaV",
      [
        const MarkdownText(_intro),

        // Brainiacs.in
        section([
          const MarkdownText(_brainiacs),
          Carousel([
            '/images/brainiacs.in.png',
            '/images/brainiacs.in-crew.png',
          ]),
          const MarkdownText(_brainiacsTechStack),
        ]),

        // Cine
        section([
          const MarkdownText(_cine),
          Carousel([
            'https://raw.githubusercontent.com/ShubhamVG/cine/refs/heads/main'
                '/GitHub%20Assets/furret.png',
          ]),
          const MarkdownText(_cineTechStack),
        ]),

        // snek-meth
        section([const MarkdownText(_snekMeth)]),

        // Recyclopia
        section([const MarkdownText(_recyclopia)]),
      ],
    );
  }
}

const _brainiacs = """
## <a href="https://brainiacs.in" class='wavy-text'>Brainiacs.in</a>
The best way to describe *Brainiacs.in* would be by telling you I made it in 
the first place. I made it because my friends and I like anime, games, and you 
know, reading or watching fictional stuff and that's why, we often ask each 
other which anime or game or fictional character the other resembles the most. 
It is a good conversation starter too but as you can imagine, it can get hard 
& messy to remember which person gave you which character or role and that's 
why I made *Brainiacs.in*. After signing up, you can enter your friends' names 
and the anime or fictional character they resemble the most along with a 
picture and then share that with friends. It it totally free too. <a 
href="https://brainiacs.in" class='badge' target="_blank">Check it out!</a>
<br><br>
""";

const _brainiacsTechStack = """
### Tech used
- HTML/CSS/Dart for the frontend however soon will be migrating to <a 
href="https://jaspr.site/" class="wavy-text" target="_blank">Jaspr</a> *after 
redesigning the pages*.
- Backend made with <a href="https://github.com/gin-gonic/gin" 
class="wavy-text" target="_blank">Gin</a> and database used SQLite with <a 
href="https://gorm.io" class="wavy-text" target="_blank">GORM</a>.
- Big shoutout to <a href="https://github.com/interrrp" class="badge" 
target="_blank">@interrrp</a> for optimizing the backend by an order of 
magnitude or probably more. Dude knows his stuff really well.
""";

const _cine = """
## <a href="$githubLink/cine" class='wavy-text'>Cine</a>
Cine lets you convert images, GIFs, videos & such into ASCII art (yes, 
animated too). This was a quick project I made in Go. Even made a <a 
href="https://youtu.be/N3e6IuwF6Gk" class="badge" target="_blank">YT skit</a> 
using it.

I wanted to add more features to it but then I got busy with a hackathon and 
couldn't put my hands on it ever since so, don't expect a lot from it. Free 
free to contribute to it tho'. <a href="$githubLink/cine" class='badge' 
target="_blank">Check out Cine!</a>
""";

const _cineTechStack = """
### Tech used
- Go for everything.
- FFMpeg, need any more introduction than that? Haha.
""";

const _intro = """
# Projects
I have worked on a lot of projects, or so I feel but here are a few that I 
wanna share with everyone. Also, check out my <a href="$githubLink" 
class='badge'>GitHub</a> for more projects that I may not have added here. 
Enjoy!
""";

const _recyclopia = """
## <a href="$recyclopiaLink" class='wavy-text'>Recyclopia</a>
Recyclopia is from my last hackathon. We were 3 members and I was the team 
lead. Not gonna describe much about it here. <a href="$recyclopiaLink" 
class='badge' target="_blank">Check out Recyclopia</a>

### Tech used
- Flutter
""";

const _snekMeth = """
## <a href="$githubLink/snek-meth" class='wavy-text'>snek-meth</a>
snek-meth is basically a math engine and parser that can evaluate & parse 
mathematical expressions. I made when I was learning about parsing, 
tokenizing. AST, etc.

I specifically made it as a maths engine because I want to rewrite this in zig 
some day and use it to make a fractal generator app for mobile. <a 
href="$githubLink/snek-meth" class='badge' target="_blank">Check out 
snek-meth!</a>

### Tech used
- Python but Zig (soon hopefully)
- Great tutorial by <a href="https://www.youtube.com/@CodePulse" 
class="wavy-text" target="_blank">CodePulse</a>.
""";
