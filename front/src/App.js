import Footer from './Components/Footer';
import ItemPannel from './Components/ItemPannel';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App w-full bg-black">
      <Navbar />
      <Sidebar />
      <ItemPannel />
      <Footer />
    </div>
  );
}

export default App;
