const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function (event) {
  event.preventDefault();

  const title = await document.querySelector('input[name="title"]').value;
  const email = await document.querySelector('input[name="email"]').value;
  const username = await document.querySelector('input[name="username"]').value;
  const password = await document.querySelector('input[name="password"]').value;
  const website_url = await document.querySelector('input[name="website_url"]')
    .value;
  console.log(title, email, username, password, website_url);
  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      email,
      username,
      password,
      website_url,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function () {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE',
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
