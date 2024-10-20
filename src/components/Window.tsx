import { useContext } from 'react';
import { SingleValue } from 'react-select';
import { MosaicBranch, MosaicContext, MosaicWindow } from 'react-mosaic-component';
import CustomToolbar from './CustomToolbar';
import CompanyInfo from './CompanyInfo';
import { Company, DropdownOption } from '../lib/types';

interface WindowProps {
  id: string;
  path: MosaicBranch[];
  company: Company;
  tickers: DropdownOption[];
  companies: Company[];
}

const Window = ({ id, path, company, tickers, companies }: WindowProps) => {
  const { mosaicActions } = useContext(MosaicContext);

  const onSelectChange = (value: SingleValue<DropdownOption>) => {
    const newContent = companies.find((company) => company.id === value?.value);
    if (newContent) {
      mosaicActions.replaceWith(path, newContent.id);
    }
  };

  return (
    <MosaicWindow<string>
      title="Company info"
      path={path}
      renderToolbar={() => (
        <div className="px-3 min-w-full">
          <CustomToolbar
            title="Company info"
            dropdownOptions={tickers}
            onSelectChange={onSelectChange}
            dropdownValue={{ value: id, label: company?.ticker || '' }}
          />
        </div>
      )}>
      <CompanyInfo company={company} />
    </MosaicWindow>
  );
};

export default Window;
