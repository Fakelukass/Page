window.onload = function () {
    document.querySelector('h4#priklad-1-a-error-message').innerHTML = ''
    document.querySelector('h4#priklad-1-b-error-message').innerHTML = ''
}


function calculate1exercise() {
    let
        Aside = document.querySelector('input#priklad-1-a'),
        Bside = document.querySelector('input#priklad-1-b'),
        AsideError = document.querySelector('h4#priklad-1-a-error-message'),
        BsideError = document.querySelector('h4#priklad-1-b-error-message'),
        result = document.querySelector('span#priklad-1-result');

    if (Aside.value == '' ||
        Bside.value == '') {

        if (Aside.value == '') AsideError.innerHTML = "This field has to be filled"
        else AsideError.innerHTML = ""

        if (Bside.value == '') BsideError.innerHTML = "This field has to be filled"
        else BsideError.innerHTML = ""
    } else {
        let
            a = Aside.value,
            b = Bside.value;
        result.innerHTML = Math.sqrt(a * a + b * b).toFixed(2)
    }
}