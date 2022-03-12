import {Context, OfficeInput, OfficesPayload} from "../types";

export interface NomenclaturesServiceI {
  getOffices(input: OfficeInput): Promise<OfficesPayload>
}

export default class NomenclaturesService {
  private readonly context;

  constructor(context: Context) {
    this.context = context;
  }

  async getOffices(input: OfficeInput = {}) {
    const {fetcher} = this.context;

    const res = await fetcher.request<OfficeInput>(
      "Nomenclatures/NomenclaturesService.getOffices.json",
      input
    );

    return (await res.json()) as OfficesPayload;
  }
}
