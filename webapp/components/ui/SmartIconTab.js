/**
 * Created by sdebeaulieu on 26/03/15.
 */

jQuery.sap.require("sap.m.IconTabFilter");
jQuery.sap.declare("demo.ui.SmartIconTab");

sap.m.IconTabFilter.extend("demo.ui.SmartIconTab", {
	metadata : {
		properties : {
			view : {type : "String", defaultValue : "demo.view.App"}
		}
	},

	init : function() {
		//debugger;
		//sap.m.IconTabFilter.prototype.init.apply(this, arguments);
	}
});
