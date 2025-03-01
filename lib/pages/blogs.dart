import 'dart:io';

import 'package:jaspr/jaspr.dart';
import 'package:yaml/yaml.dart';

import '../components/aurora_background.dart';
import '../components/blog_article.dart';
import '../components/main_.dart';
import '../components/markdown_text.dart';

class Blogs extends StatelessComponent {
  const Blogs({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield AuroraBackground.hideStyle();

    yield Main([
      h1(const [Text("My Blogs & Thoughts & Other random stuff")]),
      const MarkdownText(introMd),
      div(_getBlogs()),
    ]);
  }

  List<Component> _getBlogs() {
    final data = File('lib/blogs/posts.yaml').readAsStringSync();
    final posts = loadYaml(data) as YamlList;

    final blogComponents = <BlogArticle>[];

    for (int i = 0; i < posts.length; i++) {
      final post = posts[i];
      blogComponents.add(BlogArticle(
        title: post['title']!,
        desc: post['desc']!,
        date: post['date']!,
        author: post['author']!,
        link: "/blogs/${post['stub']!}",
      ));
    }

    return blogComponents;
  }
}

const introMd = """
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
