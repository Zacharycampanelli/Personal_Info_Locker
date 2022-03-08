const newFormHandler = async function (event) {
    event.preventDefault();

    const email = document.querySelector('input[name="password-email"]').value;
    const username = document.querySelector('input[name="password-username"]').value;
    const pass = document.querySelector('input[name="password-password"]').value;
    const url = document.querySelector('input[name="password-website_url"]').value;

    const token = localStorage.getItem("token");
    await fetch(`/api/password`, {
        method: "POST",
        body: JSON.stringify({
            email,
            username,
            pass,
            url
        }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });

    document.location.replace("/dashboard");
};

document
    .querySelector("#new-password-form")
    .addEventListener("submit", newFormHandler);
