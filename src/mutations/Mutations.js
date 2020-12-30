import createArticle from './Article/createArticle';
import updateArticle from './Article/updateArticle';
import deleteArticle from './Article/deleteArticle';
import createTag from './Tag/createTag';
import updateTag from './Tag/updateTag';
import deleteTag from './Tag/deleteTag';
import createCategory from './Category/createCategory';
import updateCategory from './Category/updateCategory';
import deleteCategory from './Category/deleteCategory';

const Mutation = {
  //Article's Mutation
  createArticle,
  updateArticle,
  deleteArticle,

  //Tag's Mutation
  createTag,
  updateTag,
  deleteTag,

  //Category's Mutation
  createCategory,
  updateCategory,
  deleteCategory
};

export default Mutation;
