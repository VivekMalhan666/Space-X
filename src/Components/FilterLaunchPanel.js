import React from "react";
import "../utils/SubPanel.css";
import LaunchButtons from "./LaunchButtons";

function FilterLaunchPanel() {
	return (
		<div className="subPanel">
			<div className="subPanel__header">
				<h4 className="subPanel__title">Successful Launch</h4>
			</div>
			<LaunchButtons />
		</div>
	);
}

export default FilterLaunchPanel;
