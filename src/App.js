import { useState } from 'react';
import { useNavigate } from 'react-router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './comp/Header';
import Menu from './comp/Menu';
import Main from './comp/Main';
import Footer from './comp/Footer';

import anime from './comp/image/imageCategories/anime.png';
import vacation from './comp/image/imageCategories/vacation.png';
import art from './comp/image/imageCategories/art.png';
import animals from './comp/image/imageCategories/animals.png';
import brands from './comp/image/imageCategories/brands.png';
import sport from './comp/image/imageCategories/sport.png';
import skylines from './comp/image/imageCategories/skylines.png';
import crypto from './comp/image/imageCategories/crypto.png';

import silverCard from './comp/image/card/silverCard.png'
import blackCard from './comp/image/card/blackCard.png'
import goldCard from './comp/image/card/goldCard.png'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()
  const navigateTo = (page) => {
    navigate('/' + page)
    setShowMenu(false)
  }
  const [CategoriesArr, setCategoriesArr] = useState([
    {
      image: anime,
      nameByCategories: "אנימציה",
      allCard: [
        blackCard, silverCard, goldCard, silverCard, blackCard, goldCard
      ],
    },
    {
      image: vacation,
      nameByCategories: "חופשה",
      allCard: [
        silverCard, blackCard, goldCard, silverCard, blackCard, goldCard
      ],
    },
    {
      image: art,
      nameByCategories: "אומנות",
      allCard: [
        silverCard, blackCard, goldCard, silverCard, blackCard, goldCard
      ],
    },
    {
      image: animals,
      nameByCategories: "חיות",
      allCard: [
        silverCard, blackCard, goldCard, silverCard, blackCard, goldCard
      ],
    },
    {
      image: brands,
      nameByCategories: "מותגים",
      allCard: [
        silverCard, blackCard, goldCard, silverCard, blackCard, goldCard
      ],
    },
    {
      image: sport,
      nameByCategories: "ספורט",
      allCard: [
        silverCard, blackCard, goldCard, silverCard, blackCard, goldCard
      ],
    },
    {
      image: skylines,
      nameByCategories: "ערים",
      allCard: [
        silverCard, blackCard, goldCard, silverCard, blackCard, goldCard
      ],
    },
    {
      image: crypto,
      nameByCategories: "קריפטו",
      allCard: [
        silverCard, blackCard, goldCard, silverCard, blackCard, goldCard
      ],
    }
  ])
  return (
    <div className="App">
      {showMenu ? <Menu navigateTo={navigateTo} setShowMenu={setShowMenu} /> : null}
      <Header setShowMenu={setShowMenu} />
      <Main
        CategoriesArr={CategoriesArr}
        setCategoriesArr={setCategoriesArr}
        navigateTo={navigateTo}
        setShowMenu={setShowMenu} />
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
export default App;
