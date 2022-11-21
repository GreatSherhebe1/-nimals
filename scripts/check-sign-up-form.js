let signUpForm = document.querySelector("form");
signUpForm.addEventListener('submit', function (event) {
    let password = document.querySelector("#password").value;
    let repeatedPassword = document.querySelector("#repeatedPassword").value;
    let mail = document.querySelector("#mail").value;
    let name = document.querySelector("#name").value;
    if (!name.includes(' ', 1)) {
        alert("Введите имя и фамилию через пробел.")
        event.preventDefault();
    } else if (password !== repeatedPassword) {
        alert("Пароль и повторённый пароль не совпадают. Проверьте введённые данные.")
        event.preventDefault();
    } else if (password.length < 5) {
        alert("Слишком короткий пароль.")
        event.preventDefault();
    }
});
