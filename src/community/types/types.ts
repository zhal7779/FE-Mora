import { Dispatch, SetStateAction } from 'react';
import { postData } from '../../@types/post/postDataType';

export type fetchPostProps = {
  selectedCategoryId: string;
  page: number;
  view: number;
  keyword?: string;
  sort: string;
};

export type communityProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  selectedCategoryId: string;
  setSelectedCategoryId: Dispatch<SetStateAction<string>>;
};

export type paginationData = {
  currentPage: number;
  objArr: postData[];
  totalItems: number;
  totalPages: number;
};
