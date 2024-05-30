let forms = document.getElementById("contactForm");
forms.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let formsName = document.querySelector("#name");
    console.log(formsName.value);
})
