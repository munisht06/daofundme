const app = require("./server");
const port = process.env.PORT || 8000;

require("dotenv").config();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
