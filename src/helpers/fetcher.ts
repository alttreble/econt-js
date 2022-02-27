import fetch from 'node-fetch';
import env from "../config/env";

type FetcherAuth = {
  username: string,
  password: string,
  url: string;
}

export default class Fetcher {
  private auth: FetcherAuth = {
    username: "iasp-dev",
    password: "iasp-dev",
    url: env.API_ECONT_TEST_MODE ? env.API_ECONT_TEST_URL : env.API_ECONT_PRODUCTION_URL
  };

  constructor() {
    const [testMode ,username, password] = [
      env.API_ECONT_TEST_MODE,
      env.API_ECONT_USERNAME,
      env.API_ECONT_PASSWORD
    ];

    if ((!username || !password) && !testMode) {
      throw new Error("Provide API_ECONT_USERNAME and API_ECONT_PASSWORD environmental variables");
    }

    if (!testMode) {
      this.auth.username = username;
      this.auth.password = password;
    }
  }

  async request<B extends object = {}>(path: string, body?: B) {
    return fetch(
      `${env.API_ECONT_PRODUCTION_URL}${path}`,
      {
      method: "POST",
      headers: [
        ['Content-Type', 'application/json']
      ],
      body: JSON.stringify(body)
    })
  }

  async requestAuthorized<B extends object = {}>(path: string, body?: B) {
    return fetch(
      `${this.auth.url}${path}`,
      {
        method: "POST",
        headers: [
          ['Content-Type', 'application/json'],
          ["Authorization", `Basic ${this.auth.username}:${this.auth.password}`]
        ],
        body: JSON.stringify(body)
      })
  }
}
