import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout1 from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";



export default function App() {
return (
  
<BrowserRouter>
<div>
  <h1>
    React Router
  </h1>
</div>
<Routes>
<Route path="/" element={<Layout1 />} >
<Route index element={<Home />} />
<Route path="blogs" element={<Blogs />} />
<Route path="contact" element={<Contact />} />
<Route path="*" element={<NoPage />} />
</Route>
</Routes>
</BrowserRouter>
);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
