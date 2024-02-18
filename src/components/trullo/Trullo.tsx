import { Box } from '@mui/material';
import { BoardDTO } from '../../dto/Trullo.dto';
import { Board } from './Boards';
import { UUID } from 'crypto';

interface TrulloProps {
  trullo: BoardDTO[];
  onDeleteBoard: (id: UUID) => void;
  onDeleteCard: (id: UUID) => void;
  onAddCard: (id: UUID, card: string) => void;
  onBoardEdit: (id: UUID, newName: string) => void;
  onCardEdit: (id: UUID, newName: string) => void;
}

const Trullo = ({ trullo, onDeleteBoard, onDeleteCard, onAddCard, onBoardEdit, onCardEdit }: TrulloProps) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {trullo.map((board) => (
        <Board
          key={board.id}
          board={board}
          onDeleteBoard={onDeleteBoard}
          onDeleteCard={onDeleteCard}
          onAddCard={onAddCard}
          onBoardEdit={onBoardEdit}
          onCardEdit={onCardEdit}
        />
      ))}
    </Box>
  );
};

export { Trullo };
