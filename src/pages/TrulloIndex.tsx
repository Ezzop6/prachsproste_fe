import { Button, Input, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { TrulloConnection } from '../services/TrulloConnection';
import { TrulloDTO } from '../dto/Trullo.dto';

const conn = new TrulloConnection();

const TrulloIndex = () => {
  const [data, setData] = useState<TrulloDTO>();
  const deleteAll = async () => {
    const boards = await conn.deleteAllBoards();
    setData(boards);
  };
  const getAll = async () => {
    const boards = await conn.getAllBoards();
    setData(boards);
  };
  return (
    <Paper>
      <Button onClick={deleteAll}>Delete All</Button>
      <Button onClick={getAll}>Get All</Button>
      <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
        <Input placeholder="New Board"></Input>
        <Button>Create Board</Button>
      </Paper>
      <Typography>{JSON.stringify(data)}</Typography>
    </Paper>
  );
};

export { TrulloIndex };
