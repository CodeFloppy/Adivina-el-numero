
function validaNumericos(event) {

    if(event.charCode >= 48 && event.charCode <= 57){

        if((campoRes.value).length < 2){

            return true;
        }
    }

    return false; 
}