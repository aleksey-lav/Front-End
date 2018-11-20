exports.showDate = (date) => {
    return `Today is ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
}
exports.showTime = (date) => {
    return `Time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}