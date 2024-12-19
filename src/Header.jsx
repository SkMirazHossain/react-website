import { Link } from "react-router-dom";
export const Header = ()=>{
    return (
        <header style={{ padding: "1rem", background: "#f0f0f0",textAlign:"center" }}>
          <nav>
            <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
            <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
    )
  }