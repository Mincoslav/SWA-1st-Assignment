import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import getCityData from "../reducer/cityDataReducer";

export const store = createStore(
	getCityData,
	composeWithDevTools(applyMiddleware(thunk, logger))
);

