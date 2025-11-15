import '../styles/shop.css';
import HeaderClient from '../components/Header';
import Footer from '../components/Footer';
import ShopClient from '../components/shop/ShopClient';

export const metadata = {
  title: 'ALeToys — Shop All',
  description: 'Curated limited editions & contemporary collectibles',
};

export default function ShopPage() {
  return (
    <>
      {/* <HeaderClient /> */}
      <main>
        {/* 客户端组件，封装全部动态逻辑 */}
        <div style={{ maxWidth: '1280px', minHeight:'70vh',margin: '72px auto 36px', padding: 18 }}>
          <ShopClient  />
        </div>
      </main>
      <Footer />
    </>
  );
}