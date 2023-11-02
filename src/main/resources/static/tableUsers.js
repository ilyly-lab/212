'use strict';
const tbody = $('#AllUsers');

function getTableUser() {
    tbody.empty();
    fetch("adminApi/users")
        .then(res => res.json())
        .then(js => {
            // console.log('TableUsers js', js)
            js.forEach(item => {
                const roles = item?.authorities?.map(authority => `<li>${authority?.role}</li>`).join('')
                const user = `$(
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.username}</td>
                        <td>${item.surname}</td>
                        <td>${item.email}</td>
                        <td>${item.phone_number}</td>
                        <td>${roles}</td>
                        <td>
                            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#edit" onclick="editModal(${item.id})">
                            Edit
                           </button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delete" onclick="deleteModal(${item.id})">
                              Delete
                             </button>
                        </td>
                    </tr>)`;
                $('#AllUsers').append(user)
            });
        });
}

getTableUser();
