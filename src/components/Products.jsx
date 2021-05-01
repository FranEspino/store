import React, {useContext} from 'react'
import Product from './Product'
import '../styles/main.css'
import Animation from './Animation'
import AppContext from '../context/AppContext'
const Products = () => {
    const {state , addToCart} = useContext(AppContext);
    const {products} = state;

    const handleAddToCart =  product => () =>{
        addToCart(product)
    }
    return (
        <div className="bg-black py-8  text-white font-bold z-20" style={{marginTop: -250}}>
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <Animation />
            {products.map(product => (
                <Product key={product.id} product={product}  handleAddToCart={handleAddToCart}/>
            ))}

        
        </div>
         </div>
    )
}

export default Products
