const User = require('./User');
const Category = require('./Category');
const UserJobs = require('./UserJobs');
const Jobs = require('./Jobs');


Category.hasMany(Jobs, {
    foreignKey: 'category_id',
});

Jobs.belongsTo(Category,{
    foreignKey:'Category_id'
});


Jobs.belongsToMany(User,{

    through:UserJobs,
    unique: false,
    foreignKey: 'jobs_id',
    // through: {
    // model:UserJobs,
    // unique: false,
    // foreignKey: 'jobs_id',
    // }    
    
});

User.belongsToMany(Jobs,{
    through: UserJobs,
     unique: false,
    foreignKey: 'user_id',

    // through: {
    //     model:UserJobs,
    //     unique: false,
    //     foreignKey: 'user_id',
    //     }   
   
    
});

module.exports = { User, Category, UserJobs, Jobs };

