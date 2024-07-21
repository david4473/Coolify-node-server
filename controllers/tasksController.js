const db = require("../db/db");

const getTasks = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM todos ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const result = await db.query(
      "UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *",
      [title, description, completed, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM todos WHERE id = $1", [id]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
