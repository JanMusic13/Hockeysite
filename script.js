const slike = document.querySelector('.slike');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        entries[0].target.classList.add("show")
    }
    else {
        entries[0].target.classList.remove("show")
    }
}, {
    rootMargin: "0px 0px 0px 500px"
})

observer.observe(slike)