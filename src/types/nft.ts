export type NFTItemType = {
  id: string;
  featuredNetwork: boolean;
  nftGallery: boolean;
  cover: {
    image: string;
    width: number;
    height: number;
  };
  artist: string;
  text: string;
  url: string;
};
