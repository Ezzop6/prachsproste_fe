import { UUID } from 'crypto';

export interface CardDTO {
  id?: UUID;
  createdAt?: Date;
  item?: string;
}

export interface BoardDTO {
  id?: UUID;
  createdAt?: Date;
  title: string;
  cards?: CardDTO[];
}

export interface TrulloDTO {
  boards?: BoardDTO[];
}
