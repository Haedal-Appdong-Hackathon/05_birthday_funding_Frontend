import './Funding.scss';

const Funding = (props) => {
    const { id, title, name, imageUrl }= props

    return (
        <>
            <li key={id} className="funding-li-container">
                <img src={imageUrl} />
                <div>{title}</div>
                <div className='name'>{name}님의 펀딩</div>
            </li>
        </>
    );
};

export default Funding;
