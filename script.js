const slike = document.querySelectorAll('.slike');
const observer = new IntersectionObserver((entries) => {
    console.log(entries); }, {})

observer.observe(slike)