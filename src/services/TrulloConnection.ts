import { Connection, Method } from './connection';
import { API } from '../router/ApiPaths';
import { UUID } from 'crypto';
import { BoardDTO, CardDTO } from '../dto/Trullo.dto';
import { HttpStatusCode } from 'axios';

class TrulloConnection {
  private readonly conn: Connection;
  private readonly apiPath: string;
  constructor(conn = Connection.getInstance()) {
    this.conn = conn;
    this.apiPath = API.PROJECT.TRULLO;
  }

  private readonly sendRequest = async (method: Method, subpath: string = '', data?: object) => {
    const headers = {};
    const path = `${this.apiPath}/${subpath}`;
    const resp = await this.conn.request(`${path}`, method, data, headers);
    if (resp instanceof Error || !resp) {
      throw resp;
    } else if (resp) {
      return resp;
    }
  };

  // Boards
  getAllBoards = async (): Promise<BoardDTO[]> => {
    const resp = await this.sendRequest(Method.GET);
    if (resp && 'data' in resp) {
      return resp.data as BoardDTO[];
    }
    throw new Error('Invalid resp');
  };

  deleteAllBoards = async (): Promise<HttpStatusCode> => {
    const resp = await this.sendRequest(Method.DELETE);
    if (resp && 'status' in resp) {
      return resp.status as HttpStatusCode;
    }
    throw new Error('Invalid resp');
  };

  // Boards CRUD
  createBoard = async (data: BoardDTO): Promise<BoardDTO> => {
    const resp = await this.sendRequest(Method.POST, '', data);
    if (resp && 'data' in resp) {
      return resp.data as BoardDTO;
    }
    throw new Error('Invalid resp');
  };

  readBoard = async (id: UUID): Promise<BoardDTO> => {
    const resp = await this.sendRequest(Method.GET, id);
    if (resp && 'data' in resp) {
      return resp.data as BoardDTO;
    }
    throw new Error('Invalid resp');
  };

  updateBoard = async (id: UUID, data: BoardDTO): Promise<BoardDTO> => {
    const resp = await this.sendRequest(Method.PATCH, id, data);
    if (resp && 'data' in resp) {
      return resp.data as BoardDTO;
    }
    throw new Error('Invalid resp');
  };

  deleteBoard = async (id: UUID) => await this.sendRequest(Method.DELETE, id);

  // Cards CRUD
  createCard = async (id: UUID, data: CardDTO): Promise<CardDTO> => {
    const resp = await this.sendRequest(Method.POST, `board/${id}`, data);
    if (resp && 'data' in resp) {
      return resp.data as CardDTO;
    }
    throw new Error('Invalid resp');
  };

  readCard = async (id: UUID): Promise<CardDTO> => {
    const resp = await this.sendRequest(Method.GET, `card/${id}`);
    if (resp && 'data' in resp) {
      return resp.data as CardDTO;
    }
    throw new Error('Invalid resp');
  };
  updateCard = async (id: UUID, data: CardDTO): Promise<CardDTO> => {
    const resp = await this.sendRequest(Method.PATCH, `card/${id}`, data);
    if (resp && 'data' in resp) {
      return resp.data as CardDTO;
    }
    throw new Error('Invalid resp');
  };

  deleteCard = async (id: UUID): Promise<HttpStatusCode> => {
    const resp = await this.sendRequest(Method.DELETE, `card/${id}`);
    if (resp && 'status' in resp) {
      console.log(resp.status);
      return resp.status as HttpStatusCode;
    }
    throw new Error('Invalid resp');
  };
}

export { TrulloConnection };
