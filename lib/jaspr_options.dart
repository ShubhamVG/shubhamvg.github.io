// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/jaspr.dart';
import 'package:jass/components/aurora_background.dart' as prefix0;
import 'package:jass/components/footer.dart' as prefix1;
import 'package:jass/components/header.dart' as prefix2;
import 'package:jass/components/main_.dart' as prefix3;
import 'package:jass/components/navbar.dart' as prefix4;
import 'package:jass/components/time.dart' as prefix5;
import 'package:jass/components/typewriter.dart' as prefix6;
import 'package:jass/pages/home.dart' as prefix7;
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
    prefix8.App: ClientTarget<prefix8.App>('app'),
    prefix0.AuroraBackground: ClientTarget<prefix0.AuroraBackground>('components/aurora_background'),
    prefix1.Footer: ClientTarget<prefix1.Footer>('components/footer'),
    prefix2.Header: ClientTarget<prefix2.Header>('components/header'),
    prefix4.Navbar: ClientTarget<prefix4.Navbar>('components/navbar'),
    prefix5.Time: ClientTarget<prefix5.Time>('components/time'),
    prefix6.Typewriter: ClientTarget<prefix6.Typewriter>('components/typewriter', params: _prefix6Typewriter),
    prefix7.Home: ClientTarget<prefix7.Home>('pages/home'),
  },
  styles: () => [
    ...prefix0.AuroraBackground.styles,
    ...prefix1.Footer.styles,
    ...prefix2.Header.styles,
    ...prefix3.Main.styles,
    ...prefix4.Navbar.styles,
    ...prefix5.Time.styles,
    ...prefix6.TypewriterState.styles,
    ...prefix8.App.styles,
  ],
);

Map<String, dynamic> _prefix6Typewriter(prefix6.Typewriter c) => {'messages': c.messages};
