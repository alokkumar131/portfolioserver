exports.getTickets = (req,res,next)=>{
    res.status(200).json({
        tickets : [{tcktno:1231, country:"Indi"}]
    })
}
exports.onSubmit = (req,res)=>{
    console.log(req.body);
      var formdata = {
          name: req.body
      }
      res.status(200).json({
        tickets : formdata
      
    })
}