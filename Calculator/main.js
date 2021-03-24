function press(digit) {
    document.getElementById("show").value += digit;
}

function onClear() {
    document.getElementById("show").value = '';
    document.getElementById("error").innerHTML = '';
}

function equals() {

    try {
        var exp = document.getElementById("show").value;
        result = eval(exp);
        document.getElementById("show").value = result;    
    }

    catch(err) {
        document.getElementById("error").innerHTML = `${err.message}
Press C to escape`;
    }
}