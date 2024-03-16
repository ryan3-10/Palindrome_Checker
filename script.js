const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", check);

function isPalindrome(string) {
    string = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversedString = string.split("").reverse().join("");
    return string === reversedString;
}

function check() {
    if (textInput.value === "") {
        alert("Please input a value");
        return;
    }
    result.replaceChildren();
    const pTag = document.createElement("p");
    pTag.className = "user-input";
    result.appendChild(pTag);

    if (isPalindrome(textInput.value)) {
        pTag.innerHTML = `${textInput.value} is a palindrome`
    }
    else {
        pTag.innerHTML = `${textInput.value} is not a palindrome`
    }
}