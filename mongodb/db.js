use('avb')
db.usuarios.insertOne({
    nome:"Marcos",
    email: "markim@",
    senha: "123",
    data_registro: new Date()
});

db.usuarios.createIndex({email:1},{unique:true});

