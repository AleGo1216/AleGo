// types/product.ts
export type Product = {
    product_id: number;
    category_id:number;
    status:number;
    sku: string;
    name: string;
    artist: string;
    price: number;
    edition: string;
    availability: string;
    img: string;
    fav?: boolean;
    sales: number;
    release: number;
  };

  export const statusList = ['','预售','现货']
  export const categoryList = ['','Q版','精品','收藏']

  export const reviewList =   [
    {
      author:'Marina, CA',
      rating:5,
      when:'2 weeks ago',
      text:'I own several ALeToys pieces and this is one of the most refined. The finish and presentation felt gallery‑level — the certificate and artist note made the experience personal.'
    },
    {
      author:'James, UK',
      when:'1 month ago',
      rating:4.5,
      text:"Beautiful sculpt and attentive studio support. A minor paint variance was handled quickly by customer care — they treated it like a collector's issue, not a return."
   
    },
  ]