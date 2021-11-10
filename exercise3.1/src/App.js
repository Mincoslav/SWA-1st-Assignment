import React from "react";
import LatestMeasurementsTable from "./components/latestMeasurementTable";
import { DataSubmitForm } from "./components/dataInput";
import { Provider } from "react-redux";
import {store} from './app/store.js'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<LatestMeasurementsTable></LatestMeasurementsTable>
				<DataSubmitForm></DataSubmitForm>
			</div>
		</Provider>
	);
}

export default App;
