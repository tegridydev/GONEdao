import { Multicaller } from '../../utils';

export const author = 'your-github-username';
export const version = '0.1.0';

const abi = [
  'function balanceOf(address owner) view returns (uint256)'
];

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options,
  snapshot
): Promise<Record<string, number>> {
  const blockTag = typeof snapshot === 'number' ? snapshot : 'latest';
  const multi = new Multicaller(network, provider, abi, { blockTag });
  
  options.contractAddresses.forEach((contractAddress) => {
    addresses.forEach((address) => {
      multi.call(`${contractAddress}-${address}`, contractAddress, 'balanceOf', [address]);
    });
  });

  const result = await multi.execute();
  const scores = {};

  addresses.forEach((address) => {
    scores[address] = options.contractAddresses.some((contractAddress) => result[`${contractAddress}-${address}`] > 0) ? 1 : 0;
  });

  return scores;
}
