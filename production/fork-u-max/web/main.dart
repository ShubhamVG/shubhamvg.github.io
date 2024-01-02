import 'dart:convert';
import 'dart:html';
import 'dart:typed_data' show Uint8List;

import 'package:image/image.dart';

void disableElement(Element e) {
  e.setAttribute('disabled', '');
}

void enableElement(Element e) {
  e.removeAttribute('disabled');
}

void main() {
  final FileReader reader = FileReader();

  querySelector('#imageDropperContainer')!.onInput.listen((event) {
    final InputElement imgUploadElem =
        querySelector('#uploadFile')! as InputElement;

    // Don't enable if the input is not an image
    if (imgUploadElem.files!.first.type.startsWith('image')) {
      enableElement(querySelector('#downloadBtn')!);
    }
  });

  querySelector('#downloadBtn')!.onClick.listen((event) async {
    // Get image
    final InputElement imgUploadElem =
        querySelector('#uploadFile')! as InputElement;
    final File inputImgFile = imgUploadElem.files!.first;
    reader.readAsArrayBuffer(inputImgFile);

    // Wait till the image has been read and then get the image
    while (reader.readyState != FileReader.DONE) {
      await Future.delayed(Duration(milliseconds: 100));
    }

    final Image inputImg = decodeImage(reader.result as Uint8List)!;

    // Get settings
    final InputElement scalarElem =
        querySelector("input[type='radio'][name='scale_by']:checked")!
            as InputElement;
    double scale = double.parse(scalarElem.getAttribute('data-value')!);
    final InputElement scalarType =
        querySelector("input[type='radio'][name='scale_type']:checked")!
            as InputElement;
    if (scalarType.id == 'downscale') {
      scale = 1 / scale;
    }

    // Do manipulation
    final int resizedWidth = (inputImg.width * scale).toInt();
    final int resizedHeight = (inputImg.height * scale).toInt();
    final Image resizedImg =
        copyResize(inputImg, width: resizedWidth, height: resizedHeight);

    // Start downloading
    final String uriBasedLink =
        "data:${inputImgFile.type};base64,${base64Encode(encodeNamedImage(inputImgFile.name, resizedImg)!)}";

    AnchorElement a = AnchorElement(href: uriBasedLink);
    a.setAttribute('download', '');
    a.click();
    a.remove;
  });
}
