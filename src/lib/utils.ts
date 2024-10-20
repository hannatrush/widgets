import { getLeaves } from 'react-mosaic-component';
import { CustomMosaicNode } from '../lib/types';
import { Company } from './types';

export const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const generateInitialMosaicNodes = (items: Company[]): CustomMosaicNode | null => {
  if (items.length === 1) {
    return items[0].id;
  } else if (items.length === 2) {
    return {
      direction: 'row',
      first: items[0].id,
      second: items[1].id,
      splitPercentage: 50,
    };
  } else if (items.length >= 3) {
    return {
      direction: 'row',
      first: items[0].id,
      second: {
        direction: 'column',
        first: items[1].id,
        second: items[2].id,
        splitPercentage: 50,
      },
      splitPercentage: 35,
    };
  }
  return null;
};

export const getAvailableCompanies = (nodes: CustomMosaicNode | null, companies: Company[]) => {
  const displayedCompaniesIds = getLeaves(nodes);
  const availableCompanies = companies
    .filter((company) => !displayedCompaniesIds.includes(company.id))
    ?.map((company: Company) => ({
      value: company.id,
      label: company.ticker,
    }));

  return availableCompanies;
};
