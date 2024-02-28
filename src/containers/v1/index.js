import React from "react";
import { Outlet } from 'react-router-dom'

/**
 * Components
 */

/**
 * Services
 */
import SSORoutes from "./services/navigation/route";

// Styling
import "./index.css";

const App = () => {
	return (
		<>
			<SSORoutes />
			<Outlet />
		</>
	);
};

export default React.memo(App);
