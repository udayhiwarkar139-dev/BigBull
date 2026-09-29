import React from "react";

function Awards() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="\media\images\largestBroker.svg"/>
                </div>
                 <div className="col-6">
                    <h1> Largest stock Broker in India</h1>
                    <p>
                    2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                             <ul>
                        <li>
                            <p> Future and Option</p>
                        </li>
                         <li>
                            <p> Commodity derivative</p>
                        </li>
                         
                    </ul>
                        </div>
                         <div className="col-6">
 <ul>
                        <li>
                            <p>Stok and Ipos</p>
                        </li>
                         <li>
                            <p> Direct mutual Fund</p>
                        </li>
                         <li>
                            <p> Bond</p>
                        </li>
                    </ul>
                         </div>
                    </div>
                   
                 </div>
            </div>

        </div>
    )
}

export default Awards;