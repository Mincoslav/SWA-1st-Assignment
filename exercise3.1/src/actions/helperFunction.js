function dateInterval(fromDate, toDate) {
	function getFrom() {
		return fromDate;
	}
	function getTo() {
		return toDate;
	}

	function contains(date) {
		if (date > getFrom() && date < getTo()) {
			return true;
		} else {
			return false;
		}
	}

	return {
		getFrom,
		getTo,
		contains
	};
}

export function getDaysAgo(daysAgo) {
	var a = new Date();
	a.setDate(a.getDate() - daysAgo);
	return a;
}

export function withoutTime(dateTime) {
	var date = new Date(dateTime.getTime());
	date.setHours(0, 0, 0, 0);
	return date;
}

export function getDayValues(date, array, fromDate, toDate) {
	const newArray = [];
	if (fromDate !== undefined && toDate !== undefined) {
		let interval = dateInterval(fromDate, toDate);
		for (let index = 0; index < array.length; index++) {
			array[index].time = new Date(array[index].time);
			if (interval.contains(array[index].time)) {
				newArray.push(array[index]);
			}
		}
	} else {
		for (let index = 0; index < array.length; index++) {
			array[index].time = new Date(array[index].time);
			if (
				array[index].time.getDate() === date.getDate() &&
				array[index].time.getMonth() === date.getMonth() &&
				array[index].time.getFullYear() === date.getFullYear()
			) {
				newArray.push(array[index]);
			}
		}
	}
	return newArray;
}
