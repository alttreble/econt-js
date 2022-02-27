import {cleanEnv, url, str, bool} from 'envalid';

export default cleanEnv(process.env, {
  API_ECONT_TEST_MODE: bool({default: false}),
  API_ECONT_TEST_URL: url({default: "http://demo.econt.com/ee/services/"}),
  API_ECONT_PRODUCTION_URL: url({default: "http://ee.econt.com/services/"}),
  API_ECONT_USERNAME: str({default: ""}),
  API_ECONT_PASSWORD: str({default: ""})
})
