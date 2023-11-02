'use strict';

getCurrentUser()

function getCurrentUser() {
    fetch("userApi/auth")
        .then(res => {
            return res?.json()
        })
        .then(js => {
            const roles = js?.authorities?.map(authority => `<th>${authority?.role}</th>`)
            const roles1 = js?.authorities?.map(authority => `<li>${authority?.role}</li>`).join('')
            $('#emailCurrentUser').append(`<span>${js?.email}</span>`)
            $('#roleCurrentUser').append(`<span>${roles}</span>`)
            const user = `$(
                    <tr>
                        <td>${js?.id}</td>
                        <td>${js?.username}</td>
                        <td>${js?.surname}</td>
                        <td>${js?.email}</td>
                        <td>${js?.phone_number}</td>
                        <td>${roles1}</td>
                    </tr>)`;
            $('#oneUser').append(user)
        })
}