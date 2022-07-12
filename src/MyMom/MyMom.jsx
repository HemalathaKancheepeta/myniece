import "./MyMom.css";
import React from "react";

function template() {
  return (
    <div className="my-mom">
      <div className="row" style={{'max-width':'90%'}}>
      <div className="col-lg-5 col-sm-5 col-md-5 col-xs-5" pic>
        <img src="fam2.jpeg" style={{width:'300px',height:'350px'}}/>
      </div>
      <div className="col-lg-5 col-sm-5 col-md-5 col-xs-5" textArea style={{'max-width':'400px','font-style':'italic'}}>
       <br/>
       <span style={{color:'white','font-weight':'bold'}}> Hiii Mom. Its me your little Angel. I like it when it smiles,And i specially like it when i make you Smile .You are so beautiful Maa. I love you.</span>
           <br/>
          <div>
     
      </div>
      </div>
      
      </div>

    </div>
  );
};

export default template;
