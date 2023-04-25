function checkForDate (startDate, endDate) {

    if (startDate > endDate) {
        alert("Start Date CANNOT be later than End Date");
        return false;
    } else {
        return true;
    }
}

export { checkForDate };
