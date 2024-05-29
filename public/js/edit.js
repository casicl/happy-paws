const formHandler = async (submit) => {
    submit.preventDefault();

const name = document.querySelector("#animal-name").value.trim();
const description = document.querySelector("#animal-description").value.trim();
const date_created = document.querySelector("#date-created").value.trim();
const adoption_fee = parseInt(document.querySelector("#adoption-fee").value.trim());
const id = submit.target.value
console.log(id)


if (name && description && date_created && adoption_fee ) {
    const response = await fetch(`/api/animals/edit/${id}`, {
        method: "PUT",
        body:JSON.stringify({
            name,
            description,
            date_created,
            adoption_fee,
            
        }),
        headers: {
            "Content-type": "application/json",
        },
    });
    console.log(response, "a;sdlfkjads;lfkjasdf;lkj")
    if (response.ok) {
        document.location.replace('/profile');

    }else {
        alert("animal not added");
    }
}

};

document
    .querySelector('#sbmtbtn')
    .addEventListener("click", formHandler);
