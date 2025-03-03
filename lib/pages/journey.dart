import 'package:jaspr/jaspr.dart';

import '../components/main_.dart';
import '../components/markdown_text.dart';
import '../constants/routes.dart';

class Journey extends StatelessComponent {
  const Journey({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: "LaV's Life Journey",
      metaDesc: "Get to know a little bit about me from this page.",
      metaKeywords: "journey, life, LaV, about, programmer, India, coder",
      [MarkdownText(_markdown)],
    );
  }
}

final _markdown = """
# My Journey Broken Down Into Bits
Well well well, I really like storytelling but I kinda have a tendency to drag 
a story too long so, I will try my best to keep this one short and not turn it 
into an auto-biography haha. I have divided the story into multiple sections 
which might help digest things. Welp anyways, enjoy the read:

## Introduction
So, my name is Shubham but I go by LaV (pronounced as Lav) on the internet. I 
am a 21 y/o (as of 2025) boy passionate about a lot of things, especially those 
related to innovation & problem-solving. I was born in India and currently live 
there. Apart from coding, I have many other hobbies, so many so that I have 
<a href="${NavbarRoute.skillsHobbies.path}" class="wavy-text">an entire page
</a> dedicated to it xD.

### Origin of the name LaV
Shubham is hard to pronounce or remember for non-Indians as well as for privacy 
reasons, I had to think of a name for my online presense. My internet name 
used to be V The Otter. V because of Vanadium which is the 23rd (my fav number) 
element on the periodic and also an interesting element on its own. The otter 
part, I don't remember. Probably because I had newly learnt about otters back 
then :p <br>
I always liked short names but V was kinda too short so I changed it to LaV. A 
fusion of love and lavender, the flower I had seen that day.

## Early Life
Since childhood, I was always a curious kid. Mum always tell others a story of 
how I once started to cry because dad fixed a fan without showing me how he did 
it xD. In school, my favorite subjects were science & math. They just made more 
sense than the other subjects, especially when you have a sh\\*t history 
teacher. I don't have many interesting stories from school except one of how I got a
school bully group to disbandon but I don't wanna talk about it here. DM me if 
you are interesting in knowing that story.<br>

## First Internship
I got an internship during the last year of high school. It was an online one 
during COVID times because home schooling businesses were blooming and they 
needed interns, I presume. That was a fun experience and I got to learn a lot 
from there. I was an operations intern so I was not supposed to use programming 
at all but there were many tasks in the internship that could be automated, and 
that's what I did! I automated many tasks using Python and selenium.
I knew little bit of coding from school and had learnt Python during lockdown 
to make Discord bots LoL. At this point, I never did programming for a long 
period of time. I liked it but I liked maths or physics more so programming was always an on and off things. Either ways, I am glad that I had that tool in my arsenal because automating tasks made life sOoOoOo much easier :)

## Learning CS
After internship and high school ended, I did not join a uni because of health 
& financial reasons. I decided to try self-learning instead and chose CS as I 
already used it during internship and enjoyed the process. I took CS50 followed 
by nand2tetris and then CS50 Cybersecurity. After that learnt Flutter & many 
other frameworks and tools, and most importantly, *escaped tutorial hell* and 
started building actual stuff.

## First Hackathon Win
Whilst I was learning, I believe it was January of 2024 and I had just finished 
the nand2tetris course and saw 
<a href="https://www.linkedin.com/in/kyle-liang-352a95267/" class='wavy-text'>
*Kyle Liang*</a> in a Discord server asking for permission to promote the 
hackathon him and his team were hosting. Well, they didn't get the permission 
to promote their hackathon but Kyle had his DM open and I wanted to try the 
hackathon experience so I shoot him a DM and he was an awesome guy and same 
for the <a href="https://www.instagram.com/ftc_runtimeterror/" 
class="wavy-text">*22105 Runtime Terror*</a> team! It was my first hackathon 
so I was confused on a lot of things but they helped me with everything. The 
hackathon was online weekend event so it lasted 2 days. I, fortunately or 
unfortunately, could not assemble a team so I had to participate alone. I 
still named my "team" *[object Object]* haha. The theme of that year's **22105 
Runtime Terror** Hackathon was **art**. (So thankful to them that I gotta say 
their name multiple time xD.)<br>
I created <a href="$hackathon1DevpostLink" class="wavy-text">Static Art Into 
Dynamic Life</a> inspired by the <a href="https://youtu.be/3G1KBu6H6BM" 
class="wavy-text">Chinese Drones Dragon</a> they have flying in their new year. 
I had to skip a wedding dinner party (of a distant relative) for it actually 
xD and had to record the video at 1 AM or something late at night. It was 
totally worth it! And it was so cool that I won too!! Yep, that's right. I won 
my first hackathon ;)

## Not sure what to name this section
After the hackathon ended, I got \$50 for participating. I decided to spend it 
on getting back in shape yk, shredding all that lockdown fat xD. I went from 
69 to 62 (kg ofc) in under 3 months thanks to <a 
href="https://youtu.be/66G_M9TkFCU" class="wavy-text">this great video 
on the science behind dieting</a>. I suggest everyone that video if they wanna 
get into shape. Well anyways, I took CS50 Cybersecurity and started learning 
Flutter and stuff around this time. I tried to participate in a second 
hackathon, online ofc, but I, AGAIN, failed to assemble a team and tried doing 
everyone on my own. I had around half a month for this hackathon actually so I 
thought that I could pull it off but nope. I ended up getting burnt out and had 
to pull back off from the hackathon. That hackathon was either by Google or the 
Flutter team where you had to make a game promoting sustainable development 
using Flutter, and I had a great idea for the game too! Good enough to secure 
me a spot on the podium is what I'd like to believe. Anyways, not sure what the 
status is now but making games in Flutter (or Flame, a game engine made for 
Flutter) sucked back then, especially since I was so new to Flutter back then. 
My previous experience with making games was with the Godot game engine and it 
has this node-based editor which was very different to what I had to use with 
Flame.

## Current Stuff
Well, in the last section I told you about one of my "failures" or how folks 
say it these days, *I took an L* so, let's start this section with a W so, 
I won a hackathon in November/December 2024. This time it was in a team. The 
team was assembled by *Lingaraj Patil*, a Discord guy and we had *Tejaswini 
Gaikwad* as well. We shared ideas on a call, selected Lingaraj's idea as it was 
the best among all the pitched ideas. His original idea was slightly different 
tho'. I, being the most experienced one in the team, decided to take the lead 
of the project and made slight changes. Teju became the UI developer and 
Lingaraj was dealing with finding the name of the app/project and the logo & 
stuff. He also came up with a skit that inspired the presentation we did. My 
duties were to program the app and guide everything to be on track. I was also 
the video editor and the presentation maker inspired by Lingaraj's idea. We 
made a catchy presentation and it worked too haha. We won the *GNEC '24 Fall 
Hackathon* with our submission <a href="$recyclopiaLink" class="wavy-text">
Recyclopia</a>.

After that, I finished many projects which you can check in the 
<a href="${NavbarRoute.project.path}" class="badge">Projects Page</a> and 
made some YouTube videos on <a href="$youtubeLink" class="badge">@bottleofotter
</a> and umm yeahhh, that is about it. Still working on fancy projects, though 
I run out of ideas pretty quickly :p. Also, help with docs on open-sourced 
projects or whatever I use and find on GitHub. Well, I am thinking about doing 
GSoC this year (2025) or apply for a job. If you are looking to hire me, then 
you can find my email which is in the footer of this page or go to the 
<a href="${NavbarRoute.contacts.path}" class="badge">Contacts</a> page.

## That's it for now
I guess that is it for now. I will update this page when something interesting 
happens. I should be updating the other pages too so keep a look at those too 
if interested. Thanks for reading. May you have a great day or night!
""";
