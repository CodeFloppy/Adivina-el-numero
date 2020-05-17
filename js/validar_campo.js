

function validaNumericos(event) {

    if(event.charCode >= 48 && event.charCode <= 57){

        let valCampo= event.charCode;
        valCampo = String.fromCharCode(valCampo);
        valCampo = parseInt(valCampo);

        let num = campoRes.value;

        if(isNaN(parseInt(num))){

            if(valCampo > 0){
        
                return true;
            }

        }else{

            if(parseInt(num + valCampo) <= valMaxRango){

                return true;
            }
        }
        
    }

    return false; 
}