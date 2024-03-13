const h1 = document.getElementById('hello');
const text = h1.innerText;
h1.innerText = '';

let i = 0;
function type() {
  if (i < text.length) {
    h1.innerText += text.charAt(i);
    i++;
    setTimeout(type, 500); // Velocidade da animação
  } else if (i === text.length) {
    setTimeout(() => {
      i = 0;
      h1.innerText = '';
      type();
    }, 150); // Tempo de espera antes de começar a escrever "World"
  }
}
type();
