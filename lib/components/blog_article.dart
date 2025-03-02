import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

class BlogArticle extends StatelessComponent {
  const BlogArticle({
    super.key,
    required this.title,
    required this.desc,
    required this.date,
    required this.author,
    required this.link,
  });

  final String title, desc, date, author, link;

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Link(
      to: link,
      child: article(classes: 'blog-article', [
        h2([Text(title)]),
        p([Text('$desc Read More')]),
        footer([
          p([Text(date)]),
          p([Text('By $author')]),
        ]),
      ]),
    );
  }

  @css
  static final styles = <StyleRule>[
    css('.blog-article').styles(
      margin: Margin.only(top: Unit.zero, bottom: 1.rem),
    ),
    css('.blog-article *').styles(margin: Margin.zero),
    css('.blog-article > footer').styles(
        display: Display.flex,
        margin: Margin.only(top: 0.4.rem),
        justifyContent: JustifyContent.spaceBetween),
  ];
}
