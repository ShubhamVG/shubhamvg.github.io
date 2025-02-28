import 'package:jaspr/jaspr.dart';
import 'package:markdown/markdown.dart' as md;

import '../components/main_.dart';
// import '../constants/routes.dart';

class FavTech extends StatelessComponent {
  const FavTech({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield const Document.head(meta: {
      "title": "LaV's Tech Stack",
      "description": "All the tech stuff I use."
    });

    // TODO: Move this
    // yield Style(
    //   styles: [css('#gradient-bg').styles(display: Display.none)],
    // );

    yield Main([
      RawText(md.markdownToHtml(markdown)),
    ]);
  }
}

const markdown = """
# The tech stuff I use
Finally made this page so that I won't have to answer the infamous question
*"What is your favorite programming language?"*, haha! Well, this page
is more than just that. I have listed everything from my most used programming
languages to the OS and code editor I use & all that and also, why I use the
things I do.

## Favorite programming language
Soooo, back to the imfamous question and I don't have just one fav programming 
language. I have four, namely:
- <a href='https://dart.dev' class='wavy-text'>Dart</a>
- <a href='https://go.dev' class='wavy-text'>Go (FKA Golang)</a>
- <a href='https://ziglang.org' class='wavy-text'>Zig</a>

And lastly, the obvious one, <a href='https://python.org' class='wavy-text'>
Python</a> along with HTML & CSS, and yes, I do like writing pure CSS by hand.
Actually, the last time I checked my GitHub stats thingy, I had written CSS the 
most xD.

I do play around with other ones too but these gotta be my fav. I use all of 
them different reasons which you can read below or skip over as you like.

### Dart
I found dart when I wanted to dabble into mobile app development and came 
across <a href='https://flutter.dev' class='wavy-text'>Flutter</a>. Flutter, in 
my very biased opinion, is the coolest framework to make 
<em>cross-platform native apps</em>. I use it anytime I want to make a mobile 
or PC app because I don't like web apps. Web browsers are great and versatile 
but you know, they feel kinda bloated and like, c'mon man, so much bloat and 
still so sh\\*t concurrency! Oops, I forgot that this section was about dart not 
hating on Chromium and electron (and JS but meh, we all collectively agree that 
it is sh\\*it. Even its creator thinks the same way.)

Oh, reminds me, this is sort of like a tangent but the way I think Dart was 
introduced was because Google (owns Dart BTW) figured that JS is crap and so 
did Microsoft and many other companies and tried to come up with something to 
replace it. Microsoft came up with Typescript and Google came up with Dart. In 
the end, Typescript became more popular as it transpiled to JS whereas Google 
did a terrible job at marketing dart and integrating the Dart VM to the Chrome 
browser. I'm not sure if you can run pure Dart code on browsers without 
enabling certain flags or something.

Even though dart solves a different problem and is being catered towards 
different kind of devs, I believe that it is not too late for Google to 
integrate the Dart VM or market and expand the Dart ecosystem more to 
enhance the DX of dart devs.

Also, if you are a JS or TS person, do try out Dart for a week. You will enjoy 
it and who knows? You may end up loving it like I do or at least understand why 
I love it as much as I do.

### Go (FKA Golang)
Well, this is the second language that Google owns. Makes me a Google 
fanboy, doesn't it? Haha! I love Go because of its concurrency system. I 
haven't tried Elixir but I have heard that it is the only other programming 
language which can compete with or beat Go when it comes to concurrency but 
honestly, not a big fan of Elixir's syntax. BTW, before you start saying that 
there are other languages which has better concurrency than Go, then well, do 
let me know which ones and also, you may be right but channels and the `go` 
keyword is sOoOoOo OP in Go DX wise. Also, Go sits perfectly between being a 
low level programming language and a high level programming language. The only 
thing I wish Go had better was maintained packages. Some packages are being 
used everywhere and is actually unmaintained for anywhere between 10 months to 
more than 3 years. I am aware that Go has made this *pinky promise* that it 
will always be backwards compatible and honestly, they have done a great job so
far. But you know, I am somewhat afraid that we may end up in the JS package 
problem where we end up with packages which depend on something which depends 
on something and so on till we reach that 1 package unmaintained for years and 
it breaking will shatter the Go's package ecosystem.

### Zig
WELCOME TO THE BIG BOYS CLUB WOOOOHOOOOOOO!!!!! SoOoOoOoOo, where do I start? 
Zig is basically C but better (at least so far). It isn't like rust. Rust 
solves a completely different problem so comparing it with Zig would be stupid. 
Well, how else do I define Zig... Hmph. It is just better C lol. Everyone I 
know who was using C for something has switched to Zig now, for example  
<a href='https://bun.sh' class='wavy-text'>Bun</a>. Zig has better import 
system, better allocators and actually, some where you don't have to worry 
about memory leaks or double frees or anything like that, keywords like 
`defer` and `comptime` and many others. It is safer than C. It is faster than 
C in my experience and also rust, depending on where you use it. I use Zig to 
make static/dynamic libraries which I can use for FFI stuff, especially with 
flutter apps.

### Python
The Jack of all Trades but master of none. I use it to prototype stuff and 
fiddling with stuff. Anyone who says Python is bad has not touched grass in 
years and needs to go shower. They could be vampires actually. Never seen them 
out in the sun :p Anyways, hating python is like hating water yk.

### Shoutouts
Big shoutout to <a href='https://www.modular.com/mojo' class='wavy-text'>Mojo
</a> because I like the language design but it is too young and kinda 
unsupported, or at least was when I tried to install it. I kept getting 
segfaults too in my program. Also, my laptop ain't strong to train AI models so 
that's that. Gimme money for a new device or a server xD. Anyways yeahhhh, Mojo 
is promising but I'mma let it age first and hopefully, it will be open-sourced 
by the time I try it next.

Other shoutout code to HTML and CSS. Keep arguing whether they are programming 
languages or not but I love writing them so I have mentioned them.

## My Device and OS
I use arch BTW on my lenovo laptop. Not a thinkpad tho'. I honestly don't know 
its name or model but what I do know that it has 8 gigs of RAM (but only 6 
usable) with AMD Ryzen 3 5300U with Radeon Graphics (8) @ 3.900 GHz (according 
to neofetch). It is 3 years old but I don't wanna stop using it. It was the 
first thing I bought with my internship money and I have made so many memories 
with this laptop :)

Umm, I honestly don't know what I will do with a new laptop or device. I mean 
I kinda wanna try training AI models but I think I will prefer a server for 
that instead of training on a local machine. I guess I can try gaming on a new 
device. Most of my friends are into gaming but I don't game. I guess having a 
strong device could get me into gaming. Not sure :p OH! Actually, I can think 
of one thing where having a powerful laptop would help. Video editing! I wanna 
try making content especially educational ones but video editing sucks. They 
keep crashing. Having a strong device may help with that.

Apart from those, my phone ain't interesting at all. I only use it to receive 
calls, watch YouTube, email stuff and Discord. I actually kinda wanna get an 
e-ink device. I like reading but I don't like buying books or reading on 
screens. Having an e-ink display would be nice for reading or sketching ideas.
They are too darn expensive tho'. Welp, guess I gotta save to get one... or is
any e-ink company hiring lol. I should join one. Hey, you reader! Connect me to 
one ;)
""";
