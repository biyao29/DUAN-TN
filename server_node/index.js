const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

// === KHỞI ĐỘNG SERVER ===
app.listen(port, () => {
    console.log(`Server đang chạy tại: http://localhost:${port}`);
}).on('error', function (err) {
    console.log(`Lỗi server: ${err}`);
});
