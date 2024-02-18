import { Box, IconButton, Input, Typography } from '@mui/material';
import { CardDTO } from '../../dto/Trullo.dto';
import { UUID } from 'crypto';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

interface TaskProps {
  card: CardDTO;
  onDeleteCard: (id: UUID) => void;
  onEditCard: (id: UUID, newName: string) => void;
}

const Card = ({ card, onDeleteCard, onEditCard }: TaskProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>('');
  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid black',
        padding: 1,
        margin: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {!open && (
        <>
          <Typography variant="h6" sx={{ width: '100%', lineBreak: 'anywhere' }}>
            {card.item}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton onClick={() => setOpen(!open)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDeleteCard(card.id as UUID)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </>
      )}
      {open && (
        <>
          <Input
            sx={{ width: '100%', display: 'flex', flexDirection: 'row', height: '100%' }}
            placeholder="Edit Card"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton onClick={() => onEditCard(card.id as UUID, newName)}>
              <SaveIcon />
            </IconButton>
            <IconButton onClick={() => setOpen(!open)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export { Card };
