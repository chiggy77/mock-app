import Navabar from "./Routes/Navabar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Pages/Footer";
import { SearchProvider } from "./Pages/SearchContext";
import Home from "./Pages/Home";
function App() {
  return (
    <SearchProvider>
      <div>
        <Navabar />
        {/* <AllRoutes /> */}

        <Home />
        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;
