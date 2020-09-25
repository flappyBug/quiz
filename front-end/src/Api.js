export default class Api {
  static baseUrl = "http://localhost:8080";

  static get(path) {
    return fetch(`${Api.baseUrl}${path}`);
  }

  static post(path, data) {
    return fetch(`${Api.baseUrl}${path}`, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
      cache: "no-cache",
      credentials: "same-origin",
      method: "POST",
      mode: "cors",
      redirect: "follow",
      referrer: "no-referrer",
    });
  }
}
