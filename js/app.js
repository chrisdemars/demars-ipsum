const getParagraphs = () => {
  // Grab input with number of paragraphs
  const paragraphs = document.getElementById('paragraphs').value;
  return paragraphs;
};

const useLorem = () => {
  // Grab if you want to start with lorem
  const lorem = document.getElementById('lorem').checked;
  return lorem;
};

const button = document.querySelector('#generate');

button.addEventListener('click', (e) => {
  e.preventDefault();
  genThatShit();
})

const seed = "dolor sit amet, consectetur adipiscing elit. ";
const boxOfIpsum = document.querySelector('#lorem-paragraphs');

const genThatShit = () => {
  const numParagraphs = getParagraphs();
  const startLorem = useLorem();
  let newString = seed.repeat(numParagraphs);
  console.log(newString)

  if (startLorem) {
    newString = "Lorem Ipsum " + newString;
  }

  console.log(newString)
  boxOfIpsum.innerHTML = newString;
};


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearThatShit();
})

const clearThatShit = () => {
  boxOfIpsum.innerHTML = '';
}