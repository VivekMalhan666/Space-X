import React from "react";
import "../utils/SubPanel.css";
import LandingButton from "./LandingButton";

function FilterLandingPanel() {
	return (
		<div className="subPanel">
			<div className="subPanel__header">
				<h4 className="subPanel__title">Successful Landing</h4>
			</div>
			<LandingButton />
		</div>
	);
}

export default FilterLandingPanel;
