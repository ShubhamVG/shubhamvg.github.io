import 'dart:async';
import 'dart:js_interop';

import 'package:web/web.dart' as web;

void main() {
  _addListeners();
  _startTypewritter();
}

void _addListeners() {
  final hamMenu = web.document.getElementById('ham-menu') as web.HTMLDivElement;
  final navItems =
      web.document.getElementById('nav-items') as web.HTMLDivElement;

  hamMenu.onclick = () {
    hamMenu.classList.toggle('active');
    navItems.classList.toggle('active');
  }.toJS;
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
