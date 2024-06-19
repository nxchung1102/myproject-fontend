import Header from '../../Header';
import MainContent from './main';
import Banner from '../../SlideShow';
import Footer from '../../Footer';
import './Home.scss';

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <Banner />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
