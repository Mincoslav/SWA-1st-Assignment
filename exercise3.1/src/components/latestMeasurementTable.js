import "./latestMeasurementTable.css"
import { connect } from "react-redux";

import { fetchCityDataHorsens, fetchCityDataAarhus, fetchCityDataCopenhagen } from "../actions/cityDataActions";


const LatestMeasurementsTable = ({latestMeasurements, fetchCityDataHorsens, fetchCityDataAarhus, fetchCityDataCopenhagen}) => {

    return <div>
        <p>City: {latestMeasurements.cityName}</p>
        <button onClick={fetchCityDataHorsens}>Horsens</button>
		<button onClick={fetchCityDataAarhus}>Aarhus</button>
		<button onClick={fetchCityDataCopenhagen}>Copenhagen</button>

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
					<td>{latestMeasurements.latestTemperature}</td>
					<td>{latestMeasurements.latestPrecipitation}</td>
					<td>{latestMeasurements.latestWind}</td>
					<td>{latestMeasurements.latestCloudCoverage}</td>
				</tr>
			</tbody>
		</table>
	</div>;
};

const mapStateToProps = state => {
    return {
        latestMeasurements: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCityDataHorsens: () => dispatch(fetchCityDataHorsens()),
        fetchCityDataAarhus: () => dispatch(fetchCityDataAarhus()),
        fetchCityDataCopenhagen: () => dispatch(fetchCityDataCopenhagen())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LatestMeasurementsTable)