import React from "react";
import Banner from "./components/Banner";
import Features from "./components/Features";
import CategorySection from "./components/CategorySection";
import HotDeals from "./components/HotDeals";
import ReviewsCarousel from "./components/ReviewsCarousel";
import Footer from "./components/Footer";
import ConsultationIcon from "./components/ConsultationIcon";
import {createClient} from '@/lib/supabase/server'

export default async function Home() {
  // page is server component by default; it composes server components and client components.

  const  isWithin30Days = (dateStr: string) =>{
    const inputDate = new Date(dateStr); // 标准化日期格式
    const currentDate = new Date();
    const timeDiff = Math.abs(inputDate - currentDate);
    const dayDiff = timeDiff / (1000 * 60 * 60 * 24); // 转换为天数\
    return dayDiff <= 30;
  }
  
   
  
      const supabase = await createClient()
      const {data  } = await supabase.from("products").select()
      const newProduct: any[] = []
      const collectibleProduct: any[] = []
      const featureProduct: any[] = []
      const inStockProduct: any[] = []
      const hotDealProduct: any[] = []
      data?.map(v=>{
        if(v.status === 2){
          inStockProduct.push(v)
        }
        if(v.category_id === 2){
          featureProduct.push(v)
        }
        if(v.category_id === 3){
          collectibleProduct.push(v)
        }
        if(isWithin30Days(v.created_at)){
          console.log()
          newProduct.push(v)
        }
        if(hotDealProduct.length<3){
          hotDealProduct.push(v)
        }
      })  
      return (
    <main>
      <Banner />
      <Features />
      {/* categories mapped from server data */}
      {/* {categories.map((c: { id: any; title: any; }) => (
   <CategorySection key={c.id} title={c.title} images={c.images} />
      ))} */}
           <CategorySection title="New Arrivals" products = {newProduct}/>
        <CategorySection title="Collectible Limited Statues" products = {collectibleProduct} />
        <CategorySection title="Featured Limited Sculptures" products = {featureProduct} />
        <CategorySection title="In-Stock Exclusives" products = {inStockProduct}/>
      <HotDeals products={hotDealProduct}/>
      <ReviewsCarousel />
      <Footer />
      <ConsultationIcon />
    </main>
  );
}