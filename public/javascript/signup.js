
const signupFormHandler = async function (event) {
    event.preventDefault();

    const usernameEl = document.getElementById("username-input-signup");
    const emailEl = document.getElementById("email-input-signup")
    const passwordEl = document.getElementById("password-input-signup");
    fetch("/api/user", {
        method: "post",
        body: JSON.stringify({
            username: usernameEl.value,
            email: emailEl.value,
            password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(function () {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err));
};

document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
