
import Home from "./Components/Home"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FilteredResultsPage from "./Components/FilteredResultsPage";
import LikedResultsPage from "./Components/LikedResultsPage";
import DetailPage from "./Components/DetailPage"
import SearchResultPage from "./Components/SearchResultPage";
function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/filter" element={<FilteredResultsPage />} />
         <Route path="/likes" element={<LikedResultsPage />} />
         <Route path="/search" element={<SearchResultPage />} />
         <Route path="/:id" element={<DetailPage />} />
       </Routes>
       <Footer />
     </BrowserRouter>
    </>
  )
}

export default App;