import React from "react";
function Team() {
  return (
    <div className="container">
      <div
        className="row p-5 mt-5 mb-5 text-muted border-top "
        style={{ lineHeight: "1.5rem", fontSize: "14px" }}
      >
        <h1 className="text-center  mt-5">
          People
        </h1>
      </div>
      <div className="row  mt-5 text-center ">
        <div className="col-6 p-5">
         <img src='\media\images\UdayHi.jpeg' style={{width:"60%" , borderRadius:"100%"}}/>
         <h4 className="mt-5">Uday Hiwarkar</h4>
         <h6 className="text-muted">CEO,Founder Of BigBull</h6>
        </div>
        <div className="col-6 p-5 text-center">
          <p>
            Uday bootstrapped and founded BigBull in 2026 to overcome the<br/> hurdles he faced during his decade long stint as a trader.  <br/>Today,BigBull has changed the landscape of the Indian broking industry.
          </p>
           <br/> 
          <p>
           He is a member of the SEBI Secondary Market Advisory Committee  <br/>(SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
          Connect on<a href='' style={{textDecoration:"none"}}>Homepage</a>  /<a href=''style={{textDecoration:"none"}}> TradingQnA</a>/ <a href=''style={{textDecoration:"none"}}>LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
