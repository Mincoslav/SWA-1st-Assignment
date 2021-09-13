function Event(time, place) {
    const _time = time;
    const _place = place;

    const getTime = () => _time
    const getPlace = () => _place

    return {
        getTime,
        getPlace
    }
};


function DataType(type, unit) {
    const _type = type
    const _unit = unit

    const getType = () => _type
    const getUnit = () => _unit

    return {
        getType,
        getUnit
    }
}