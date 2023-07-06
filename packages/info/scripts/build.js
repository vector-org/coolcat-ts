import { assets, chains } from 'chain-registry';
import { writeFileSync } from 'fs';

const chainName = 'coolcat';

// const asset_list = assets.reduce((m, { chain_name }) => {
//   if (chain_name !== chainName) return m;
//   return [...m, ...getAssetLists(chain_name + 'testnet', ibc, assets)];
// }, []);

// const assetList = assets.find((list) => list.chain_name === chainName);
// const chain = chains.find((chain) => chain.chain_name === chainName);
const testnet = chains.find(
  (chain) => chain.chain_name === chainName + 'testnet'
);
const testnetAssetList = assets.find(
  (list) => list.chain_name === chainName + 'testnet'
);

const write = (file, json, TypeName, isArray = false) => {
  const strfy = JSON.stringify(json, null, 2);
  const exportType = isArray ? TypeName + '[]' : TypeName;
  writeFileSync(
    `${__dirname}/../src/build/${file}.ts`,
    `import { ${TypeName} } from '@chain-registry/types';
const ${file}: ${exportType} = ${strfy};
export default ${file};
    `
  );
};

// write(`chain`, chain, 'Chain');
write(`chain`, testnet, 'Chain');
write(`assets`, testnetAssetList, 'AssetList');
write(`asset_list`, testnetAssetList[0], 'AssetList');
// write(`asset_list`, asset_list[0], 'AssetList');
