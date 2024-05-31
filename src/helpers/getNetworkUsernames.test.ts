import faker from "faker";
import getNetworkUsernames from "./getNetworkUsernames";

describe("getNetworkUsernames", () => {
  test("finds network in list, returns matching username", () => {
    const randomUsername = faker.internet.userName();
    const data = [
      { network: "spotify", username: faker.internet.userName() },
      { network: "twitter", username: randomUsername },
      { network: "baidu", username: faker.internet.userName() },
    ];

    expect(getNetworkUsernames(data, "twitter")).toBe(randomUsername);
  });

  test("returns null if network not in list", () => {
    const randomUsername = faker.internet.userName();
    const data = [
      {
        network: "foo",
        // different username
        username: faker.internet.userName(),
      },
    ];

    expect(getNetworkUsernames(data, randomUsername)).toBeNull();
  });
});
