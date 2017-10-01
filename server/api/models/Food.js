/**
 * Food.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true
    },
    name: {
      type: 'string',
      unique: true,
      required: true
    },
    unitPrice: {
      type: 'float',
      defaultsTo: '0.0',
      required: true
    }
  }
};

