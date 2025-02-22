// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/jaspr.dart';
import 'package:jass/components/aurora_background.dart' as prefix0;
import 'package:jass/components/time.dart' as prefix1;
import 'package:jass/pages/home.dart' as prefix2;
import 'package:jass/app.dart' as prefix3;

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
    prefix3.App: ClientTarget<prefix3.App>('app'),
    prefix0.AuroraBackground: ClientTarget<prefix0.AuroraBackground>('components/aurora_background'),
    prefix1.Time: ClientTarget<prefix1.Time>('components/time'),
    prefix2.Home: ClientTarget<prefix2.Home>('pages/home'),
  },
  styles: () => [
    ...prefix0.AuroraBackground.styles,
    ...prefix1.TimeState.styles,
    ...prefix3.App.styles,
  ],
);
