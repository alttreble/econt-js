import fetch from 'cross-fetch';

type FetcherOptions = {
  username: string
  password: string
  testMode: boolean
}

export default class Fetcher {
  private readonly username;
  private readonly password
  private readonly demoUrl = "http://demo.econt.com/ee/services/";
  private readonly productionUrl = "http://ee.econt.com/services/";
  private readonly testMode;

  constructor({
    username,
    password,
    testMode
  }: FetcherOptions) {
    this.username = username;
    this.password = password;
    this.testMode = testMode;
  }

  async request<B extends object = {}>(path: string, body?: B) {
    return fetch(
      `${this.productionUrl}${path}`,
      {
        method: "POST",
        headers: [
          ['Content-Type', 'application/json']
        ],
        body: JSON.stringify(body)
      })
  }

  async requestAuthorized<B extends object = {}>(path: string, body?: B) {
    const url = this.testMode ? this.demoUrl : this.productionUrl;
    return fetch(
      `${url}${path}`,
      {
        method: "POST",
        headers: [
          ['Content-Type', 'application/json'],
          ["Authorization", `Basic ${this.username}:${this.password}`]
        ],
        body: JSON.stringify(body)
      })
  }
}
