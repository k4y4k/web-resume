/* This function accepts an array of profileItems and a string.
 * It searches for a profileItem with a network property that matches the string (case insensitive)
 * It returns the username inside the profileItem.
 *
 * eg for data = [{network:"a", username:"AA"}, {network:"b", username:"BB"}]
 * calling getNetworkUsernames(data, "a") will return "AA"
 */

interface profileItem {
  network: string;
  username: string;
}

const getNetworkUsernames = (
  profiles: profileItem[],
  networkName: string,
): string | null => {
  const regex = new RegExp(networkName, "i");

  const res = profiles.filter((el: profileItem) => regex.test(el.network));

  return res[0]?.username ?? null;
};

export default getNetworkUsernames;
