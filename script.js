const slike = document.querySelectorAll('.slike img');
const observer = new IntersectionObserver((entries) => {
    console.log(entries); }, {})

observer.observe(slike)