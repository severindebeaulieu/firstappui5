/**
 * Created by sdebeaulieu on 27/03/15.
 */
jQuery.sap.declare('demo.ui.Audioplayer');

sap.ui.core.Control.extend('demo.ui.Audioplayer',
	{
		metadata : {
			properties : {
				id: 'string',
				src : 'string',
				loop : {
					type : 'boolean',
					defaultValue : false
				}
			}
		},

		renderer : function(oRm, oControl) {
			oRm.write('<audio controls ');
			oRm.writeControlData(oControl);
			oRm.write('id="' + (oControl.getId() || '') + '"');
			if (oControl.getLoop()) {
				oRm.write(' loop ');
			}

			oRm.write('>');
			oRm.write("<source src='" + oControl.getSrc()
			+ "' type='audio/mpeg'>");
			oRm.write('</audio>');
		}
	});
