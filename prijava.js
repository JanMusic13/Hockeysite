const submit = document.getElementById("submit");

function lockHeight() {
    // Izmeri dejansko višino v pikslih ob nalaganju
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', lockHeight);
// Ne dodajaj 'resize' eventa, ker prav to povzroča tvoj problem!
submit.addEventListener("click", (e) => {
    const email = document.querySelector(".mail");
    const tel = document.querySelector(".tele");
    const date = document.querySelector(".starost");

    if (!email.value.trim()) {
        e.preventDefault();
        alert("Vnesi email!");
        return;
    }

    if (!tel.value.trim()) {
        e.preventDefault();
        alert("Vnesi telefonsko št.!");
        return;
    }

    if (!date.value){
        e.preventDefault();
        alert("Vnesi datum!");
        return;
    }
    

});
