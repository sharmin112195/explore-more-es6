class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
     sleep(){
         console.log(`Sleeping now ${this.name}`)
     }
    activity(){
        this.sleep()
    }
}
const kodom = new Person('Kodom Ali', 21)
console.log(kodom);
kodom.sleep();
const sakil = new Person('Sakil Ali', 23)
console.log(sakil);
sakil.sleep();