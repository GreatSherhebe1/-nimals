const openBtn = document.querySelector('.point-descript-open-btn');
const closeBtn = document.querySelector('.point-descript-close-btn');

openBtn.addEventListener('click', function() {
    document.querySelector(".point-descript-content").classList.toggle("show");
})

closeBtn.addEventListener('click', function() {
    document.querySelector(".point-descript-content").classList.toggle("show");
})