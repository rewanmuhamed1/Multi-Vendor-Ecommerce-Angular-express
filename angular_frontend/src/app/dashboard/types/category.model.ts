export interface categoryReducer {
  successMessage: string;
  errorMessage: string;
  loader: boolean;
  categories : category[] ;
  totalCategory? :number
}

export interface category {
  _id: string;
  name: string;
  image: File | string;
  slug?: string;
}
