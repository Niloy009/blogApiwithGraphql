import Article from '@models/Article';

import { update } from 'quick-crud';

const updateArticle = async (parent, { _id, data }) => {
  return await update(Article, _id, data);
};

export default updateArticle;
