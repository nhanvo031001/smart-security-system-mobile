
export const convertDate = (date) => {
    let dd = date.getDate().toString();
    let mm = (parseInt(date.getMonth()) + 1).toString();
    let yyyy = date.getFullYear().toString();

    let dateString = yyyy + '-' + (mm.length == 1 ? '0' + mm : mm) + '-' + (dd.length == 1 ? '0' + dd : dd);
    return dateString;
}

export const generateDropdownTreeSelectMap = async (dataBuildings, dataFloors, dataCameraDevices, dataIOTDevices) => {
    let result = [];
    for (let i = 0; i < dataBuildings; i++) {
        let building = dataBuildings[i];

        result.push({...building, label: building.name});
    }

    return result;
}
