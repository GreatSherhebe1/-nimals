const navigationHeader = document.querySelector('.navigation-header');
const navigationList = document.querySelector('.navigation_list');
const navigationOptions = document.querySelectorAll('.navigation_list li');

navigationHeader.addEventListener('click', () => {
    navigationList.classList.toggle('hidden');
})

navigationOptions.forEach((option) => {
    option.addEventListener('click', function () {
        const value = this.value;
        window.scrollTo(0, Number(value))
        navigationList.classList.add('hidden');
    })
})