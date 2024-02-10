export{}

let min=100;

for(let i=0;i<10;i++){
    const num=Math.round(Math.random()*100);
    console.log(num);

    if(min>num){
        min=num;
    }

}

console.log(`${min}`);