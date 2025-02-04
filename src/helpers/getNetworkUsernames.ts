/* This function accepts an array of profileItems and a string.
 * It searches for a profileItem with a network property that matches the string (case insensitive)
 * It returns the username and optionally URL inside the profileItem.
 *
 * eg for data = [{network:"a", username:"AA"}, {network:"b", username:"BB"}]
 * calling getNetworkUsernames(data, "a") will return "AA"
 */

export interface ProfileItem {
  network: string;
  username: string;
  url: string;
}

interface UsernameAndUrl {
  username: string;
  url: string;
}

function getNetworkUsernames(
  profiles: ProfileItem[],
  networkName: string
): string | null;
function getNetworkUsernames(
  profiles: ProfileItem[],
  networkName: string,
  shouldProvideUrl: boolean
): UsernameAndUrl | null;

function getNetworkUsernames(
  profiles: ProfileItem[],
  networkName: string,
  shouldProvideUrl?: boolean
): string | null | UsernameAndUrl {
  const regex = new RegExp(networkName, "i");

  const res = profiles.filter((el: ProfileItem) => regex.test(el.network));

  if (shouldProvideUrl) {
    // biome-ignore lint/style/useConst: <explanation>
    let username: string;
    // biome-ignore lint/style/useConst: <explanation>
    let url: string;

    if (!res[0]) {
      return null;
    }

    username = res[0].username;
    url = res[0].url;

    return { username, url };
  }

  return res[0]?.username ?? null;
}

export default getNetworkUsernames;
