import { Layout } from './components/Layout/Layout.jsx';
import { LoginFooter } from './components/LoginFooter/LoginFooter.jsx';

function App({ children }) {
  return (
    <Layout className='App' title={'Viðburðasíðan'} footer={LoginFooter}>
      {children}
    </Layout>
  );
}

export default App;
