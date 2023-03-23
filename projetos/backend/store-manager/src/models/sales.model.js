const connection = require('../database/connection');

const getAllSales = async () => {
  const [rows] = await connection.execute(`
    SELECT
      sal.id AS saleId,
      DATE_FORMAT(sal.date, '%Y-%m-%dT%H:%i:%s.000Z') AS date,
      salProd.product_id AS productId, salProd.quantity
    FROM sales sal
    JOIN sales_products salProd ON sal.id = salProd.sale_id
    ORDER BY saleId ASC, productId ASC;
  `);
  // faltou map na linha
  return rows.map((row) => ({
    saleId: row.saleId,
    date: row.date,
    productId: row.productId,
    quantity: row.quantity,
  }));
};

const getSaleById = async (id) => {
  // praticamente igual ao getAllSales
  const [rows] = await connection.execute(`
    SELECT
      DATE_FORMAT(sal.date, '%Y-%m-%dT%H:%i:%s.000Z') AS date,
      salProd.product_id AS productId, salProd.quantity
    FROM sales sal
    JOIN sales_products salProd ON sal.id = salProd.sale_id WHERE sal.id = ?
  `, [id]);
  return rows.map((row) => ({
    date: row.date,
    productId: row.productId,
    quantity: row.quantity,
  }));
};

// const createSale = async ({ productId, quantity }) => {
//   const [{ insertId }] = await connection.execute(`
//     INSERT INTO sales_products (product_id, quantity)
//     VALUES (?, ?);
//   `, [productId, quantity]);
//   const [rows] = await connection.execute(`
//     SELECT * FROM sales_products WHERE sale_id = ?;
//   `, [insertId]);
//   return rows[0];
// };

const createSale = async (saleId, productId, quantity) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);
  `, [saleId, productId, quantity]);
  return insertId;
};

// roda primeiro o createSaleDate pra pegar o ID da data
const createSaleDate = async () => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO sales (date)
    VALUES (NOW());
  `);
  return insertId;
};

const deleteSale = async (id) => {
  await connection.execute(`
    DELETE FROM sales_products WHERE sale_id = ?;
  `, [id]);
  const [result] = await connection.execute(`
    DELETE FROM sales WHERE id = ?;
  `, [id]);
  return result.affectedRows;
};

const updateSale = async (id, productId, quantity) => {
  const [result] = await connection.execute(`
    UPDATE sales_products SET quantity = ?
    WHERE sale_id = ? AND product_id = ?;
  `, [quantity, id, productId]);
  // eu sei que não é pra estar aqui mas estou cansado agora
  if (result.affectedRows === 0) throw Error('SALE_NOT_FOUND');
  return result;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  createSaleDate,
  deleteSale,
  updateSale,
};