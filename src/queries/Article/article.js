import Article from '@models/Article';

import { show } from 'quick-crud';

const article = async (parent, args) => {
  return await show(Article, args.where, 'categories tags');
};
export default article;
