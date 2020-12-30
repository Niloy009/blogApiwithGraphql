import Category from '@models/Category';

import { destroy } from 'quick-crud';

const deleteCategory = async (parent, { _id }) => {
  return await destroy(Category, _id);
};

export default deleteCategory;
