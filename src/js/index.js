const { async } = require("regenerator-runtime")
import Error from "./error";

function validateCep(cep) {
    // Validar o CEP
    const cepPattern = /^\d{8}$/;
    return cepPattern.test(cep);

}
async function upload() {

    try {    
        let cep = document.querySelector('.cep-valid');
        let valueOfCep = cep.value;
    
        const isClean = cep.value === ''? alert('Campo cep vazio'): '';
        const href = await fetch(`https://brasilaberto.com/api/v1/zipcode/${cep.value}`)
      
        if(href.status !== 200) throw new Error('PAGE NOT FOUND!');
            
        let valor = await href.json();

        if(validateCep(valueOfCep)) {
            uploadResult(valor.result);
         } 
         else {
             result.innerHTML = 'Cep inexistente';
             result.classList.add('answers-invalid');
             throw new Error('ERROR -  CEP INEXITENTE') 
         }
    }
    catch(e) {
        console.log(new Error(e))
    }
  
}

let button = document.querySelector('.button-confirm');
button.addEventListener('click', (e) => {
    e.preventDefault();
    upload();
});

function uploadResult(response) {
    const result = document.querySelector('.answers');

    result.innerHTML = `<h1><strong>CEP:</strong> ${response.zipcode}</h1>`+ 
    `<p><strong>Cidade:</strong>  ${response.city} </p>` +
    `<p><strong>Estado:</strong> ${response.state}</p>` +
    `<p><strong>Nome do estado abreviado:</strong> ${response.stateShortname}</p>`+
    `<p><strong>Rua:</strong> ${response.street}</p>`  
    ;  
}
