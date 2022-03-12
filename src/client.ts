import NomenclaturesService, { NomenclaturesServiceI } from "./services/nomenclaturesService";
import LabelService, { LabelServiceI } from "./services/labelService";
import { Context } from './types';
import Fetcher from "./helpers/fetcher";

function buildContext({
  username = "iasp-dev",
  password = "iasp-dev",
  testMode = true
}: EcontClientOptions): Context {
  return {
    fetcher: new Fetcher({
      username,
      password,
      testMode
    })
  }
}

type EcontClientOptions = {
  username?: undefined
  password?: undefined
  testMode: true
} | {
  username: string
  password: string
  testMode: false
}

export interface EcontClientI {
  NomenclaturesService: NomenclaturesServiceI,
  LabelService: LabelServiceI
}

class EcontClient implements EcontClientI {
  public NomenclaturesService;
  public LabelService;
  private readonly context;

  constructor(options: EcontClientOptions) {
    this.context = buildContext(options);
    this.NomenclaturesService = new NomenclaturesService(this.context);
    this.LabelService = new LabelService(this.context);
  }
}

export default EcontClient;