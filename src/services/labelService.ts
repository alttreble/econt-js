import {CreateLabelInput, CreateLabelPayload} from "../types";
import Fetcher from "../helpers/fetcher";

export interface LabelServiceI {
  createLabel(input: CreateLabelInput): Promise<CreateLabelPayload>
}

export default class LabelService implements LabelServiceI {
  private readonly fetcher;

  constructor(fetcher: Fetcher) {
    this.fetcher = fetcher;
  }

  async createLabel(input: CreateLabelInput) {
    const res = await this.fetcher.requestAuthorized(
      "Shipments/LabelService.createLabel.json",
      input
    )

    return (await res.json()) as CreateLabelPayload;
  }

}
