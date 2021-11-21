exports.HomeRoutes = (req,res) =>{
    res.render('index')
}

exports.AddRoute = (req,res)=>{
    // res.send(`
    //     <p>Hi Bro!!!</p>
    //     <h2>How Are You ?? <a href="/guru">Click Here</a></h2>
    // `);

    res.render('add_user');
}

exports.UpdateRoute = (req,res)=>{
    // res.send(`
    //     <p>Hi Bro!!!</p>
    //     <h2>How Are You ?? <a href="/guru">Click Here</a></h2>
    // `);

    res.render('update_user');
}