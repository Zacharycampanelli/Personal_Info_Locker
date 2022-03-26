const newFormHandler = async function (event) {
    event.preventDefault();

    const title = await document.querySelector('input[name="title"]').value;
    const email = await document.querySelector('input[name="email"]').value;
    const username = await document.querySelector('input[name="username"]').value;
    const password = await document.querySelector('input[name="password"]').value;
    const website_url = await document.querySelector('input[name="website_url"]').value;

    const token = localStorage.getItem("token");
    await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({
            title,
            email, 
            username,
            password,
            website_url
        }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });

    document.location.replace("/dashboard");
};

document
    .querySelector("#new-post-form")
    .addEventListener("submit", newFormHandler);
