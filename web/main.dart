import 'dart:async';
import 'dart:js_interop';

import 'package:web/web.dart' as web;

void main() {
  _addListeners();
  _startTime();
  _startTypewritter();
}

void _addListeners() {
  final hamMenu = web.document.getElementById('ham-menu') as web.HTMLDivElement;
  final navBg = web.document.getElementById('nav-bg') as web.HTMLDivElement;
  final navItems =
      web.document.getElementById('nav-items') as web.HTMLDivElement;

  hamMenu.onclick = () {
    hamMenu.classList.toggle('active');
    navBg.classList.toggle('active');
    navItems.classList.toggle('active');
  }.toJS;
}

String _numTh(final int n) {
  final mod100 = n % 100;
  if (mod100 > 4 && mod100 < 20) {
    return '${n}th';
  }

  final int remainder = n % 10;
  switch (remainder) {
    case 1:
      return '${n}st';
    case 2:
      return '${n}nd';
    case 3:
      return '${n}rd';
    default:
      return '${n}th';
  }
}

void _setTimeElem() {
  const monthMap = <int, String>{
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  final hourElem = web.document.getElementById('hour') as web.HTMLDivElement;
  final minuteElem =
      web.document.getElementById('minute') as web.HTMLDivElement;
  final dateElem = web.document.getElementById('date') as web.HTMLDivElement;

  final timeNow = DateTime.timestamp().add(
    const Duration(hours: 5, minutes: 30),
  );

  final todayHour = timeNow.hour;
  final todayMinute = timeNow.minute;

  final hourText = '${todayHour < 10 ? '0' : ''}$todayHour';
  final minuteText = '${todayMinute < 10 ? '0' : ''}$todayMinute';

  final date = timeNow.day;
  final month = monthMap[timeNow.month]!;

  hourElem.innerText = hourText;
  minuteElem.innerText = minuteText;
  dateElem.innerText = '${_numTh(date)} $month';
}

void _startTime() {
  _setTimeElem();
  Timer.periodic(const Duration(seconds: 30), (_) => _setTimeElem());
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
