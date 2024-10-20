import { SingleValue } from 'react-select';
import Dropdown from './Dropdown';
import { DropdownOption } from '../lib/types';

type CustomToolbarProps = {
  title: string;
  dropdownValue: DropdownOption;
  dropdownOptions: DropdownOption[];
  onSelectChange: (value: SingleValue<DropdownOption>) => void;
};

const CustomToolbar = ({
  title,
  dropdownValue,
  dropdownOptions,
  onSelectChange,
}: CustomToolbarProps) => (
  <div className="flex items-center gap-5">
    <h5 className="text-sm font-bold">{title}</h5>
    <Dropdown value={dropdownValue} options={dropdownOptions} onSelect={onSelectChange} />
  </div>
);

export default CustomToolbar;
