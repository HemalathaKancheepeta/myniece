import React    from "react";
import template from "./Menu.jsx";
import {MyCarousel} from '../MyCarousel/index';
import {MyMonthly} from '../MyMonthly/index';
import {MyDad} from '../MyDad/index';
import {MyMom} from '../MyMom/index';


class Menu extends React.Component {
  state={
    menuItem:sessionStorage.menuItem? sessionStorage.menuItem:'home',
    isMobileView:document.body.offsetWidth < 600 ? true:false,
    left:-140
}
constructor(){
  super()
  let flag=true;
  let timeoutId;
  window.addEventListener('resize',()=>{
      if(flag){
          this.fnUpdateWindowWidth()
          flag=false
      }
      clearTimeout(timeoutId)
      timeoutId=setTimeout(()=>{
          this.fnUpdateWindowWidth()
      },100)
      
  })
}
fnUpdateWindowWidth(){
  let width=document.body.offsetWidth
      this.setState({
          isMobileView:width<600?true:false
      })
}
fnMenuClick=(eve)=>{
  eve.stopPropagation()
  const {tagName,id}=eve.target
  sessionStorage.menuItem=id
  if(tagName!='A')return;
  this.setState({
      menuItem:id,
      left:-140
  })
}
fnMobileMenuBtnClick=()=>{
  this.setState({
      left:this.state.left==0 ? -140 : 0
  })
}
  render() {
    return template.call(this);
  }
}

export default Menu;
