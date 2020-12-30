import Article from '@models/Article';

import { destroy } from 'quick-crud';

const deleteArticle = async (parent, { _id }) => {
  return await destroy(Article, _id);
};

export default deleteArticle;
