import axios from "axios";
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
		
		//should add a check/input for wind and rain
		axios
			.post("http://localhost:8080/data", {
				value: inputs.value,
				type: inputs.type,
				unit: inputs.unit,
				time: inputs.time,
				place: inputs.place
			})
			.then(function (response) {
				alert(response.statusText);
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		setInputs({
			type: "",
			unit: "",
			place: ""
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<br />
			<label>
				Choose weather type:
				<br />
				<select name="type" value={inputs.type} onChange={handleChange}>
					<option value=""></option>
					<option value={"temperature" || ""}>Temperature</option>
					<option value={"wind speed" || ""}>Wind</option>
					<option value={"cloud coverage" || ""}>Cloud Coverage</option>
					<option value={"precipitation" || ""}>Precipitation</option>
				</select>
			</label>
			<br />
			<label>
				Choose city:
				<br />
				<select name="place" value={inputs.city} onChange={handleChange}>
					<option value=""></option>
					<option value={"Horsens" || ""}>Horsens</option>
					<option value={"Aarhus" || ""}>Aarhus</option>
					<option value={"Copenhagen" || ""}>Copenhagen</option>
				</select>
			</label>
			<br />
			<label>
				Enter value:
				<br />
				<input
					type="number"
					name="value"
					value={inputs.value || ""}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Choose unit:
				<br />
				<select name="unit" value={inputs.unit} onChange={handleChange}>
					<option value=""></option>
					<option value="C">Degrees Celsius</option>
					<option value="F">Degrees Fahrenheit</option>
					<option value="m/s">Meters per second</option>
					<option value="mph">Miles per hour</option>
					<option value="mm">Millimeters</option>
					<option value="inch">Inches</option>
					<option value="%">Cloud percentage</option>
				</select>
			</label>
			<br />
			<label>
				Choose date & time:
				<br />
				<input
					name="time"
					type="datetime-local"
					value={inputs.time || ""}
					onChange={handleChange}
				/>
			</label>
			<br />
			<br />
			<input type="submit" />
		</form>
	);
}
