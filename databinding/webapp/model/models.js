sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        createDeviceModel: function() {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
        createUserModel: function() {
            const model = new JSONModel({ 
                firstName: "Harry", 
                lastName: "Potter", 
                enabled: true,
                address: {
                    street: "4 Privet Drive",
                    city: "Surrey",
                    country: "England"
                },
                salesAmount: 12345.6789,
                currencyCode: "EUR"
            });
            return model;
        }
    };
});