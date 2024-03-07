function hidePlaceholderAndBorder() {
    let input = document.getElementById('section1__campo-input__input');
    input.classList.add('hide-placeholder', 'hide-border');
  }
  
function showPlaceholderAndBorder() {
  let input = document.getElementById('section1__campo-input__input');
  input.classList.remove('hide-placeholder', 'hide-border');
  }

function temLetrasMaiusculas(string) {
  return /[A-Z]/.test(string);
  }

function temAcentos(string) {
    return /[À-ÖØ-öø-ÿ]/.test(string);
  }
  
function pegar_input(){
    let texto = document.getElementById('section1__campo-input__input').value;
    texto_s2 = document.getElementById("texto-section2");
    texto_s2.innerHTML = `${temLetrasMaiusculas(texto) | temAcentos(texto)}`;
}
