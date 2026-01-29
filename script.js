const slike = document.querySelector('.slike');
const observer = new IntersectionObserver((entries) => {
    console.log(entries);
}, {})

observer.observe(slike)