import 'dart:async';

import 'package:web/web.dart' as web;

void main() {
  final typewritter = web.document.getElementById('typewritter-text')
      as web.HTMLParagraphElement;
  _startTypewritter(typewritter);
}

void _startTypewritter(final web.HTMLParagraphElement typewritter) {
  const texts = <String>[
    'this is a very long sentence',
    'but this sentence could be longer',
    'honestly, no one cares',
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
