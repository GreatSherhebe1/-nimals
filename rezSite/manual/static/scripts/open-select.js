const navigationHeader = document.querySelector('.navigation-header');
const navigationList = document.querySelector('.navigation_list');
const navigationOptions = document.querySelectorAll('.navigation_list li');

navigationHeader.addEventListener('click', () => {
    navigationList.classList.toggle('hidden');
    navigationHeader.style.borderBottom = '1px solid #63ADD0';
})

navigationOptions.forEach((option) => {
    option.addEventListener('click', function () {
        navigationHeader.style.borderBottom = 'none';
        const value = this.value;
        window.scrollTo(0, Number(value))
        navigationList.classList.add('hidden');
    })
})