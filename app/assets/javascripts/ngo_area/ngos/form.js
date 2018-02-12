// phone number mask

var phone_number1 = document.getElementById("ngo_phone_number1");
var phone_number2 = document.getElementById("ngo_phone_number2");
phone_number1.onkeyup = mask;
phone_number2.onkeyup = mask;

function mask(){
    setTimeout("execmask()",1);
}

function execmask(){
    phone_number1.value=mtel(phone_number1.value);
    phone_number2.value=mtel(phone_number2.value);
}

function mtel(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
}

execmask();

// brazilian cep consultation

$('#ngo_zipcode').focusout(function() {
    findAddress();
});

function findAddress() {
    var zipCode = $('#ngo_zipcode').val();

    if (zipCode == null || zipCode == '') return;

    $.get("https://viacep.com.br/ws/" + zipCode + "/json/", function (data) {
        document.getElementById("ngo_address").value = data.logradouro;
        document.getElementById("ngo_neighborhood").value = data.bairro;
        document.getElementById("ngo_city").value = data.localidade;
        document.getElementById("ngo_state").value = data.uf;
    })
    .fail(function() {
        alert( "Endereço não encontrado." );
        document.getElementById("ngo_address").value = '';
        document.getElementById("ngo_neighborhood").value = '';
        document.getElementById("ngo_city").value = '';
        document.getElementById("ngo_state").value = '';
    });
}