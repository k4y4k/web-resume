import faker from "faker";
import getNetworkUsernames, { type ProfileItem } from "./getNetworkUsernames";

describe("getNetworkUsernames", () => {
  test("finds network in list, returns matching username", () => {
    const randomUsername = faker.internet.userName();
    const data = [
      { network: "spotify", username: faker.internet.userName() },
      { network: "twitter", username: randomUsername },
      { network: "tiktok", username: faker.internet.userName() },
    ] as ProfileItem[];

    expect(getNetworkUsernames(data, "twitter")).toBe(randomUsername);
  });

  test("returns null if network not in list", () => {
    const randomUsername = faker.internet.userName();
    const data = [
      { network: "foo", username: faker.internet.userName() },
    ] as ProfileItem[];

    expect(getNetworkUsernames(data, randomUsername)).toBeNull();
  });
});
