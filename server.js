const middlewareOne = () => {
    console.log('middleware 1')
}

const middlewareTwo = () => {
    console.log('middleware 2')
}

const middlewareThree = () => {
    console.log('middleware 3')
}

//-----------------------start------------------------
//implement 'server' here



//-------------------------end------------------------

server.use(middlewareOne).use(middlewareTwo).use(middlewareThree)

server.request('abc') 
//prints 
// middleware 1
// middleware 2
// middleware 3
// abc
