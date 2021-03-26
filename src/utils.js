export const generatePassword = (lengthPass = 8, lc,uc,numbers,symbols,ac) => {
    let length = lengthPass < 8 ? 8 : lengthPass,
        charset = "",
        retVal = "";

    if (lc) {
        charset = charset.concat(charset, 'abcdefghijklmnopqrstuvwxyz');
    }

    if (uc) {
        charset = charset.concat(charset, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (numbers) {
        charset = charset.concat(charset, '0123456789');
    }

    if (symbols) {
        charset = charset.concat(charset, '@#$%');
    }

    if (ac) {
        charset = charset.concat(charset, "{}[]()/'`~,;:.<>");
    }

    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}