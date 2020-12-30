import Tag from '@models/Tag';

import { update } from 'quick-crud';

const updateTag = async (parent, { _id, data }) => {
  return await update(Tag, _id, data);
};

export default updateTag;
