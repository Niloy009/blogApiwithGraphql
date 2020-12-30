import mongoose, { model } from 'mongoose';

import uniqueValidator from 'mongoose-unique-validator';

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'name is required'],
      minlength: [6, 'name should be atleast 6 characters long']
    },
    slug: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, 'slug is unique']
    }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

tagSchema.pre('save', function (next) {
  this.slug = this.slug.toLowerCase().split(' ').join('-');
  next();
});

tagSchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'tags'
});

tagSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

const Tag = model('Tag', tagSchema);
module.exports = Tag;
