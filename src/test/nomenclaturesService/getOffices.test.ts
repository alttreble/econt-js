import EcontClient from "../../client";

test("should get all offices if Bulgaria", async () => {
  const client = new EcontClient();

  const {offices} = await client.NomenclaturesService.getOffices({countryCode: "BGR"});

  offices.forEach(office => expect(office.currency).toBe("BGN"))
});


test("should get all offices if Bulgaria", async () => {
  const client = new EcontClient();

  const {offices} = await client.NomenclaturesService.getOffices({countryCode: "GRC"});

  offices.forEach(office => expect(office.currency).not.toBe("BGN"))
});

export {};
