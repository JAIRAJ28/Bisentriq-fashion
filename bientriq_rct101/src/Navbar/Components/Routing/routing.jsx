
import { Route, Routes } from "react-router-dom";
import { Home1st } from "../../../pages/Home1st";
import { Home2nd } from "../../../pages/Home2nd";
const Allroutes = () => {
    return (
      <>
       

<Routes>
      
<Route path="/" element={<Home1st />}></Route>

{/* Cart And Payment */}
<Route path='/home2nd' element={<Home2nd />} />
{/* <Route path='/checkout/shipping-address' element={<Checkout />} />
<Route path='/checkout/shipping-delivery' element={<Delivery />} />
<Route path='/checkout/payment' element={<Payment />} /> */}

</Routes>
</>
);
};

export default Allroutes;

