const DateTime = (date = Date.now()) => {
    const newDate = new Date(date);
    const formattedTime = newDate.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "numeric",
    });
    const formattedDate = newDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return {
        time: formattedTime,
        date: formattedDate
    };
};

export default DateTime;