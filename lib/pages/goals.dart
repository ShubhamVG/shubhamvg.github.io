import 'dart:io' show Directory;

import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../components/main_.dart';
import '../components/typewriter.dart';
import '../constants/routes.dart';
import '../utils/interfaces.dart';
import 'goal_year.dart';

class Goals extends StatelessComponent implements IPage {
  const Goals({super.key});

  @override
  Route get route {
    return Route(
      path: NavbarRoute.goals.path,
      title: 'Goals',
      builder: (_, state) => this,
      routes: _goalYearRoutes(),
    );
  }

  List<String> _getGoalYears() {
    final goalFiles = Directory('lib/goals').listSync();
    final years = goalFiles.map((e) {
      final start = e.path.length - 9;
      return e.path.substring(start, start + 4);
    }).toList(growable: false);

    return years;
  }

  List<Route> _goalYearRoutes() {
    final years = _getGoalYears();
    final routes = years.map((year) {
      return GoalYear(year).route;
    }).toList(growable: false);

    return routes;
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    final years = _getGoalYears();

    yield Main(
      metaTitle: "LaV's Year Long Goals",
      metaDesc: "All of my new-year resolutions since 2025.",
      metaKeywords: 'goals, LaV, new year resolution',
      [
        const Typewriter(messages: [
          'New goals every year',
          'How much is left this year?',
          'Hopefully not procrastinating xD',
          'Thanks for dropping by!',
        ]),
        section([
          h1([const Text("All of my new year resolution since 2025")]),
          p([
            const RawText("""
          Since 2025, I have started to publicize year long goals.
          <br>
          If you would like to, and have the means to support me & my
          endeavours, then check out the
          <a href="/support/" class="badge">Support</a>
          page or just share my stuff with your friends and whoever can enjoy
          them :&rpar;
          <br>
          Drop a follow and star my stuff on
          <a href="https://github.com/shubhamvg" class="badge">GitHub</a>
          and other <a href="/socials/" class="badge">Socials</a> and checkout
          my goals and maybe you could help me with those!
          <br>
          <br>
          Here they are. Click on the year to see that year's goals along with
          the progress:"""),
            ul([
              for (final year in years)
                li(
                  styles: Styles(margin: Margin.symmetric(vertical: 0.4.rem)),
                  [
                    Link(
                      to: '/goals/$year',
                      classes: 'badge',
                      child: Text(year),
                    )
                  ],
                ),
            ]),
          ]),
        ]),
      ],
    );
  }
}
