const inputText = document.getElementById('txt');
let items = document.querySelectorAll('#list li');
const tab = [];
let index;

// get the selected li index using array
// populate array with li values

for (let i = 0; i < items.length; i++) {
  tab.push(items[i].innerHTML);
}

// get li index onclick
for (let i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    index = tab.indexOf(this.innerHTML);
    console.log(`${this.innerHTML} INDEX = ${index}`);
    // set the selected li value into input text
    inputText.value = this.innerHTML;
  };
}

function refreshArray() {
  // clear array
  tab.length = 0;
  items = document.querySelectorAll('#list li');
  // fill array
  for (let i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
  }
}
function addLI() {
  const listNode = document.getElementById('list');
  const textNode = document.createTextNode(inputText.value);
  const liNode = document.createElement('LI');

  liNode.appendChild(textNode);
  listNode.appendChild(liNode);

  refreshArray();

  // add event to the new LI

  liNode.onclick = function () {
    index = tab.indexOf(liNode.innerHTML);
    console.log(`${liNode.innerHTML} INDEX = ${index}`);
    // set the selected li value into input text
    inputText.value = liNode.innerHTML;
  };
}

function editLI() {
  // edit the selected li using input text
  items[index].innerHTML = inputText.value;
  refreshArray();
}

function deleteLI() {
  refreshArray();
  if (items.length > 0) {
    items[index].parentNode.removeChild(items[index]);
    inputText.value = '';
  }
}
