import { Layout } from "./components/Layout/Layout.jsx";
import { LoginFooter } from "./components/LoginFooter/LoginFooter";

function App({ children }) {
  return (
    <Layout className="App" title={"Viðburðasíðan"} footer={LoginFooter}>
      {children}
    </Layout>
  );
}

export default App;
