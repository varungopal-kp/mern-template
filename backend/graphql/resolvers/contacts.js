const Contact = require('../../models/contact');

module.exports = {
  contactsAdd: async (params) => {
    if (params.params) {
      const formData = JSON.parse(params.params);    
      try {
        const contact = new Contact(formData);
        return await contact.save()
      } catch (err) {
        throw err;
      }
    }else{
        throw 'Failed';
    }
  },
  contacts: async (params={}) => {
    let queries={}
     if (params.params) {
        queries  = JSON.parse(params.params);        
     } 
     try {
       return await Contact.find(queries);
     } catch (err) {
       throw err;
     }
   },
};
