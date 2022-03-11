const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const website_url = document.querySelector('input[name="website_url"]').value;

    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            email,
            username,
            password,
            website_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    document.location.replace('/dashboard');
};

const deleteClickHandler = async function () {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });

    document.location.replace('/dashboard');
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editFormHandler);
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);
