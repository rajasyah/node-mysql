const connection = require("../config/mysql");

const index = (req, res) => {
  const { search } = req.query;
  let exec = {};
  if (search) {
    exec = {
      sql: "select * from products where name like ?",
      values: [`%${search}%`],
    };
  } else {
    exec = {
      sql: "select * from products",
    };
  }
  connection.query(exec, _response(res));
};

const sort = (req, res) => {
  connection.query(
    {
      sql: "select * from products where id = ?",
      values: [req.params.id],
    },
    _response(res)
  );
};

const destroy = (req, res) => {
  connection.query(
    {
      sql: "delete from products where id = ?",
      values: [req.params.id],
    },
    _response(res)
  );
};

const store = (req, res) => {
  const { name, price, stock, status } = req.body;
  connection.query(
    {
      sql: "INSERT INTO products (name,price,stock,status) VALUES (?,?,?,?) ",
      values: [name, price, stock, status],
    },
    _response(res)
  );
};
const update = (req, res) => {
  const { name, price, stock, status } = req.body;
  connection.query(
    {
      sql: "UPDATE products SET name = ?, price = ?, stock = ?, status = ? WHERE id = ? ",
      values: [name, price, stock, status, req.params.id],
    },
    _response(res)
  );
};

const _response = (res) => {
  return (error, result) => {
    if (error) {
      res.send({
        status: "failed",
        response: "failed to fetch data",
      });
    } else {
      res.send({
        status: "success",
        response: result,
      });
    }
  };
};

module.exports = {
  index,
  sort,
  store,
  update,
  destroy,
};
