const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/save", (req,res)=>{
	const url = "mongodb://bhavika23ge_db_user:rBsnyKGMzt01QSMq@ac-pbhxboh-shard-00-00.gx6ikhs.mongodb.net:27017,ac-pbhxboh-shard-00-01.gx6ikhs.mongodb.net:27017,ac-pbhxboh-shard-00-02.gx6ikhs.mongodb.net:27017/?ssl=true&replicaSet=atlas-ze6fpm-shard-0&authSource=admin&appName=Cluster0";
	const con = new MongoClient(url);
	const db = con.db("book_rating_26sep26");
	const coll = db.collection("ratings");
	const doc = {"name":req.body.name, "rating":req.body.rating};
	coll.insertOne(doc)
	.then(response=>{
		res.send(response);
	})
	.catch(error => {
		res.send(response);
	})
	.catch(error => {
		res.send(error);
	});
});

app.listen(PORT, () => {
	console.log("ready @" + PORT);
});