const getParagraphs = () => {
  const paragraphs = document.getElementById('paragraphs').value;
  return paragraphs;
};

const useLorem = () => {
  const lorem = document.getElementById('lorem').checked;
  return lorem;
};

const button = document.querySelector('#generate');

button.addEventListener('click', (e) => {
  e.preventDefault();
  genThatShit();
})

const boxOfIpsum = document.querySelector('#lorem-paragraphs');

const testSentence = (array) => {
  // test that the parameter  is definitely an array 
  const sentences = [];
  for (i = 0; i < array.length; i++) {
    let random = array[Math.floor(Math.random() * array.length)];
    sentences.push(random);
  };

  const firstWord = sentences.shift();
  const letterArray = firstWord.split('');
  const firstLetter = letterArray.shift().toUpperCase()
  const newLetterArray = [firstLetter, ...letterArray];
  const newFirstWord = [newLetterArray.join("")];
  const newSentences = [newFirstWord, ...sentences];
  return newSentences.join(" ");

}

const genThatShit = () => {
  const numParagraphs = getParagraphs();
  const startLorem = useLorem();
  // let newString = seed.repeat(numParagraphs);


  let words = [
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

  if (startLorem) {
    boxOfIpsum.innerHTML = testSentence(["Lorem", ...words])  
  } else {
    boxOfIpsum.innerHTML = testSentence(words);
  }
  
};

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearThatShit();
})

const clearThatShit = () => {
  boxOfIpsum.innerHTML = '';
  paragraphs.value = '';
  lorem.checked = false;
}


// Click button
  // generate random sentence from words in array
  // start first sentence with a capital letter
  // end sentence with a period 
