export type group = {
  openInitial: boolean;
  title: string;
  children?: groupChild;
};

export type groupChild = {
  title: string;
  amount: number;
  expiration: Date;
};
