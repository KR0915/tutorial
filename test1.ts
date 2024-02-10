export{}
function RPG(HP: number,DEFENCE:number,ATACK:number,KAIHI:number):void{
    let i=0;
    if(KAIHI>=1){
        console.log("戦闘終了");
    }else if(DEFENCE>ATACK){
        console.log("戦闘終了");
    }else{ while(HP>0){
        const random=Math.random();//0～1までをランダムに生成する
        if(random>KAIHI){
        i+=1;
        HP-=ATACK-DEFENCE;
        }else if(random<KAIHI){
            i+=1;
        }

            
    }
    console.log(`勝利${i}ターンかかった`);
    }
}

RPG(550,500,550,0);

