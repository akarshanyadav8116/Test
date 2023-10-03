function isEven(element){
    if(element%2===0){
        return true;
    }
    return false;
}
console.log(isEven(5));
// var isEven=(element) =>{
//     return element%2===0;
// }

var result=[2,4,6,8].every((ele)=>{return ele%2===0;});
console.log(result);

var result=[2,4,6,8].every((e)=>(e%2===0));
console.log(result);

function PartyAnimal(){
    this.x=0;
    this.party=function(){
        this.x=this.x+1;
        console.log("So far "+this.x);
    }
}
an=new PartyAnimal();
an.party();
an.party();
an.party();

function PartyAnimal(nam){
    this.x=0;
    this.name=nam;
    console.log("Built"+nam);
    this.party=function(){
        this.x=this.x+1;
        console.log(nam+"="+this.x);
    }}
s=new PartyAnimal("Sally");
s.party()
j=new PartyAnimal("Jim");
j.party();
s.party();


