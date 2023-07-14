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
            const model = new JSONModel({ firstName: "Harry", lastName: "Potter", enabled: true });
            return model;
        }
    };
});