import './Footer.scss';

// Footer 안에 들어갈 내용을 props로 받아서 계속 재사용 하고싶은데 어케하는지 모르겠음... 추후 수정
const Footer = (props) => {
    const msg = props.msg;
    return (
        <>
            <div className="Footer-container">{msg}</div>
        </>
    );
};

export default Footer;
