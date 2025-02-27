import 'package:jaspr/jaspr.dart';

Color hexAlpha(final String hex) {
  if (!hex.startsWith('#') || !(hex.length == 9)) {
    throw Exception('bad hex alpha value');
  }

  final rStr = hex[1] + hex[2];
  final gStr = hex[3] + hex[4];
  final bStr = hex[5] + hex[6];
  final aStr = hex[7] + hex[8];

  final r = int.parse(rStr, radix: 16);
  final g = int.parse(gStr, radix: 16);
  final b = int.parse(bStr, radix: 16);
  final a = int.parse(aStr, radix: 16).toDouble() / 0xff.toDouble();

  return Color.rgba(r, g, b, a);
}
