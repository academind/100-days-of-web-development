let paragraphElement = document.querySelector('p');

function changeParagraphText() {
  paragraphElement.textContent = 'Clicked!';
  console.log('Paragraph clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);
