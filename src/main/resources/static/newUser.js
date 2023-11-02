'use strict';

let form = document.forms["create"];
createNewUser()

function createNewUser() {
    form.addEventListener("submit", ev => {
        ev.preventDefault();
        let roles1 = [];
        for (let i = 0; i < form?.add_rolesId?.options.length; i++) {
            if (form?.add_rolesId?.options[i].selected) roles1.push({
                id: form?.add_rolesId?.options[i].value,
                role: "ROLE_" + form?.add_rolesId?.options[i].text
            });
        }
        fetch("adminApi/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: form.addUsername.value,
                surname: form.addSurname.value,
                email: form.addEmail.value,
                phone_number: form.addPhone_number.value,
                password: form.addPassword.value,
                roleList: roles1
            })
        }).then(() => {
            form.reset();
            $('#home-tab').click();
            getTableUser();
        });
    });
}




