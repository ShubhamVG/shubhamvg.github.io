import 'dart:async' show Timer;

import 'package:web/web.dart' as web;

import 'commons.dart';

void main() {
  addBasicListeners();
  startTime();
  _startTypewritter();
}

void _startTypewritter() {
  final typewritter = web.document.getElementById('typewritter-text')
      as web.HTMLParagraphElement;
  const texts = <String>[
    'Interested to know me?',
    'Or, maybe in my stuff',
    'Thanks for dropping by!',
  ];
  int textIdx = 0;

  Timer.periodic(const Duration(seconds: 5), (_) {
    typewritter.className = 'typing-delete';

    Future.delayed(
      const Duration(milliseconds: 1100),
      () {
        typewritter.innerText = texts[textIdx];
        typewritter.className = 'typing-start';

        if (++textIdx == texts.length) {
          textIdx = 0;
        }
      },
    );
  });
}
