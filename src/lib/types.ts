import { MosaicDirection, MosaicNode, MosaicParent } from 'react-mosaic-component';

export type Company = {
  id: string;
  ticker: string;
  name: string;
  lei: string | null;
  legal_name: string;
  stock_exchange: string;
  sic: number;
  short_description: string;
  long_description: string;
  ceo: string;
  company_url: string;
  business_address: string;
  mailing_address: string;
  business_phone_no: string;
  hq_address1: string;
  hq_address2: string | null;
  hq_address_city: string;
  hq_address_postal_code: string;
  entity_legal_form: string | null;
  cik: string;
  latest_filing_date: string | null;
  hq_state: string | null;
  hq_country: string;
  inc_state: string | null;
  inc_country: string;
  employees: number;
  entity_status: string | null;
  sector: string;
  industry_category: string;
  industry_group: string;
  template: string;
  standardized_active: boolean;
  first_fundamental_date: string;
  last_fundamental_date: string;
  first_stock_price_date: string;
  last_stock_price_date: string;
  thea_enabled: boolean | null;
  legacy_sector: string;
  legacy_industry_category: string;
  legacy_industry_group: string;
};

export type CustomMosaicNode = MosaicNode<string> | CustomMosaicParent;

interface CustomMosaicParent extends MosaicParent<string> {
  direction: MosaicDirection;
  first: CustomMosaicNode;
  second: CustomMosaicNode;
  splitPercentage: number;
}

export type DropdownOption = {
  value: string;
  label: string;
};
