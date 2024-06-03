import React from 'react'

const Products = ({title , price}) => {
    return (
        <>
            <div className="card text-white bg-secondary mb-3" >
                <div className="card-header">Product Name</div>
                <div className="card-body">
                    <h4 className="card-title"> {title}</h4>
                    <p className="card-text">Price : {price}</p>
                </div>
            </div>
        </>
    )
}

export default Products
