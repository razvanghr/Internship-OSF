import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import ErrorPage from "./pages/ErrorPage/Error404Page";
import ProductPage from "./pages/ProductPage/ProductPage";
import Navigation from "./components/Navigation/Navigation";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ReleasePage from "./pages/ReleasePage/ReleasePage";
import Footer from "./components/Footer/Footer";

// React Responsive
import MediaQuery from "react-responsive";

// Mobile Components
import MobileNavigation from "./mobile/MobileNavigation/MobileNavigation";
import MobileFooter from "./mobile/MobileFooter/MobileFooter";

// Shop Context Provider
import ShopContextProvider from "./context/shop-context";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          {/* Navigation */}
          <MediaQuery minWidth={601}>
            <Navigation />
          </MediaQuery>
          {/* <Navigation /> */}
          <MediaQuery maxWidth={600}>
            <MobileNavigation />
          </MediaQuery>
          {/* Content */}
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/error404" element={<ErrorPage />}></Route>
            <Route path="/product" element={<ProductPage />}></Route>
            <Route path="/clp" element={<CategoryPage />}></Route>
            <Route path="/release" element={<ReleasePage />}></Route>
          </Routes>
          {/* Footer */}
          <MediaQuery minWidth={851}>
            <Footer />
          </MediaQuery>
          <MediaQuery maxWidth={850}>
            <MobileFooter />
          </MediaQuery>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
