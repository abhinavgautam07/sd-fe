import Table from "./table"
import './App.css';
import "./table.css"
function App() {
  return (
    <div className="App">
        <div style={{width:"100%",height: "50px",background:"#dcdcdc",marginBottom: "20px",paddingTop: "20px"}}>
            <h3 style={{fontStyle:"italic",marginTop:"1px"}}>StartupDhaba</h3>
        </div>
      <Table />
    </div>
  );
}

export default App;
