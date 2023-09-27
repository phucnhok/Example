const formMessage = document.getElementById('form-message');
const listContent = document.getElementById('list-content');

const listMessage = []

// Render message ra HMTL
function renderlist() {

    let elelistMessage = '';
    listMessage.forEach(function (item, id) {
        elelistMessage += `<tr>
                            <th scope="row">${id + 1}</th>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.subject}</td>
                            <td style="word-wrap: break-word; max-width: 300px">${item.message}</td>
                        </tr>`
    });
    console.log(elelistMessage)
    listContent.innerHTML = elelistMessage;
}



// Add new message vo list
function addNewmessage(info) {
    listMessage.push(info)
}




// Click button
formMessage.onsubmit = function (event) {
    event.preventDefault(); // Chan load lai page 
    const form = new FormData(event.target);
    // console.log(form)

    const info = Object.fromEntries(form)
    // console.log(info)
    addNewmessage(info);
    renderlist()
}