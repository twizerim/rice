function successmessage(res,state,messag,date){
    return res.status(state).json({
        message:messag,
        datas:date
    })
}

export default successmessage