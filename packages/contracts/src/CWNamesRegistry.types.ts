/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Addr = string;
export interface ConfigResponse {
  admin: Addr;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  register_name: {
    name: string;
    [k: string]: unknown;
  };
} | {
  update_config: {
    new_admin?: string | null;
    [k: string]: unknown;
  };
} | {
  reserve: {
    name: string;
    [k: string]: unknown;
  };
} | {
  revoke: {
    name: string;
    [k: string]: unknown;
  };
};
export interface InstantiateMsg {
  admin: string;
  [k: string]: unknown;
}
export interface IsNameAvailableToRegisterResponse {
  reserved: boolean;
  taken: boolean;
  [k: string]: unknown;
}
export interface LookUpDaoByNameResponse {
  dao?: Addr | null;
  [k: string]: unknown;
}
export interface LookUpNameByDaoResponse {
  name?: string | null;
  [k: string]: unknown;
}
export type QueryMsg = {
  config: {
    [k: string]: unknown;
  };
} | {
  look_up_name_by_dao: {
    dao: string;
    [k: string]: unknown;
  };
} | {
  look_up_dao_by_name: {
    name: string;
    [k: string]: unknown;
  };
} | {
  is_name_available_to_register: {
    name: string;
    [k: string]: unknown;
  };
};
export type CWNamesRegistryExecuteMsg = ExecuteMsg;