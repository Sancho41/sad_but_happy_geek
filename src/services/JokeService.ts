export class FetchError extends Error {}

export default class JokeService {
  static async getJoke(): Promise<string> {
    try {
      const apiUrl = "https://geek-jokes.sameerkumar.website/api?format=json";
      const response = await fetch(apiUrl); // Get the joke from api
      const data = await response.json();
      return data.joke;
    } catch (error) {
      throw new FetchError();
    }
  }
}
