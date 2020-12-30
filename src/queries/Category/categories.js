import Category from '@models/Category';

import { index } from 'quick-crud';

const categories = async (parent, args) => {
  return await index(Category, {}, args.where);
};

export default categories;
