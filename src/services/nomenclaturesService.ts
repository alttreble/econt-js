import {OfficeInput, OfficesPayload} from "../types";
import Fetcher from "../helpers/fetcher";

export interface NomenclaturesServiceI {
  getOffices(input: OfficeInput): Promise<OfficesPayload>
}

export default class NomenclaturesService {
  private readonly fetcher;

  constructor(fetcher: Fetcher) {
    this.fetcher = fetcher;
  }

  async getOffices(input: OfficeInput = {}) {
    const res = await this.fetcher.request<OfficeInput>(
      "Nomenclatures/NomenclaturesService.getOffices.json",
      input
    );

    return (await res.json()) as OfficesPayload;
  }
}
