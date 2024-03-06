function hidePlaceholderAndBorder() {
    let input = document.getElementById('section1__campo-input__input');
    input.classList.add('hide-placeholder', 'hide-border');
  }
  
  function showPlaceholderAndBorder() {
    let input = document.getElementById('section1__campo-input__input');
    input.classList.remove('hide-placeholder', 'hide-border');
  }
  
function pegar_input(){
    let texto = document.getElementById('section1__campo-input__input').value;
    alert(texto);
}
