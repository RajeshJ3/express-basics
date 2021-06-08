const mysql = require("mysql");

config = {
  host: "3.6.118.235",
  user: "admin",
  password: "Ornate$aditya01",
  database: "ornate_final_2",
  multipleStatements: true,
};

conn = mysql.createConnection(config);

function connectDB() {
  conn.connect((res) => {
    if (!res) {
      console.log("[Database] Connected");
    } else {
      console.log("[Database] Connection Fail!");
    }
  });
}

exports.connectDB = connectDB;
exports.conn = conn;
