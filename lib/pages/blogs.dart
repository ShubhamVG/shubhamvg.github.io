import 'dart:io';

import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';
import 'package:yaml/yaml.dart';

import '../components/blog_article.dart';
import '../components/main_.dart';
import '../components/markdown_text.dart';
import '../constants/routes.dart';
import '../utils/interfaces.dart';
import 'blog_page.dart';

class Blogs extends StatelessComponent implements IPage {
  const Blogs({super.key});

  @override
  Route get route {
    return Route(
      path: NavbarRoute.blogs.path,
      title: 'Blogs',
      builder: (_, __) => this,
      routes: _blogPostRoutes(),
    );
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield Main(
      metaTitle: "LaV's Blogs",
      metaDesc: "If I ever start writing blogs, then you should be able to "
          "find them here.",
      metaKeywords: "LaV, blogs, writing, thoughts, stuff",
      visibleAurora: false,
      [
        h1(const [Text("My Blogs & Thoughts & Other random stuff")]),
        const MarkdownText(_introMd),
        div(_getBlogs()),
      ],
    );
  }

  YamlList _readPostYaml() {
    final data = File('lib/blogs/posts.yaml').readAsStringSync();
    final posts = loadYaml(data) as YamlList;
    return posts;
  }

  List<Route> _blogPostRoutes() {
    final posts = _readPostYaml();
    final routes = <Route>[];

    for (int i = 0; i < posts.length; i++) {
      final post = posts[i] as YamlMap;
      final stub = post['stub']! as String;
      final blogMd = File('lib/blogs/markdowns/$stub.md').readAsStringSync();

      routes.add(BlogPage(
        blogMd,
        stub: stub,
        title: post['title'] as String,
        metaDesc: post['desc']! as String,
        metaKeyword: post['keywords']! as String,
      ).route);
    }

    return routes;
  }

  List<StatelessComponent> _getBlogs() {
    final posts = _readPostYaml();
    final blogComponents = <BlogArticle>[];

    for (int i = 0; i < posts.length; i++) {
      final post = posts[i] as YamlMap;
      blogComponents.add(BlogArticle(
        title: post['title']! as String,
        desc: post['desc']! as String,
        date: post['date']! as String,
        author: post['author']! as String,
        link: "/blogs/${post['stub']! as String}",
      ));
    }

    return blogComponents;
  }
}

const _introMd = """
As the title suggests, this page has blogs which aren't limited to just coding 
stuff but also contains many random things. Also, I will try to get some of my 
friends to write stuff too (hopefully) because they won't that on their own :p 
so some of the stuff could be written by someone else. Always check the author 
if you care about that.

BTW, if you are wondering why this webpage or any of the blogs do not have the 
aurora background thingy, then I turned them off for these pages as they may 
annoy the readers or could be hard to read text with *\\*ahem\\*, balls on the 
screen*.

Anyways, here are all the blogs:""";
