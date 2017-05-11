/**
 * Properties.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	 no:{
      type:'integer',
      autoIncrement:true,
      primaryKey:true
    },
    id:{
      type:'string',
      unique:true
    },
    title:{
      type:'string'
    },
    status:{
      type:'string'
    },
    type:{
      type:'string'
    },
    price:{
      type:'integer'
    },
    province:{
      type:'string'
    },
    city:{
      type:'string'
    },
    address:{
      type:'string'
    },
    lat:{
      type:'string'
    },
    lng:{
      type:'string'
    },
    lotSize:{
      type:'string'
    },
    buildingSize:{
      type:'string'
    },
    floor:{
      type:'integer'
    },
    bed:{
      type:'integer'
    },
    bath:{
      type:'integer'
    },
    description:{
      type:'string'
    },
    pictures:{
      collection:'files',
      via:'idOwner'
    },
    idUser:{
      model:'users'
    }
    
  }
};

