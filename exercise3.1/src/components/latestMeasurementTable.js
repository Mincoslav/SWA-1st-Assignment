import "./latestMeasurementTable.css"
import { connect } from "react-redux";

import { fetchCityDataHorsens, fetchCityDataAarhus, fetchCityDataCopenhagen, reload } from "../actions/cityDataActions";


const LatestMeasurementsTable = ({data, forecastData, fetchCityDataHorsens, fetchCityDataAarhus, fetchCityDataCopenhagen, reload}) => {

    return <div>
        <p>City: {data.cityName}</p>
        <button onClick={fetchCityDataHorsens}>Horsens</button>
		<button onClick={fetchCityDataAarhus}>Aarhus</button>
		<button onClick={fetchCityDataCopenhagen}>Copenhagen</button>
		<button onClick={reload}>Reload</button>

		<table className="minimalistBlack">
			<thead>
				<tr>
					<th>Latest Temperature</th>
					<th>Latest Precipitation</th>
					<th>Latest Wind</th>
					<th>Latest Cloud Coverage</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{data.historicalData.latestTemperature}</td>
					<td>{data.historicalData.latestPrecipitation}</td>
					<td>{data.historicalData.latestWind}</td>
					<td>{data.historicalData.latestClouds}</td>
				</tr>
			</tbody>
		</table>

		<table className="minimalistBlack">
			<thead>
				<tr>
					<th>Date</th>
					<th>Minimum temperature</th>
					<th>Maximum temperature</th>
					<th>Total precipitation</th>
					<th>Average wind speed</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{data.last5DaysData.dayMinus1.date}</td>
					<td>{data.last5DaysData.dayMinus1.minimumTemperature}</td>
					<td>{data.last5DaysData.dayMinus1.maximumTemperature}</td>
					<td>{data.last5DaysData.dayMinus1.totalPrecipitation}</td>
					<td>{data.last5DaysData.dayMinus1.averageWindSpeed}</td>
				</tr>
				<tr>
					<td>{data.last5DaysData.dayMinus2.date}</td>
					<td>{data.last5DaysData.dayMinus2.minimumTemperature}</td>
					<td>{data.last5DaysData.dayMinus2.maximumTemperature}</td>
					<td>{data.last5DaysData.dayMinus2.totalPrecipitation}</td>
					<td>{data.last5DaysData.dayMinus2.averageWindSpeed}</td>
				</tr>

				<tr>
					<td>{data.last5DaysData.dayMinus3.date}</td>
					<td>{data.last5DaysData.dayMinus3.minimumTemperature}</td>
					<td>{data.last5DaysData.dayMinus3.maximumTemperature}</td>
					<td>{data.last5DaysData.dayMinus3.totalPrecipitation}</td>
					<td>{data.last5DaysData.dayMinus3.averageWindSpeed}</td>
				</tr>

				<tr>
					<td>{data.last5DaysData.dayMinus4.date}</td>
					<td>{data.last5DaysData.dayMinus4.minimumTemperature}</td>
					<td>{data.last5DaysData.dayMinus4.maximumTemperature}</td>
					<td>{data.last5DaysData.dayMinus4.totalPrecipitation}</td>
					<td>{data.last5DaysData.dayMinus4.averageWindSpeed}</td>
				</tr>

				<tr>
					<td>{data.last5DaysData.dayMinus5.date}</td>
					<td>{data.last5DaysData.dayMinus5.minimumTemperature}</td>
					<td>{data.last5DaysData.dayMinus5.maximumTemperature}</td>
					<td>{data.last5DaysData.dayMinus5.totalPrecipitation}</td>
					<td>{data.last5DaysData.dayMinus5.averageWindSpeed}</td>
				</tr>
			</tbody>
		</table>


		<table className="minimalistBlack">
			<thead>
				<tr>
					<th>Date&Time</th>
					<th>{forecastData.temperatures.temp0.time}</th>
					<th>{forecastData.temperatures.temp1.time}</th>
					<th>{forecastData.temperatures.temp2.time}</th>
					<th>{forecastData.temperatures.temp3.time}</th>
					<th>{forecastData.temperatures.temp4.time}</th>
					<th>{forecastData.temperatures.temp5.time}</th>
					<th>{forecastData.temperatures.temp6.time}</th>
					<th>{forecastData.temperatures.temp7.time}</th>
					<th>{forecastData.temperatures.temp8.time}</th>
					<th>{forecastData.temperatures.temp9.time}</th>
					<th>{forecastData.temperatures.temp10.time}</th>
					<th>{forecastData.temperatures.temp11.time}</th>
					<th>{forecastData.temperatures.temp12.time}</th>
					<th>{forecastData.temperatures.temp13.time}</th>
					<th>{forecastData.temperatures.temp14.time}</th>
					<th>{forecastData.temperatures.temp15.time}</th>
					<th>{forecastData.temperatures.temp16.time}</th>
					<th>{forecastData.temperatures.temp17.time}</th>
					<th>{forecastData.temperatures.temp18.time}</th>
					<th>{forecastData.temperatures.temp19.time}</th>
					<th>{forecastData.temperatures.temp20.time}</th>
					<th>{forecastData.temperatures.temp21.time}</th>
					<th>{forecastData.temperatures.temp22.time}</th>
					<th>{forecastData.temperatures.temp23.time}</th>
				</tr>
			</thead>
			<tbody>

				<tr>
					<td>Temperature</td>
					<td>{forecastData.temperatures.temp0.from + '°' + forecastData.temperatures.temp0.unit + ' - '+ forecastData.temperatures.temp0.to + '°' + forecastData.temperatures.temp0.unit}</td>
					<td>{forecastData.temperatures.temp1.from + '°' + forecastData.temperatures.temp1.unit + ' - '+ forecastData.temperatures.temp1.to + '°' + forecastData.temperatures.temp1.unit}</td>
					<td>{forecastData.temperatures.temp2.from + '°' + forecastData.temperatures.temp2.unit + ' - '+ forecastData.temperatures.temp2.to + '°' + forecastData.temperatures.temp2.unit}</td>
					<td>{forecastData.temperatures.temp3.from + '°' + forecastData.temperatures.temp3.unit + ' - '+ forecastData.temperatures.temp3.to + '°' + forecastData.temperatures.temp3.unit}</td>
					<td>{forecastData.temperatures.temp4.from + '°' + forecastData.temperatures.temp4.unit + ' - '+ forecastData.temperatures.temp4.to + '°' + forecastData.temperatures.temp4.unit}</td>
					<td>{forecastData.temperatures.temp5.from + '°' + forecastData.temperatures.temp5.unit + ' - '+ forecastData.temperatures.temp5.to + '°' + forecastData.temperatures.temp5.unit}</td>
					<td>{forecastData.temperatures.temp6.from + '°' + forecastData.temperatures.temp6.unit + ' - '+ forecastData.temperatures.temp6.to + '°' + forecastData.temperatures.temp6.unit}</td>
					<td>{forecastData.temperatures.temp7.from + '°' + forecastData.temperatures.temp7.unit + ' - '+ forecastData.temperatures.temp7.to + '°' + forecastData.temperatures.temp7.unit}</td>
					<td>{forecastData.temperatures.temp8.from + '°' + forecastData.temperatures.temp8.unit + ' - '+ forecastData.temperatures.temp8.to + '°' + forecastData.temperatures.temp8.unit}</td>
					<td>{forecastData.temperatures.temp9.from + '°' + forecastData.temperatures.temp9.unit + ' - '+ forecastData.temperatures.temp9.to + '°' + forecastData.temperatures.temp9.unit}</td>
					<td>{forecastData.temperatures.temp10.from+ '°' + forecastData.temperatures.temp10.unit + ' - '+ forecastData.temperatures.temp10.to + '°' + forecastData.temperatures.temp10.unit}</td>
					<td>{forecastData.temperatures.temp11.from+ '°' + forecastData.temperatures.temp11.unit + ' - '+ forecastData.temperatures.temp11.to + '°' + forecastData.temperatures.temp11.unit}</td>
					<td>{forecastData.temperatures.temp12.from+ '°' + forecastData.temperatures.temp12.unit + ' - '+ forecastData.temperatures.temp12.to + '°' + forecastData.temperatures.temp12.unit}</td>
					<td>{forecastData.temperatures.temp13.from+ '°' + forecastData.temperatures.temp13.unit + ' - '+ forecastData.temperatures.temp13.to + '°' + forecastData.temperatures.temp13.unit}</td>
					<td>{forecastData.temperatures.temp14.from+ '°' + forecastData.temperatures.temp14.unit + ' - '+ forecastData.temperatures.temp14.to + '°' + forecastData.temperatures.temp14.unit}</td>
					<td>{forecastData.temperatures.temp15.from+ '°' + forecastData.temperatures.temp15.unit + ' - '+ forecastData.temperatures.temp15.to + '°' + forecastData.temperatures.temp15.unit}</td>
					<td>{forecastData.temperatures.temp16.from+ '°' + forecastData.temperatures.temp16.unit + ' - '+ forecastData.temperatures.temp16.to + '°' + forecastData.temperatures.temp16.unit}</td>
					<td>{forecastData.temperatures.temp17.from+ '°' + forecastData.temperatures.temp17.unit + ' - '+ forecastData.temperatures.temp17.to + '°' + forecastData.temperatures.temp17.unit}</td>
					<td>{forecastData.temperatures.temp18.from+ '°' + forecastData.temperatures.temp18.unit + ' - '+ forecastData.temperatures.temp18.to + '°' + forecastData.temperatures.temp18.unit}</td>
					<td>{forecastData.temperatures.temp19.from+ '°' + forecastData.temperatures.temp19.unit + ' - '+ forecastData.temperatures.temp19.to + '°' + forecastData.temperatures.temp19.unit}</td>
					<td>{forecastData.temperatures.temp20.from+ '°' + forecastData.temperatures.temp20.unit + ' - '+ forecastData.temperatures.temp20.to + '°' + forecastData.temperatures.temp20.unit}</td>
					<td>{forecastData.temperatures.temp21.from+ '°' + forecastData.temperatures.temp21.unit + ' - '+ forecastData.temperatures.temp21.to + '°' + forecastData.temperatures.temp21.unit}</td>
					<td>{forecastData.temperatures.temp22.from+ '°' + forecastData.temperatures.temp22.unit + ' - '+ forecastData.temperatures.temp22.to + '°' + forecastData.temperatures.temp22.unit}</td>
					<td>{forecastData.temperatures.temp23.from+ '°' + forecastData.temperatures.temp23.unit + ' - '+ forecastData.temperatures.temp23.to + '°' + forecastData.temperatures.temp23.unit}</td>
				</tr>

				<tr>
					<td>Precipitation</td>
					<td>{forecastData.precipitations.precipitation0.from + ' ' + forecastData.precipitations.precipitation0.unit + ' - '+ forecastData.precipitations.precipitation0.to + ' ' + forecastData.precipitations.precipitation0.unit}</td>
					<td>{forecastData.precipitations.precipitation1.from + ' ' + forecastData.precipitations.precipitation1.unit + ' - '+ forecastData.precipitations.precipitation1.to + ' ' + forecastData.precipitations.precipitation1.unit}</td>
					<td>{forecastData.precipitations.precipitation2.from + ' ' + forecastData.precipitations.precipitation2.unit + ' - '+ forecastData.precipitations.precipitation2.to + ' ' + forecastData.precipitations.precipitation2.unit}</td>
					<td>{forecastData.precipitations.precipitation3.from + ' ' + forecastData.precipitations.precipitation3.unit + ' - '+ forecastData.precipitations.precipitation3.to + ' ' + forecastData.precipitations.precipitation3.unit}</td>
					<td>{forecastData.precipitations.precipitation4.from + ' ' + forecastData.precipitations.precipitation4.unit + ' - '+ forecastData.precipitations.precipitation4.to + ' ' + forecastData.precipitations.precipitation4.unit}</td>
					<td>{forecastData.precipitations.precipitation5.from + ' ' + forecastData.precipitations.precipitation5.unit + ' - '+ forecastData.precipitations.precipitation5.to + ' ' + forecastData.precipitations.precipitation5.unit}</td>
					<td>{forecastData.precipitations.precipitation6.from + ' ' + forecastData.precipitations.precipitation6.unit + ' - '+ forecastData.precipitations.precipitation6.to + ' ' + forecastData.precipitations.precipitation6.unit}</td>
					<td>{forecastData.precipitations.precipitation7.from + ' ' + forecastData.precipitations.precipitation7.unit + ' - '+ forecastData.precipitations.precipitation7.to + ' ' + forecastData.precipitations.precipitation7.unit}</td>
					<td>{forecastData.precipitations.precipitation8.from + ' ' + forecastData.precipitations.precipitation8.unit + ' - '+ forecastData.precipitations.precipitation8.to + ' ' + forecastData.precipitations.precipitation8.unit}</td>
					<td>{forecastData.precipitations.precipitation9.from + ' ' + forecastData.precipitations.precipitation9.unit + ' - '+ forecastData.precipitations.precipitation9.to + ' ' + forecastData.precipitations.precipitation9.unit}</td>
					<td>{forecastData.precipitations.precipitation10.from+ ' ' + forecastData.precipitations.precipitation10.unit + ' - '+ forecastData.precipitations.precipitation10.to + ' ' + forecastData.precipitations.precipitation10.unit}</td>
					<td>{forecastData.precipitations.precipitation11.from+ ' ' + forecastData.precipitations.precipitation11.unit + ' - '+ forecastData.precipitations.precipitation11.to + ' ' + forecastData.precipitations.precipitation11.unit}</td>
					<td>{forecastData.precipitations.precipitation12.from+ ' ' + forecastData.precipitations.precipitation12.unit + ' - '+ forecastData.precipitations.precipitation12.to + ' ' + forecastData.precipitations.precipitation12.unit}</td>
					<td>{forecastData.precipitations.precipitation13.from+ ' ' + forecastData.precipitations.precipitation13.unit + ' - '+ forecastData.precipitations.precipitation13.to + ' ' + forecastData.precipitations.precipitation13.unit}</td>
					<td>{forecastData.precipitations.precipitation14.from+ ' ' + forecastData.precipitations.precipitation14.unit + ' - '+ forecastData.precipitations.precipitation14.to + ' ' + forecastData.precipitations.precipitation14.unit}</td>
					<td>{forecastData.precipitations.precipitation15.from+ ' ' + forecastData.precipitations.precipitation15.unit + ' - '+ forecastData.precipitations.precipitation15.to + ' ' + forecastData.precipitations.precipitation15.unit}</td>
					<td>{forecastData.precipitations.precipitation16.from+ ' ' + forecastData.precipitations.precipitation16.unit + ' - '+ forecastData.precipitations.precipitation16.to + ' ' + forecastData.precipitations.precipitation16.unit}</td>
					<td>{forecastData.precipitations.precipitation17.from+ ' ' + forecastData.precipitations.precipitation17.unit + ' - '+ forecastData.precipitations.precipitation17.to + ' ' + forecastData.precipitations.precipitation17.unit}</td>
					<td>{forecastData.precipitations.precipitation18.from+ ' ' + forecastData.precipitations.precipitation18.unit + ' - '+ forecastData.precipitations.precipitation18.to + ' ' + forecastData.precipitations.precipitation18.unit}</td>
					<td>{forecastData.precipitations.precipitation19.from+ ' ' + forecastData.precipitations.precipitation19.unit + ' - '+ forecastData.precipitations.precipitation19.to + ' ' + forecastData.precipitations.precipitation19.unit}</td>
					<td>{forecastData.precipitations.precipitation20.from+ ' ' + forecastData.precipitations.precipitation20.unit + ' - '+ forecastData.precipitations.precipitation20.to + ' ' + forecastData.precipitations.precipitation20.unit}</td>
					<td>{forecastData.precipitations.precipitation21.from+ ' ' + forecastData.precipitations.precipitation21.unit + ' - '+ forecastData.precipitations.precipitation21.to + ' ' + forecastData.precipitations.precipitation21.unit}</td>
					<td>{forecastData.precipitations.precipitation22.from+ ' ' + forecastData.precipitations.precipitation22.unit + ' - '+ forecastData.precipitations.precipitation22.to + ' ' + forecastData.precipitations.precipitation22.unit}</td>
					<td>{forecastData.precipitations.precipitation23.from+ ' ' + forecastData.precipitations.precipitation23.unit + ' - '+ forecastData.precipitations.precipitation23.to + ' ' + forecastData.precipitations.precipitation23.unit}</td>
				</tr>

				<tr>
					<td>Wind</td>
					<td>{forecastData.winds.wind0.from + ' ' + forecastData.winds.wind0.unit + ' - '+ forecastData.winds.wind0.to + ' ' + forecastData.winds.wind0.unit}</td>
					<td>{forecastData.winds.wind1.from + ' ' + forecastData.winds.wind1.unit + ' - '+ forecastData.winds.wind1.to + ' ' + forecastData.winds.wind1.unit}</td>
					<td>{forecastData.winds.wind2.from + ' ' + forecastData.winds.wind2.unit + ' - '+ forecastData.winds.wind2.to + ' ' + forecastData.winds.wind2.unit}</td>
					<td>{forecastData.winds.wind3.from + ' ' + forecastData.winds.wind3.unit + ' - '+ forecastData.winds.wind3.to + ' ' + forecastData.winds.wind3.unit}</td>
					<td>{forecastData.winds.wind4.from + ' ' + forecastData.winds.wind4.unit + ' - '+ forecastData.winds.wind4.to + ' ' + forecastData.winds.wind4.unit}</td>
					<td>{forecastData.winds.wind5.from + ' ' + forecastData.winds.wind5.unit + ' - '+ forecastData.winds.wind5.to + ' ' + forecastData.winds.wind5.unit}</td>
					<td>{forecastData.winds.wind6.from + ' ' + forecastData.winds.wind6.unit + ' - '+ forecastData.winds.wind6.to + ' ' + forecastData.winds.wind6.unit}</td>
					<td>{forecastData.winds.wind7.from + ' ' + forecastData.winds.wind7.unit + ' - '+ forecastData.winds.wind7.to + ' ' + forecastData.winds.wind7.unit}</td>
					<td>{forecastData.winds.wind8.from + ' ' + forecastData.winds.wind8.unit + ' - '+ forecastData.winds.wind8.to + ' ' + forecastData.winds.wind8.unit}</td>
					<td>{forecastData.winds.wind9.from + ' ' + forecastData.winds.wind9.unit + ' - '+ forecastData.winds.wind9.to + ' ' + forecastData.winds.wind9.unit}</td>
					<td>{forecastData.winds.wind10.from+ ' ' + forecastData.winds.wind10.unit + ' - '+ forecastData.winds.wind10.to + ' ' + forecastData.winds.wind10.unit}</td>
					<td>{forecastData.winds.wind11.from+ ' ' + forecastData.winds.wind11.unit + ' - '+ forecastData.winds.wind11.to + ' ' + forecastData.winds.wind11.unit}</td>
					<td>{forecastData.winds.wind12.from+ ' ' + forecastData.winds.wind12.unit + ' - '+ forecastData.winds.wind12.to + ' ' + forecastData.winds.wind12.unit}</td>
					<td>{forecastData.winds.wind13.from+ ' ' + forecastData.winds.wind13.unit + ' - '+ forecastData.winds.wind13.to + ' ' + forecastData.winds.wind13.unit}</td>
					<td>{forecastData.winds.wind14.from+ ' ' + forecastData.winds.wind14.unit + ' - '+ forecastData.winds.wind14.to + ' ' + forecastData.winds.wind14.unit}</td>
					<td>{forecastData.winds.wind15.from+ ' ' + forecastData.winds.wind15.unit + ' - '+ forecastData.winds.wind15.to + ' ' + forecastData.winds.wind15.unit}</td>
					<td>{forecastData.winds.wind16.from+ ' ' + forecastData.winds.wind16.unit + ' - '+ forecastData.winds.wind16.to + ' ' + forecastData.winds.wind16.unit}</td>
					<td>{forecastData.winds.wind17.from+ ' ' + forecastData.winds.wind17.unit + ' - '+ forecastData.winds.wind17.to + ' ' + forecastData.winds.wind17.unit}</td>
					<td>{forecastData.winds.wind18.from+ ' ' + forecastData.winds.wind18.unit + ' - '+ forecastData.winds.wind18.to + ' ' + forecastData.winds.wind18.unit}</td>
					<td>{forecastData.winds.wind19.from+ ' ' + forecastData.winds.wind19.unit + ' - '+ forecastData.winds.wind19.to + ' ' + forecastData.winds.wind19.unit}</td>
					<td>{forecastData.winds.wind20.from+ ' ' + forecastData.winds.wind20.unit + ' - '+ forecastData.winds.wind20.to + ' ' + forecastData.winds.wind20.unit}</td>
					<td>{forecastData.winds.wind21.from+ ' ' + forecastData.winds.wind21.unit + ' - '+ forecastData.winds.wind21.to + ' ' + forecastData.winds.wind21.unit}</td>
					<td>{forecastData.winds.wind22.from+ ' ' + forecastData.winds.wind22.unit + ' - '+ forecastData.winds.wind22.to + ' ' + forecastData.winds.wind22.unit}</td>
					<td>{forecastData.winds.wind23.from+ ' ' + forecastData.winds.wind23.unit + ' - '+ forecastData.winds.wind23.to + ' ' + forecastData.winds.wind23.unit}</td>
				</tr>

				<tr>
					<td>Cloud Coverage</td>
					<td>{forecastData.clouds.cloud0.from + ' ' + forecastData.clouds.cloud0.unit + ' - '+ forecastData.clouds.cloud0.to + ' ' + forecastData.clouds.cloud0.unit}</td>
					<td>{forecastData.clouds.cloud1.from + ' ' + forecastData.clouds.cloud1.unit + ' - '+ forecastData.clouds.cloud1.to + ' ' + forecastData.clouds.cloud1.unit}</td>
					<td>{forecastData.clouds.cloud2.from + ' ' + forecastData.clouds.cloud2.unit + ' - '+ forecastData.clouds.cloud2.to + ' ' + forecastData.clouds.cloud2.unit}</td>
					<td>{forecastData.clouds.cloud3.from + ' ' + forecastData.clouds.cloud3.unit + ' - '+ forecastData.clouds.cloud3.to + ' ' + forecastData.clouds.cloud3.unit}</td>
					<td>{forecastData.clouds.cloud4.from + ' ' + forecastData.clouds.cloud4.unit + ' - '+ forecastData.clouds.cloud4.to + ' ' + forecastData.clouds.cloud4.unit}</td>
					<td>{forecastData.clouds.cloud5.from + ' ' + forecastData.clouds.cloud5.unit + ' - '+ forecastData.clouds.cloud5.to + ' ' + forecastData.clouds.cloud5.unit}</td>
					<td>{forecastData.clouds.cloud6.from + ' ' + forecastData.clouds.cloud6.unit + ' - '+ forecastData.clouds.cloud6.to + ' ' + forecastData.clouds.cloud6.unit}</td>
					<td>{forecastData.clouds.cloud7.from + ' ' + forecastData.clouds.cloud7.unit + ' - '+ forecastData.clouds.cloud7.to + ' ' + forecastData.clouds.cloud7.unit}</td>
					<td>{forecastData.clouds.cloud8.from + ' ' + forecastData.clouds.cloud8.unit + ' - '+ forecastData.clouds.cloud8.to + ' ' + forecastData.clouds.cloud8.unit}</td>
					<td>{forecastData.clouds.cloud9.from + ' ' + forecastData.clouds.cloud9.unit + ' - '+ forecastData.clouds.cloud9.to + ' ' + forecastData.clouds.cloud9.unit}</td>
					<td>{forecastData.clouds.cloud10.from+ ' ' + forecastData.clouds.cloud10.unit + ' - '+ forecastData.clouds.cloud10.to + ' ' + forecastData.clouds.cloud10.unit}</td>
					<td>{forecastData.clouds.cloud11.from+ ' ' + forecastData.clouds.cloud11.unit + ' - '+ forecastData.clouds.cloud11.to + ' ' + forecastData.clouds.cloud11.unit}</td>
					<td>{forecastData.clouds.cloud12.from+ ' ' + forecastData.clouds.cloud12.unit + ' - '+ forecastData.clouds.cloud12.to + ' ' + forecastData.clouds.cloud12.unit}</td>
					<td>{forecastData.clouds.cloud13.from+ ' ' + forecastData.clouds.cloud13.unit + ' - '+ forecastData.clouds.cloud13.to + ' ' + forecastData.clouds.cloud13.unit}</td>
					<td>{forecastData.clouds.cloud14.from+ ' ' + forecastData.clouds.cloud14.unit + ' - '+ forecastData.clouds.cloud14.to + ' ' + forecastData.clouds.cloud14.unit}</td>
					<td>{forecastData.clouds.cloud15.from+ ' ' + forecastData.clouds.cloud15.unit + ' - '+ forecastData.clouds.cloud15.to + ' ' + forecastData.clouds.cloud15.unit}</td>
					<td>{forecastData.clouds.cloud16.from+ ' ' + forecastData.clouds.cloud16.unit + ' - '+ forecastData.clouds.cloud16.to + ' ' + forecastData.clouds.cloud16.unit}</td>
					<td>{forecastData.clouds.cloud17.from+ ' ' + forecastData.clouds.cloud17.unit + ' - '+ forecastData.clouds.cloud17.to + ' ' + forecastData.clouds.cloud17.unit}</td>
					<td>{forecastData.clouds.cloud18.from+ ' ' + forecastData.clouds.cloud18.unit + ' - '+ forecastData.clouds.cloud18.to + ' ' + forecastData.clouds.cloud18.unit}</td>
					<td>{forecastData.clouds.cloud19.from+ ' ' + forecastData.clouds.cloud19.unit + ' - '+ forecastData.clouds.cloud19.to + ' ' + forecastData.clouds.cloud19.unit}</td>
					<td>{forecastData.clouds.cloud20.from+ ' ' + forecastData.clouds.cloud20.unit + ' - '+ forecastData.clouds.cloud20.to + ' ' + forecastData.clouds.cloud20.unit}</td>
					<td>{forecastData.clouds.cloud21.from+ ' ' + forecastData.clouds.cloud21.unit + ' - '+ forecastData.clouds.cloud21.to + ' ' + forecastData.clouds.cloud21.unit}</td>
					<td>{forecastData.clouds.cloud22.from+ ' ' + forecastData.clouds.cloud22.unit + ' - '+ forecastData.clouds.cloud22.to + ' ' + forecastData.clouds.cloud22.unit}</td>
					<td>{forecastData.clouds.cloud23.from+ ' ' + forecastData.clouds.cloud23.unit + ' - '+ forecastData.clouds.cloud23.to + ' ' + forecastData.clouds.cloud23.unit}</td>
				</tr>
			</tbody>
    	</table>

	</div>;
};

const mapStateToProps = state => {
    return {
        data: state,
		forecastData: state.forecastData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCityDataHorsens: () => dispatch(fetchCityDataHorsens()),
        fetchCityDataAarhus: () => dispatch(fetchCityDataAarhus()),
        fetchCityDataCopenhagen: () => dispatch(fetchCityDataCopenhagen()),
		reload: () => dispatch(reload())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LatestMeasurementsTable)