import React from "react";


import "./Projects.css";

export default function Projects() {
 
  return (
    <div  className="projects-container">
      <div className="hello-word">
        <h1  >Hello , World !</h1>
      </div>
      <div className="include">
        <strong   style={{ color: "#5270fe"  }}>
          {" "}
          #include
          <strong className="stdio" style={{ color: "#6cb56d" }}> &lt; stdio.h &gt;</strong>{" "}
        </strong>
      </div>
      <div className="intmain">
        <span style={{ color: "#5270fe" }}>
          {" "}
          int <span style={{ color: "#6cb56d" }}>main</span>{" "}
          <span style={{ color: "black" }}>( ) {"{"} </span>
        </span>
      </div>
      <div className="printf-msg">
        <span style={{ color: "#febd59"   }}>
          {"//"}printf() displays the string inside quotation
        </span>
      </div>
      <div className="printf">
        <span style={{ color: "#febe01"   }}>
          printf() <span style={{ color: "black" }}>(</span>{" "}
          <span style={{ color: "#6ab36a" }}>"Hello , World !"</span>{" "}
          <span style={{ color: "black" }}>);</span>
        </span>
      </div>
      <div className="return0">
        <span style={{ color: "#cb6ce6"   }}>
         return <span style={{color :"#febd58"}}>0</span> <span style={{color:"black"}}>;</span>
        </span>
      </div>
      <div className="closeTag">
        <span style={{ color: "black"   }}>
         {"}"}
        </span>
      </div>
     
    </div>
  );
}
