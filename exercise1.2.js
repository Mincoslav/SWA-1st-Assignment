/*###########Event_DataType class############*/

class Event_DataType {
  constructor(time, place, type, unit) {
    this.place = place;
    this.time = time;
    this.type = type;
    this.unit = unit;
  }
  getTime() {
    return this.time;
  }
  getPlace() {
    return this.place;
  }
  getType() {
    return this.type;
  }
  getUnit() {
    return this.unit;
  }
}

/*############# WeatherData Class ############*/

class WeatherData extends Event_DataType {
  constructor(time, place, type, unit, value) {
    super(time, place, type, unit);
    this.value = value;
  }
  getValue() {
    return this.value;
  }
}

/*###########Temperature Class#########*/

class Temperature extends WeatherData {
  constructor(time, place, type, unit, value) {
    super(time, place, type, unit, value);
  }
  convertToF() {
    if (this.unit === "C") {
      this.unit = "F";
      this.value = this.value * 1.8 + 32;
    }
  }
  convertToC() {
    if (this.unit === "F") {
      this.unit = "C";
      this.value = (this.value - 32) / 1.8;
    }
  }
}

/*##########Precipitation Class########*/

class Precipitation extends WeatherData {
  constructor(time, place, type, unit, value) {
    super(time, place, type, unit, value);
  }
  getPrecipitationType() {
    return WeatherData.getType();
  }
  convertToInches() {
    if (this.unit === "MM") {
      this.unit = "Inches";
      this.value = this.value / 25.4;
    }
  }
  convertToMM() {
    if (this.unit === "Inches") {
      this.unit = "MM";
      this.value = this.value * 25.4;
    }
  }
}
/*##############Wind Class#############*/

class Wind extends WeatherData {
  constructor(time, place, type, unit, value, direction) {
    super(time, place, type, unit, value);
    this.direction = direction;
  }
  getDirection() {
    return this.direction;
  }
  convertToMPH() {
    if (this.unit === "MS") {
      this.unit = "MPH";
      this.value = this.value * 2.237;
    }
  }
  convertToMS() {
    if (this.unit === "MPH") {
      this.unit = "MS";
      this.value = this.value / 2.237;
    }
  }
}

/*#########CloudCoverage Class#########*

/* this class is originally empty so I got creative :))*/
class CloudCoverage extends WeatherData {
  constructor(time, place, type, unit, value, sky) {
    super(time, place, type, unit, value);
    this.sky = sky;
  }
  getSkyStatus() {
    switch (this.value) {
      case 0:
        this.sky = "the sky is empty";
        break;
      case 1:
        this.sky = "Clear";
        break;
      case 2:
        this.sky = "Clear";
        break;
      case 3:
        this.sky = "Kinda cloudy";
        break;
      case 4:
        this.sky = "Half Cloudy";
        break;
      case 5:
        this.sky = "Half Cloudy";
        break;
      case 6:
        this.sky = "very Cloudy";
        break;
      case 7:
        this.sky = "very Cloudy";
        break;
      case 8:
        this.sky = "Completely Cloudy";
        break;
      case 9:
        this.sky = "obstructed from view";
    }
    return "the sky is " + this.sky;
  }
}

/*##########DateInterval Class#########*/

class DateInterval {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  getFrom() {
    return this.from;
  }
  getTo() {
    return this.to;
  }
  contains(date) {
    if (date >= this.from && date <= this.to) {
      return true;
    } else {
      return false;
    }
  }
}

