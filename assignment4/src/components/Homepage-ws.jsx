import React, { useEffect } from "react";
import { Label } from "./table/Label";
import { Input } from "./table/Input";
import { Table } from "./table/Table";
import { warningsWS } from "../utility/constants";
import {
	clearTable,
	displayWarnings,
	getValueFromHtmlElement
} from "../utility/tableHelpers";
import { filterBySeverity, filterSinceLastUpdate } from "../utility/filter";
// import WebSocket from "ws";

let warningsCache = [];
let isSubscribed = false;
let warnings = {};

export const Homepage = () => {
	const socket = new WebSocket(warningsWS);

	socket.onopen = function (event) {
		// socket.send("subscribe");

		socket.onmessage = function (event) {
			// console.log(typeof event.data)
			if (event.data.includes("warnings")) {
				warnings = JSON.parse(event.data);

				warnings.warnings = warnings.warnings.filter(function (element) {
					return element.prediction != null;
				});
			} else {
				let data = JSON.parse(event.data);
				if (data.prediction != null) {
					warnings = {
						time: data.prediction.time,
						warnings: [
							{
								id: data.id,
								severity: data.severity,
								prediction: data.prediction
							}
						]
					};
				}
			}
			// console.log("DATA: ");
			// console.log(JSON.parse(event.data));
			// console.log("WARNINGS: ");
			// console.log(warnings);
			const severity = getValueFromHtmlElement("severity-text-box");
			const newWarnings = filterBySeverity(warnings, severity);
			console.log(newWarnings);
			const changedWarnings = filterSinceLastUpdate(warningsCache, newWarnings);

			// Clear the cache
			warningsCache = [];
			newWarnings?.forEach((warning) => warningsCache.push(warning));

			displayWarnings("warnings-table-body", newWarnings);

			// Clear old warnings
			clearTable("changes-table-body");
			displayWarnings("changes-table-body", changedWarnings);
		};

		socket.onerror = function (event) {
			console.log("Message from server ", event);
		};

		socket.onclose = function (event) {
			console.log("Message from server ", event);
		};
	};

	const onSubscribe = () => {
		if (!isSubscribed) {
			socket.send("subscribe");
			console.log(`[${new Date().toISOString()}]: Subscribed`);
		}
	};

	const onUnsubscribe = () => {
		socket.send("unsubscribe");
		isSubscribed = false;
		console.log(`[${new Date().toISOString()}]: Unsubscribed`);
	};

	useEffect(() => {
		if (getValueFromHtmlElement("severity-text-box") !== "") {
			socket.send("subscribe");
			console.log("Severity text-box loaded");
		}
	}, []);

	window.onunload = () => {
		socket.send("unsubscribe");
		console.log(`[${new Date().toISOString()}]: Unsubscribed`);
	};

	return (
		<div>
			<div>
				<Label _for={"severity"} label={"Severity"} />
				<Input id={"severity-text-box"} type={"text"} value={1} />
			</div>
			<div>
				<Label _for={"update-warnings"} label={"Update warnings?"} />
				<Label _for={"on-button"} label={"On"} />
				<Input
					id={"on-button"}
					onclick={onSubscribe}
					type={"radio"}
					name={"updating"}
					value={"Subscribe"}
					checked={"true"}
					label={"Yes"}
				/>
				<Label _for={"off-button"} label={"Off"} />
				<Input
					id={"off-button"}
					onclick={onUnsubscribe}
					type={"radio"}
					name={"updating"}
					value={"Unsubscribe"}
					labe={"No"}
				/>
			</div>
			<Table
				divId={"warnings-div"}
				header={"Warnings feed (updated every 3 seconds):"}
				tableId={"warnings-table"}
				bodyId={"warnings-table-body"}
			/>
			<Table
				divId={"changes-div"}
				header={"Changed warnings since last update:"}
				tableId={"changes-table"}
				bodyId={"changes-table-body"}
			/>
		</div>
	);
};
