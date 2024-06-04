import React,{useState} from 'react'
import ProCounter from './ProCounter';
const Products = ({title,price}) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <>
            <div className="card text-white bg-secondary mb-3" >
                <div className="card-header">Product Name</div>
                <div className="card-body">
                    <h4 className="card-title"> {title}</h4>
                    <p className="card-text">Price : {price}</p>
                    <h6>{count}</h6>
                <button onClick={handleIncrement}>plus</button>
                <button onClick={handleDecrement}>minus</button>
                </div>
            </div>
            <ProCounter count={count}/>
        </>
    )
}

export default Products