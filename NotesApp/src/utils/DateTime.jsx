
function DateTime() {
    const day = new Date();
    const m = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const date = day.getDate() + ' ' + m[day.getMonth()] + ' ' + day.getFullYear();
    return(date);
}

export default DateTime
