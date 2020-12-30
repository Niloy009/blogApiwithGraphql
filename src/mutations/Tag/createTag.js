import Tag from '@models/Tag';

import { store } from 'quick-crud';

const createTag = async (parent, args) => {
  const tag = await store(Tag, args.data);

  return tag;
};

module.exports = createTag;
