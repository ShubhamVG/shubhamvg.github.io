import 'package:jaspr/jaspr.dart';
import 'package:universal_web/web.dart';

import '../constants/theme.dart';

@client
class Carousel extends StatelessComponent {
  Carousel(this.images) : super(key: GlobalNodeKey<HTMLDivElement>());

  final List<String> images;

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
      classes: 'carousel',
      [
        // left button
        button(
          classes: 'carousel-btn-left carousel-btn',
          onClick: () {
            if (kIsWeb) {
              final key = super.key as GlobalNodeKey<HTMLDivElement>;
              final scrollElem = key.currentNode!;

              final width = scrollElem.getBoundingClientRect().width;
              final delta = width;
              scrollElem.scrollBy(ScrollToOptions(
                left: -delta,
                behavior: 'smooth',
              ));
            }
          },
          [img(src: '/images/left-arrow.svg', alt: 'Left Button')],
        ),

        // the important stuff
        div(
          key: key,
          classes: 'carousel-container',
          [
            for (final image in images)
              div(classes: 'carousel-item', [img(src: image)]),
          ],
        ),

        // right button
        button(
          classes: 'carousel-btn-right carousel-btn',
          onClick: () {
            if (kIsWeb) {
              final key = super.key as GlobalNodeKey<HTMLDivElement>;
              final scrollElem = key.currentNode!;

              final width = scrollElem.getBoundingClientRect().width;
              final delta = width;
              scrollElem.scrollBy(ScrollToOptions(
                left: delta,
                behavior: 'smooth',
              ));
            }
          },
          [img(src: '/images/right-arrow.svg', alt: 'Right Button')],
        ),
      ],
    );
  }

  @css
  static final styles = <StyleRule>[
    css('.carousel')
        .styles(display: Display.flex, position: Position.relative()),
    css('.carousel-btn').styles(
        width: 3.rem,
        height: 3.rem,
        border: Border.none,
        radius: BorderRadius.circular(9999.rem),
        alignSelf: AlignSelf.center,
        backgroundColor: Colors.transparent),
    css('.carousel-btn > img').styles(
        height: 100.percent,
        radius: BorderRadius.circular(9999.rem),
        shadow: BoxShadow(
            offsetX: Unit.zero,
            offsetY: Unit.zero,
            color: Colors.black,
            blur: 0.5.rem),
        transition: Transition('all', duration: 300),
        raw: {'aspect-ratio': '1 / 1'}),
    css('.carousel-btn > img:hover').styles(
        transition: Transition('all', duration: 300), raw: {'scale': '120%'}),
    css('.carousel-btn-left').styles(position: Position.absolute(left: 5.vw)),
    css('.carousel-btn-right').styles(position: Position.absolute(right: 5.vw)),
    css('.carousel-container').styles(
        display: Display.flex,
        width: 95.percent,
        margin: Margin.symmetric(horizontal: Unit.auto),
        radius: BorderRadius.circular(1.rem),
        overflow: Overflow.hidden,
        shadow: BoxShadow(
            offsetX: Unit.zero,
            offsetY: Unit.zero,
            blur: 1.rem,
            color: Color.hex('#222222')),
        backgroundColor: glassTranslucent,
        raw: {
          'aspect-ratio': '16 / 9',
          'scroll-snap-type': 'x proximity',
        }),
    css('.carousel-item').styles(
        width: 100.percent,
        height: 100.percent,
        flex: Flex(shrink: 0),
        raw: {'scroll-snap-align': 'center'}),
    css('.carousel-item > img').styles(
        width: 100.percent,
        height: 100.percent,
        raw: {'object-fit': 'contain'}),
  ];
}
