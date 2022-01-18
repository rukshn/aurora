const express = require("express");
const app = express();
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes");

// The default port for the FHIR server is port 3000
const port = 3000;
// Enable cors for express
app.use(cors());
// Enable accepting json content
app.use(express.json());
// Get the patient routes
app.use("/Patient", patientRoutes);
// Default endpoint
app.get("/", (req, res) => {
  res.json(`FHIR server running at port ${port}`);
});
// Listen to the given port
app.listen(port, () => {
  console.log(`🔥 FHIR server listening at http://127.0.0.1:${port}`);
});
