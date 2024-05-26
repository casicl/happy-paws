const adoptHandler = async (submit) => {
    submit.preventDefault();

 const adoptDesc = document.querySelector("#about-me").value.trim();
 const text = document.querySelector("#text");
 const email = document.querySelector("#email");

 if (adoptDesc && text || email) {
    const response = await fetch('api/adoptme', {
        method: "POST",
        body:JSON.stringify({
            adoptDesc,
            //how to get text or email

        }),
        headers: {
            "Content-type": "application/json",
        }
    });
    if (response.ok) {
        document.location.replace("/");
        alert("Inquiry submitted! Someone will be in touch.")
    }else {
        alert("form not submitted");
    }
 }
};

document
    .querySelector('#adopt-submit')
    .addEventListener("click", adoptHandler);