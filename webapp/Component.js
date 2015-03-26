sap.ui.core.UIComponent.extend("demo.Component", {
	metadata: {
		name: "My first app",
		version: "1.0.0",
		includes: ["css/styles.css"],
		dependencies: {
			libs: ["sap.m"]
		},
		rootView: "demo.view.App"
	}
});
