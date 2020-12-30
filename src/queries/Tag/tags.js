import Tag from '@models/Tag';

import { index } from 'quick-crud';

const tags = async (parent, args) => {
  return await index(Tag, {}, args.where);
};
export default tags;
