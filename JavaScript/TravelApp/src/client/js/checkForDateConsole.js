function checkForDateConsole (startDate, endDate) {

    if (startDate > endDate) {
        // alert("Start Date CANNOT be later than End Date");
        console.log("Start Date CANNOT be later than End Date");
        return false;
    } else {
        return true;
    };
};

export { checkForDateConsole };
