import Header from '../../Layout/Header';
import './FundingPage.scss';

const FundingPage = () => {
    return (
        <>
            <Header msg={'펀딩'} isMain={false} />
            <div className="funding-container">
                <h2 className="funding-title">진행중인 펀딩</h2>
                <div className="progress-container">진행중인 펀딩이 없습니다.</div>
            </div>
            <div className="previous-funding">
                <h2 className="funding-title" id="before-funding">
                    이전 펀딩
                </h2>
                <div className="progress-container">이전 펀딩이 없습니다.</div>
                <button>펀딩만들기</button>
            </div>
        </>
    );
};
export default FundingPage;
