sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("sap.btp.databinding.controller.MainView", {
            onDisplayUserDetails: function() {
                const model = this.getOwnerComponent().getModel("user");
                MessageToast.show(`Registering user with details\nfirstName=${model.getProperty("/firstName")}\nlastName=${model.getProperty("/lastName")}`);               
            }
        });
    });
