import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error/Error';
import IntroPage from './pages/IntroPage/IntroPage';
import FundingPage from './pages/FundingPage/FundingPage';
import ProgressFunding from './pages/FundingPage/ProgressFunding/ProgressFunding';
import MyPage from './pages/MyPage/MyPage';
import MygiftPage from './pages/MyPage/MygiftPage/MygiftPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/LoginPage/RegisterPage/RegisterPage';
import StorePage from './pages/StorePage/StorePage';
import NavigatePage from './pages/NavigatePage/NavigatePage';
import ExchangePage from './pages/ExchangePage/ExchangePage';
import FriendPage from './pages/FriendPage/FriendPage';
import MakeFunding from './pages/FundingPage/MakeFunding/MakeFunding';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/funding" element={<FundingPage />} />
                    <Route path="/funding/makefunding" element={<MakeFunding />} />
                    <Route path="/fundingdetail" element={<ProgressFunding />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/mypage/gift" element={<MygiftPage />} />
                    <Route path="/navigate" element={<NavigatePage />} />
                    <Route path="/Friends" element={<FriendPage />} />
                    <Route path="/store" element={<StorePage />} />
                    <Route path="/exchange" element={<ExchangePage />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
