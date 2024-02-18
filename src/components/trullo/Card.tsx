import { Button } from '@mui/material';
import { CardDTO } from '../../dto/Trullo.dto';
import { UUID } from 'crypto';

interface TaskProps {
  card: CardDTO;
  onDeleteCard: (id: UUID) => void;
}

const Card = ({ card, onDeleteCard }: TaskProps) => {
  return (
    <div>
      <p>{card.item}</p>
      <Button variant="contained" color="secondary" onClick={() => onDeleteCard(card.id as UUID)}>
        Delete
      </Button>
    </div>
  );
};

export { Card };
