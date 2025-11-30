export default function handler(req, res) {
  const {
    year = 2025,
    month,
    background = "solid",
    color = "#000000",
    border = "#000000",
    image = null,
  } = req.query;

  if (!month) {
    return res.status(400).json({ error: "Month is required" });
  }

  res.status(200).json({
    message: "Calendar API working!",
    year,
    month,
    background,
    color,
    border,
    image,
  });
}
