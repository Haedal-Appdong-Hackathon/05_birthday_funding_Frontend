import { Canvas } from '@react-three/fiber';
import Header from '../../Layout/Header';
// import Footer from '../../Layout/footer';
import { Html, OrbitControls } from '@react-three/drei';
import './IntroPage.scss';
import Gift from './Gift';
import Footer from '../../Layout/Footer';

const IntroPage = () => {
    return (
        <>
            <Header msg={'BF'} isMain={true} />
            <Canvas>
                <ambientLight intensity={10} />
                <Gift />
            </Canvas>
            <div className="intro-container">
                <p>
                    Birthday Funding은 <br />
                    축하하는 마음을 모아 <br />
                    다함께 선물하는 서비스입니다. <br />
                    <br />
                    가격이 부담되어 망설였던 선물도 <br />
                    펀딩을 통해 선물로 받아보세요! <br />
                </p>
            </div>
            <Footer msg={'로그인하고 시작하기'}/>
        </>
    );
};

export default IntroPage;
