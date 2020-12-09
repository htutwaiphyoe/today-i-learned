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
