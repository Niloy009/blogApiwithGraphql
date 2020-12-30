import Category from '@models/Category';

import { show } from 'quick-crud';

const category = async (parent, args) => {
  return await show(Category, args.where);
};
export default category;
