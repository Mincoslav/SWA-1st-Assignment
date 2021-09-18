/*###############Event class################*/

let Event_DataType = function(time, place, type, unit) {
  this.place = place;
  this.time = time; 
  this.type = type;
  this.unit = unit;  
}
Event_DataType.prototype.getTime = function () {
  return this.time  
}
Event_DataType.prototype.getPlace = function () {
  return this.place
}
Event_DataType.prototype.getType = function () {
  return this.type  
}
Event_DataType.prototype.getUnit = function () {
  return this.unit
}

/*############# WeatherData Class ############*/

let WeatherData = function (time, place, type, unit, value) {
  Event_DataType.call(this, time, place, type, unit)
  this.value = value
}
WeatherData.prototype.getValue = function () {
  return this.value
}
Object.setPrototypeOf(WeatherData.prototype, Event_DataType.prototype);


/*###########Temperature Class#########*/

let Temperature = function(time, place, type, unit, value) {
  WeatherData.call(this, time, place, type, unit, value)
}
Temperature.prototype.convertToF = function() {
  if (this.unit === 'C') {
    this.unit = 'F'
    this.value = this.value * 1.8 + 32
  }
}
Temperature.prototype.convertToC = function() {
  if (this.unit === 'F') {
    this.unit = 'C'
    this.value = (this.value - 32) / 1.8
  }
}
Object.setPrototypeOf(Temperature.prototype, WeatherData.prototype);

/*##########Precipitation Class########*/
/*##############Wind Class#############*/
/*#########CloudCoverage Class#########*/
/*##########DateInterval Class#########*/

let DateInterval = function name(from, to) {
  this.from = from;
  this.to = to;
}
DateInterval.prototype.getFrom = function () {
  this.from = from
}
DateInterval.prototype.getTo = function (){
  this.to = to
}
DateInterval.prototype.contains = function (date){
  if(date >= from && date <= to){
    return true
  }else{
    return false
  }
}

/*#########WeatherHistory Class########*/
let WeatherHistory = function([]){
  this.data = []
}

/*########tester#######*/
let temp = new Temperature("something", "Horsens", "Temperature", 'C', 24)
temp.convertToF()
temp.convertToC()
console.log(temp.getValue()+" "+temp.getUnit())