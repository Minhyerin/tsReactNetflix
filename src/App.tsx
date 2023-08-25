import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* /*는 /뒤에 어떠한 파라미터 값이 오더라도 그 페이지에 머물 수 있다(정석은 아님) */}
        <Route path="/*" element={<Home />} />
        {/* 정석방법 */}
        {/* <Route path="/movies/:movieId" element={<Home />} /> */}
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
