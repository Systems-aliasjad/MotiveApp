export interface ISearch {
  currentPage: number;
  pageSize: number;
  sortBy: string;
  sortOrder: string;
  filters: Array<IFilter>;
}
export interface IFilter {
  groupId: number;
  field: string;
  value: string;
  Opr?: string;
}

export interface ICounterPartySearch {
  partyName: string;
  typeFlag: string;
  treatyOrFacFlag: string;
  filters: Array<IFilter>;
}
