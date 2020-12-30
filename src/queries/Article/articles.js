import Article from '@models/Article';

import { index } from 'quick-crud';

const articles = async (parent, args) => {
  return await index(Article, {}, args.where, 'categories tags');
};
export default articles;
