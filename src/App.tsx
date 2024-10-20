import { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import Spinner from './components/Spinner';
import { sleep } from './lib/utils';

import './index.css';
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

function App() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    setIsLoading(true);
    await sleep(1000);
    try {
      const response = await axios.get('/mocks/companies-lookup.json');
      setCompanies(response.data);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    <div>{error}</div>;
  }

  return (
    <div className="mosaic-app text-xs font-inter text-zinc-900 bg-[#abb3bf] min-h-screen p-5 overflow-hidden">
      {companies?.length ? (
        <Dashboard companies={companies} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        'Companies list is empty'
      )}
    </div>
  );
}

export default App;
