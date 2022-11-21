export const getDays = (d) => {
    let day = new Date(d);
    const year = day.getFullYear();
    const month = day.getMonth() +1;
    const date = day.getDate();
    const hour = day.getHours();
    const min = day.getMinutes();

    day = `${hour >= 10 ? hour : '0'+hour}:${min >= 10 ? min : '0'+min}`
    return day;
};

export const randomStrings = () => {
    return Math.random().toString(36).substring(2,11);
}