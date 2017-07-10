var sbobject = $SB( { image: true } );
var sbobject2 = $SB( { image: false } );
console.log( " this is the object ==> "+JSON.stringify(sbobject) );
sbobject.testMethod();
sbobject.obj.image=true;
sbobject.testMethodTwo().obj.image=false;
sbobject.testMethod();
console.log("got through method chaining ==> "+sbobject.testMethodTwo().obj.image+" "+sbobject.obj.image);
console.log("this is another object ==> "+sbobject2.obj.image);