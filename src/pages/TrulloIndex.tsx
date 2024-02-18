import { Button, Input, Paper, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { TrulloConnection } from '../services/TrulloConnection';
import { BoardDTO, CardDTO } from '../dto/Trullo.dto';
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
  }, []);
  const onDeleteBoard = async (id: UUID) => {
    await conn.deleteBoard(id);
    const newBoards = trullo?.filter((board) => board.id !== id);
    setTrullo(newBoards);
  };
  const onDeleteCard = async (id: UUID) => {
    conn.deleteCard(id);
    const newBoards = trullo?.map((board) => {
      const newCards = board.cards?.filter((card) => card.id !== id);
      return { ...board, cards: newCards };
    });
    setTrullo(newBoards);
  };
  const onAddCard = async (id: UUID, card: string) => {
    const newCard = await conn.createCard(id, { item: card });
    const newBoards = trullo?.map((board) => {
      if (board.id === id) {
        return { ...board, cards: [...(board.cards as CardDTO[]), newCard] };
      }
      return board;
    });
    setTrullo(newBoards as BoardDTO[]);
  };
  const onBoardEdit = async (id: UUID, newName: string) => {
    conn.updateBoard(id, { title: newName });
    const newBoards = trullo?.map((board) => {
      if (board.id === id) {
        return { ...board, title: newName };
      }
      return board;
    });
    setTrullo(newBoards as BoardDTO[]);
  };
  const onCardEdit = async (id: UUID, newName: string) => {
    conn.updateCard(id, { item: newName });
    const newBoards = trullo?.map((board) => {
      const newCards = board.cards?.map((card) => {
        if (card.id === id) {
          return { ...card, item: newName };
        }
        return card;
      });
      return { ...board, cards: newCards };
    });
    setTrullo(newBoards as BoardDTO[]);
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
          <Trullo
            trullo={trullo}
            onDeleteBoard={onDeleteBoard}
            onDeleteCard={onDeleteCard}
            onAddCard={onAddCard}
            onBoardEdit={onBoardEdit}
            onCardEdit={onCardEdit}
          />
        ) : (
          <Typography variant="h5">No boards available</Typography>
        )}
      </Paper>
    </>
  );
};

export { TrulloIndex };