/*#########WeatherHistory Class########*/
class WeatherHistory {
  constructor(data, placeFilter, typeFilter, periodFilter) {
    this.data = data;
    this.placeFilter = placeFilter;
    this.typeFilter = typeFilter;
    this.periodFilter = periodFilter;
  }
  getData() {
    return this.data;
  }
  setPlaceFilter(arg) {
    this.placeFilter = arg;
  }
  getPlaceFilter() {
    return this.placeFilter;
  }
  clearPlaceFilter() {
    this.placeFilter = "";
  }
  setTypeFilter(arg) {
    this.typeFilter = arg;
  }
  getTypeFilter() {
    return this.typeFilter;
  }
  clearTypeFilter() {
    this.periodFilter = "";
  }
  setPeriodFilter(arg) {
    this.periodFilter = arg;
  }
  getPeriodFilter() {
    return this.periodFilter;
  }
  clearPeriodFilter() {
    this.periodFilter = "";
  }
  convertToUSUnits() {
    data.forEach((item) => {
      if (item.getType() === "Wind") {
        item.convertToMPH();
      } else if (item.getType() === "Temperature") {
        item.convertToF();
      } else if (item.getType() === "Precipitation") {
        item.convertToInches();
      }
    });
  }
  convertToInternationalUnit() {
    data.forEach((item) => {
      if (item.getType() === "Wind") {
        item.convertToMS();
      } else if (item.getType() === "Temperature") {
        item.convertToC();
      } else if (item.getType() === "Precipitation") {
        item.convertToMM();
      }
    });
  }
  addNew(newData) {
    this.data.push(newData);
  }
  getFilteredData() {
    if (typeFilter === '' && placeFilter === '' && periodFilter === '') {
      filteredData = data
  }
  else if (typeFilter !== '' && placeFilter !== '' && periodFilter !== '') {
      filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter 
      && dataPoint.getPlace() === placeFilter 
      && getPeriodFilter().contains(dataPoint.getTime()));
  }
  else if (typeFilter !== '' && placeFilter === '' && periodFilter === '') {
      filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter);
  }
  else if (typeFilter === '' && placeFilter !== '' && periodFilter === '') {
      filteredData = data.filter(dataPoint => dataPoint.getPlace() === placeFilter);
  }
  else if (typeFilter === '' && placeFilter === '' && periodFilter !== '') {
      filteredData = data.filter(dataPoint => getPeriodFilter().contains(dataPoint.getTime()));
  }
  else if (typeFilter !== '' && placeFilter !== '' && periodFilter === '') {
      filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter
      && dataPoint.getPlace() === placeFilter);
  }
  else if (typeFilter !== '' && placeFilter === '' && periodFilter !== '') {
      filteredData = data.filter(dataPoint => dataPoint.getType() === typeFilter);
  }
  else if (typeFilter === '' && placeFilter !== '' && periodFilter !== '') {
      filteredData = data.filter(dataPoint => dataPoint.getPlace() === placeFilter 
      && getPeriodFilter().contains(dataPoint.getTime()));
  }        
  else {
      filteredData = data
  }
  
  return filteredData

  }
}

/*########tester#######*/
//WEATHER HISTORY TESTING
const fromTester = new Date("December 17, 1995 03:24:00");
const toTester = new Date("December 17, 2021 05:00:00");

let inter = new DateInterval(fromTester, toTester);
const currentTime = new Date("September 17, 2000 15:35:00");

const data1 = new Wind("West", currentTime, "Horsens", "Wind", "MS", 3);
const data2 = new Wind(
  (direction = "East"),
  (time = currentTime),
  (place = "Aarhus"),
  (type = "Wind"),
  (unit = "MPH"),
  (value = 15)
);

const data3 = new Temperature(
  "",
  (place = "Horsens"),
  (type = "Temperature"),
  (unit = "C"),
  (value = 30)
);
const data4 = new Temperature(
  (time = currentTime),
  (place = "Aarhus"),
  (type = "Temperature"),
  (unit = "F"),
  (value = 69)
);

const data5 = new Precipitation(
  (time = currentTime),
  (place = "Horsens"),
  (type = "Precipitation"),
  (unit = "MM"),
  (value = 30)
);
const data6 = new Precipitation(
  (time = currentTime),
  (place = "Aarhus"),
  (type = "Precipitation"),
  (unit = "Inch"),
  (value = 3)
);

dataList = [data1, data2, data3, data4, data5, data6];
// console.log(dataList)
//console.log(dataList)
const history = new WeatherHistory(dataList, "", "", "");

//history.setTypeFilter('Temperature')
//history.setPeriodFilter(inter)
// console.log(history)
//history.addNew(dataList)
//history.setPlaceFilter("Horsens");
// console.log(history.getFilteredData())
//list = history.getFilteredData();
//console.log(list);

