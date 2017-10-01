/**
 * InvoiceItem.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    invoice: {
      model: 'invoice'
    },
    name: {
      type: 'string',
      required: true
    },
    quantity: {
      type: 'float',
      defaultsTo: '0.0',
      required: true
    },
    unitPrice: {
      type: 'float',
      defaultsTo: '0.0',
      required: true
    }
  }
};

