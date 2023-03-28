import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
/** Query provides defines the gRPC querier service */

export interface Query {
  /** Connection queries an IBC connection end. */
  connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
  /** Connections queries all the IBC connections of a chain. */

  connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */

  clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */

  connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */

  connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Connection queries an IBC connection end. */


  connection = async (request: QueryConnectionRequest): Promise<QueryConnectionResponse> => {
    const data = QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then(data => QueryConnectionResponse.decode(new _m0.Reader(data)));
  };
  /* Connections queries all the IBC connections of a chain. */

  connections = async (request: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponse> => {
    const data = QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then(data => QueryConnectionsResponse.decode(new _m0.Reader(data)));
  };
  /* ClientConnections queries the connection paths associated with a client
   state. */

  clientConnections = async (request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> => {
    const data = QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then(data => QueryClientConnectionsResponse.decode(new _m0.Reader(data)));
  };
  /* ConnectionClientState queries the client state associated with the
   connection. */

  connectionClientState = async (request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> => {
    const data = QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then(data => QueryConnectionClientStateResponse.decode(new _m0.Reader(data)));
  };
  /* ConnectionConsensusState queries the consensus state associated with the
   connection. */

  connectionConsensusState = async (request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> => {
    const data = QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then(data => QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse> {
      return queryService.connection(request);
    },

    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse> {
      return queryService.connections(request);
    },

    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
      return queryService.clientConnections(request);
    },

    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
      return queryService.connectionClientState(request);
    },

    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
      return queryService.connectionConsensusState(request);
    }

  };
};