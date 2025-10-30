import "../../styles/product.css";
import HeaderClient from "../../components/Header";
import Footer from "../../components/Footer";
import ProductClient from "../../components/product/ProductClient";
import {createClient} from '@/lib/supabase/server'

export const metadata = {
  title: "ALeToys — Product Details",
  description:
    "Hand‑finished, limited collectible. Museum‑quality finish, artist‑signed, small‑batch artisan production.",
};

export default async function ProductPage({ params }: { params: { id: string } }) {
  // ✅ 可从数据库或接口获取商品数据
 

  const supabase = await createClient()
  const {data  } = await supabase.from("products").select('*,product_image(image_list)').eq('product_id',params.id)

  const product: any[] = data && data[0]
console.log(7878,product)


console.log(222,product)
  return (
    <>
      <HeaderClient />
      <main>
        {/* 客户端组件，包含所有 DOM 操作与交互 */}
        <ProductClient product={product} />
      </main>
      <Footer />
    </>
  );
}