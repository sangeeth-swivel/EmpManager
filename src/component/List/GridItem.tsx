import React from "react";
import { Employee } from "../../../interfaces";

function GridItem(props: { children: any; className: any; }) {
    const { children, className } = props;
  
    return (
      <div className={`col ${className}`}>
        {children}
      </div>
    );
  }
  
  export default GridItem;