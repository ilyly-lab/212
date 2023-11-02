let formEdit = document.forms["formEdit"];

async function editModal(id) {
    const modal = new bootstrap.Modal(document.querySelector('#edit'));
    await openAndFillInTheModal(formEdit, modal, id, 'edit');
    editUser();
}

function editUser() {
    formEdit.addEventListener("submit", ev => {
        ev.preventDefault();
        let roles = []
        for (let i = 0; i < formEdit?.edit_rolesId?.options?.length; i++) {
            if (formEdit.edit_rolesId?.options[i].selected) roles.push({
                id: formEdit.edit_rolesId.options[i].value,
                role: "ROLE_" + formEdit.edit_rolesId.options[i].text
            });
        }
        fetch("adminApi/user/" + formEdit.id.value, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: formEdit.id.value,
                username: formEdit.editUsername.value,
                surname: formEdit.editSurname.value,
                email: formEdit.editEmail.value,
                phone_number: formEdit.editPhone_number.value,
                password: formEdit.editPassword.value,
                roleList: roles
            })
        }).then(() => {
            $('#closeEdit').click();
            getTableUser()
        });
    });
}

// editUser();
