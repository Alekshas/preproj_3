const newUserForm = document.getElementById("newUserForm");
newUserForm.addEventListener("submit",console.log("new user"));

document.addEventListener('click',async event => {
    event.preventDefault();
    const editBtn = event.target.dataset.btn === "edit";
    const deleteBtn = event.target.dataset.btn === "delete";
    if (editBtn) {
        let editModal = await editUser(event);
        editModal.init();
        editModal.showModal();
        console.log(document.getElementById("editFORM"));
        const editForm = document.getElementById("editFORM");
        editForm.addEventListener("submit",handleFormSubmit)
    }
    if (deleteBtn) {
        let deleteModal = await deleteUser(event);
        deleteModal.init();
        deleteModal.showModal();

    }

})

const deleteUserForm = document.getElementById("deleteFORM");
deleteUserForm.addEventListener("submit",handleFormSubmit);
