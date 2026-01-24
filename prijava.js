const submit = document.getElementById("submit");


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
