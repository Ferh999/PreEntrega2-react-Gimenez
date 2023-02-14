
// import CardMui from "./components/CardMui/CardMui";
import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import Layout from "./components/Layout/Layout";

function App() {


  return (
    <div className="App">
      <Layout>
        <Header />
        <ItemListConteiner usuario="Fer" edad={37} />
        <ItemCount />
      </Layout>
      
    </div>
  );
}

export default App;
