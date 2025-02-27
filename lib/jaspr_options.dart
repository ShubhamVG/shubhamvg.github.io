// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/jaspr.dart';
import 'package:jass/components/aurora_background.dart' as prefix0;
import 'package:jass/components/footer.dart' as prefix1;
import 'package:jass/components/goal_year.dart' as prefix2;
import 'package:jass/components/header.dart' as prefix3;
import 'package:jass/components/main_.dart' as prefix4;
import 'package:jass/components/navbar.dart' as prefix5;
import 'package:jass/components/time.dart' as prefix6;
import 'package:jass/components/typewriter.dart' as prefix7;
import 'package:jass/app.dart' as prefix8;

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
    prefix5.Navbar: ClientTarget<prefix5.Navbar>('components/navbar'),
    prefix6.Time: ClientTarget<prefix6.Time>('components/time'),
    prefix7.Typewriter: ClientTarget<prefix7.Typewriter>('components/typewriter', params: _prefix7Typewriter),
  },
  styles: () => [
    ...prefix0.AuroraBackground.styles,
    ...prefix1.Footer.styles,
    ...prefix2.GoalYear.styles,
    ...prefix3.Header.styles,
    ...prefix4.Main.styles,
    ...prefix5.Navbar.styles,
    ...prefix6.Time.styles,
    ...prefix7.TypewriterState.styles,
    ...prefix8.App.styles,
  ],
);

Map<String, dynamic> _prefix7Typewriter(prefix7.Typewriter c) => {'messages': c.messages};
