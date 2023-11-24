import Header from '../../../Layout/Header';
import './RegisterPage.scss';

const RegisterPage = () => {
    return (
        <>
            <Header />
            <div className="register-container">
                <h1 className="title">회원가입</h1>
                <form className="form-container" action="">
                    <div className="input-container">
                        {/* <label htmlFor="">ID</label> */}
                        <input type="text" id="id" placeholder="아이디" className="input-item" />
                        <div>
                            <span></span>
                        </div>
                    </div>
                    <div className="input-container">
                        {/* <label htmlFor="">ID</label> */}
                        <input type="text" id="id" placeholder="비밀번호" className="input-item" />
                        <div>
                            <span></span>
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="button-item">
                            로그인
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegisterPage;
