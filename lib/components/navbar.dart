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
    css('#ham-menu').box(display: Display.none),
    css('nav')
        .raw({'height': 'fit-content'})
        .box(margin: EdgeInsets.symmetric(vertical: Unit.auto))
        .flexItem(flex: Flex(basis: FlexBasis(100.percent))),
    css('#nav-bg').box(display: Display.none),
    css('#nav-items')
        .background(color: navBgActiveColor)
        .box(
            display: Display.flex,
            height: 2.rem,
            margin: EdgeInsets.only(left: Unit.auto, right: Unit.zero),
            outline: Outline(
              color: shinyGreen,
              style: OutlineStyle.solid,
              width: OutlineWidth(0.06.rem),
            ),
            padding: EdgeInsets.symmetric(horizontal: 1.rem),
            radius: BorderRadius.circular(2.rem),
            minWidth: 40.rem,
            width: 90.percent)
        .flexbox(
            alignItems: AlignItems.center,
            justifyContent: JustifyContent.spaceBetween),
    css('#nav-items a')
        .text(
          shadow: TextShadow(
            offsetX: Unit.zero,
            offsetY: Unit.zero,
            color: textShadowColor,
          ),
        )
        .box(
            transition: Transition('all', duration: 300, curve: Curve.easeOut)),
    css('#nav-items a:hover').raw({'scale': '120%'}),
    css.media(smolScrnMediaQry, [
      css('#ham-menu')
          .box(
              display: Display.block,
              margin: EdgeInsets.only(left: Unit.auto, right: Unit.zero))
          .raw({'width': 'fit-content'}),
      css('#ham-menu.active div:nth-child(1)').box(
        transform: Transform.combine([
          Transform.translate(y: 150.percent),
          Transform.rotate(45.deg),
        ]),
      ),
      css('#ham-menu.active div:nth-child(2)').box(opacity: 0),
      css('#ham-menu.active div:nth-child(3)').box(
        transform: Transform.combine([
          Transform.translate(y: (-150).percent),
          Transform.rotate((-45).deg),
        ]),
      ),
      css('#ham-menu div').background(color: hamMenuColor).box(
          margin: EdgeInsets.only(top: 0.19.rem),
          height: 0.3.rem,
          radius: BorderRadius.circular(1.25.rem),
          transition: Transition('all', duration: 300),
          width: 1.7.rem),
      css('nav')
          .box(margin: EdgeInsets.only(top: Unit.zero, bottom: Unit.auto)),
      css('#nav-bg.active')
          .box(
              display: Display.block,
              height: 100.vh,
              position: Position.fixed(top: Unit.zero, left: Unit.zero),
              width: 100.vw)
          .raw({'backdrop-filter': 'blur(2rem)'}),
      css('#nav-items').box(
          display: Display.none,
          height: Unit.auto,
          minWidth: Unit.auto,
          opacity: 0,
          padding: EdgeInsets.all(Unit.zero),
          radius: BorderRadius.circular(Unit.zero),
          position: Position.absolute(right: Unit.zero),
          transform: Transform.translate(y: 50.percent),
          transition: Transition('all', duration: 300),
          visibility: Visibility.hidden,
          width: 100.percent),
      css('#nav-items.active')
          .box(
              display: Display.grid,
              opacity: 1.0,
              transition: Transition('all', duration: 300),
              visibility: Visibility.visible)
          .grid(
            template: GridTemplate(
              columns: GridTracks(
                  [GridTrack(TrackSize.fr(1)), GridTrack(TrackSize.fr(1))]),
            ),
          ),
      css('#nav-items a')
          .box(
              padding: EdgeInsets.all(1.rem),
              outline: Outline(
                width: OutlineWidth(0.06.rem),
                style: OutlineStyle.solid,
                color: shinyGreen,
              ))
          .text(align: TextAlign.center),
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
