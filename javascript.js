buttonFile = document.querySelector("input");
let img = document.querySelector("img");
buttonFile.addEventListener("change", () => {
    img.src = URL.createObjectURL(buttonFile.files[0])

})