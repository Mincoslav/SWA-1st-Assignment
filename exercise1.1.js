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
};

function DataInterval(from, to, date){
    const _from = from
    const _to = to
    const _date = date

    const getFrom = ()=> _from
    const getTo = ()=> _to
    const contains = function(_date){
        if(_date>_from && _date<_to){
            return true
        }
        else{
            return false
        }
    }
} 
