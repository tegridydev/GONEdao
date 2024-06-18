# Polygon GONE NFT Balance Strategy

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
