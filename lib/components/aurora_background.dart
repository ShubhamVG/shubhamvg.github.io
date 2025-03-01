import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';

class AuroraBackground extends StatelessComponent {
  const AuroraBackground({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(id: 'gradient-bg', [
      // Beautiful blend and blur sorcery
      svg(
        attributes: {'xmlns': "http://www.w3.org/2000/svg"},
        const [
          DomComponent(
            tag: 'defs',
            child: DomComponent(id: 'goo', tag: 'filter', children: [
              DomComponent(
                tag: 'feGaussianBlur',
                attributes: {
                  'in': 'SourceGraphic',
                  'result': 'blur',
                  'stdDeviation': '10',
                },
              ),
              DomComponent(
                tag: 'feColorMatrix',
                attributes: {
                  'in': 'blur',
                  'mode': 'matrix',
                  'values': '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8',
                  'result': 'goo',
                },
              ),
              DomComponent(
                tag: 'feBlend',
                attributes: {'in': 'SourceGraphic', 'in2': 'goo'},
              ),
            ]),
          ),
        ],
      ),

      // Aurora balls
      div(id: 'gradients', [
        div(id: 'g1', []),
        div(id: 'g2', []),
        div(id: 'g3', []),
      ]),
    ]);
  }

  static Style hideStyle() {
    return Style(
      styles: [css('#gradient-bg').styles(display: Display.none)],
    );
  }

  @css
  static final styles = <StyleRule>[
    css.keyframes('moveCirc', {
      '0%': Styles(transform: Transform.rotate(0.deg)),
      '50%': Styles(transform: Transform.rotate(180.deg)),
      '100%': Styles(transform: Transform.rotate(360.deg)),
    }),
    css.keyframes('moveNE', {
      '0%': Styles(
        transform: Transform.translate(x: (-50).percent, y: 20.percent),
      ),
      '50%': Styles(
        transform: Transform.translate(x: 50.percent, y: (-20).percent),
      ),
      '100%': Styles(
        transform: Transform.translate(x: (-50).percent, y: 20.percent),
      ),
    }),
    css.keyframes('moveVert', {
      '0%': Styles(transform: Transform.translate(y: (-50).percent)),
      '50%': Styles(transform: Transform.translate(y: 50.percent)),
      '100%': Styles(transform: Transform.translate(y: (-50).percent)),
    }),
    css('#g1').styles(
        position: Position.absolute(),
        width: ballSize,
        height: ballSize,
        raw: {
          'animation': 'moveCirc 30s ease infinite',
          'background': ballBg1,
          'transform-origin': 'center center'
        }),
    css('#g2').styles(
        position: Position.absolute(),
        width: ballSize,
        height: ballSize,
        raw: {
          'animation': 'moveNE 20s ease infinite',
          'background': ballBg2,
          'transform-origin': 'center center'
        }),
    css('#g3').styles(
        position: Position.absolute(),
        width: ballSize,
        height: ballSize,
        raw: {
          'animation': 'moveVert 20s ease infinite',
          'background': ballBg3,
          'transform-origin': 'center center'
        }),
    css('#gradient-bg').styles(
        position: Position.fixed(left: Unit.zero, top: Unit.zero),
        zIndex: ZIndex(-1),
        width: 100.vw,
        height: 100.vh,
        overflow: Overflow.hidden,
        raw: {'background': bgGradient}),
    css('#gradient-bg>svg').styles(
        position: Position.fixed(top: Unit.zero, left: Unit.zero),
        width: Unit.zero,
        height: Unit.zero),
    css('#gradients').styles(
        width: 100.percent,
        height: 100.percent,
        raw: {'filter': 'url(#goo) blur(2.5rem)'}),
  ];
}
