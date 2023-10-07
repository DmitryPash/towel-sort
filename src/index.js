
// You should implement your task here.


module.exports = function towelSort (matrix) {
  if(matrix == undefined) return []
  let result = []
    matrix.map((elem,index) => {
        if(index % 2 == 0 ) {
            result.push(...elem)
        } else {
            result.push(...elem.reverse()) 
        }
    })
    return result
}
