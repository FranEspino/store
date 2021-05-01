import React from 'react'
import '../styles/main.css'

const Product = ({product, handleAddToCart}) => {
    return (
        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
               
                    <img className="hover:grow hover:shadow-lg" src={product.img} alt={product.nombre} />
                    <div className="pt-3 flex items-center justify-between">
                        <p className="">{product.nombre}</p>
                        <button type="button" className="bg-green" onClick={handleAddToCart(product)}>
                             <i className="fas fa-plus-circle text-white outline-none  border-none  no-underline select-none "></i>
                        </button>
                    </div>
                    <p className="pt-1">{product.Price}</p>
               
        </div>
    )
}

export default Product
