async function openAndFillInTheModal(form, modal, id, actionPrefix) {
    modal.show();
    let user = await getOneUser(id);
    console.log('Modal User', user)
    // console.log('Modal form', form)

    form.id.value = user.id;
    form[actionPrefix + 'Username'].value = user.username;
    form[actionPrefix + 'Surname'].value = user.surname;
    form[actionPrefix + 'Email'].value = user.email;
    form[actionPrefix + 'Phone_number'].value = user.phone_number;
    // form[actionPrefix + 'Password'].value = user.password;
    // form[actionPrefix + '_rolesId'].value = user.roleList;
}