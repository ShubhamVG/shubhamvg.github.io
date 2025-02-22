import 'package:jaspr/jaspr.dart';

import '../constants/theme.dart';

@client
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
                attributes: {
                  'in': 'SourceGraphic',
                  'in2': 'goo',
                },
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

  // This is so fked up. Just using [css.raw] would have been much cleaner but
  // meh, at least it is more secure this way.
  @css
  static final styles = <StyleRule>[
    css.keyframes('moveCirc', {
      '0%': Styles.box(transform: Transform.rotate(0.deg)),
      '50%': Styles.box(transform: Transform.rotate(180.deg)),
      '100%': Styles.box(transform: Transform.rotate(360.deg)),
    }),
    css.keyframes('moveNE', {
      '0%': Styles.box(
        transform: Transform.translate(x: (-50).percent, y: 20.percent),
      ),
      '50%': Styles.box(
        transform: Transform.translate(x: 50.percent, y: (-20).percent),
      ),
      '100%': Styles.box(
        transform: Transform.translate(x: (-50).percent, y: 20.percent),
      ),
    }),
    css.keyframes('moveVert', {
      '0%': Styles.box(transform: Transform.translate(y: (-50).percent)),
      '50%': Styles.box(transform: Transform.translate(y: 50.percent)),
      '100%': Styles.box(transform: Transform.translate(y: (-50).percent)),
    }),
    css('#g1')
        .box(height: ballSize, position: Position.absolute(), width: ballSize)
        .raw({
      'animation': 'moveCirc 30s ease infinite',
      'background': ballBg1,
      'transform-origin': 'center center',
    }),
    css('#g2')
        .box(height: ballSize, position: Position.absolute(), width: ballSize)
        .raw({
      'animation': 'moveNE 20s ease infinite',
      'background': ballBg2,
      'transform-origin': 'center center',
    }),
    css('#g3')
        .box(height: ballSize, position: Position.absolute(), width: ballSize)
        .raw({
      'animation': 'moveVert 20s ease infinite',
      'background': ballBg3,
      'transform-origin': 'center center',
    }),
    css('#gradient-bg')
        .box(
            height: 100.vh,
            overflow: Overflow.hidden,
            position: Position.fixed(
                left: Unit.zero, top: Unit.zero, zIndex: ZIndex(-1)),
            width: 100.vw)
        .raw({'background': bgGradient}),
    css('#gradient-bg>svg').box(
        height: Unit.zero,
        position: Position.fixed(top: Unit.zero, left: Unit.zero),
        width: Unit.zero),
    css('#gradients')
        .box(height: 100.percent, width: 100.percent)
        .raw({'filter': 'url(#goo) blur(2.5rem)'}),
  ];
}
