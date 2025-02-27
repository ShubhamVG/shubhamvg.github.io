// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/jaspr.dart';
import 'package:lav_home/components/aurora_background.dart' as prefix0;
import 'package:lav_home/components/footer.dart' as prefix1;
import 'package:lav_home/components/header.dart' as prefix2;
import 'package:lav_home/components/main_.dart' as prefix3;
import 'package:lav_home/components/navbar.dart' as prefix4;
import 'package:lav_home/components/time.dart' as prefix5;
import 'package:lav_home/components/typewriter.dart' as prefix6;
import 'package:lav_home/pages/goal_year.dart' as prefix7;
import 'package:lav_home/app.dart' as prefix8;

/// Default [JasprOptions] for use with your jaspr project.
///
/// Use this to initialize jaspr **before** calling [runApp].
///
/// Example:
/// ```dart
/// import 'jaspr_options.dart';
///
/// void main() {
///   Jaspr.initializeApp(
///     options: defaultJasprOptions,
///   );
///
///   runApp(...);
/// }
/// ```
final defaultJasprOptions = JasprOptions(
  clients: {
    prefix4.Navbar: ClientTarget<prefix4.Navbar>('components/navbar'),
    prefix5.Time: ClientTarget<prefix5.Time>('components/time'),
    prefix6.Typewriter: ClientTarget<prefix6.Typewriter>('components/typewriter', params: _prefix6Typewriter),
  },
  styles: () => [
    ...prefix0.AuroraBackground.styles,
    ...prefix1.Footer.styles,
    ...prefix2.Header.styles,
    ...prefix3.Main.styles,
    ...prefix4.Navbar.styles,
    ...prefix5.Time.styles,
    ...prefix6.TypewriterState.styles,
    ...prefix7.GoalYear.styles,
    ...prefix8.App.styles,
  ],
);

Map<String, dynamic> _prefix6Typewriter(prefix6.Typewriter c) => {'messages': c.messages};
