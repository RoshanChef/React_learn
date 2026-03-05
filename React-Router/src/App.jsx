import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {
  return (
    <>

      <BrowserRouter>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/" style={{ textDecoration: "none", color: 'red' }}>{<p>Welcome</p>}</Link>
          <Link to="/about" style={{ textDecoration: "none" }} >{<p>About</p>}</Link>
          <Link to="/contact" style={{ textDecoration: "none" }} >{<p>Contact</p>}</Link>
        </div>

        <Routes>
          <Route path="/" element={<Awesome />}>
            <Route index element={<h2>Home element</h2>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<h2>Contact</h2>} />
            <Route path="/*" element={<h2>Nikal laude</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

  function Awesome() {
    return (<>
        <h1>Header</h1>
        <Outlet/>
        <h1>Footer</h1>
    </>)
  }

  function About() {
    const navigate = useNavigate();
    return (
      <>
        <h2>hello About page</h2>
        <p>The page of about things are there for some reason and scanning something.</p>
        <button style={{ cursor: "pointer" }} onClick={() => navigate('/contact')}>click me</button>
      </>
    )

  }
}


export default App;