/*######## WeatherPrediction Class #######*/
class WeatherPrediction extends Event_DataType {
  constructor(time, place, type, unit, value) {
    super(time, place, type, unit);
    this.value = value
  }
  getValue(){
    return this.value
  }

  matches(arg) {
    return arg.getTime() == this.getTime()  && arg.getPlace() == this.getPlace() && arg.getType() == this.getType() && arg.getUnit() == this.getUnit() && arg.getValue() == this.getValue()
  }

  getMax() {
    let max = 0
    switch (this.type) {
      case "Temperature":
        max = this.value + 0.5;
        break;
      case "Precipitation":
        max = this.value + 2;
        break;
      case "Wind":
        if(unit == "MS"){
          max = this.value + 1
        }else{
          max = this.value + 2,23694
        }
        break;
      case "ClouCoverage":
        if(this.value != 9)
        max = this.value + 1;
    }
    return max;
  }

  getMin() {
    let min = 0
    switch (this.type) {
      case "Temperature":
        min = this.value - 0.5;
        break;
      case "Precipitation":
        min = this.value - 2;
        break;
      case "Wind":
        if(unit == "MS"){
          min = this.value - 1
        }else{
          min = this.value - 2,23694
        }
        break;
      case "ClouCoverage":
        if(this.value != 1)
        min = this.value - 1;
    }
    return min;
  }
}

/*######## TemperaturePrediction Class #######*/
class TemperaturePrediction extends WeatherPrediction {
  constructor(time, place, type, unit, value) {
    super(time, place, type, unit, value);
  }

  convertToF() {
    if (this.unit === "C") {
      this.unit = "F";
      this.value = this.value * 1.8 + 32;
    }
  }

  convertToC() {
    if (this.unit === "F") {
      this.unit = "C";
      this.value = (this.value - 32) / 1.8;
    }
  }
}
//test

let weatherData = new WeatherData(11.40,"Horsens","Temperature","C",24)
let weatherPrediction = new WeatherPrediction(11.40,"Horsens","Temperature","C",24)
console.log(weatherPrediction.getMax())
console.log(weatherPrediction.getMin())


/*######## PrecipitationPrediction Class #######*/
class PrecipitationPrediction extends WeatherPrediction {
  constructor(time, place, type, unit) {
    super(time, place, type, unit);
  }

  getExpectedTypes() {
    return ['No rain','Light rain', 'Rain', 'Heavy rain', 'Showers']
  }

  convertToInches() {
    if (this.unit === 'MM') {
      this.unit = 'Inch'
      this.value = this.value / 25.4
    }
  }

  convertToMM() {
    if (this.unit === 'Inch') {
      this.unit = 'MM'
      this.value = this.value * 25.4
    }
  }
}

/*######## WindPrediction Class #######*/

class WindPrediciton extends WeatherPrediction{
  constructor(time, place, type, unit, directions) {
    super(time, place, type, unit, min, max, data);
    this.directions = directions
  }

  getExpectedDirections(){
    return this.directions
  }
  convertToMPH() {
    if (this.unit === "MS") {
      this.unit = "MPH";
      this.value = this.value * 2.237;
    }
  }
  convertToMS() {
    if (this.unit === "MPH") {
      this.unit = "MS";
      this.value = this.value / 2.237;
    }
  }
}

/*########### CloudCoveragePrediction Class ############*/

class CloudCoveragePrediction extends WeatherPrediction {
  constructor(time, place, type, unit, value, sky) {
    super(time, place, type, unit, value);
    this.sky = sky;
  }
  getSkyStatusPrediction() {
    switch (this.value) {
      case 0:
        this.sky = "the sky is empty";
        break;
      case 1:
        this.sky = "Clear";
        break;
      case 2:
        this.sky = "Clear";
        break;
      case 3:
        this.sky = "Kinda cloudy";
        break;
      case 4:
        this.sky = "Half Cloudy";
        break;
      case 5:
        this.sky = "Half Cloudy";
        break;
      case 6:
        this.sky = "very Cloudy";
        break;
      case 7:
        this.sky = "very Cloudy";
        break;
      case 8:
        this.sky = "Completely Cloudy";
        break;
      case 9:
        this.sky = "obstructed from view";
    }
    return "the sky is " + this.sky;
  }
}