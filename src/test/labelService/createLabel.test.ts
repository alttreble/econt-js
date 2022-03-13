import getClientInstance from "../helpers/getClientInstance";
import {ShipmentType} from "../../types";

test("should create label", async () => {
  const client = getClientInstance();

  const mockInput = {
    "label": {
      "senderAddress": {
        "city": {
          "country": {
            "code3": "BGR"
          },
          "name": "Русе",
          "postCode": "7012"
        },
        "street": "Алея Младост",
        "num": "7"
      },
      "receiverAddress": {
        "city": {
          "country": {
            "code3": "BGR"
          },
          "name": "Русе",
          "postCode": "7010"
        },
        "street": "Муткурова",
        "num": "84",
        "other": "бл. 5, вх. А, ет. 6"
      },
      "packCount": 1,
      "shipmentType": ShipmentType.pack,
      "weight": 5,
      "shipmentDescription": "обувки"
    },
    "mode": "calculate"
  }

  const {label} = await client.LabelService.createLabel(mockInput);
  expect(label.totalPrice).toBe(10);
}, 1000 * 60)
