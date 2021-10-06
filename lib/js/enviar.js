// DESABILITAR NOME AO SELECIONAR CHECKOBX ANÔNIMO

//function desabilitar(anonimo){
//  var status = document.getElementById('Nome').disabled;

//  if(anonimo == 'sim' && !status){
//   document.getElementById('Nome').disabled = true;
// }else{
//    document.getElementById('Nome').disabled = false;
// }
//}

function desabilitar(anonimo) {
  document.getElementById('Nome').disabled = anonimo;
}


// SELECIONAR ARQUIVO - ABA ANEXO
const fileInput = document.querySelector('#file-js-example input[type=file]');
fileInput.onchange = () => {
  if (fileInput.files.length > 0) {
    const fileName = document.querySelector('#file-js-example .file-name');
    fileName.textContent = fileInput.files[0].name;
  }
}

// VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS

// function validarForm(){
//   var nome = formValidation.nome.value;
//   var mensagem = formValidation.mensagem.value;

//   if(nome == ""){
//     alert('Preencha o campo nome ou marque a opção anônimo');
//     formValidation.nome.focus();
//     return false;
//   }

//   if(mensagem == ""){
//     alert('Preencha o conteúdo da mensagem.')
//     formValidation.mensagem.focus();
//     return false;
//   }
// }
