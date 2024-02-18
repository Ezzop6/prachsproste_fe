import { Box, Button, Input, Paper, Typography } from '@mui/material';
import { BoardDTO } from '../../dto/Trullo.dto';
import { TrulloConnection } from '../../services/TrulloConnection';
import { UUID } from 'crypto';
import { Card } from './Card';
import { useState } from 'react';

const conn = new TrulloConnection();

interface BoardProps {
  board: BoardDTO;
  onDeleteBoard: (id: UUID) => void;
  onDeleteCard: (id: UUID) => void;
}

const Board = ({ board, onDeleteBoard, onDeleteCard }: BoardProps) => {
  const [newCard, setNewCard] = useState<string>('');
  const handleDelete = async () => {
    const id = board.id as UUID;
    await conn.deleteBoard(id);
    onDeleteBoard(id);
  };
  const handleAddCard = async () => {
    const id = board.id as UUID;
    await conn.createCard(id, { item: newCard });
  };
  return (
    <Paper key={board.id} sx={{ maxWidth: 300, border: ' 1px solid black', padding: 2, margin: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={handleAddCard}>
          Add Card
        </Button>
        <Input placeholder="Create Card" value={newCard} onChange={(e) => setNewCard(e.target.value)} />
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="contained" color="info">
          Edit
        </Button>
      </Box>
      <Typography variant="h5">{board.title}</Typography>
      <Box>
        {board.cards?.map((card) => (
          <Card key={card.id} card={card} onDeleteCard={(uuid) => onDeleteCard(uuid)} />
        ))}
      </Box>
    </Paper>
  );
};

export { Board };
