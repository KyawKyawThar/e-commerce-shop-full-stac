import NavBar from '../../components/NavBar/NavBar';

import Slide from '../../components/Slide/Slide';
import Categories from '../../components/Category/Categories';
import Product from '../../components/Products/Product';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import Announcement from '../../components/Advertisement/Advertisement';

const Home = () => {
  return (
    <div>
        <NavBar />
      <Announcement />
      <Slide />
      <Categories />
      <Product />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
