module.exports = Array.range = function (start, end, step = 1) {

    //for Array.range(N) => [...N]
    if(arguments.length == 1) {

        end = start
        start = 0

    }

    return Array.from({ length: Math.floor( (end - start) / step ) }, (element, index) => {
        
        return start + (index * step)

    })
  
}