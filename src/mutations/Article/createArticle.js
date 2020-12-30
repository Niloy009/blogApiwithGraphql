import Article from '@models/Article';

import { store } from 'quick-crud';

const createArticle = async (parent, args) => {
  return await store(Article, args.data);
};

export default createArticle;
