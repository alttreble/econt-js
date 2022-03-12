import {Context, CreateLabelInput, CreateLabelPayload} from "../types";

export interface LabelServiceI {
  createLabel(input: CreateLabelInput): Promise<CreateLabelPayload>
}

export default class LabelService implements LabelServiceI {
  private readonly context;

  constructor(context: Context) {
    this.context = context;
  }

  async createLabel(input: CreateLabelInput) {
    const {fetcher} = this.context;
    const res = await fetcher.requestAuthorized(
      "Shipments/LabelService.createLabel.json",
      input
    )

    return (await res.json()) as CreateLabelPayload;
  }

}
