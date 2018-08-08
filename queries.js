const database = require("./database-connection");

module.exports = {
    list(){
        return database('coffee').select().orderBy('id', 'asc');
    },
    read(id){
        return database('coffee').select().where('id', id);
    },
    create(coffee){
        return database('coffee').insert(coffee).returning('*')
            .then(returnedArray => returnedArray[0]);
    },
    update(id, coffee){
        return database('coffee').update('coffee')where('id', id)
            .returning('*').then(returnedArray => returnedArray[0]);
    },
    delete(id){
        return database('coffee').delete().where('id', id);
    }
};
