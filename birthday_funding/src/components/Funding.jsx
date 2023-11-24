import './Funding.scss';

const Funding = (props) => {
    const { id, title, name, imageUrl }= props

    return (
        <>
        <a onClick={onClick}>
            <li key={id} className="funding-li-container">
                <img src={imageUrl} />
                <div>{title}</div>
                <div className='name'>{name}님의 펀딩</div>
            </li>
        </a>
        </>
    );
};

export default Funding;
