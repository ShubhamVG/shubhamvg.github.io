// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/jaspr.dart';
import 'package:jass/components/aurora_background.dart' as prefix0;
import 'package:jass/components/header.dart' as prefix1;
import 'package:jass/components/navbar.dart' as prefix2;
import 'package:jass/components/time.dart' as prefix3;
import 'package:jass/pages/home.dart' as prefix4;
import 'package:jass/app.dart' as prefix5;

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
    prefix5.App: ClientTarget<prefix5.App>('app'),
    prefix0.AuroraBackground: ClientTarget<prefix0.AuroraBackground>('components/aurora_background'),
    prefix1.Header: ClientTarget<prefix1.Header>('components/header'),
    prefix2.Navbar: ClientTarget<prefix2.Navbar>('components/navbar'),
    prefix3.Time: ClientTarget<prefix3.Time>('components/time'),
    prefix4.Home: ClientTarget<prefix4.Home>('pages/home'),
  },
  styles: () => [
    ...prefix0.AuroraBackground.styles,
    ...prefix1.Header.styles,
    ...prefix2.Navbar.styles,
    ...prefix3.TimeState.styles,
    ...prefix5.App.styles,
  ],
);
