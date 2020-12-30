import mongoose, { Schema, model } from 'mongoose';
import { isURL } from 'validator';

import uniqueValidator from 'mongoose-unique-validator';

const articleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Title is required'],
    minlength: [6, 'Title should be at least 6 Characters']
  },
  slug: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, 'Slug must be unique']
  },
  excert: {
    type: String,
    trim: true
  },
  body: {
    type: String,
    trim: true,
    required: [true, 'Body is required'],
    minlength: [20, 'Article should be atleast 20 characters long']
  },
  featureImage: {
    type: String,
    trim: true,
    validate: [isURL, 'It should be URL']
  },
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: [true, 'Author id is required']
  // },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ]
});

articleSchema.pre('save', function (next) {
  this.slug = this.slug.toLowerCase().split(' ').join('-');
  next();
});

articleSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

export default model('Article', articleSchema);
