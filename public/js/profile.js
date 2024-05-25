// const deletBtn=document.querySelector(".delete")
// const URL = "/api/animals/"+id 
// const req=fetch(URL)

async function deletepet(event) {
console.log(event.target)
const id = event.target.dataset.id
console.log(id)
const response = await fetch (`/api/animals/${id}`,{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
});
if (response.ok) {
    console.log(response, "delete response")
     document.location.reload();
   } else {
     alert(response.statusText);
   }
}