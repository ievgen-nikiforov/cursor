let N = prompt("Please input integer N=");
N=Number(N);
let isIntegerN= Number.isInteger(N);
console.log("N=", N);
if (!isIntegerN||isNaN(N)){ 
    console.log("N is not a proper number");
} else {
    let M = prompt("Please input integer M=");
    M=Number(M);
   let isIntegerM= Number.isInteger(M);
    console.log("M=", M);
    if (!isIntegerM||isNaN(N)){ 
        console.log("M is not a proper number");
    }else{
   let  omitEven = confirm("Should we omit even numbers?");
     let Summ=0;
     for (let i=N; i<= M; i++){
       if (omitEven===true){
           if (i%2===1){
        Summ=Summ+i;}
        else
        {continue}
       }
        else {
            Summ=Summ+i;
        }
        

    }
    console.log("Summ =", Summ);
    }
}