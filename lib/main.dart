import 'package:jaspr/server.dart';

import 'app.dart';
import 'jaspr_options.dart';

void main() {
  Jaspr.initializeApp(
    options: defaultJasprOptions,
    useIsolates: true,
  );

  runApp(Document(
    title: 'LaV',
    lang: "en",
    meta: {
      "robots": "index, follow",
      "language": "English",
      "author": "LaV",
    },
    body: App(),
  ));
}
