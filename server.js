const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'RBCCI_SBLAF_Loan_Application_Form_feb_23_2026.html'));
});

app.listen(PORT, () => {
  console.log(`RBCCI SBLAF Form running on port ${PORT}`);
});
