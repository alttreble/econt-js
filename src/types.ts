/*
 * Office of Econt Express. Required fields for identifying an office - code or ID
 */
export type Office = {
  id: number
  // A code identifying the office
  code: string
  // True if the office is a mobile post station
  isMPS: boolean
  // True if the office is an automatic post station
  isAPS: boolean
  // The bulgarian name of the office
  name: string
  // The international name of the office
  nameEn: string
  // A list of phone numbers for the office
  phones: string[]
  // A list of email addresses for the office
  emails: string[]
  // The address where the office is located
  address: Address
  // Additional information
  info: string
  // The currency the office works with
  currency: string
  // The language the office works with
  language: string
  // Business hours for parcel pickup and delivery from/to an address on weekdays
  normalBusinessHoursFrom: number
  // Business hours for parcel pickup and delivery from/to an address on weekdays
  normalBusinessHoursTo: number
  // Business hours for parcel pickup and delivery from/to an address on saturdays
  halfDayBusinessHoursFrom: number
  // Business hours for parcel pickup and delivery from/to an address on saturdays
  halfDayBusinessHoursTo: number
  // Types of shipments which can be sent/collected to/from the office
  shipmentTypes: ShipmentType[]
  // Partner code
  partnerCode: string
  // Code of the distribution center associated with the office
  hubCode: string
  // Name of the distribution center associated with the office
  hubName: string
  // International name of the distribution center associated with the office
  hubNameEn: string
}

/*
 * Address. Required fields for valid address - city, street and street number (or quarter and other).
 * Use respective fields or all joined together in the field `fullAddress`
 */
type Address = {
  id: number
  // The city where the address is located
  city: City
  // The whole address
  fullAddress: string
  // Quarter name
  quarter: string
  // Street name
  street: string
  // Street number
  num: string
  // Block number, entrance number, floor, apartment number and other additional information
  other: string
  // Geo coordinates
  location: GeoLocation
  // ZIP code
  zip: string
}

/*
 * City served by Econt Express. Required fields for valid city - ID or name + post code
 * (if the City is outside Bulgaria, country is required)
 */
type City = {
  id: number
  // The country where the city is located
  country: Country
  // Post code
  postCode: string
  // Bulgarian name
  name: string
  // International name
  nameEn: string
  // Bulgarian name of the region
  regionName: string
  // International name of the region
  regionNameEn: string
  // The phone prefix code for the city
  phoneCode: string
  // Geolocation
  location: GeoLocation
  // Indicates if express city deliveries are available
  expressCityDeliveries: boolean
}

/*
 * Required fields for valid country - ID or code (code2 or code3)
 */
type Country = {
  id: number
  // ISO 3166-1 alpha-2 code (e.g. BG, GB, GR)
  code2: string
  // ISO 3166-1 alpha-3 code (e.g. BGR ,GBR, GRC)
  code3: string
  // The bulgarian name of the country
  name: string
  // The international name of the country
  nameEn: string
  // True if country is a member of the EU
  isEU: boolean
}

/*
 * A geographic location
 */
type GeoLocation = {
  // Geographic coordinate that specifies the north–south position of a point on the Earth's surface
  latitude: number
  // Geographic coordinate that specifies the east-west position of a point on the Earth's surface
  longitude: number
  // The expected accuracy of the location: 0-none, there are either no coordinates or the coordinates
  // do not represent the location; 1-low; 2-medium; 3-high;
  confidence: number
}

enum ShipmentType {
  // Documents (up to 0.5kg)
  document = "document",
  // Parcel (up to 50kg)

  pack = "pack",
  // Post parcel (up to 20kg, 60x60x60cm and sub-code = office-office)
  post_pack = "post_pack",
  // Pallet (80x120x180cm and up to 1000kg)
  pallet = "pallet",
  // Cargo express (palletized shipment over 80x120x180cm up to 200x200x180 and up to 500kg)
  cargo = "cargo",
  // Pallet + documents
  documentpallet = "documentpallet",
  // Letter (big)
  big_letter = "big_letter",
  // Letter (small)
  small_letter = "small_letter",
  // Money transfer
  money_transfer = "money_transfer",
  // Post transfer
  pp = "pp"
}

export type OfficesPayload = {
  offices: Office[]
}

export type OfficeInput = {
  // Three-letter ISO Alpha-3 code of the country (e.g. AUT, BGR, etc.)
  countryCode?: string;
  //ID of the city (optional)
  cityID?: number
}
