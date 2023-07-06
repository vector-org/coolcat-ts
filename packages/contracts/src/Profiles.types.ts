/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface AddressOfResponse {
  owner: string;
  [k: string]: unknown;
}
export interface AdminAddressResponse {
  minter: string;
  [k: string]: unknown;
}
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface AllNftInfoResponse {
  access: OwnerOfResponse;
  info: NftInfoResponseForMetadata;
  [k: string]: unknown;
}
export interface OwnerOfResponse {
  approvals: Approval[];
  owner: string;
  [k: string]: unknown;
}
export interface Approval {
  expires: Expiration;
  spender: string;
  [k: string]: unknown;
}
export interface NftInfoResponseForMetadata {
  extension: Metadata;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface Metadata {
  banner?: string | null;
  bio?: string | null;
  discord?: string | null;
  email?: string | null;
  public_name?: string | null;
  telegram?: string | null;
  twitter?: string | null;
  [k: string]: unknown;
}
export interface AllTokensResponse {
  tokens: string[];
  [k: string]: unknown;
}
export type Uint128 = string;
export interface ContractInfoResponse {
  base_mint_fee?: Uint128 | null;
  burn_percentage?: number | null;
  name: string;
  native_decimals: number;
  native_denom: string;
  short_name_surcharge?: SurchargeInfo | null;
  symbol: string;
  token_cap?: number | null;
  [k: string]: unknown;
}
export interface SurchargeInfo {
  surcharge_fee: Uint128;
  surcharge_max_characters: number;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  update_minting_fees: UpdateMintingFeesMsg;
} | {
  update_username_length_cap: {
    new_length: number;
    [k: string]: unknown;
  };
} | {
  update_metadata: UpdateMetadataMsg;
} | {
  burn: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  set_admin_address: {
    admin_address: string;
    [k: string]: unknown;
  };
} | {
  mint: MintMsgForMetadata;
};
export interface UpdateMintingFeesMsg {
  base_mint_fee?: Uint128 | null;
  burn_percentage?: number | null;
  short_name_surcharge?: SurchargeInfo | null;
  token_cap?: number | null;
  [k: string]: unknown;
}
export interface UpdateMetadataMsg {
  metadata: Metadata;
  token_id: string;
  [k: string]: unknown;
}
export interface MintMsgForMetadata {
  extension: Metadata;
  owner: string;
  token_id: string;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  admin_address: string;
  base_mint_fee?: Uint128 | null;
  burn_percentage?: number | null;
  name: string;
  native_decimals: number;
  native_denom: string;
  short_name_surcharge?: SurchargeInfo | null;
  symbol: string;
  token_cap?: number | null;
  username_length_cap?: number | null;
  [k: string]: unknown;
}
export interface ListUserInfoResponse {
  users: UserInfo[];
  [k: string]: unknown;
}
export interface UserInfo {
  alias: string;
  metadata: Metadata;
  owner: string;
  [k: string]: unknown;
}
export interface MigrateMsg {
  target_version: string;
  [k: string]: unknown;
}
export interface MinterResponse {
  minter: string;
  [k: string]: unknown;
}
export interface MintingFeesResponse {
  base_mint_fee?: Uint128 | null;
  burn_percentage?: number | null;
  native_decimals: number;
  native_denom: string;
  short_name_surcharge?: SurchargeInfo | null;
  token_cap?: number | null;
  [k: string]: unknown;
}
export interface NftInfoResponse {
  extension: Metadata;
  token_uri?: string | null;
  [k: string]: unknown;
}
export interface NumTokensResponse {
  count: number;
  [k: string]: unknown;
}
export interface PrimaryAliasResponse {
  username: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  primary_alias: {
    address: string;
    [k: string]: unknown;
  };
} | {
  owner_of: {
    include_expired?: boolean | null;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  address_of: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  num_tokens: {
    [k: string]: unknown;
  };
} | {
  contract_info: {
    [k: string]: unknown;
  };
} | {
  nft_info: {
    token_id: string;
    [k: string]: unknown;
  };
} | {
  all_nft_info: {
    include_expired?: boolean | null;
    token_id: string;
    [k: string]: unknown;
  };
} | {
  tokens: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  all_tokens: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  admin_address: {
    [k: string]: unknown;
  };
} | {
  list_user_info: {
    aliases: string[];
    [k: string]: unknown;
  };
};
export interface TokensResponse {
  tokens: string[];
  [k: string]: unknown;
}
export type ProfilesExecuteMsg = ExecuteMsg;