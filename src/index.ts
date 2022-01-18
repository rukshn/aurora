const express = require("express");
const app = express();
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes");

const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/Patient", patientRoutes);

app.get("/", (req, res) => {
  res.json(`FHIR server running at port ${port}`);
});

app.listen(port, () => {
  console.log(`🔥 FHIR server listening at http://127.0.0.1:${port}`);
});
