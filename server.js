const middlewareOne = () => {
    console.log('middleware 1')
}

const middlewareTwo = () => {
    console.log('middleware 2')
}

const middlewareThree = () => {
    console.log('middleware 3')
}

//Add your code here
//-----------------------start------------------------




//-------------------------end------------------------


//add middlewares
// <...>.use(middlewareOne).use(middlewareTwo).use(middlewareThree)

//perform request
// <...>.request('abc') 

//prints 
// middleware 1
// middleware 2
// middleware 3
// reuest
