import { useState } from 'react';
import { Mosaic } from 'react-mosaic-component';
import Window from './Window';
import { Company, CustomMosaicNode } from '../lib/types';
import { generateInitialMosaicNodes, getAvailableCompanies } from '../lib/utils';

type DashboardProps = {
  companies: Company[];
};

const Dashboard = ({ companies }: DashboardProps) => {
  const [nodes, setNodes] = useState<CustomMosaicNode | null>(
    generateInitialMosaicNodes(companies),
  );

  const onChange = (newNodes: CustomMosaicNode | null) => {
    setNodes(newNodes);
  };

  const availableCompanies = getAvailableCompanies(nodes, companies);

  return (
    <Mosaic<string>
      renderTile={(id, path) => {
        const currentCompany = companies.find((company) => company.id === String(id));

        return (
          <Window
            id={id}
            path={path}
            company={currentCompany!}
            tickers={availableCompanies}
            companies={companies}
          />
        );
      }}
      value={nodes}
      onChange={onChange}
    />
  );
};

export default Dashboard;
