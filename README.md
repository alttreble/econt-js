# Econt-js

A Econt API client for JavaScript. Supports TypeScript.

## Configuration

| Environmental variable | Description |
| --- | --- |
| API_ECONT_TEST_MODE | Whether the client should make calls to test endpoint (default: **false**) |
| API_ECONT_TEST_URL | Econt test url (default: `http://demo.econt.com/services/`) |
| API_ECONT_PRODUCTION_URL | Econt production url (default: `http://ee.econt.com/services/` ) |
| API_ECONT_USERNAME | The authentication username (Required only when test mode is **false**) |
| API_ECONT_PASSWORD | The authentication password (Required only when test mode is **false**) |

## Progress

- [Nomenclatures](http://ee.econt.com/services/Nomenclatures/)

    - [NomenclaturesService](http://ee.econt.com/services/Nomenclatures/#NomenclaturesService)

        - [ ] [getCountries](http://ee.econt.com/services/Nomenclatures/#NomenclaturesService-getCountries "getCountries")
        - [ ] [getCities](http://ee.econt.com/services/Nomenclatures/#NomenclaturesService-getCities "getCities")
        - [x] [getOffices](http://ee.econt.com/services/Nomenclatures/#NomenclaturesService-getOffices "getOffices")
        - [ ] [getStreets](http://ee.econt.com/services/Nomenclatures/#NomenclaturesService-getStreets "getStreets")
        - [ ] [getQuarters](http://ee.econt.com/services/Nomenclatures/#NomenclaturesService-getQuarters "getQuarters")
    - [AddressService](http://ee.econt.com/services/Nomenclatures/#AddressService)

        - [ ] [validateAddress](http://ee.econt.com/services/Nomenclatures/#AddressService-validateAddress "validateAddress")
        - [ ] [getNearestOffices](http://ee.econt.com/services/Nomenclatures/#AddressService-getNearestOffices "getNearestOffices")
- [Shipments](http://ee.econt.com/services/Shipments/)

    - [LabelService](http://ee.econt.com/services/Shipments/#LabelService)

        - [ ] [createLabel](http://ee.econt.com/services/Shipments/#LabelService-createLabel "createLabel")
        - [ ] [createLabels](http://ee.econt.com/services/Shipments/#LabelService-createLabels "createLabels")
        - [ ] [deleteLabels](http://ee.econt.com/services/Shipments/#LabelService-deleteLabels "deleteLabels")
    - [ShipmentService](http://ee.econt.com/services/Shipments/#ShipmentService)

        - [ ] [requestCourier](http://ee.econt.com/services/Shipments/#ShipmentService-requestCourier "requestCourier")
        - [ ] [getShipmentStatuses](http://ee.econt.com/services/Shipments/#ShipmentService-getShipmentStatuses "getShipmentStatuses")
        - [ ] [getRequestCourierStatus](http://ee.econt.com/services/Shipments/#ShipmentService-getRequestCourierStatus "getRequestCourierStatus")
- [Profile](http://ee.econt.com/services/Profile/)

    - [ProfileService](http://ee.econt.com/services/Profile/#ProfileService)
        - [ ] [getClientProfiles](http://ee.econt.com/services/Profile/#ProfileService-getClientProfiles "getClientProfiles")
- [ThreeWayLogistics](http://ee.econt.com/services/ThreeWayLogistics/)

    - [ThreeWayLogisticsService](http://ee.econt.com/services/ThreeWayLogistics/#ThreeWayLogisticsService)
        - [ ] [threeWayLogistics](http://ee.econt.com/services/ThreeWayLogistics/#ThreeWayLogisticsService-threeWayLogistics "threeWayLogistics")
- [PaymentReport](http://ee.econt.com/services/PaymentReport/)

    - [PaymentReportService](http://ee.econt.com/services/PaymentReport/#PaymentReportService)
        - [ ] [PaymentReport](http://ee.econt.com/services/PaymentReport/#PaymentReportService-PaymentReport "PaymentReport")
