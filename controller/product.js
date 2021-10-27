const connection = require("../config/mysql");

const index = (req, res) => {
  connection.query(
    {
      sql: "select * from products",
    },
    _response(res)
  );
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
};
