const middlewareOne = (req) => {
  req.body += ' + middleware 1'
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

// if we call the following two lines
server.use(middlewareOne).use(middlewareTwo).use(middlewareThree)
server.request({body: 'abc'}) 

//the output will be
// abc + middleware 1 + middleware 2 + middleware 3
