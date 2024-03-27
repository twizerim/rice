const errormessage=(res,status,messg,datas)=>{
    res.status(status).json({
        message:messg
    })
}
export default errormessage