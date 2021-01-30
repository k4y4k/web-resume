// const twitter = getNetworkUsernames(profiles, 'twitter')

interface profileItem {
  network: string
  username: string
  url?: string
}

const getNetworkUsernames = (
  profiles: profileItem[],
  networkName: string
): string | undefined => {
  const regex = new RegExp(networkName, 'i')

  const res = profiles.filter((el: profileItem) => regex.test(el.network))
  return res[0]?.username
}

export default getNetworkUsernames
