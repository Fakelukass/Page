window.onload = function () {
    document.querySelector('h4#priklad-1-a-error-message').innerHTML = ''
    document.querySelector('h4#priklad-1-b-error-message').innerHTML = ''
    document.querySelector('h4#priklad-3-a-error-message').innerHTML = ''
    document.querySelector('h4#priklad-3-b-error-message').innerHTML = ''
    document.querySelector('h4#priklad-3-c-error-message').innerHTML = ''

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


    


function calculate3exercise() {
    let
        Aside = document.querySelector('input#priklad-3-a'),
        Bside = document.querySelector('input#priklad-3-b'),
        Cside = document.querySelector('input#priklad-3-c'),
        AsideError = document.querySelector('h4#priklad-3-a-error-message'),
        BsideError = document.querySelector('h4#priklad-3-b-error-message'),
        CsideError = document.querySelector('h4#priklad-3-c-error-message'),
        result = document.querySelector('span#priklad-3-result');

    if (Aside.value == '' || Bside.value == '' || Cside.value == '') {

        if (Aside.value == '') AsideError.innerHTML = "This field has to be filled"
        else AsideError.innerHTML = ""

        if (Bside.value == '') BsideError.innerHTML = "This field has to be filled"
        else BsideError.innerHTML = ""

        if (Cside.value == '') CsideError.innerHTML = "This field has to be filled"
        else CsideError.innerHTML ==""

    } else {
        let
            a = parseFloat(Aside.value),
            b = parseFloat(Bside.value);
            c = parseFloat(Cside.value);

        
        result.innerHTML = (a + b + c) 
    }
}

function calculate4exercise() {
    let
        Aside = document.querySelector('input#priklad-4-a'),
        Bside = document.querySelector('input#priklad-4-b'),    
        AsideError = document.querySelector('h4#priklad-4-a-error-message'),
        BsideError = document.querySelector('h4#priklad-4-b-error-message'),
        result = document.querySelector('span#priklad-4-result');

    if (Aside.value == '' || Bside.value == '' ) {

        if (Aside.value == '') AsideError.innerHTML = "This field has to be filled"
        else AsideError.innerHTML = ""

        if (Bside.value == '') BsideError.innerHTML = "This field has to be filled"
        else BsideError.innerHTML = ""


    } else {
        let
            a = parseFloat(Aside.value),
            b = parseFloat(Bside.value);
            
        
        result.innerHTML = [(a + b) * 2] 
    }
}
