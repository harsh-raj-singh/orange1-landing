import { useEffect } from "react";
import { Route, Switch } from "wouter";
import Index from "./pages/index";
import { Provider } from "./components/provider";

const saarthiOrigin = (import.meta.env.VITE_SAARTHI_ORIGIN || "https://saarthi-kappa-flame.vercel.app").replace(
	/\/$/,
	"",
);

function SaarthiAgent() {
	useEffect(() => {
		if (document.querySelector('script[data-saarthi-agent="orange1"]')) {
			return;
		}

		const script = document.createElement("script");
		script.src = `${saarthiOrigin}/widget.js`;
		script.async = true;
		script.dataset.saarthiAgent = "orange1";
		script.dataset.siteId = "orange1-landing";
		script.dataset.apiBase = saarthiOrigin;
		script.dataset.position = "bottom-left";
		document.body.appendChild(script);
	}, []);

	return null;
}

function App() {
	return (
		<Provider>
			<Switch>
				<Route path="/" component={Index} />
			</Switch>
			<SaarthiAgent />
		</Provider>
	);
}

export default App;
