import { useState } from "react";
import DataList from "./components/DataList"
import Header from "./components/Header"

function App() {
    const [search, setSearch] = useState("");
  return (
    <div className="container">
      <Header search={search} setSearch={setSearch} />
     
      <DataList search={search}/>

    </div>
  )
}

export default App
