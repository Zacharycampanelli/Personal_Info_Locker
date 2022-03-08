const newFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="password-title"]').value;
    const body = document.querySelector('textarea[name="password-body"]').value;

    const token = localStorage.getItem("token");
    await fetch(`/api/password`, {
        method: "POST",
        body: JSON.stringify({
            title,
            body
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
