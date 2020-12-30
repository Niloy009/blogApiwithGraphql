import Category from '@models/Category';

import { update } from 'quick-crud';

const updateCategory = async (parent, { _id, data }) => {
  return await update(Category, _id, data);
};

export default updateCategory;
