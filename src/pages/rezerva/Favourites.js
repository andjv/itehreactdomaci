import Products from "../components/Products";
function Favourites({favourites, numOfFavourites}){
    return (
        <div>
            <h3 className="mb-5 mt-3">Omiljeno</h3>

              {numOfFavourites===0 ? 
            
            <>
            <h2>Niste označili nijedan proizvod kao omiljeni.</h2>
            </> 
            
            :  
            <>
                <Products items={favourites.filter((f)=> f.isFavourite ===1)}/>

            </>
           } 
           
            
        </div>






    )

}

export default Favourites;