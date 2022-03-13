import getClientInstance from "../helpers/getClientInstance";

test("should get all offices if Bulgaria", async () => {
  const client = getClientInstance();

  const {offices} = await client.NomenclaturesService.getOffices({countryCode: "BGR"});

  offices.forEach(office => expect(office.currency).toBe("BGN"))
}, 1000 * 60);


test("should get all offices NOT in Bulgaria", async () => {
  const client = getClientInstance();

  const {offices} = await client.NomenclaturesService.getOffices({countryCode: "GRC"});

  offices.forEach(office => expect(office.currency).not.toBe("BGN"))
}, 1000 * 60);

export {};
