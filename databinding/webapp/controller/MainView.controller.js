sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/library",
    "sap/ui/core/Locale",
    "sap/ui/core/LocaleData",
    "sap/ui/model/type/Currency",
],
    function (Controller, MessageToast, mobileLibrary, Locale, LocaleData, Currency) {
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
            }
        });
    });
