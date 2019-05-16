function lock(secret,i){
    const key = Symbol('key');
    return {
        name:"Door "+ i,key,unlock(keyUsed){
        return new Promise((resolve,reject)=>{
            if (keyUsed === key){
                resolve("Door "+ i)                    
            }
            reject("Wrong Key");
            })
            }
}
}

function * lockGenerator(){
    let i=1;
    while(true)
    {
        yield lock("Unlocker door "+ i,i);
    i++;
}
}

const doorListMaker = (gen,n) => Array(n).fill(1).map(()=> gen.next().value)
const doors = doorListMaker(lockGenerator(),3)
export default doors;