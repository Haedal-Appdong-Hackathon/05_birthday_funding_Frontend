import Header from '../../Layout/Header';
import './FundingPage.scss';
import Funding from '../../components/Funding';
import { request } from "../../utils/api";

const funding = await request(`/funding?page=0`, {methods: 'GET'})

const FundingPage = () => {
    const today = new Date();
    const formattedYear = today.getFullYear().toString().slice(-2);
    const formattedDate = `${formattedYear}-${today.getMonth() + 1}-${today.getDate()}`;

    console.log(formattedDate, funding.data[0].endDate, formattedDate < funding.data[0].endDate)
    return (
        <>
            <Header msg={'펀딩'} isMain={false} />
            <h3 className="title">진행중인 펀딩</h3>
                <ul className="progress-container">
                    {funding.data.map(funding =>
                        (funding.endDate < formattedDate) ? 
                        <Funding  id={funding.id} title={funding.title} name={funding.writer.nickname} imageUrl={funding.writer.userImageUrl}/> :
                        '진행 중인 펀딩이 없습니다.'
                    )}
                </ul>

            <h3 className="title" id="before-funding">이전 펀딩</h3>
            <div className="progress-container">
                    {funding.data.map(funding =>
                        (funding.endDate < formattedDate) ? 
                        <Funding  id={funding.id} title={funding.title} name={funding.writer.nickname} imageUrl={funding.writer.userImageUrl}/> :
                        '이전 펀딩이 없습니다.'
                    )}
            </div>

            <button>펀딩 만들기</button>
        </>
    );
};
export default FundingPage;
