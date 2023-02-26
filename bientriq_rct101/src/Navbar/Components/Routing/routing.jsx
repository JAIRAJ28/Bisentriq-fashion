
import { Route, Routes } from "react-router-dom";
import { Home1st } from "../../../pages/Home1st";
import { Home2nd } from "../../../pages/Home2nd";
import { Fashion } from "../../../pages/Fashion";
import SinglePage from "../../../pages/singlepages/singlepage1";
import Cartpage from "../../../pages/cartpage";
import  PrivateRoute  from "../../../pages/PrivateRoute/privateRoute";
import { Alldress } from "../../../pages/allpages/AllDress";
import SingleAlldress from "../../../pages/allpages/singleAlldres";
import { Furniture } from "../../../pages/allpages/Furniture";
import SingleFurniture from "../../../pages/allpages/allfur";
const Allroutes = () => {
    return (
      <>
       

<Routes>
      
<Route path="/" element={<Home1st />}></Route>

<Route path='/home2nd' element={<Home2nd />} />
<Route path='/newAll' element={<Alldress/>}/>
<Route path='/newAll/:id' element={<SingleAlldress/>}/>

<Route path="/furniture" element={<Furniture/>}/>
<Route path="/furniture:id" element={<SingleFurniture/>}/>

<Route path="/fashion" element={<Fashion />}/>

<Route path='/fashion/:id' element={<SinglePage/>}/>

<Route path='/addtocart' element={
<PrivateRoute >
<Cartpage/>
</PrivateRoute>
}/>


</Routes>
</>
);
};

export default Allroutes;

