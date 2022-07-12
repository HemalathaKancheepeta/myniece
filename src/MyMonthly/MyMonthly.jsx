import "./MyMonthly.css";
import React from "react";

function template() {
 const monthlyData=[
    {
       src:"mon1.jpg",
       text:"This is 1st month"
    },
    {
      src:"mon2.jpg",
      text:"This is 2nd month"
    },
    {
      src:"mon3.jpg",
       text:"This is 3rd month"
    },
    {
      src:"mon4.jpg",
       text:"This is my 4th month"
    }
  ]
  return (
    <div className="my-monthly" style={{'text-align':'left'}}>
      <b style={{color:"white",padding:'10px'}}>My Monthly Pics</b>

      <table  margin="15px"  padding="20px" responsive >
        
        <tbody>
          
            { monthlyData.map((obj,ind)=>{
                const{src,text}=obj;
                return <tr>
                <td><img style={{width:"100px",height:"100px",margin:"20px",'font-style':'italic'}} src={src} /></td>
                <td><span style={{  'font-size':"12px",padding:"10px"}}>{text}</span></td>
                </tr>
                })
              }
           
        </tbody>
      </table>
    </div>
  );
};

export default template;
