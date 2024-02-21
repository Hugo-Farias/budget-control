export type group = {
  openInitial: boolean;
  title: string;
  childList: groupChild[] | undefined;
};

export type groupChild = {
  title: string;
  amount: number;
  expiration: Date;
};
