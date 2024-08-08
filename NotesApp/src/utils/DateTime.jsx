
function DateTime() {
    const day = new Date();
    const m = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const str_op = day.getDate() + ' ' + m[day.getMonth()] + ' ' + day.getFullYear();
    return(str_op);    
}

export default DateTime
