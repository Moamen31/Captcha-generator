//get elements
const captcha = document.querySelector(".captcha-img span"),
    reloadBtn = document.querySelector(".reload-btn"),
    inputField = document.querySelector("form input"),
    checkBtn = document.querySelector("form .check-btn"),
    statusText = document.querySelector(".status-text")

let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z",
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha() {
    for (let i = 0; i < 6; i++) {
        let randomChars = letters[Math.floor(Math.random() * letters.length)]
        captcha.innerText += ` ${randomChars}`
    }
}
getCaptcha()

reloadBtn.addEventListener("click", () => {
    captcha.innerText = ""
    getCaptcha()
})

checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    statusText.style.display = "block"
    let inputVal = inputField.value.split("").join(" ");
    // console.log(inputVal)
    if (inputVal === captcha.innerText) {
        console.log("matched")
        statusText.innerText = "Nice! You don't appear to be a robot."
        statusText.style.color = "#4db2ec"
        setTimeout(() => {
            statusText.style.display = "none"
            inputField.value = ""
            captcha.innerText = ""
            getCaptcha()
        }, 3000)
    }
    else {
        console.log("not matched")
        statusText.innerText = "Captcha not matched, please try again!"
        statusText.style.color = "#f44336"
    }
})