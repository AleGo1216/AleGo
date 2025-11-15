// lib/products.ts
import type { Product } from '../app/types/product';
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('products').select('');
   
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

/**
 * 示例返回类型。替换此函数以从你的 Supabase / DB 获取 product。
 * 如果你使用 supabaseServer（服务端客户端），请在这里导入并查询。
 */
export type GetProductResult = Product | null;

export async function fetchProductById(id: string): Promise<GetProductResult> {
  // EXAMPLE: if you have a supabase server client:
  // import { supabaseServer } from './supabaseServer';
  // const { data, error } = await supabaseServer.from('products').select('*').eq('id', id).single();
  // if (error) { console.error(error); return null; }
  // transform fields to Product as needed and return.
  const supabase = await createClient();
  const { data, error } = await supabase.from('products').select('*,product_image(image_list)').eq('product_id', id).single();
   
  if (error) {
   console.error(error); 
   return null; 
  }

  return data;

  // Temporary mock (so the module can be added to your project and work immediately)
  
}