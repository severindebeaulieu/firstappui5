/**
 * Created by sdebeaulieu on 26/03/15.
 */
(function () {
	"use strict";

	sap.ui.controller("demo.view.Music", {

		onInit: function () {
			this.oModel = new sap.ui.model.json.JSONModel({
				newMusicSearch: "",
				itunesResult: {}
			});

			this.getView().setModel(this.oModel);

		},

		onSearchMusic: function () {
			//var url = 'http://localhost:8080/proxy/search?term=' + encodeURI(this.oModel.getProperty("/newMusicSearch"))
			//	+ '&media=music&entity=song';
			var url = 'https://itunes.apple.com/search?term=' + encodeURI(this.oModel.getProperty("/newMusicSearch"))
					+ '&media=music&entity=song';


			jQuery.ajax({
				url: url,
				//url: 'resources/testjson.json',
				method: "GET",
				dataType: "JSON",
				xhrFields: {
					withCredentials: true
				},
				success: function (data) {
					this.oModel.setProperty("/itunesResult", data);
					console.log(this.oModel);
					this.oModel.setProperty("/newMusicSearch", "");
					this.oModel.refresh();
				}.bind(this)
			});

		}

	});

})();
