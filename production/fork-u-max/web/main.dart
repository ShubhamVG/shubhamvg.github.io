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
  reader.onLoad;

  querySelector('#imageDropperContainer')!.onInput.listen((event) {
    final InputElement imgUploadElem =
        querySelector('#uploadFile')! as InputElement;

    // Don't enable if the input is not an image
    if (imgUploadElem.files!.first.type.startsWith('image')) {
      enableElement(querySelector('#downloadBtn')!);
    }
  });

  querySelector('#downloadBtn')!.onClick.listen((event) {
    // Get image
    final InputElement imgUploadElem =
        querySelector('#uploadFile')! as InputElement;
    reader.readAsArrayBuffer(imgUploadElem.files!.first);
    final Image inputImg = decodeImage(reader.result as Uint8List)!;
    // inputImageBuffer.clear();

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
    print("this?");
    final Image resizedImg =
        Image.fromResized(inputImg, width: resizedWidth, height: resizedHeight);

    // Start downloading
    AnchorElement a = AnchorElement(href: resizedImg.toString());
    a.click();
  });
}
