const object = {
    met1(){
        return object.met2()
    },
    met2(){
        return 'DUA';
    }
}

module.exports = object
// console.log(object.met1());