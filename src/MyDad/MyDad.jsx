import "./MyDad.css";
import React from "react";

function template() {
  return (
    <div className="my-dad">

      <div className="row">
      <div className="col-lg-5 col-sm-5 col-md-5 col-xs-5" pic>
        <img src="fam3.jpeg" style={{width:'300px',height:'350px'}}/>
      </div>
      <div className="col-lg-5 col-sm-5 col-md-5 col-xs-5" textArea style={{'max-width':'400px','font-style':'italic'}}>
       <br/>
       <span style={{color:'white','font-weight':'bold'}}> Hiii Dad. Its me your little princess. You're my Everything. No one in this world can love me more than you .  I love you.</span>
           <br/>
          <div>
      <video width="300" height="200" controls >
      <source src="video1.mp4" type="video/mp4"/>
      </video>
      </div>
      </div>
      
      </div>
    </div>
  );
};

export default template;
