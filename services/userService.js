const { models } = require("../models/definitions");
module.exports = {
  getUsers: async () => {
    const result = await models.users.findAll(); // jb tk data sara how na ho agly py na jaye
    return result;
  },
  createUsers: async (data) => {
    console.log(data); //this basically ensures that jb tk table me data create nhi hojata tbh tk wait kry
    const result = await models.users.create(data);
    console.log(result);
    return result;
  },
};
