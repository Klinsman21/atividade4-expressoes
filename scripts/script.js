const Validate = {
    isEmail(input){
        Validate.clearErros(input);
        let value = input.value;
        let error = null;
        const formatEmail = /^\w+([\.-_]?\w+)@\w+([\.-_]?\w+)+(\.\w{2,3})+$/;
        if(!value.match(formatEmail)){
            error ="Email inválido";
            Validate.displayError(input, error);
            return;
        }
        input.value = value;
    },
    clearErros(input){
        const errorDiv = input.parentNode.querySelector('.error')
        if(errorDiv){
            errorDiv.remove();
        }
    },
    displayError(input, error){
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = error;
        input.parentNode.appendChild(div);
        input.focus();
    }
}


const Mask = {
    
}
