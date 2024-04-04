function hidePlaceholderAndBorder() {
    let input = document.getElementById('section1__campo-input__input');
    input.classList.add('hide-placeholder', 'hide-border');
  }
  
function showPlaceholderAndBorder() {
  let input = document.getElementById('section1__campo-input__input');
  input.classList.remove('hide-placeholder', 'hide-border');
  }

// dicionario de criptografia
const dict = {
                a:"ai",
                e:"enter",
                i:"imes",
                o:"ober",
                u:"ufat"
              };

function getinput(){
  let mensagem = document.getElementById('section1__campo-input__input').value;
  return mensagem;   
}              

function getfield(){
  let campo_mensagem_descriptografada = document.getElementById("texto-section2");
  return campo_mensagem_descriptografada;
}

function saoMinusculas(str) {
  return /^[a-z]+$/.test(str)
}

function Criptografar(){
let input_cript = getinput();
let field_cript = getfield();
if (saoMinusculas(input_cript)==true){
     let mensagem_descriptografada = "";
     for (let letra = 0; letra < input_cript.length; letra++) {
      for (let id = 0; id < Object.keys(dict).length;id++) {
        let key = Object.keys(dict)[id].toString()
        if(input_cript[letra].includes(key)){
          let value = dict[Object.keys(dict)[id]].toString()
          mensagem_descriptografada += value;
        }
      }
    }
    field_cript.innerHTML = mensagem_descriptografada;
  }else{
    field_cript.innerHTML = "! Apenas letras minusculas e sem acento.";
  }
}               

function Descriptografar(){
  let input_desc = getinput();
  let field_desc = getfield();
  for (let id = 0; id < Object.keys(dict).length;id++) {
    let value = dict[Object.keys(dict)[id]].toString()
    let key = Object.keys(dict)[id].toString()
    
    if (input_desc.includes(value)) {
      input_desc = input_desc.replace(new RegExp(value, 'g'),key);
      console.log("value: "+value+" key: "+key+" input: "+input_desc);
    }
  }
  field_desc.innerHTML = input_desc;
}
