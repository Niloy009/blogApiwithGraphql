import Category from '@models/Category';

import { store } from 'quick-crud';

const createCategory = async (parent, args) => {
  return await store(Category, args.data);
};

export default createCategory;
