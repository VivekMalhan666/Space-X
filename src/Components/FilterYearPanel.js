import React from "react";
import "../utils/YearPanel.css";
import YearButtons from "./YearButtons";

function FilterYearPanel() {
	return (
		<div className="yearPanel">
			<div className="yearPanel__header">
				<h4 className="yearPanel__title">Launch year</h4>
			</div>
			<YearButtons />
		</div>
	);
}

export default FilterYearPanel;
