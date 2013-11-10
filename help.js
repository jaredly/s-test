
var x = 20
function z(){
 if (x-- > 0) setTimeout(z, 1000)
 console.log('Imathere', x)
}
z()

