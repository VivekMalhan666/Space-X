import React from "react";
import "../utils/YearPanel.css";
import LaunchButtons from "./LaunchButtons";

function FilterLaunchPanel() {
	return (
		<div className="yearPanel">
			<div className="yearPanel__header">
				<h4 className="yearPanel__title">Successful Launch</h4>
			</div>
			<LaunchButtons />
		</div>
	);
}

export default FilterLaunchPanel;
