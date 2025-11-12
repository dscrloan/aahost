module.exports = (req, res) => {
  const id = req.query.id || 'unknown';
  res.status(200).json({ id });
};
