// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/jaspr.dart';
import 'package:lav_home/components/aurora_background.dart' as prefix0;
import 'package:lav_home/components/blog_article.dart' as prefix1;
import 'package:lav_home/components/footer.dart' as prefix2;
import 'package:lav_home/components/header.dart' as prefix3;
import 'package:lav_home/components/main_.dart' as prefix4;
import 'package:lav_home/components/navbar.dart' as prefix5;
import 'package:lav_home/components/time.dart' as prefix6;
import 'package:lav_home/components/typewriter.dart' as prefix7;
import 'package:lav_home/pages/goal_year.dart' as prefix8;
import 'package:lav_home/app.dart' as prefix9;

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
    ...prefix1.BlogArticle.styles,
    ...prefix2.Footer.styles,
    ...prefix3.Header.styles,
    ...prefix4.Main.styles,
    ...prefix5.Navbar.styles,
    ...prefix6.Time.styles,
    ...prefix7.TypewriterState.styles,
    ...prefix8.GoalYear.styles,
    ...prefix9.App.styles,
  ],
);

Map<String, dynamic> _prefix7Typewriter(prefix7.Typewriter c) => {'messages': c.messages};
