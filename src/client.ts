import 'dotenv/config';
import Fetcher from "./helpers/fetcher";
import NomenclaturesService, {NomenclaturesServiceI} from "./services/nomenclaturesService";
import LabelService, {LabelServiceI} from "./services/labelService";

export interface EcontClientI {
  NomenclaturesService: NomenclaturesServiceI,
  LabelService: LabelServiceI
}

class EcontClient implements EcontClientI {
  public NomenclaturesService;
  public LabelService;
  private readonly fetcher;

  constructor() {
    this.fetcher = new Fetcher();
    this.NomenclaturesService = new NomenclaturesService(this.fetcher);
    this.LabelService = new LabelService(this.fetcher);
  }
}

export default EcontClient;
