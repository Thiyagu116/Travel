import Signup from "./login";
import App from "./App";
import {Routes,Route} from "react-router-dom";
import Hotel from './hotel'
import Cd from './card'
import Rst from './restarunt'
import Rcd from'./restcard'
import Oy from'./ooty'
import Kd from'./kodai'
import Vp from'./valparai'
import Tt from './thanjavur'
import Md from './madurai'
import Ky from './kanya'
import Tp from './temple'
import Hl from './hills'
import Bh from './beach'
import Hb from './hbook'
import Rb from './rbook'

export default function Routing(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/app" element={<App/>}/>
            <Route path="/opt/hotel" element={<Hotel/>}/>
            <Route path="/cd/card" element={<Cd/>}/>
            <Route path="/rst/restarunt" element={<Rst/>}/>
            <Route path="/rcd/restcard" element={<Rcd/>}/>
            <Route path="/oy/ooty" element={<Oy/>}/>
            <Route path="/kd/kodai" element={<Kd/>}/>
            <Route path="/vp/valparai" element={<Vp/>}/>
            <Route path="/tt/thanjavur" element={<Tt/>}/>
            <Route path="/md/madurai" element={<Md/>}/>
            <Route path="/ky/kanya" element={<Ky/>}/>
            <Route path="/tp/temple" element={<Tp/>}/>
            <Route path="/hl/hills" element={<Hl/>}/>
            <Route path="/bh/beach" element={<Bh/>}/>
            <Route path="/hb/hbook" element={<Hb/>}/>
            <Route path="/rb/rbook" element={<Rb/>}/>
             

         </Routes>
        </>
    );
}