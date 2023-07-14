sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text"
],
    function (Controller, Text) {
        "use strict";

        return Controller.extend("sap.btp.databinding.controller.MainView", {
            onInit: function () {
                const page = this.getView().byId('page');
                page.addContent(new Text({ text: 'Hi! My name is Dale' }));
            }
        });
    });
