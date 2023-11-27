import './Product.scss';

const Product = (props) => {
    const { id, name, price, imageUrl, dateOfUse, isButton }= props
    const expire = (dateOfUse === null) ? false : true;
    console.log(name, dateOfUse,expire)
    return (
        <>
            <li key={id} className="product-container">
                <img className={(expire) ? "gray": ""} src={imageUrl} />
                <div>{name}</div>
                <div>{price}</div>
                {isButton && <button>~</button>}
            </li>
        </>
    );
};

export default Product;
