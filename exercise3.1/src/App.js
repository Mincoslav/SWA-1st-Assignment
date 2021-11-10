import React from "react";
import LatestMeasurementsTable from "./components/latestMeasurementTable";
import { SendHistoricalData } from "./components/dataInput";
import { DataSubmitForm } from "./components/dataInput";
import { Provider } from "react-redux";
import {store} from './app/store.js'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<LatestMeasurementsTable></LatestMeasurementsTable>
				
				<DataSubmitForm></DataSubmitForm>
				{/* <SendHistoricalData></SendHistoricalData> */}
			</div>
		</Provider>
	);
}

export default App;
