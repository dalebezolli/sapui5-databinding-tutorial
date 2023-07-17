sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/library",
    "sap/ui/core/Locale",
    "sap/ui/core/LocaleData",
    "sap/ui/model/type/Currency",
    "sap/m/ObjectAttribute",
],
    function (
        Controller, 
        MessageToast, 
        mobileLibrary, 
        Locale, 
        LocaleData, 
        Currency, 
        ObjectAttribute
    ) {
        "use strict";

        return Controller.extend("sap.btp.databinding.controller.MainView", {
            onInit: function() {
                const view = this.getView();
                const messageManager = sap.ui.getCore().getMessageManager();
                messageManager.registerObject(view, true);
            },
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
            },
            formatStockValue: function(price, units, currencyCode) {
                const browserLocale = sap.ui.getCore().getConfiguration().getLanguage();
                const locale = new Locale(browserLocale);
                const localeData = new LocaleData(locale);
                const currency = new Currency(localeData.mData.currencyFormat);

                return currency.formatValue([price * units, currencyCode], "string");
            },
            onItemSelected: function(event) {
                const context = event.getSource().getBindingContext("products");
                const path = context.getPath();
                console.log(path);
                const productDetailsPanel = this.byId("productDetailsPanel");
                productDetailsPanel.bindElement({ path, model: 'products' });
            },
            productListFactory: function(id, context) {
                let displayControl;

                if(context.getProperty("UnitsInStock") === 0 && context.getProperty("Discontinued")) {
                    displayControl = this.byId("productSimple").clone(id);
                } else {
                    displayControl = this.byId("productExtended").clone(id);

                    if(context.getProperty("UnitsInStock") < 1) {
                        displayControl.addAttribute(new ObjectAttribute({ text: { path: "i18n>outOfStock" } }));
                    }
                }

                return displayControl;
            }
        });
    });
