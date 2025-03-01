import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';
import 'package:universal_web/web.dart' as web;

import '../constants/routes.dart';
import '../constants/theme.dart';

@client
class Navbar extends StatelessComponent {
  const Navbar({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield nav([
      _NavBg(),
      _HamMenu(),
      _NavItems(),
    ]);
  }

  @css
  static final styles = <StyleRule>[
    css('#ham-menu').styles(display: Display.none),
    css('nav').styles(
      height: Unit.fitContent,
      margin: Margin.symmetric(vertical: Unit.auto),
      flex: Flex(basis: FlexBasis(100.percent)),
    ),
    css('#nav-bg').styles(display: Display.none),
    css('#nav-items').styles(
        display: Display.flex,
        width: 90.percent,
        height: 2.rem,
        minWidth: 40.rem,
        padding: Padding.symmetric(horizontal: 1.rem),
        margin: Margin.only(left: Unit.auto, right: Unit.zero),
        radius: BorderRadius.circular(2.rem),
        outline: Outline(
          color: shinyGreen,
          style: OutlineStyle.solid,
          width: OutlineWidth(0.06.rem),
        ),
        justifyContent: JustifyContent.spaceBetween,
        alignItems: AlignItems.center,
        backgroundColor: navBgActiveColor),
    css('#nav-items a').styles(
        userSelect: UserSelect.none,
        transition: Transition('all', duration: 300, curve: Curve.easeOut),
        textShadow: TextShadow(
          offsetX: Unit.zero,
          offsetY: Unit.zero,
          color: textShadowColor,
        )),
    css('#nav-items a:hover').styles(raw: {'scale': '120%'}),
    css.media(smolScrnMediaQry, [
      css('#ham-menu').styles(
        display: Display.block,
        width: Unit.fitContent,
        margin: Margin.only(left: Unit.auto, right: Unit.zero),
      ),
      css('#ham-menu.active div:nth-child(1)').styles(
        transform: Transform.combine([
          Transform.translate(y: 150.percent),
          Transform.rotate(45.deg),
        ]),
      ),
      css('#ham-menu.active div:nth-child(2)').styles(opacity: 0),
      css('#ham-menu.active div:nth-child(3)').styles(
        transform: Transform.combine([
          Transform.translate(y: (-150).percent),
          Transform.rotate((-45).deg),
        ]),
      ),
      css('#ham-menu div').styles(
          width: 1.7.rem,
          height: 0.3.rem,
          margin: Margin.only(top: 0.19.rem),
          radius: BorderRadius.circular(1.25.rem),
          transition: Transition('all', duration: 300),
          backgroundColor: hamMenuColor),
      css('nav').styles(margin: Margin.only(top: Unit.zero, bottom: Unit.auto)),
      css('#nav-bg.active').styles(
          display: Display.block,
          position: Position.fixed(top: Unit.zero, left: Unit.zero),
          width: 100.vw,
          height: 100.vh,
          raw: {'backdrop-filter': 'blur(2rem)'}),
      css('#nav-items').styles(
          display: Display.none,
          position: Position.absolute(right: Unit.zero),
          width: 100.percent,
          height: Unit.auto,
          minWidth: Unit.auto,
          padding: Padding.all(Unit.zero),
          radius: BorderRadius.circular(Unit.zero),
          opacity: 0,
          visibility: Visibility.hidden,
          transition: Transition('all', duration: 300),
          transform: Transform.translate(y: 50.percent)),
      css('#nav-items.active').styles(
        display: Display.grid,
        opacity: 1.0,
        visibility: Visibility.visible,
        transition: Transition('all', duration: 300),
        gridTemplate: GridTemplate(
          columns: GridTracks([
            GridTrack(TrackSize.fr(1)),
            GridTrack(TrackSize.fr(1)),
          ]),
        ),
      ),
      css('#nav-items a').styles(
          padding: Padding.all(1.rem),
          outline: Outline(
            width: OutlineWidth(0.06.rem),
            style: OutlineStyle.solid,
            color: shinyGreen,
          ),
          textAlign: TextAlign.center),
    ]),
  ];
}

class _HamMenu extends StatelessComponent {
  const _HamMenu();

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
      id: 'ham-menu',
      events: events(onClick: () => toggleActive(context)),
      [div([]), div([]), div([])],
    );
  }

  void toggleActive(BuildContext context) {
    if (kIsWeb) {
      final hamMenu =
          web.document.getElementById('ham-menu') as web.HTMLDivElement;
      final navBg = web.document.getElementById('nav-bg') as web.HTMLDivElement;
      final navItems =
          web.document.getElementById('nav-items') as web.HTMLDivElement;

      hamMenu.classList.toggle('active');
      navBg.classList.toggle('active');
      navItems.classList.toggle('active');
    }
  }
}

class _NavBg extends StatelessComponent {
  const _NavBg();

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(id: 'nav-bg', []);
  }
}

class _NavItems extends StatelessComponent {
  const _NavItems();

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
      id: 'nav-items',
      NavbarRoute.values.map((route) {
        return Link(to: route.path, child: text(route.label));
      }).toList(growable: false),
    );
  }
}
