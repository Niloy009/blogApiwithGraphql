import mongoose, { model } from 'mongoose';

import uniqueValidator from 'mongoose-unique-validator';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required'],
      minlength: [6, 'Name must be atleast 6 characters long']
    },
    slug: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, 'Slug must be unique']
    }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

categorySchema.pre('save', function (next) {
  this.slug = this.slug.toLowerCase().split(' ').join('-');
  next();
});

categorySchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'categories'
});

categorySchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

export default model('Category', categorySchema);
