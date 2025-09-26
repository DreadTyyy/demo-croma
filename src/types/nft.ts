export type NFTItemType = {
  id: string;
  choosen: boolean;
  cover: {
    image: string;
    width: number;
    height: number;
  };
  artist: string;
  text: string;
  url: string;
};
