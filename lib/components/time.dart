import 'dart:async';

import 'package:jaspr/jaspr.dart';

@client
class Time extends StatelessComponent {
  const Time({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield StreamBuilder(
      stream: Stream.periodic(const Duration(seconds: 5)),
      builder: (context, snapshot) sync* {
        final indianTime = _getIndianTime();
        yield div([
          _Clock(indianTime),
          _Date(indianTime),
        ]);
      },
    );
  }

  @css
  static final styles = <StyleRule>[
    css.keyframes('blink', {'50%': Styles(opacity: 0)}),
  ];
}

class _Clock extends StatelessComponent {
  const _Clock(this.time);

  final DateTime time;

  @override
  Iterable<Component> build(BuildContext context) sync* {
    final hour = _doubleDigit(time.hour);
    final minute = _doubleDigit(time.minute);

    yield div(
      styles: Styles(
        display: Display.flex,
        fontSize: 2.rem,
        lineHeight: 90.percent,
      ),
      [
        // hour
        div([Text(hour)]),

        // time-colon
        div(
          styles: Styles(raw: {
            'animation': 'blink 0.5s step-end infinite alternate',
          }),
          const [Text(':')],
        ),

        // minute
        div([Text(minute)]),
      ],
    );
  }
}

class _Date extends StatelessComponent {
  const _Date(this.time);

  final DateTime time;

  @override
  Iterable<Component> build(BuildContext context) sync* {
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

    final dayText = _numTh(time.day);
    final monthText = monthMap[time.month]!;

    yield div([
      div([Text('$dayText $monthText')])
    ]);
  }
}

String _doubleDigit(final int n) {
  if (n < 10) {
    return '0$n';
  }

  return n.toString();
}

DateTime _getIndianTime() {
  return DateTime.timestamp().add(const Duration(hours: 5, minutes: 30));
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
