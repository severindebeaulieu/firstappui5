/**
 * Created by sdebeaulieu on 26/03/15.
 */
(function () {
	"use strict";

	sap.ui.controller("demo.view.Music", {

		onInit: function () {
			this.oModel = new sap.ui.model.json.JSONModel({
				newMusicSearch: "",
				itunesResult: {},
				play: {}
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

		},

		onItemPress: function (e) {
			var oModel = e.mParameters.listItem.getBindingContext().oModel,
				playSong = oModel.getProperty(e.mParameters.listItem.getBindingContextPath());
			this.oModel.setProperty("/play", playSong);
			this.oModel.refresh();
		},

		onOpenDialog: function (e) {
			var oModel = e.mParameters.listItem.getBindingContext().oModel,
				playSong = oModel.getProperty(e.mParameters.listItem.getBindingContextPath());
			this.oModel.setProperty("/play", playSong);
			this.oModel.refresh();
			if (! this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("demo.fragments.playerDialog", this);
				this.getView().addDependent(this._oDialog);
			}

			this._oDialog.bindElement("/play");
			// toggle compact style
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
			this._oDialog.open();
		},

		onCloseDialog: function (oEvent) {
			jQuery("#trackPlayer")[0].pause();
			this._oDialog.close();
		}

	});

})();
