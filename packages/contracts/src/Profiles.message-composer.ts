/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { AddressOfResponse, AdminAddressResponse, Expiration, Timestamp, Uint64, AllNftInfoResponse, OwnerOfResponse, Approval, NftInfoResponseForMetadata, Metadata, AllTokensResponse, Uint128, ContractInfoResponse, SurchargeInfo, ExecuteMsg, UpdateMintingFeesMsg, UpdateMetadataMsg, MintMsgForMetadata, InstantiateMsg, ListUserInfoResponse, UserInfo, MigrateMsg, MinterResponse, MintingFeesResponse, NftInfoResponse, NumTokensResponse, PrimaryAliasResponse, QueryMsg, TokensResponse } from "./Profiles.types";
export interface ProfilesMessage {
  contractAddress: string;
  sender: string;
  updateMintingFees: ({
    baseMintFee,
    burnPercentage,
    shortNameSurcharge,
    tokenCap
  }: {
    baseMintFee?: Uint128;
    burnPercentage?: number;
    shortNameSurcharge?: SurchargeInfo;
    tokenCap?: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateUsernameLengthCap: ({
    newLength
  }: {
    newLength: number;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateMetadata: ({
    metadata,
    tokenId
  }: {
    metadata: Metadata;
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  burn: ({
    tokenId
  }: {
    tokenId: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setAdminAddress: ({
    adminAddress
  }: {
    adminAddress: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mint: ({
    extension,
    owner,
    tokenId,
    tokenUri
  }: {
    extension: Metadata;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class ProfilesMessageComposer implements ProfilesMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateMintingFees = this.updateMintingFees.bind(this);
    this.updateUsernameLengthCap = this.updateUsernameLengthCap.bind(this);
    this.updateMetadata = this.updateMetadata.bind(this);
    this.burn = this.burn.bind(this);
    this.setAdminAddress = this.setAdminAddress.bind(this);
    this.mint = this.mint.bind(this);
  }

  updateMintingFees = ({
    baseMintFee,
    burnPercentage,
    shortNameSurcharge,
    tokenCap
  }: {
    baseMintFee?: Uint128;
    burnPercentage?: number;
    shortNameSurcharge?: SurchargeInfo;
    tokenCap?: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_minting_fees: {
            base_mint_fee: baseMintFee,
            burn_percentage: burnPercentage,
            short_name_surcharge: shortNameSurcharge,
            token_cap: tokenCap
          }
        })),
        funds: _funds
      })
    };
  };
  updateUsernameLengthCap = ({
    newLength
  }: {
    newLength: number;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_username_length_cap: {
            new_length: newLength
          }
        })),
        funds: _funds
      })
    };
  };
  updateMetadata = ({
    metadata,
    tokenId
  }: {
    metadata: Metadata;
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_metadata: {
            metadata,
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  burn = ({
    tokenId
  }: {
    tokenId: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          burn: {
            token_id: tokenId
          }
        })),
        funds: _funds
      })
    };
  };
  setAdminAddress = ({
    adminAddress
  }: {
    adminAddress: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_admin_address: {
            admin_address: adminAddress
          }
        })),
        funds: _funds
      })
    };
  };
  mint = ({
    extension,
    owner,
    tokenId,
    tokenUri
  }: {
    extension: Metadata;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  }, _funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {
            extension,
            owner,
            token_id: tokenId,
            token_uri: tokenUri
          }
        })),
        funds: _funds
      })
    };
  };
}