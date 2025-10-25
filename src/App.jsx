import Header from "./components/header/header.jsx";
import Hero from "./components/Hero/Hero";
import  Sales  from "./components/Sale_Cards/Sale_Cards";
import  Menu  from "./components/Menu_Cards/Menu";
import  Restaurant_Cards  from "./components/Restaurant_Cards/Restaurant_Cards";
import  About  from "./components/About_Box/About";
import  Statistics  from "./components/Statistics/Statistics";
import  Footer  from "./components/Footer/footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sales />
      <Menu/>
      <Restaurant_Cards/>
      <About/>
      <Statistics/>
      ,<Footer></Footer>
    </>
  );
}
export default App