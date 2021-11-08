// import $ from "jquery";
// import axios from "axios";

// export const SendHistoricalData = () => {
// 	return (
// 		<div>
// 			<form>
// 				<label htmlFor="type">Weather Type</label>
// 				<br />
				// <input id="type" list="types" />
				// <datalist id="types">
				// 	<option value="Temperature" />
				// 	<option value="Wind" />
				// 	<option value="Precipitation" />
				// 	<option value="CloudCoverage" />
				// </datalist>
// 				<br />
// 				<label htmlFor="value">Value</label>
// 				<br />
// 				<input type="text" id="value" name="value" />
// 				<br />
// 				<label htmlFor="place">City</label> <br />
// 				<input list="place" />
// 				<datalist id="place">
// 					<option value="Horsens" />
// 					<option value="Aarhus" />
// 					<option value="Copenhagen" />
// 				</datalist>
// 				<br />
// 				<label htmlFor="time">Time of reading (date and time):</label>
// 				<br />
// 				<input type="datetime-local" id="time" name="time" />
// 				<br />
// 				<button value="Send historical data" onClick={sendData()}>
// 					Send historical data
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// const sendData = () => {
// 	//package data into json and send it off.

// 	let type = $("#type").val();
// 	let value = $("#value").val();
// 	let place = $("#place").val();
// 	let time = $("#time").val();
// 	// console.log(type, value, place, time);
//     let weatherEvent = {
//         value: value,
//         type: type,
//         time: time,
//         place: place
//     }
//     console.log(weatherEvent)
//     axios.post('http://localhost:8080/data/', weatherEvent)
// };

import { useState } from "react";


export function DataSubmitForm() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(inputs);
		console.log(inputs)
		
	};

	return (
		<form onSubmit={handleSubmit}>
				<br/>
				<label>
					Choose weather type:
					<br />
					<select value={inputs.type} onChange={handleChange}>
						<option value="temperature">Temperature</option>
						<option value="wind">Wind</option>
						<option value="cloudCoverage">Cloud Coverage</option>
						<option value="precipitation">Precipitation</option>
					</select>
				</label>
				<br />
				<label>
					<select value={inputs.city} onChange={handleChange}>
						<option value="Horsens">Horsens</option>
						<option value="Aarhus">Aarhus</option>
						<option value="Copenhagen">Copenhagen</option>
					</select>
				</label>
			
			<label>
				Enter your age:
				<input
					type="number"
					name="age"
					value={inputs.age || ""}
					onChange={handleChange}
				/>
			</label>
			<input type="submit" />
		</form>
	);
}
