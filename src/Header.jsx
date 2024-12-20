import { NavLink } from "react-router-dom";
{/* Here we use "NavLink" instate of "Link" because it provide us one active class https://prnt.sc/afDApw57OMoo
  which we can use for styling pourpus and the "end" attribute copare exact path if we dont use this then the active class will also present is
  inner pages also for example /about/inner*/}
export const Header = ()=>{
    return (
        <header style={{ padding: "1rem", background: "#f0f0f0",textAlign:"center" }}>
          <nav>
            <NavLink to="/" end style={{ marginRight: "1rem" }}>Home</NavLink>
            <NavLink to="/about" end style={{ marginRight: "1rem" }}>About</NavLink>
            <NavLink to="/contact" end>Contact</NavLink>
          </nav>
        </header>
    )
  }