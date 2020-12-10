// export const clientId = "279221206015-e03iprrk5tds9nj4b2oi0kef4fggop1c.apps.googleusercontent.com";
// export const clientId = "279221206015-fu94eus9sinv544ja92mngmq82s73j55.apps.googleusercontent.com";
export const clientId = "279221206015-stm2clf4qq9frkgjvo3v79275qea8mum.apps.googleusercontent.com";

export const updateObj = (oldObj, newObj) => {
    return {
        ...oldObj,
        ...newObj,
    };
};

export const getDropDown = (length, startPoint = 0) => {
    let elements = [];
    for (let i = 1; i <= length; i++) {
        elements.push(
            <option value={i + startPoint} key={i}>
                {i + startPoint}
            </option>
        );
    }
    return elements;
};

export const formatNumber = (amount) => {
    return parseInt(amount.split(".")[0]).toLocaleString() + "." + amount.split(".")[1];
};

export const getDays = (year, month, date) => {
    let feb = year % 4 === 0 ? 29 : 28;
    let daysInMonth = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year === date.getFullYear()) {
        if (month === date.getMonth() + 1) {
            return date.getDate();
        }
        return daysInMonth[month - 1];
    }
    return daysInMonth[month - 1];
};

export const getMonths = (year, date) => {
    if (year === date.getFullYear()) {
        return date.getMonth() + 1;
    }
    return 12;
};
