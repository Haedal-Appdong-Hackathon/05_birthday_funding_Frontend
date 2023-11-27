import Header from '../../Layout/Header';
import './LoginPage.scss';

const LoginPage = () => {
    return (
        <>
            <Header msg={'로그인'} isMain={false} />
            <div className="login-container">
                <img className="cake-item" src="../../../public/images/login/cake-3D.png" alt="cake" />
                <p>
                    카카오 로그인으로
                    <br />
                    간편하게 펀딩을 참여하세요!
                    <br />
                </p>

                <img
                    className="kakao-button"
                    src="../../../public/images/login/kakao_login_large_wide.png"
                    alt="kakao-button"
                />
            </div>
        </>
    );
};

export default LoginPage;
