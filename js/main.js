var buttons = document.querySelectorAll("button");

buttons.forEach((button, i) => {
    button.addEventListener("click", function () {
        if (i === 0) {
            document.querySelector("img").setAttribute("src", "./images/Burger.jpg");
            document.querySelector("h1").innerHTML = "Burger";
            document.querySelector("body").style.backgroundColor = "#EDCEBF";
        } else if (i === 1) {
            document.querySelector("img").setAttribute("src", "./images/Chinese cuisine.jpg");
            document.querySelector("h1").innerHTML = "Chinese cuisine";
            document.querySelector("body").style.backgroundColor = "#EDA340";
        } else if (i === 2) {
            document.querySelector("img").setAttribute("src", "./images/Kimchi, korea.jpg");
            document.querySelector("h1").innerHTML = "Kimchi, korea";
            document.querySelector("body").style.backgroundColor = "#e57f28";
        } else if (i === 3) {
            document.querySelector("img").setAttribute("src", "./images/Pad thai, thailand.jpg");
            document.querySelector("h1").innerHTML = "Pad thai, thailand";
            document.querySelector("body").style.backgroundColor = "#E7E4E2";
        } else if (i === 4) {
            document.querySelector("img").setAttribute("src", "./images/Paella, spain.jpg");
            document.querySelector("h1").innerHTML = "Paella, spain";
            document.querySelector("body").style.backgroundColor = "#F9EFA8"
        } else if (i === 5) {
            document.querySelector("img").setAttribute("src", "./images/Peking duck, china.jpg");
            document.querySelector("h1").innerHTML = "Peking duck, china";
            document.querySelector("body").style.backgroundColor = "#AB7574";
        } else if (i === 6) {
            document.querySelector("img").setAttribute("src", "./images/Ramen, japan.jpg");
            document.querySelector("h1").innerHTML = "Ramen, japan";
            document.querySelector("body").style.backgroundColor = "#759315";
        } else {
            document.querySelector("img").setAttribute("src", "./images/menu.png");
            document.querySelector("h1").innerHTML = "Our Menu";
            document.querySelector("body").style.backgroundColor = "#CA3C3D"
        }
    });
});
