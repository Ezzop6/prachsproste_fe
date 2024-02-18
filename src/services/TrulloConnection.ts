import { Connection, Method } from './connection';
import { API } from '../router/ApiPaths';
import { UUID } from 'crypto';
import { BoardDTO, CardDTO, TrulloDTO } from '../dto/Trullo.dto';

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
    const response = await this.conn.request(`${path}`, method, data, headers);
    if (response instanceof Error) {
      throw response;
    } else if (response instanceof Object) {
      return response.data;
    }
  };

  // Boards
  getAllBoards = async (): Promise<TrulloDTO> => {
    return await this.sendRequest(Method.GET);
  };

  deleteAllBoards = async () => await this.sendRequest(Method.DELETE);

  // Boards CRUD
  createBoard = async (data: BoardDTO): Promise<BoardDTO> => {
    return await this.sendRequest(Method.POST, '', data);
  };

  readBoard = async (id: UUID): Promise<BoardDTO> => {
    return await this.sendRequest(Method.GET, id);
  };

  updateBoard = async (id: UUID, data: BoardDTO): Promise<BoardDTO> => {
    return await this.sendRequest(Method.PATCH, id, data);
  };

  deleteBoard = async (id: UUID) => await this.sendRequest(Method.DELETE, id);

  // Cards CRUD
  createCard = async (id: UUID, data: CardDTO): Promise<CardDTO> => {
    return await this.sendRequest(Method.POST, `board/${id}`, data);
  };

  readCard = async (id: UUID): Promise<CardDTO> => {
    return await this.sendRequest(Method.GET, `card/${id}`);
  };

  deleteCard = async (id: UUID) => {
    return await this.sendRequest(Method.DELETE, `card/${id}`);
  };
}

export { TrulloConnection };
