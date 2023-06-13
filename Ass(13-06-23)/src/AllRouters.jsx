import { Routes,Route } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";
import Data from './components/Data';
import Navbar from './components/Navbar';
import { SearchProvider } from './SearchContext';


export default function AllRouters() {
  return (
    <Routes>
        <Route path="/" element={
            <SearchProvider>
                 <Navbar/>
                <Data/>
            </SearchProvider>
        }/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>

    </Routes>
  )
}
