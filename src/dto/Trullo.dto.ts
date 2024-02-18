type CardDTO = {
  id?: string;
  createdAt?: Date;
  item?: string;
};

type BoardDTO = {
  id?: string;
  createdAt?: Date;
  title?: string;
  cards?: CardDTO[];
};

type TrulloDTO = {
  boards?: BoardDTO[];
};

export type { CardDTO, BoardDTO, TrulloDTO };
