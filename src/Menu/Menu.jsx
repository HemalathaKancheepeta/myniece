import "./Menu.css";
import React from "react";
import {BrowserRouter,Link,Routes,Route,Navigate} from 'react-router-dom';
import MyCarousel from '../MyCarousel/index';
import MyMonthly from '../MyMonthly/index';
import MyDad from '../MyDad/index';
import MyMom from '../MyMom/index';
import { Quiz } from "../components/Quiz";

function template() {
  const {menuItem,isMobileView,left}=this.state
  return (
    <div className="Menu">
      <BrowserRouter>
      {isMobileView && <button onClick={this.fnMobileMenuBtnClick} className='mobile-menu-btn'>Menu</button>}
                <ul style={{left}} className={`${isMobileView && 'mobile-menu'} menu`} onClick={this.fnMenuClick}>
                    <li ><Link to="/me">Me</Link></li>
        <li><Link to="/monthly">MonthlyMe</Link></li>
        <li><Link to="/myDad">MyDad</Link></li>
        <li><Link to="/myMom">MyMom</Link></li>
        <li><Link to="/knowMe">Know Me</Link></li>
       
      </ul>
      <Routes>
        <Route path="/me"  element={<MyCarousel/>}/>
        <Route path="/monthly" element={<MyMonthly/>} />
        <Route path="/myDad" element={<MyDad/>}/>
        <Route path="/myMom" element={<MyMom/>}/>
        <Route path="/knowMe" element={<Quiz/>}/>
        <Route path="*" element={<Navigate to="/me"/>} />
      </Routes>
      </BrowserRouter>
      

        
    </div>
  );
};

export default template;
