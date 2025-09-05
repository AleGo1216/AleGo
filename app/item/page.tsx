import { createClient } from "@/lib/supabase/server";
export default async function Items (){
    const supabase = await createClient()
    const {data:item} = await supabase.from("item").select()
   const a =  JSON.stringify(item,null,1)
    return a
}