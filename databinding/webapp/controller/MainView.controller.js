sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/library",
],
    function (Controller, MessageToast, mobileLibrary) {
        "use strict";

        return Controller.extend("sap.btp.databinding.controller.MainView", {
            onDisplayUserDetails: function() {
                const model = this.getOwnerComponent().getModel("user");
                MessageToast.show(`Registering user with details\nfirstName=${model.getProperty("/firstName")}\nlastName=${model.getProperty("/lastName")}`);               
            },
            formatEmail: function(firstName, lastName) {
                const resourceBundle = this.getView().getModel('i18n').getResourceBundle();

                return mobileLibrary.URLHelper.normalizeEmail(
                        firstName + '.' + lastName + '@example.com',
                        resourceBundle.getText('mailSubject', [firstName]),
                        resourceBundle.getText('mailBody')
                        );
            }
        });
    });
