export const convertDate = (date) => {
    let dd = date.getDate().toString();
    let mm = (parseInt(date.getMonth()) + 1).toString();
    let yyyy = date.getFullYear().toString();

    let dateString = yyyy + '-' + (mm.length == 1 ? '0' + mm : mm) + '-' + (dd.length == 1 ? '0' + dd : dd);
    return dateString;
}