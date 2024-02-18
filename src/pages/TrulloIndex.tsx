import { Button, Input, Paper, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { TrulloConnection } from '../services/TrulloConnection';
import { BoardDTO } from '../dto/Trullo.dto';
import { Trullo } from '../components/trullo/Trullo';
import { UUID } from 'crypto';

const conn = new TrulloConnection();

const TrulloIndex = () => {
  const [trullo, setTrullo] = useState<BoardDTO[]>();
  const [newBoard, setNewBoard] = useState<string>('');
  const getAll = async () => {
    const boards = await conn.getAllBoards();
    setTrullo(boards);
  };
  const createBoard = async () => {
    const board = await conn.createBoard({ title: newBoard });
    setTrullo([...(trullo as BoardDTO[]), board]);
  };

  useEffect(() => {
    getAll();
    console.log('TrulloIndex mounted');
  }, []);
  const onDeleteBoard = (id: UUID) => {
    const newBoards = trullo?.filter((board) => board.id !== id);
    setTrullo(newBoards);
  };
  const onDeleteCard = (id: UUID) => {
    const newBoards = trullo?.map((board) => {
      const newCards = board.cards?.filter((card) => card.id !== id);
      return { ...board, cards: newCards };
    });
    setTrullo(newBoards);
  };
  return (
    <>
      <Paper>
        <Button variant="contained" color="primary" onClick={getAll}>
          Refresh
        </Button>
        <Input placeholder="Create Board" value={newBoard} onChange={(e) => setNewBoard(e.target.value)} />
        <Button variant="contained" color="primary" onClick={createBoard}>
          Create
        </Button>
      </Paper>
      <Paper>
        {trullo ? (
          <Trullo trullo={trullo} onDeleteBoard={onDeleteBoard} onDeleteCard={onDeleteCard} />
        ) : (
          <Typography variant="h5">No boards available</Typography>
        )}
      </Paper>
    </>
  );
};

export { TrulloIndex };
