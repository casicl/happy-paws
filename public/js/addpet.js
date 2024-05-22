const formHandler = async (submit) => {
    submit.preventDefault();

const name = document.querySelector("#animal-name").value.trim();
const description = document.querySelector("#animal-description").value.trim();
const date_created = document.querySelector("#date-created").value.trim();
const adoption_fee = parseInt(document.querySelector("#adoption-fee").value.trim());


if (name && description && date_created && adoption_fee ) {
    const response = await fetch('/api/animals', {
        method: "POST",
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
        document.location.replace('/');

    }else {
        alert("animal not added");
    }
}

};

// const delButton = async (remove) => {
//     if (remove.target.hasattribute("delete-post")) {
//         const id = remove.target.getattritbute("delete-post");

//         const response = await fetch(`/api/animals/${id}`, {
//             method: "DELETE",
//      });
//      if (response.ok) {
//         //what is the correct /?
//         document.location.delete("/animal");
//      } else {
//         alert("could not delete");
//      }
//     }
// };
// const subButton = async (create) => {
//     if (create.target.hasattribute("new-pet")) {
//         const id = remove.target.getattritbute("new-pet");

//         const response = await fetch(`/api/animals/${id}`, {
//             method: "POST",
//      });
//      if (response.ok) {
//         //what is the correct /?
//         document.location.delete("/animal");
//      } else {
//         alert("could not create post");
//      }
//     }
// };

document
    .querySelector('#sbmtbtn')
    .addEventListener("click", formHandler);

// document
// //what goes here?
//     .querySelector("#new-pet")
//     .addEventListener("click", delButton);