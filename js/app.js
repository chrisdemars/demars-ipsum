const getParagraphs = () => {
  return document.getElementById('paragraphs').value;
};

const useLorem = () => {
  return document.getElementById('lorem').checked;
};

const button = document.querySelector('#generate');
const boxOfIpsum = document.querySelector('#lorem-paragraphs');
const lorem = document.getElementById('lorem');

const phrases = [
  'yo',
  'what\'s good',
  'holla',
  'Detroit',
  'Midwest the best',
  '313',
  'steezy',
  'fo sho',
  'dickies',
  'vans',
  'Dixxon flannels',
  'pizza',
  'rice beer',
  'bud light',
  'gluten free',
  'smoke weed everyday',
  'so fresh so clean',
  'crib',
  'banger',
  'six-four',
  'ridin dirty',
  'hostility',
  'stripper dope',
  'chea',
  'deez nutz',
  'horror',
  'rock that',
  'split your wig',
  'snappin\' bowls',
  'bong rips'
];

const createSentence = (array) => {
  const sentence = [];
  for (let i = 0; i < 7; i++) {
    let randomWords = array[Math.floor(Math.random() * array.length)];
    sentence.push(randomWords);
  }
  return sentence.join(", ") + "."
}

const createParagraph = (array) => {
  const paragraph = [];

  for (let i = 0; i < 4; ++i ){
    paragraph.push(createSentence(array))
  }

  const paragraphString = paragraph.join(" ")
  return paragraphString.charAt(0).toUpperCase() + paragraphString.slice(1)
}

const createParagraphs = (numberOfParagraphs, startLorem) => {
  let paragraphs = [];
  for (let i = 0; i < numberOfParagraphs; ++i) {
    paragraphs.push(createParagraph(phrases))
  }
  if (startLorem) paragraphs[0] = `Lorem ipsum dolor sit amet, ${paragraphs[0]}`
  return paragraphs.join("<br /><br />")
}

const genThatShit = () => {
  const numParagraphs = getParagraphs();
  const startLorem = useLorem();
  boxOfIpsum.innerHTML = createParagraphs(numParagraphs, startLorem)

};

button.addEventListener('click', (e) => {
  e.preventDefault();
  genThatShit();
})

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearThatShit();
})

const clearThatShit = () => {
  boxOfIpsum.innerHTML = '';
  lorem.checked = false;
}
