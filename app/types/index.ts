export type HotDeal = {
    id: string;
    title: string;
    price: string;
    image: string;
    description?: string;
  };
  
  export type CategoryBlock = {
    id: string;
    title: string;
  };

  // lib/types.ts
export type Review = {
  author: string;
  rating: number;
  when: string;
  text: string;
};
