const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
    alert("Username: " + document.querySelector("#uname").value)
    alert("password: " + document.querySelector("#pass").value)
})


