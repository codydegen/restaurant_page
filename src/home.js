function createDocument() {
  const content = document.getElementById('content');
  const testElement = document.createElement('div');
  testElement.innerText = ' hello';
  content.appendChild(testElement);
};

export { createDocument }