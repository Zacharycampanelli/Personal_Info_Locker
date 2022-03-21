const creditId = document.querySelector('input[name="credit-id"]').value;


const editFormHandler = async function (event) {
  event.preventDefault();

  const title = await document.querySelector('input[name="title"]').value;
    const cardholder_name = await document.querySelector('input[name="cardholder_name"]').value;
    const number = await document.querySelector('input[name="number"]').value;
    const pexpiration_dateassword = await document.querySelector('input[name="expiration_date"]').value;
    const cvv = await document.querySelector('input[name=""]').value;
    const zip_code = await document.querySelector('input[name="zip_code"]').value;


  await fetch(`/api/credit/${creditId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      cardholder_name, 
      number,
      pexpiration_dateassword,
      cvv,
      zip_code
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.replace('/credit');
};

const deleteClickHandler = async function () {
  await fetch(`/api/credit/${creditId}`, {
    method: 'DELETE',
  });

  document.location.replace('/credit');
};

document
  .querySelector('#edit-credit-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
