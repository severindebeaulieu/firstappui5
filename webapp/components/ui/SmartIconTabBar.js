/**
 * Created by sdebeaulieu on 26/03/15.
 */

"use strict";

jQuery.sap.require("sap.m.IconTabBar");
jQuery.sap.require("demo.ui.SmartIconTab");
jQuery.sap.declare("demo.ui.SmartIconTabBar");

sap.m.IconTabBar.extend("demo.ui.SmartIconTabBar", {
	metadata : {
		properties: {},

		defaultAggregation : "items",
		aggregations: {
			items : {type : "demo.ui.SmartIconTab", multiple : true, singularName : "item"},
			container : {type : "sap.ui.commons.Panel", multiple: false}
		},
		events: {}
	},

	init : function() {
		//debugger;
		//sap.m.IconTabBar.prototype.init.apply(this, arguments);

		this.attachEvent("select", function(oEvent) {
			sap.ui.xmlview(oEvent.item.getView()).placeAt(this.container, "only");
		});
	},

	renderer : {}
});
