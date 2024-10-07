export default (req,res) => {
    console.log(req);
    
    res.send({
        a:1,
        b:2
    })
}