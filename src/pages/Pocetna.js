import { useState } from "react"
import Products from "../components/Products"
import Categories from "../components/Categories"
import items from '../data'

const allCategories =['sve',...new Set(items.map((item)=>item.category))]
function Pocetna({addFavourite}){
    const [products,setProducts]= useState(items);
    const[categories]= useState(allCategories);

    
    const filterItems=(category)=>{
      if(category==='sve'){
    setProducts(items);
     return;
    }
      const newItems = items.filter((item)=>item.category === category);
      setProducts(newItems);
    };
    return <main>
      <section className='product section'>
        <Categories categories={categories} filterItems={filterItems}/>
        <Products items = {products} addFavourite={addFavourite}/>
      </section>
    </main>;
}

export default Pocetna