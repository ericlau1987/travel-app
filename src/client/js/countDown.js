const dateDiff = (startDate, endDate) => {
    // startDate = new Date()
    const diff_in_time = endDate - startDate;
    return Math.round(diff_in_time /(1000*3600*24));
};

module.exports = {
    dateDiff
};