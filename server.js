const middlewareOne = (req) => {
  req.body += ' + middlewate 1'
}

const middlewareTwo = (req) => {
  req.body += ' + middleware 2'
}

const middlewareThree = (req) => {
  req.body += ' + middleware 3'
}

//-----------------------start------------------------
//implement 'server' here with 2 methods: 'use' and 'request'


//-------------------------end------------------------

// so the calling the following
server.use(middlewareOne).use(middlewareTwo).use(middlewareThree)
server.request({body: 'abc'}) 

//will print 
// abc + middleware 1 + middleware 2 + middleware 3
