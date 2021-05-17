import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import MainSwitch from "./components/MainSwitch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <MainSwitch />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
