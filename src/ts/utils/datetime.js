export var formatTimeDuration = function (timeDuration) {
    var numberOfMonths = Math.floor(timeDuration / (1000 * 3600 * 24 * 30));
    var numberOfYears = Math.floor(numberOfMonths / 12);
    var numberOfRemainderMonths = Math.floor(numberOfMonths % 12);
    var yearEnding = numberOfYears > 1 ? 's' : '';
    var monthEnding = numberOfMonths > 1 ? 's' : '';
    var formattedTimeDuration;
    if (numberOfMonths > 12 && numberOfRemainderMonths > 0) {
        formattedTimeDuration = numberOfYears + " Year" + yearEnding + ", " + numberOfRemainderMonths + " Month" + yearEnding;
    }
    else if (numberOfMonths > 12 && numberOfRemainderMonths === 0) {
        formattedTimeDuration = numberOfYears + " Year" + yearEnding;
    }
    else {
        formattedTimeDuration = numberOfMonths + " Month" + monthEnding;
    }
    return formattedTimeDuration;
};
export var dateShown = function (start, end, type) {
    if (type === void 0) { type = 'compact'; }
    var dateNow = new Date();
    var startMonth = Number(start.slice(0, 2)) - 1;
    var startYear = Number(start.slice(3));
    var endMonth = end.toLowerCase() === 'now'
        ? "" + dateNow.getMonth()
        : "" + (Number(end.slice(0, 2)) - 1);
    var endYear = end.toLowerCase() === 'now' ? dateNow.getFullYear() : Number(end.slice(3));
    var adaptedEndMonth = Number(endMonth) + 1;
    var dateStart = new Date(startYear, startMonth);
    var dateEnd = new Date(endYear, adaptedEndMonth);
    var timeDuration = Number(dateEnd) - Number(dateStart);
    var duration = type === 'compact'
        ? ''
        : "<i class=\"fa fa-circle time-duration\"></i>" + formatTimeDuration(timeDuration);
    if (start === end) {
        return start;
    }
    return start + " - " + end + duration;
};
