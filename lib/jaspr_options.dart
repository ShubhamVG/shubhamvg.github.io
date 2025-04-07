// dart format off
// ignore_for_file: type=lint

// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/jaspr.dart';
import 'package:lav_home/components/aurora_background.dart' as prefix0;
import 'package:lav_home/components/blog_article.dart' as prefix1;
import 'package:lav_home/components/carousel.dart' as prefix2;
import 'package:lav_home/components/footer.dart' as prefix3;
import 'package:lav_home/components/header.dart' as prefix4;
import 'package:lav_home/components/main_.dart' as prefix5;
import 'package:lav_home/components/navbar.dart' as prefix6;
import 'package:lav_home/components/time.dart' as prefix7;
import 'package:lav_home/components/typewriter.dart' as prefix8;
import 'package:lav_home/components/year_progress.dart' as prefix9;
import 'package:lav_home/pages/goal_year.dart' as prefix10;
import 'package:lav_home/app.dart' as prefix11;

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
    prefix2.Carousel: ClientTarget<prefix2.Carousel>(
      'components/carousel',
      params: _prefix2Carousel,
    ),

    prefix6.Navbar: ClientTarget<prefix6.Navbar>('components/navbar'),

    prefix7.Time: ClientTarget<prefix7.Time>('components/time'),

    prefix8.Typewriter: ClientTarget<prefix8.Typewriter>(
      'components/typewriter',
      params: _prefix8Typewriter,
    ),

    prefix9.YearProgress: ClientTarget<prefix9.YearProgress>(
      'components/year_progress',
      params: _prefix9YearProgress,
    ),
  },
  styles:
      () => [
        ...prefix0.AuroraBackground.styles,
        ...prefix1.BlogArticle.styles,
        ...prefix2.Carousel.styles,
        ...prefix3.Footer.styles,
        ...prefix4.Header.styles,
        ...prefix5.Main.styles,
        ...prefix6.Navbar.styles,
        ...prefix7.Time.styles,
        ...prefix8.TypewriterState.styles,
        ...prefix9.YearProgress.styles,
        ...prefix10.GoalYear.styles,
        ...prefix11.App.styles,
      ],
);

Map<String, dynamic> _prefix2Carousel(prefix2.Carousel c) => {
  'images': c.images,
};
Map<String, dynamic> _prefix8Typewriter(prefix8.Typewriter c) => {
  'messages': c.messages,
};
Map<String, dynamic> _prefix9YearProgress(prefix9.YearProgress c) => {
  'year': c.year,
};
