let party = []

const ul = document.querySelector("ul")

function render(){
    const html = party.map((prty) => {
        return `<ul> 
        <h4>Name: ${prty.name}</h4>
        <h5>Date: ${prty.date}</h5>
        <h5>Location: ${prty.location}</h5>
        <p>Description: ${prty.description}</p>
        
        
        </ul>`;
    });
    ul.innerHTML = html.join("");
}

async function fetchParty(){
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-ftb-et-web-ft/events")
    const data = await response.json()
    console.log(data)
    party = data.data
    console.log(party)

    render()
}

fetchParty()
//console.log(ul)


