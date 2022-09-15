// var module = {
//         exports:{}

// }
const contactsRouter = require("./app/routes/contact.route");
express = require('express')
const cors = require('cors')
const ApiError = require("./app/api-error");

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/contacts',contactsRouter)

app.get("/",function(req,res){

    res.json({message:"Welcome to contact-book application 1"});
})

// handle 404 response
app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
    });

    app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
    message: error.message || "Internal Server Error",
    });
    });


module.exports= app

// return module.exports