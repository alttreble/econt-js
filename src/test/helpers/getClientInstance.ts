import EcontClient from "../../client";

let instance: EcontClient;

export default function getClientInstance() {
  if (!instance) {
    instance = new EcontClient({
      testMode: true
    })
  }

  return instance;
}
