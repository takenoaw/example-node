exports.success = (req,res,data,status)=>{
    res.status(status).json({
        error:false,
        status,
        data
    });
}

exports.error = (req,res,message,status)=>{
    res.status(status).json({
        error:true,
        status,
        message
    });
}