import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../StateManager/DataLayer";
import { actionTypes } from "../StateManager/reducer";
import "../utils/YearPanel.css";

function LaunchButtons() {
	const [selectedId, setSelectedId] = useState(null);
	const [{ missionData, filters, url }, dispatch] = useDataLayerValue();
	const handleToggle = (id) => {
		let temp = filters;
		if (id == selectedId) {
			temp[1] = 0;
			setSelectedId(null);
			dispatch({
				type: actionTypes.SET_FILTERS,
				filters: [...temp],
			});
		} else {
			temp[1] = id;
			setSelectedId(id);
			dispatch({
				type: actionTypes.SET_FILTERS,
				filters: [...temp],
			});
		}
	};
	return (
		<div className="yearPanel__years">
			<div key={1} className="button__container">
				<div
					className={selectedId == 1 ? "year__button__active" : "year__button"}
				>
					<Button onClick={() => handleToggle(1)}>True</Button>
				</div>
			</div>
			<div key={2} className="button__container">
				<div
					className={selectedId == 2 ? "year__button__active" : "year__button"}
				>
					<Button onClick={() => handleToggle(2)}>False</Button>
				</div>
			</div>
		</div>
	);
}

export default LaunchButtons;
