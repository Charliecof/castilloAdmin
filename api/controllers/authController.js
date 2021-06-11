const bcrypt = require("bcryptjs");
const mysql2 = require("mysql2");
const jwt = require("jsonwebtoken");

const pool = mysql2.createPool({
  host: "172.104.180.144",
  user: "carlosAdmin",
  password: "carlosAdmin",
  database: "castillo",
});

exports.signup = (req, res, next) => {
  const nombre = req.body.nombre;
  const appellido = req.body.apellido;
  const correo = req.body.correo;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then((result) => {
      pool
        .promise()
        .execute(
          "INSERT INTO usuario(nombre,apellido,correo,password) VALUES(?,?,?,?)",
          [nombre, appellido, correo, result]
        )
        .then(([rows, fields]) => {
          res.send({ message: "user created" });
        })
        .catch((err) => {});
    })
    .catch((err) => {});
};

exports.login = (req, res, next) => {
  const correo = req.body.correo;
  const password = req.body.password;
  pool
    .promise()
    .execute("Select * from usuario where correo = ?", [correo])
    .then(([rows, fields]) => {
      if (rows[0]) {
        bcrypt
          .compare(password, rows[0].password)
          .then((isEqual) => {
            if (isEqual) {
              const token = jwt.sign(
                {
                  correo: correo,
                  userId: rows[0].id,
                },
                "danielPerez",
                { expiresIn: "1h" }
              );
              res.status(200).json({ token: token });
            }
          })
          .catch((err) => {});
      }
    })
    .catch((err) => {});
};

exports.patchUsuario = (req, res, next) => {
  console.log(req.body);
  const old = req.body.correoviejo;
  pool
    .promise()
    .execute("SELECT * from usuario where correo = ? ", [old])
    .then(([rows, fields]) => {
      console.log(rows);
      pool
        .promise()
        .execute(
          "UPDATE usuario SET nombre= ?,apellido= ?,correo=? where id = ? ",
          [req.body.nombre, req.body.apellido, req.body.correonuevo, rows[0].id]
        )
        .then(([rows2, fields2]) => {
          console.log(rows2);
          res.send({ message: "updated" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
