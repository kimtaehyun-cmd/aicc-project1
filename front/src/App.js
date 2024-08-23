import Footer from './Components/Footer';
import Itempannel from './Components/Itempannel';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="border h-full">
      <div className="page_wrapper flex p-1 gap-1 flex-col">
        <Navbar />
        <Sidebar />
        <Itempannel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
