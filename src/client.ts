import NomenclaturesService, { NomenclaturesServiceI } from "./services/nomenclaturesService";
import LabelService, { LabelServiceI } from "./services/labelService";
import { Context } from './types';
import Fetcher from "./helpers/fetcher";

function buildContext({
  username = "iasp-dev",
  password = "iasp-dev",
  testMode = true
}: ClientOptions): Context {
  return {
    fetcher: new Fetcher({
      username,
      password,
      testMode
    })
  }
}

export type ClientOptions = {
  username?: undefined
  password?: undefined
  testMode: true
} | {
  username: string
  password: string
  testMode: false
}

export interface ClientI {
  NomenclaturesService: NomenclaturesServiceI,
  LabelService: LabelServiceI
}

export default class Client implements ClientI {
  public NomenclaturesService;
  public LabelService;
  private readonly context;

  constructor(options: ClientOptions) {
    this.context = buildContext(options);
    this.NomenclaturesService = new NomenclaturesService(this.context);
    this.LabelService = new LabelService(this.context);
  }
}