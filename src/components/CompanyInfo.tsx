import { Company } from '../lib/types';

type CompanyInfoProps = {
  company: Company;
};

const CompanyInfo = ({ company }: CompanyInfoProps) => {
  return (
    <div className="py-3 pl-3 pr-1 h-full">
      <div className="flex flex-col gap-2 pr-2 h-full overflow-y-auto">
        <p>
          <strong>Ticker: </strong>
          {company.ticker}
        </p>

        <p>
          <strong>Name: </strong>
          {company.name}
        </p>

        <p>
          <strong>Legal name: </strong>
          {company.legal_name}
        </p>

        <p>
          <strong>Stock exchange: </strong>
          {company.stock_exchange}
        </p>

        <p>
          <strong>Short description: </strong>
          {company.short_description}
        </p>

        <p>
          <strong>Long description: </strong>
          {company.long_description}
        </p>

        <p>
          <strong>Web: </strong>
          {company.company_url}
        </p>

        <p>
          <strong>Business address: </strong>
          {company.business_address}
        </p>

        <p>
          <strong>Business phone: </strong>
          {company.business_phone_no}
        </p>

        <p>
          <strong>Entity legal form: </strong>
          {company.entity_legal_form}
        </p>

        <p>
          <strong>Latest filling date: </strong>
          {company.latest_filing_date}
        </p>

        <p>
          <strong>Inc country: </strong>
          {company.inc_country}
        </p>

        <p>
          <strong>Employees: </strong>
          {company.employees}
        </p>

        <p>
          <strong>Sector: </strong>
          {company.sector}
        </p>

        <p>
          <strong>Industry category: </strong>
          {company.industry_category}
        </p>
        <p>
          <strong>Industry group: </strong>
          {company.industry_group}
        </p>

        <p>
          <strong>First stock price date: </strong>
          {company.first_stock_price_date}
        </p>

        <p>
          <strong>Last stock price date: </strong>
          {company.last_stock_price_date}
        </p>

        <p>
          <strong>Thea enabled: </strong>
          {company.thea_enabled ? 'Yes' : 'No'}
        </p>

        <p>
          <strong>Legacy Sector: </strong>
          {company.legacy_sector}
        </p>

        <p>
          <strong>Legacy industry category: </strong>
          {company.legacy_industry_category}
        </p>

        <p>
          <strong>Legacy industry group: </strong>
          {company.legacy_industry_group}
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
