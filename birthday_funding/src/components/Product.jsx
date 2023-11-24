import './Product.scss';

const Product = (props) => {
    const { id, name, price, imageUrl, isButton }= props
    return (
        <>
            <li key={id} className="product-container">
                <img src={imageUrl} />
                <div>{name}</div>
                <div>{price}</div>
                {isButton && <button>~</button>}
            </li>
        </>
    );
};

export default Product;
