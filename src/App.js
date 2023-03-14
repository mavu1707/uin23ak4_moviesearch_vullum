import './App.css';

import Layout from './components/Layout';
import Main from './components/Main';
import SearchResults from './components/Searchresults';

function App() {
  return (
      <Layout child={<Main />} />
  )
    
}

export default App;
