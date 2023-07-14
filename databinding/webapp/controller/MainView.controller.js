sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
],
    function (Controller, Text, JSONModel) {
        "use strict";

        return Controller.extend("sap.btp.databinding.controller.MainView", {
            onInit: function () {
                const page = this.getView().byId("page");

                page.addContent(new Text({ text: 'Hi {greeting>/greeter}!' }));
            }
        });
    });
