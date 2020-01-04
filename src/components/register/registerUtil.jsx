export const emailValidator = email => {
    // eslint-disable-next-line
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(email === '' || !(pattern.test(email)))
        return false;
    return true;
}

export const nameValidator = name => {
    if(name === '')
        return false;
    return true;
}

export const passValidator = pass => {
    // eslint-disable-next-line
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(pass === '' || !(strongRegex.test(pass)))
        return false;
    return true;
}

export const aboutValidator = about => {
    if(about === '')
        return false;
    return true;
}