import Tag from '@models/Tag';

import { show } from 'quick-crud';

const tag = async (parent, args) => {
  return await show(Tag, args.where);
};
export default tag;
