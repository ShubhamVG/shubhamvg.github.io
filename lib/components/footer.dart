import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import '../constants/routes.dart';
import '../constants/theme.dart';

class Footer extends StatelessComponent {
  const Footer({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield footer(
      styles: Styles(
        width: Unit.expression('calc(100% - 2rem)'),
        maxWidth: maxScrnWidth,
        padding: Padding.all(1.rem),
        margin: Margin.symmetric(horizontal: Unit.auto),
        radius: BorderRadius.circular(1.5.rem),
        shadow: BoxShadow(
            offsetX: Unit.zero,
            offsetY: Unit.zero,
            color: Color.hex('#222222'),
            blur: 1.rem),
        backgroundColor: Color.rgba(0x11, 0x11, 0x11, 0.7),
      ),
      [
        const _FooterLinks(),
        const _CopyrightStuff(),
      ],
    );
  }

  @css
  static final styles = <StyleRule>[];
}

class _CopyrightStuff extends StatelessComponent {
  const _CopyrightStuff();

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
      styles: Styles(
        margin: Margin.only(top: 1.rem),
        textAlign: TextAlign.center,
      ),
      [
        const Text('© Shubham LaV, 2025.'),
        div(
          styles: Styles(
            display: Display.flex,
            width: 40.percent,
            margin: Margin.only(
              left: Unit.auto,
              right: Unit.auto,
              top: 0.5.rem,
            ),
            justifyContent: JustifyContent.spaceBetween,
            alignItems: AlignItems.center,
          ),
          [
            Link(
              to: githubLink,
              child: img(
                styles: Styles(width: 2.rem),
                src: 'https://www.svgrepo.com/show/475654/github-color.svg',
              ),
            ),
            Link(
              to: blueSkyLink,
              child: img(
                styles: Styles(width: 2.rem),
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/'
                    '7/7a/Bluesky_Logo.svg/600px-Bluesky_Logo.svg.png',
              ),
            ),
            Link(
              to: emailLink,
              child: img(
                styles: Styles(width: 2.rem),
                src: 'https://cdn.pixabay.com/photo/2016/06/13/17/30/'
                    'mail-1454734_640.png',
              ),
            ),
          ],
        ),
      ],
    );
  }
}

class _FooterLinks extends StatelessComponent {
  const _FooterLinks();

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
      styles: Styles(
        display: Display.grid,
        gridTemplate: GridTemplate(
          columns: GridTracks([
            GridTrack(TrackSize.fr(1)),
            GridTrack(TrackSize.fr(1)),
          ]),
        ),
        textAlign: TextAlign.center,
      ),
      [
        // "More" Section
        div([
          div(
            styles: Styles(
              display: Display.flex,
              width: Unit.fitContent,
              margin: Margin.symmetric(horizontal: Unit.auto),
              flexDirection: FlexDirection.column,
              textAlign: TextAlign.left,
            ),
            [
              strong([const Text('More')]),
              Link(
                to: NavbarRoute.contacts.path,
                child: Text(NavbarRoute.contacts.label),
              ),
              Link(
                to: NavbarRoute.project.path,
                child: Text(NavbarRoute.project.label),
              ),
              Link(
                to: NavbarRoute.blogs.path,
                child: Text(NavbarRoute.blogs.label),
              ),
              Link(
                to: NavbarRoute.supports.path,
                child: Text(NavbarRoute.supports.label),
              ),
            ],
          ),
        ]),

        // "Info" Section
        div([
          div(
            styles: Styles(
              display: Display.flex,
              width: Unit.fitContent,
              margin: Margin.symmetric(horizontal: Unit.auto),
              flexDirection: FlexDirection.column,
              textAlign: TextAlign.left,
            ),
            [
              strong([const Text('Info')]),
              Link(
                to: AdditionalRoutes.privacy.path,
                child: Text(AdditionalRoutes.privacy.label),
              ),
            ],
          ),
        ]),
      ],
    );
  }
}
