import Slide from '../../components/Slide/Slide';
import Categories from '../../components/Category/Categories';
import Product from '../../components/Products/Product';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import Announcement from '../../components/Advertisement/Advertisement';
import NavBar from '../../components/NavBar/NavBar';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <div>
      <NavBar user={user} />
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
