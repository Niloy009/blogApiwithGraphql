import Tag from '@models/Tag';

import { destroy } from 'quick-crud';

const deleteTag = async (parent, { _id }) => {
  return await destroy(Tag, _id);
};

export default deleteTag;
