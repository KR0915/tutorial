export{}

for(let i=1;i<5;i++){
    const num1=Math.round(Math.random()*100);
    console.log("num1:"+num1);

    if(num1==0){
        console.log("処理中止");
        break;
    }else{

    for(let i=1;i<5;i++){
        const num2=Math.round(Math.random()*100);
        console.log("num2:"+num2);

        console.log("num1/num2="+num2/num1);
    }

    

    }  


}