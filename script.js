const slike = document.querySelectorAll('.slike img');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
}, {
    threshold: 0.35,
    rootMargin: "0px 0px 0px 400px"
})

slike.forEach(img => observer.observe(img))