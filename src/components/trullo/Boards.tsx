import { Box, Button, Input, Paper, Typography } from '@mui/material';
import { BoardDTO } from '../../dto/Trullo.dto';
import { UUID } from 'crypto';
import { Card } from './Card';
import { useState } from 'react';

interface BoardProps {
  board: BoardDTO;
  onDeleteBoard: (id: UUID) => void;
  onDeleteCard: (id: UUID) => void;
  onAddCard: (id: UUID, card: string) => void;
  onBoardEdit: (id: UUID, newName: string) => void;
  onCardEdit: (id: UUID, newName: string) => void;
}

const Board = ({ board, onDeleteBoard, onDeleteCard, onAddCard, onBoardEdit, onCardEdit }: BoardProps) => {
  const [newCard, setNewCard] = useState<string>('');
  const [newName, setNewName] = useState<string>('');

  return (
    <Paper key={board.id} sx={{ maxWidth: 400, border: ' 1px solid black', padding: 2, margin: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Button variant="contained" color="primary" onClick={() => onAddCard(board.id as UUID, newCard)}>
            Add
          </Button>
          <Input placeholder="Create Card" value={newCard} onChange={(e) => setNewCard(e.target.value)} />
        </Box>
        <Box>
          <Button variant="contained" color="info" onClick={() => onBoardEdit(board.id as UUID, newName)}>
            Edit
          </Button>
          <Input placeholder="Edit Board" value={newName} onChange={(e) => setNewName(e.target.value)} />
        </Box>

        <Button variant="contained" color="warning" onClick={() => onDeleteBoard(board.id as UUID)}>
          Delete Card
        </Button>
      </Box>
      <Typography variant="h5">{board.title}</Typography>
      <Box>
        {board.cards?.map((card) => (
          <Card key={card.id} card={card} onDeleteCard={onDeleteCard} onEditCard={onCardEdit} />
        ))}
      </Box>
    </Paper>
  );
};

export { Board };
