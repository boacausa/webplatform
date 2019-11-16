var phone_number = document.getElementById("user_phone");

if (phone_number) {
    phone_number.onkeyup = mask;

    function mask() {
        setTimeout("execmask()", 1);
    }

    function execmask() {
        phone_number.value = mtel(phone_number.value);
    }

    function mtel(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        return v;
    }

    execmask();
}
