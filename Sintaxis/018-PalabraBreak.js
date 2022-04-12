let a = 0

while(a <= 10){
    if (a %2 == 0){
        console.log( a )
    }
    a++
    break
}
a= 0
do{
    if (a %2 == 0){
        console.log( a )
    }
    a++
    break
}while(a <= 10)

for(let i = 0; i <= 10; i++){
    if (i %2 == 0 && i == 2){
        console.log( i )
        break
    }
}