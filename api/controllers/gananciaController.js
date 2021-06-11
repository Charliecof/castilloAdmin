const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ log: ["query"] });
const dfs = require("date-from-string");

exports.getGanancias = (req, res, next) => {
  const aux = dfs.parse(req.body.fechaI),
    aux2 = dfs.parse(req.body.fechaF);
  console.log(req.body);
  const ganancia = prisma.$queryRaw`SELECT total_count(${aux},${aux2});`
    .then((result) => {
      res.statusCode = 200;
      res.send(result[0]);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
