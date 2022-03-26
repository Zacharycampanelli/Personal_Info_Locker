const newFormHandler = async function (event) {
    event.preventDefault();

    const title = await document.querySelector('input[name="title"]').value;
    const cardholder_name = await document.querySelector('input[name="cardholder_name"]').value;
    const number = await document.querySelector('input[name="number"]').value;
    const pexpiration_dateassword = await document.querySelector('input[name="expiration_date"]').value;
    const cvv = await document.querySelector('input[name=""]').value;
    const zip_code = await document.querySelector('input[name="zip_code"]').value;


    
    const token = localStorage.getItem("token");
    await fetch(`/api/credit`, {
        method: "POST",
        body: JSON.stringify({
            title,
            cardholder_name, 
            number,
            pexpiration_dateassword,
            cvv,
            zip_code
        }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });

    document.location.replace("/credit");
};

document
    .querySelector("#new-credit-form")
    .addEventListener("submit", newFormHandler);
