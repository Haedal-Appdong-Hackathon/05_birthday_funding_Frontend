import Header from '../../Layout/Header';
// import Footer from '../../Layout/footer';
import './IntroPage.scss';

const IntroPage = () => {
    return (
        <>
            <Header />
            <div className="intro-container">
                <img src="../../../public/images/intro/gift-box.png" alt="cake" />
                <text>
                    Birthday Funding은 <br />
                    축하하는 마음을 모아 <br />
                    다함께 선물하는 서비스입니다. <br />
                    <br />
                    가격이 부담되어 망설였던 선물도 <br />
                    펀딩을 통해 선물로 받아보세요! <br />
                </text>
            </div>
            <div className="Footer-container">로그인하고 시작하기</div>
        </>
    );
};

export default IntroPage;
