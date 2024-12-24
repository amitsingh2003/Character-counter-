
const userInput = document.querySelector("#userInput");
const cl1 = document.querySelector("#l1");
const cl2 = document.querySelector("#l3");
const cl3 = document.querySelector("#l5");
const cl4 = document.querySelector("#l7");
function isLowerCase(char) {
    return char >= 'a' && char <= 'z';
}

function isUpperCase(char) {
    return char >= 'A' && char <= 'Z';
}

function isNum(char) {
    return char >= '0' && char <= '9';
}


function isSpecialChar(char) {
    return !(isLowerCase(char) || isUpperCase(char) || isNum(char));
}

const countButton = document.querySelector("#countButton");


countButton.addEventListener("click", function () {
    const flag = 0;

    const str = userInput.value;


    let smallalpha = Array(26).fill(0);
    let bigalpha = Array(26).fill(0);
    let num = Array(10).fill(0);
    let specialChars = {};


    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (isLowerCase(char)) {
            let index = char.charCodeAt(0) - 97;
            smallalpha[index]++;
        } else if (isUpperCase(char)) {
            let index = char.charCodeAt(0) - 65;
            bigalpha[index]++;
        } else if (isNum(char)) {
            let index = parseInt(char);
            num[index]++;
        } else {

            if (specialChars[char]) {
                specialChars[char]++;
            } else {
                specialChars[char] = 1;
            }
        }
    }

    let sum1 = 0;
    for (let i = 0; i < smallalpha.length; i++) {
        sum1 += smallalpha[i];
    }
    cl1.innerHTML = `Lowercase Char : ${sum1}`;

    let sum2 = 0;
    for (let i = 0; i < bigalpha.length; i++) {
        sum2 += bigalpha[i];
    }
    cl2.innerHTML = `Uppercase Char : ${sum2}`;

    let sum3 = 0;
    for (let i = 0; i < num.length; i++) {
        sum3 += num[i];
    }
    cl3.innerHTML = `Numbers : ${sum3}`;

    let sum4 = 0;
    for (let char in specialChars) {
        sum4 += specialChars[char];
    }
    cl4.innerHTML = `Special-Char : ${sum4}`;



    const flag2 = 0;
    //--------------------------------------------------------------------------------------------------------------------------------
    cl1.addEventListener("click", function () {

        const charCountsElement = document.getElementById("output");
        console.log(typeof (charCountsElement));
        charCountsElement.innerHTML = "";

        for (let i = 0; i < smallalpha.length; i++) {
            if (smallalpha[i] !== 0) {
                const character = String.fromCharCode(i + 97);
                const countElement = document.createElement("div");
                countElement.textContent = `${character}  : ${smallalpha[i]}`;
                charCountsElement.appendChild(countElement);
            }
        }
        charCountsElement.style.display = "block";
        if (flag2 == 0) {

            const jl1 = document.querySelector(".cir1.box");
            const jl2 = document.querySelector(".cir2.box");
            const jl3 = document.querySelector(".cir3.box");
            const jl4 = document.querySelector(".cir4.box");
            jl1.style.transition = "left 0.5s ease";
            jl2.style.transition = "left 0.5s ease";
            jl3.style.transition = "left 0.5s ease";
            jl4.style.transition = "left 0.5s ease";
            jl1.style.left = "34%";
            jl2.style.left = "34%";
            jl3.style.left = "34%";
            jl4.style.left = "34%";
            flag2 = 1;

        }

    });


    cl2.addEventListener("click", function () {

        const charCountsElement = document.getElementById("output");
        console.log(typeof (charCountsElement));
        charCountsElement.innerHTML = "";
        for (let i = 0; i < bigalpha.length; i++) {
            if (bigalpha[i] !== 0) {
                const character = String.fromCharCode(i + 65);
                const countElement = document.createElement("div");
                countElement.textContent = `${character}  : ${bigalpha[i]}`;
                charCountsElement.appendChild(countElement);
            }
        }
        charCountsElement.style.display = "block";
        if (flag2 == 0) {

            const jl1 = document.querySelector(".cir1.box");
            const jl2 = document.querySelector(".cir2.box");
            const jl3 = document.querySelector(".cir3.box");
            const jl4 = document.querySelector(".cir4.box");
            jl1.style.transition = "left 0.5s ease";
            jl2.style.transition = "left 0.5s ease";
            jl3.style.transition = "left 0.5s ease";
            jl4.style.transition = "left 0.5s ease";
            jl1.style.left = "34%";
            jl2.style.left = "34%";
            jl3.style.left = "34%";
            jl4.style.left = "34%";
            flag2 = 1;

        }
    });

    cl3.addEventListener("click", function () {

        const charCountsElement = document.getElementById("output");
        console.log(typeof (charCountsElement));
        charCountsElement.innerHTML = "";

        for (let i = 0; i < num.length; i++) {
            if (num[i] !== 0) {
                const countElement = document.createElement("div");
                countElement.textContent = `${i}  : ${num[i]}`;
                charCountsElement.appendChild(countElement);
            }
        }
        charCountsElement.style.display = "block";
        if (flag2 == 0) {

            const jl1 = document.querySelector(".cir1.box");
            const jl2 = document.querySelector(".cir2.box");
            const jl3 = document.querySelector(".cir3.box");
            const jl4 = document.querySelector(".cir4.box");
            jl1.style.transition = "left 0.5s ease";
            jl2.style.transition = "left 0.5s ease";
            jl3.style.transition = "left 0.5s ease";
            jl4.style.transition = "left 0.5s ease";
            jl1.style.left = "34%";
            jl2.style.left = "34%";
            jl3.style.left = "34%";
            jl4.style.left = "34%";
            flag2 = 1;

        }
    });

    cl4.addEventListener("click", function () {

        const charCountsElement = document.getElementById("output");
        console.log(typeof (charCountsElement));
        charCountsElement.innerHTML = "";
        for (let char in specialChars) {
            const countElement = document.createElement("div");
            countElement.textContent = `${char}  : ${specialChars[char]}`;
            charCountsElement.appendChild(countElement);
        }
        charCountsElement.style.display = "block";
        if (flag2 == 0) {

            const jl1 = document.querySelector(".cir1.box");
            const jl2 = document.querySelector(".cir2.box");
            const jl3 = document.querySelector(".cir3.box");
            const jl4 = document.querySelector(".cir4.box");
            jl1.style.transition = "left 0.5s ease";
            jl2.style.transition = "left 0.5s ease";
            jl3.style.transition = "left 0.5s ease";
            jl4.style.transition = "left 0.5s ease";
            jl1.style.left = "34%";
            jl2.style.left = "34%";
            jl3.style.left = "34%";
            jl4.style.left = "34%";
            flag2 = 1;

        }
    });



    const jl1 = document.querySelector(".cir1.box");
    const jl2 = document.querySelector(".cir2.box");
    const jl3 = document.querySelector(".cir3.box");
    const jl4 = document.querySelector(".cir4.box");
    setTimeout(() => { jl1.style.display = "block"; }, 250);
    setTimeout(() => { jl2.style.display = "block"; }, 500);
    setTimeout(() => { jl3.style.display = "block"; }, 750);
    setTimeout(() => { jl4.style.display = "block"; }, 1000);
    if (flag === 0) {
        userInput.style.transition = "left 0.5s ease";
        userInput.style.left = "4%";
        userInput.style.top = "180px";

        countButton.style.transition = "left 0.5s ease";
        countButton.style.left = "4%";
        countButton.style.top = "450px";

        jl1.style.transition = "right 0.5s ease";
        jl2.style.transition = "right 0.5s ease";
        jl3.style.transition = "right 0.5s ease";
        jl4.style.transition = "right 0.5s ease";
        jl1.style.right = "10%";
        jl2.style.right = "10%";
        jl3.style.right = "10%";
        jl4.style.right = "10%";
        flag = 1;
    }


});
