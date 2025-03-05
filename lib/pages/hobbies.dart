import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';
import '../constants/routes.dart';
import '../utils/interfaces.dart';

class Hobbies extends StatelessComponent implements IPage {
  const Hobbies({super.key});

  @override
  Route get route {
    return Route(
      path: NavbarRoute.skillsHobbies.path,
      title: 'Skills & Hobbies',
      builder: (_, __) => this,
    );
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: "Skills & Hobbies",
      metaDesc: "I have a lot of hobbies so I have listed some of them here "
          "one this page.",
      metaKeywords: "skills, hobbies, LaV, gardening, programmer, code, math, "
          "card pyramid, cooking, improv, gardening, flowers, humour, jokes, "
          "hacking, crafting, designing, creativity",
      [MarkdownText(_markdown)],
    );
  }
}

const _markdown = """
# Skills & Hobbies
If you are someone who know me from Discord, then you may know how many 
hobbies I have. Or if you know me personally IRL, then you may have been me 
engaged in a couple of niche activities but did you know how many funky 
activities I engage in? Well, the answer is TOO MANY! I have listed some of 
them here. Also, I realized that I don't pictures often. I should start doing 
that and maybe add some here when I have some to share. I apologize for no 
pics for the moment! They might be added soon or never, you gotta remind me 
in case I forget :p

## Card Stacking
I **LOVE** stacking cards and making fancy structures like pyramids, buildings, 
castles, stable structures that can even load weights and more. I WILL ADD 
PICTURES HERE SOON SO THAT IT IS EASY TO IMAGINE MY CARD STACKING ABILITIES 
but for now, just trust me that I am pretty good at it LoL. I mean, how many 
people do you know who are _into_ card stacking (haven't just done it once in 
their life). It takes a long time to finish a structure, yeah and doing it 
without fan in a hot summer day is, _well not painful_ but you know, it is not 
everyone's cuppa tea BUT when the structure is ready _(after collapsing 69 
times)_, the dopamine you get from that cannot be explained in words.<br>
It is a goated hobby and easier to level up once you have the basics right.

## Cooking
Recently started learning and been enjoying it so far. I cannot make a lot of 
dishes just from memory, and neither can I guarantee that my cooking is good 
but I really enjoy the process of cooking and also, those who have cooked 
before will understand that _the meals **you** have cooked yourself tastes 
sOoOoOoOoOoOoOo much better_. Also, it is one of those activities where you 
have to be engaged in the process but also, you can turn your brain off or 
at least can put your mind off from the other tiring chores that you were 
doing before.

## Gardening
My grandma used to say that I have a green thumb. I always liked gardening. 
Getting seeds and growing a tiny sapling from it and treating it is so 
satisfying. I remember this funny story from childhood; it was summer and 
everyone was enjoying a mango. After I was done, I collected all the seeds, 
cleaned it and took a tiny tool to dig a tiny hole in the ground and put the 
seed inside. I did at multiple places and then "plastered" the holes back xD. 
Mother and aunt and everyone was laughing because I was not supposed to 
_plaster the seeds_ inside ground but welp, whatever the kid me did. However, 
couple of days later, a tiny plant grew and that surprised everybody including 
me. It was such a proud moment too :) I guess that also made me a proud father 
that day xD.<br>
Unfortunately, I do not get to engage in gardening a lot in my home town so I 
only get to do that when I am at granny's place. Still enjoy the heck out of 
it though even though it kinda makes my clothes dirty xD.

## Writing Humourous Stuff
I am that guy who sees a quote or a joke and make his own version of it xD. 
Whenever I am burnt out from programming or designing something, I write 
one-liner jokes or other humourous stuff. I don't write stories & such. I have 
only written one and _I may turn it into a book in the future_; no promises 
though. Apart from that, I also write blogs (obviously lol) and I read a 
bunch. I really wish I had a kindle or an e-ink display for reading. It would 
hurt my eyes so less and I would be able to read so much more :p

## Coding / Programming
This one should be obvious haha. This is a hobby, a skill, a profession, 
whatever you wanna call it. I have been actively learning & doing this since 
2023 and still not bored from it. Coding is surprisingly creative and 
addictive.

## Maths
This one should also be obvious, especially if you are someone who knows me 
personally. Some people say that maths isn't required for programming and I 
somewhat agree with that statement but mostly disagree. Sure, you can program 
without knowing maths but you won't be able to enjoy it as much. Maths ain't 
just playing with numbers. It is the game you play which teaches you how to 
think. It enables you to see things and problems in a completely different way. 
And I am so thankful that I was a maths guy (I guess it is in my Indian DNA 
xD). I use mathematical modelling a lot to optimize algorithms and such. 
Solving math problems is fun too. I wish I could say the same for physics. I 
was always the physics person too but I haven't revised that in a while so I 
have kinda forgotten some of it. Not the part where it taught me how to see 
problems in different lenses tho'! And how to break a big problem into smaller 
ones and make problem solving easier :)

## Activities I wanna get into in the future
### Bouldering / Rock Climbing
I wish there was a bouldering gym near me :( and also a calesthenics gym. I 
love that and the gymnastics and the power activities which required you to 
use every part of your body.

### Improv
Same as bouldering, I wish there were improv classes nearby. I love things 
related to communication in general, whether it is just having a good talk 
with friends or sharing crucial information in a meeting or giving a talk or 
performing for an audience. I actually do wanna give an engaging talk 
somewhere. Hook me up if you can. I can try giving a talk related to 
programming, open-sourced or how to be an effective communicator & such to 
students or juniors or whoever you think would benefit from them :)
""";
