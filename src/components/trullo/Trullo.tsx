import { Box } from '@mui/material';
import { BoardDTO } from '../../dto/Trullo.dto';
import { Board } from './Boards';

interface TrulloProps {
  trullo: BoardDTO[];
  onDeleteBoard: (id: string) => void;
  onDeleteCard: (id: string) => void;
}

const Trullo = ({ trullo, onDeleteBoard, onDeleteCard }: TrulloProps) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {trullo.map((board) => (
        <Board key={board.id} board={board} onDeleteBoard={onDeleteBoard} onDeleteCard={onDeleteCard} />
      ))}
    </Box>
  );
};

export { Trullo };
