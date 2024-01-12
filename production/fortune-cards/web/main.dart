import 'dart:html';

List<String> fortunesList = [
  "An unexpected raindrop will land on your nose, sending a shiver down your spine.",
  "You'll stumble upon a lost mitten on the sidewalk, wondering about its companion and the story behind its separation.",
  "An email notification will pop up, announcing a free museum day you didn't know about, prompting a spontaneous afternoon adventure.",
  "While humming a random tune, you'll hear it playing faintly from a passing car, creating a moment of musical serendipity.",
  "A stranger walking your way will smile spontaneously, brightening your day and leaving you wondering about their story.",
  "You'll bite into a juicy apple and discover a perfectly formed star shape in its core, feeling like you've bitten into a bit of magic.",
  "A forgotten melody from your childhood will suddenly pop into your head, taking you on a nostalgic journey down memory lane.",
  "You'll catch a glimpse of a rainbow peeking through the clouds, even if it's just a faint arc, bringing a fleeting touch of wonder.",
  "While browsing in a store, you'll stumble upon the perfect book you didn't know you needed, its title or cover whispering to your soul.",
  "A bird will land on your windowsill, chirping a cheerful song, reminding you of the simple joys of nature.",
  "Lost in thought, you walk past your usual coffee shop and discover a hidden gem tucked away down a side street, its cozy atmosphere and delectable aromas beckoning you in.",
  "While reading a newspaper, you'll stumble upon an intriguing article about a local event you never knew existed, igniting a spark of curiosity to check it out.",
  "You'll witness a random act of kindness – a stranger helping someone with their groceries, a child gifting a flower to a passerby – warming your heart and reminding you of the good in the world.",
  "An old song playing on the radio will transport you back to a specific memory, vivid and detailed, bringing a smile to your face and a renewed appreciation for the past.",
  "You'll strike up a conversation with a fascinating stranger in line at the bakery, hearing their unique perspective and feeling the joy of human connection.",
  "While walking your dog, you'll encounter a group of friendly children playing fetch, their laughter and enthusiasm contagious, momentarily transporting you into their carefree world.",
  "You'll catch a whiff of your favorite childhood dessert baking somewhere nearby, instantly evoking comforting memories and sending your taste buds on a nostalgic journey.",
  "Looking up at the sky, you'll spot a flock of birds forming a mesmerizing shape, like a fleeting brushstroke of beauty across the canvas of the clouds.",
  "You'll find a small, lost object on the ground – a child's drawing, a forgotten keychain, a single feather – and feel the urge to reunite it with its rightful owner.",
  "While waiting for a bus, you'll witness a spontaneous act of creativity – a street performer juggling, a couple dancing, a musician playing a catchy tune – adding a touch of unexpected magic to your day.",
  "While browsing through a thrift store, you'll stumble upon a one-of-a-kind vintage treasure – a quirky t-shirt, a mismatched teacup set, a dusty book promising forgotten adventures – that instantly sparks your joy and begs to be adopted.",
  "Lost in a daydream, you'll bump into a stranger, prompting a hilarious and unexpected fumble that ends in shared laughter, breaking the ice and forging a unique connection.",
  "A local bakery will be offering free samples of a newly created treat – a vibrant cupcake, a savory bread, a decadent pastry – that explodes with flavor and leaves you wanting more.",
  "The aroma of freshly brewed coffee will waft through your window, drawing you to a nearby cafe you've never noticed before, where you'll discover a hidden literary haven filled with books and cozy corners.",
  "You'll find a tiny piece of art tucked away in a public bench – a painted pebble, a beaded bracelet, a origami crane – a small but beautiful gesture that brightens your day and reminds you of the kindness of strangers.",
  "While walking through a park, you'll witness a heartwarming scene – a young child planting a tree, a group of friends holding a surprise picnic, a dog patiently waiting for its owner – that fills you with a sense of hope and belonging.",
  "You'll receive a handwritten note in your mailbox – a thank you from a neighbor, a poem from a secret admirer, a friendly card from a distant relative – that brings a touch of surprise and warmth to your day.",
  "A sudden downpour will force you to take shelter in a hidden alleyway, where you'll discover a vibrant mural painted on the brick wall, a testament to the hidden beauty that often lies around the corner.",
  "You'll overhear a fascinating conversation on the bus – a debate about philosophy, a whispered love story, a travel tale full of faraway lands – that opens your mind to new perspectives and sparks your curiosity.",
  "While walking your dog, you'll encounter a lost puppy, its scared whimpers tugging at your heartstrings. You'll take it in, leading you on an unexpected adventure to reunite it with its owner and creating a heartwarming memory in the process."
];

void main() {
  DivElement specialCard = querySelector('#specialCard')! as DivElement;
  specialCard.onClick.listen((event) async {
    specialCard.classes.add('rotateY180');
    AudioElement rickrollMusic = AudioElement("./assets/rickroll.mp3");
    rickrollMusic.load();
    await rickrollMusic.play();
  });

  DivElement stackedCards = querySelector('#stackedCards')! as DivElement;
  stackedCards.onClick.listen((event) async {
    stackedCards.classes.add('stacked-cards-animated');

    DivElement cards = querySelector('#cards')! as DivElement;
    for (Element elem in cards.children) {
      if (!elem.classes.contains('rotateY180')) {
        continue;
      }
      elem.classes.remove('rotateY180');
      await Future.delayed(Duration(milliseconds: 100));
      elem.children.last.setInnerHtml('');
    }

    await Future.delayed(Duration(milliseconds: 100));
    stackedCards.classes.remove('stacked-cards-animated');
  });

  DivElement cardsContainer = querySelector('#cards')! as DivElement;
  for (Element card in cardsContainer.children) {
    card.onClick.listen((event) {
      if (card.classes.contains('rotateY180')) {
        return;
      }
      fortunesList.shuffle();
      card.children.last.appendText(fortunesList.first);
      card.classes.add('rotateY180');
    });
  }
}
