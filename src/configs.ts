// @ts-ignore
const env = process.env;
module.exports.mongoURI = `mongodb+srv://@cluster0.8xewh.mongodb.net/hospital_db?retryWrites=true&w=majority`;
module.exports.mongoData = {
    user: env.MONGO_DB_USER,
    pass: env.MONGO_DB_PASS,
    dbName: 'hospital_db',
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
};

module.exports.port = 3001;
