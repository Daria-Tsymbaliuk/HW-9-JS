let contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
let editIndex = null;

const nameInput = document.getElementById("input1");
const surnameInput = document.getElementById("input2");
const phoneInput = document.getElementById("input3");
const emailInput = document.getElementById("input4");

const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");
const list = document.getElementById("list");

function render() {
    list.innerHTML = "";
    contacts.forEach((c, i) => {
        const div = document.createElement("div");
        div.textContent = `${i + 1}. ${c.name} ${c.surname}, ${c.phone}, ${c.email}`;
        div.onclick = () => {
            editIndex = i;
            nameInput.value = c.name;
            surnameInput.value = c.surname;
            phoneInput.value = c.phone;
            emailInput.value = c.email;
        };
        list.appendChild(div);
    });
}

addBtn.onclick = () => {
    const contact = {
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
        email: emailInput.value
    };

    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    render();
};

editBtn.onclick = () => {
    if (editIndex === null) return;

    contacts[editIndex] = {
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
        email: emailInput.value
    };

    localStorage.setItem("contacts", JSON.stringify(contacts));
    render();
};

deleteBtn.onclick = () => {
    if (editIndex === null) return;

    contacts.splice(editIndex, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    editIndex = null;
    render();
};

render();