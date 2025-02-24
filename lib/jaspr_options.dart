// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/jaspr.dart';
import 'package:jass/components/aurora_background.dart' as prefix0;
import 'package:jass/components/header.dart' as prefix1;
import 'package:jass/components/main_.dart' as prefix2;
import 'package:jass/components/navbar.dart' as prefix3;
import 'package:jass/components/time.dart' as prefix4;
import 'package:jass/components/typewriter.dart' as prefix5;
import 'package:jass/pages/home.dart' as prefix6;
import 'package:jass/app.dart' as prefix7;

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
    prefix7.App: ClientTarget<prefix7.App>('app'),
    prefix0.AuroraBackground: ClientTarget<prefix0.AuroraBackground>('components/aurora_background'),
    prefix1.Header: ClientTarget<prefix1.Header>('components/header'),
    prefix3.Navbar: ClientTarget<prefix3.Navbar>('components/navbar'),
    prefix4.Time: ClientTarget<prefix4.Time>('components/time'),
    prefix5.Typewriter: ClientTarget<prefix5.Typewriter>('components/typewriter', params: _prefix5Typewriter),
    prefix6.Home: ClientTarget<prefix6.Home>('pages/home'),
  },
  styles: () => [
    ...prefix0.AuroraBackground.styles,
    ...prefix1.Header.styles,
    ...prefix2.Main.styles,
    ...prefix3.Navbar.styles,
    ...prefix4.TimeState.styles,
    ...prefix5.TypewriterState.styles,
    ...prefix7.App.styles,
  ],
);

Map<String, dynamic> _prefix5Typewriter(prefix5.Typewriter c) => {'messages': c.messages};
