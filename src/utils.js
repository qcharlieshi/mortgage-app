export const toRegularCase = (str) => {
    let newStr = str.split(/(?=[A-Z])/).join(' ')
    return newStr[0].toUpperCase() + newStr.slice(1)
}