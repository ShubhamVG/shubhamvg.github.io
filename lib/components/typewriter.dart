import 'dart:async';

import 'package:jaspr/jaspr.dart';

@client
class Typewriter extends StatefulComponent {
  const Typewriter({super.key, required this.messages});

  final List<String> messages;

  @override
  State<Typewriter> createState() => TypewriterState();
}

class TypewriterState extends State<Typewriter> {
  String className = 'typing-start';
  late String msg;
  int msgIdx = 0;

  @override
  void initState() {
    msg = component.messages[0];
    Timer.periodic(const Duration(seconds: 5), (_) {
      const deletionTime = Duration(milliseconds: 1100);

      // Put the typewriter in delete mode (which will last for a second)
      setState(() {
        className = 'typing-delete';
      });

      // Logic to type the text on the screen (after deletion time is over)
      Future.delayed(deletionTime, () {
        if (++msgIdx == component.messages.length) {
          msgIdx = 0;
        }

        setState(() {
          className = 'typing-start';
          msg = component.messages[msgIdx];
        });
      });
    });

    super.initState();
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(id: 'typewriter-container', [
      p(
        id: 'typewriter-text',
        classes: className,
        [Text(msg)],
      )
    ]);
  }

  @css
  static final styles = <StyleRule>[
    css('#typewriter-container').styles(width: Unit.fitContent),
    css('#typewriter-text').styles(
        width: 100.percent,
        maxWidth: 100.vw,
        padding: Padding.only(right: 0.1.rem),
        border: Border.only(right: BorderSide.solid(width: 0.31.rem)),
        overflow: Overflow.hidden,
        fontSize: 1.5.rem,
        whiteSpace: WhiteSpace.noWrap),
    css('.typing-delete').styles(raw: {
      'animation': 'cursor-blink 0.5s step-end infinite alternate,'
          'typing-delete 1s forwards'
    }),
    css('.typing-start').styles(raw: {
      'animation': 'cursor-blink 0.5s step-end infinite alternate,'
          'typing-start 1.2s forwards'
    }),
    css.keyframes('cursor-blink', {
      '50%': Styles(raw: {'border-color': 'transparent'}),
    }),
    css.keyframes('typing-delete', {'100%': Styles(width: Unit.zero)}),
    css.keyframes('typing-start', {'from': Styles(width: Unit.zero)}),
  ];
}
