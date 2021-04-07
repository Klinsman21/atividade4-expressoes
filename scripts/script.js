const Validate = {
    isEmail(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const formatEmail = /^\w+([\.\-_]?\w+)*@\w+([\.\-_]?\w+)(\.\w{2,3})+$/;
        if (value.search(formatEmail) == -1){
            error = "Email invalido";
            Validate.displayError(input,error);
            return;
        }
        input.value = value;
    },
    clearErrors(input){
        const errorDiv = input.parentNode.querySelector('.error');
        if (errorDiv){
            errorDiv.remove();
        }
    },
    displayError(input,error){
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = error;
        input.parentNode.appendChild(div);
        input.focus();
    },

    isCEP(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const cleanValues = value.replace(/\D/g, '');

        if(cleanValues.length != 8){
            error = "CEP incorreto";
            Validate.displayError(input, error);
        }
        input.value = value;
    },

    isCPF_CNPJ(input){
        Validate.clearErrors(input);
        let value = input.value;
        let error = null;
        const clearErrors = value.replace(/\D/g, '');

        if (clearErrors.length < 11){
            error  = "CPF incorreto";
        }

        else if(clearErrors.length > 11 && clearErrors.length < 14){
            error = "CNPJ incorreto";
        } 
        
        if(error){
            Validate.displayError(input,error);
            return;
        }
        input.value = value;
    }

}


const Mask = {
    cep(input){
        let value = input.value;
        value = value.replace(/\D/,"");
        if(value.length > 8){
            value = value.slice(0,-1);
        }
        value = value.replace(/(\d{5})(\d{3})/, "$1-$2");

        input.value = value;
    },

    cpfCnpj(input){
        let value = input.value;
        value = value.replace(/\D/, "");

        if(value.length > 14 ){
            value = value.slice(0,-1);
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
            input.value = value;
           
        }

        
        if(value.length == 11){
            console.log("teste");
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
            input.value = value;
        }
            
    }
  
}
