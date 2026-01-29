const slike = document.querySelector('.slike');
const observer = new IntersectionObserver((entries) => {
    if (entrires[0].isIntersecting) {
        entries[0].target.classList.add("show")
    }
    else {
        entries[0].target.classList.remove("show")
    }
}, {})

observer.observe(slike)