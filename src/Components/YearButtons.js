import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../StateManager/DataLayer";
import { actionTypes } from "../StateManager/reducer";
import "../utils/YearPanel.css";

function YearButtons() {
	const [years, setYears] = useState([]);
	const [selectedYear, setSelectedYear] = useState(0);
	const [{ missionData, filters, url }, dispatch] = useDataLayerValue();

	const handleToggle = (id) => {
		let temp = filters;
		if (id == selectedYear) {
			temp[0] = 0;
			setSelectedYear(0);
			dispatch({
				type: actionTypes.SET_FILTERS,
				filters: [...temp],
			});
		} else {
			temp[0] = id;
			setSelectedYear(id);
			dispatch({
				type: actionTypes.SET_FILTERS,
				filters: [...temp],
			});
		}
	};

	useEffect(() => {
		let temp = [];
		for (var i = 2006; i <= 2020; i++) {
			temp.push(i);
		}
		setYears(temp);
		setSelectedYear(filters[0]);
	}, []);
	return (
		<div className="yearPanel__years">
			{years.map((x) => (
				<div key={x} className="button__container">
					<div
						id={x}
						className={
							selectedYear == x ? "year__button__active" : "year__button"
						}
					>
						<Button onClick={() => handleToggle(x)}>{x}</Button>
					</div>
				</div>
			))}
		</div>
	);
}

export default YearButtons;
