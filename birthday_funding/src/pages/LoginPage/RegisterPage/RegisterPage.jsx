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
                        <label htmlFor="">이름</label>
                        <input type="text" id="name" placeholder="이름" className="input-item" />
                        <div>
                            <span></span>
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="">생년월일</label>
                        <input type="number" id="birth" placeholder="ex) 2023-11-25" className="input-item" />
                        <div>
                            <span></span>
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit" className="button-item">
                            회원가입하기
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegisterPage;
