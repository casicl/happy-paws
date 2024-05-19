const formHandler = async (submit) => {
    submit.preventDefault();

const animalName = document.querySelector("#animal-name").value.trim();
const animalDescription = document.querySelector("#animal-description").value.trim();
const dateCreated = document.querySelector("#date-created").value.trim();
const adoptionFee = document.querySelector("#adoption-fee").value.trim();
const userName = document.querySelector("#user-name").value.trim();

if (animalName && animalDescription && dateCreated && adoptionFee && userName) {
    const response = await fetch('/api/animals', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
    });

    if (response.ok) {
        document.location.append('/post');

    }else {
        alert("animal not added");
    }
}

};

const delButton = async (remove) => {
    if (remove.target.hasattribute("delete-post")) {
        const id = remove.target.getattritbute("delete-post");

        const response = await fetch(`/api/animals/${id}`, {
            method: "DELETE",
     });
     if (response.ok) {
        //what is the correct /?
        document.location.delete("/animal");
     } else {
        alert("could not delete");
     }
    }
};
document
    .querySelector('.new-pet')
    .addEventListener("submit", formHandler);

document
//what goes here?
    .querySelector("")
    .addEventListener("click", delButton);