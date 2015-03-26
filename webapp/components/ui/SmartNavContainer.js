/**
 * Created by sdebeaulieu on 26/03/15.
 */

"use strict";

jQuery.sap.require("sap.m.NavContainer");
jQuery.sap.declare("demo.ui.SmartNavContainer");

sap.m.NavContainer.extend("demo.ui.SmartNavContainer", {
	metadata : {
		aggregations : {
			"backBtn" : {"type" : "sap.m.Button", "multiple" : false},
			"nextBtn" : {"type" : "sap.m.Button", "multiple" : false}
		}
	},

	init : function() {
		sap.m.NavContainer.prototype.init.apply(this, arguments);

		this.setBackBtn(this.createNavButton("backBtn"));
		this.setNextBtn(this.createNavButton("nextBtn"));

	},

	createNavButton : function(title) {
		return new sap.m.Button();
	},
	renderer : {}
});
