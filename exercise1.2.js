/*###########Event_DataType class############*/

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

let Precipetation = function(time, place, type, unit, value){
  WeatherData.call(this,time, place, type, unit, value)
}
Precipetation.prototype.getPrecipetationType = function(){
  return WeatherData.getType();
}
Precipetation.prototype.convertToInches = function(){
  if (this.unit === "MM") {
    this.unit = "Inches"
    this.value = this.value / (25.4)
  }
}
Precipetation.prototype.convertToMM = function(){
  if (this.unit === "Inches") {
    this.unit = "MM"
    this.value = this.value * 25.4
  }
}
Object.setPrototypeOf(Precipetation.prototype, WeatherData.prototype)
/*##############Wind Class#############*/

let Wind = function(time, place, type, unit, value, direction){
  WeatherData.call(this,time, place, type, unit, value)
  this.direction = direction
}
Wind.prototype.getDirection = function(){
  return this.direction
}
Wind.prototype.convertToMPH = function(){
  if (this.unit === "MS") {
    this.unit = "MPH"
    this.value = this.value*2.237
  }
}
Wind.prototype.convertToMS = function(){
  if (this.unit === "MPH") {
    this.unit = "MS"
    this.value = this.value/2.237
  }
}
Object.setPrototypeOf(Wind.prototype, WeatherData.prototype)


/*#########CloudCoverage Class#########*

/* this class is originally empty so I got creative :))*/
let CloudCoverage = function(time, place, type, unit, value, sky){
  WeatherData.call(this,time, place, type, unit, value)
  this.sky = sky
}
CloudCoverage.prototype.getSkyStatus = function(){
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
    this.sky = "obstructed from view"
  }
  return "the sky is " + this.sky
}
Object.setPrototypeOf(CloudCoverage.prototype, WeatherData.prototype)

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
let WeatherHistory = function(data){
  this.data = data
  data = []
}

/*########tester#######*/
 let cloude1 = new CloudCoverage("soemthing", "Horsens","CloudeCoverage", "Okta",9,"")
 console.log(cloude1.getSkyStatus());