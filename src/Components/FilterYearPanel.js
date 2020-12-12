import React from "react";
import "../utils/SubPanel.css";
import YearButtons from "./YearButtons";

function FilterYearPanel() {
	return (
		<div className="subPanel">
			<div className="subPanel__header">
				<h4 className="subPanel__title">Launch year</h4>
			</div>
			<YearButtons />
		</div>
	);
}

export default FilterYearPanel;
