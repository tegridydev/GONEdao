# GONEDAO Balance Strategy

This strategy calculates the voting power based on the balance of GONE tokens on the Polygon network. Only addresses with a balance of 250,000 or more GONE tokens have voting power.

## Parameters

- **address**: The contract address of the GONE token.
- **symbol**: The symbol of the GONE token.
- **decimals**: The number of decimals used by the GONE token.

Example:
```json
{
  "address": "0x162539172b53E9a93b7d98Fb6c41682De558a320",
  "symbol": "GONE",
  "decimals": 18
}
```

# GONEDAO NFT Balance Strategy

This strategy calculates the voting power based on the ownership of specific NFTs from the GONE ecosystem. Only addresses holding any of the specified NFTs have voting power.

## Parameters

- **contractAddresses**: An array of contract addresses of the NFTs.
- **symbol**: The symbol of the NFT collection.

Example:
```json
  {
    "name": "Example query",
    "strategy": {
      "name": "polygon-gone-nft-balance",
      "params": {
        "contractAddresses": [
          "0x93cD9297940d20761Ba4a3d17Eae3da6dc47992A"
        ],
        "symbol": "GONERAT-PUNKS"
      }
    }
```