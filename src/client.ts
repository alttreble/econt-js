import 'dotenv/config';
import Fetcher from "./helpers/fetcher";
import NomenclaturesService, {NomenclaturesServiceI} from "./services/nomenclaturesService";

export interface EcontClientI {
  NomenclaturesService: NomenclaturesServiceI
}

class EcontClient implements EcontClientI {
  public NomenclaturesService: NomenclaturesServiceI;

  private readonly fetcher;

  constructor() {
    this.fetcher = new Fetcher();
    this.NomenclaturesService = new NomenclaturesService(this.fetcher);
  }
}

export default EcontClient;
