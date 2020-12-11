import React from "react";
import "../utils/YearPanel.css";
import LandingButton from "./LandingButton";

function FilterLandingPanel() {
	return (
		<div className="yearPanel">
			<div className="yearPanel__header">
				<h4 className="yearPanel__title">Successful Landing</h4>
			</div>
			<LandingButton />
		</div>
	);
}

export default FilterLandingPanel;
