import { useEffect } from "react";
export const Contact = ()=>{
    useEffect(() => {
        document.title = "Contact Page"; // Set the page title
      }, []);
    return <h1>Hello This is Contact Page</h1>
  }