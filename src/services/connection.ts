import axios from 'axios';

enum Method {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

class Connection {
  private static instance: Connection;

  private constructor() {}

  public static getInstance(): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }

    return Connection.instance;
  }

  request = async (path: string, method: Method, data?: object, headers?: object): Promise<object | void> => {
    try {
      const response = await axios.request({
        url: path,
        method: method,
        data: data,
        headers: headers,
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data;
        throw new Error(errorData);
      }
    }
  };
}

export { Connection, Method };
