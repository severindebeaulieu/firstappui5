/**
 * Created by sdebeaulieu on 26/03/15.
 */

"use strict";

jQuery.sap.require("sap.m.IconTabBar");
jQuery.sap.declare("demo.ui.SmartIconTabBar");

sap.m.IconTabBar.extend("demo.ui.SmartIconTabBar", {
	metadata : {
		properties: {},

		defaultAggregation : "items",
		aggregations: {},
		events: {}
	},

	init : function() {
		//sap.m.IconTabBar.prototype.init.apply(this, arguments);
	},

	renderer : {}
});
