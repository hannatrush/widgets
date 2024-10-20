import Select, { SingleValue } from 'react-select';
import { DropdownOption } from '../lib/types';

type DropdownProps = {
  value: DropdownOption;
  options: DropdownOption[];
  onSelect: (value: SingleValue<DropdownOption>) => void;
};

const Dropdown = ({ value, options, onSelect }: DropdownProps) => {
  return (
    <Select<DropdownOption>
      defaultValue={value}
      options={options}
      onChange={onSelect}
      placeholder="Select a company"
      classNamePrefix="select"
      classNames={{
        container: () => 'select-container text-xs max-w-24 min-w-24',
      }}
    />
  );
};

export default Dropdown;
