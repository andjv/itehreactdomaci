import {AiFillStar} from "react-icons/ai"
const Products = ({items, addFavourite}) => {
 
  return <div className='section-center'>
    {items.map((productItem)=>{
      const{id,title,img,price,desc}=productItem;
      return <div key={id} className="product-item">
        <img src={img} alt={title} className="photo"/>
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>{price}.00 RSD</h4>
          </header>
          <p className='item-text'>{desc}</p>
          <button className="dugme object-fit-scale border-0 rounded-circle"type='button'
          onClick={()=>addFavourite(id)}>
          <AiFillStar/></button>
        </div>  
        
      </div> 
    
    })}
  </div>
};

export default Products;
