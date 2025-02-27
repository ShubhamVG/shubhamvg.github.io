import 'package:jaspr/jaspr.dart';
import 'package:jass/constants/routes.dart';

import '../components/main_.dart';
import '../components/typewriter.dart';

@client
class Home extends StatelessComponent {
  const Home({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main([
      const Typewriter(messages: [
        'Hello!',
        'Interested to know me?',
        'Or, maybe in my stuff',
        'Thanks for dropping by!',
      ]),
      section([
        h1([const Text("Welcome to LaV's Digital Home")]),
        p([
          const RawText(
            "First, let me tell you about myself so I go by LaV and I am a 20 "
            "y/o lad who like to build stuff (<strong>not</strong> limited to "
            "coding)."
            "<br>"
            "Previously, I used to tell everyone that I am a problem solver "
            "but lately, I haven't came across any \"problem\" to solve so "
            "here I am, building beautiful stuff like this website!"
            "<br><br>"
            "You can check out my projects on the "
            '<a href="/projects/" class="badge">Project</a> page or on my '
            '<a href="https://github.com/ShubhamVG/" class="wavy-text">GitHub'
            '</a> if it is open-sourced.'
            '<br>'
            '(Do drop me a follow and star the repos that you like ;)'
            '<br>'
            '<br>'
            "Also, checkout my<a href='$cvLink' class='fancy-badge' target='_blank'>"
            "<span>Resume<span></a>"
            "'cuz why not?",
          ),
        ]),
      ]),
    ]);
  }
}
