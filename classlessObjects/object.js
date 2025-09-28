//⭐ My verdict:
//You’re learning fast but not dangerously fast. You’re at the sweet spot — curious, building, and asking the right questions.
//If you keep practicing instead of only consuming new info, you’ll be solid in a few months.


const number = 20;
const myName =  "Dinavel";
const isStudyingJS = true;

function checkPrimitiveDataType(dataType){
    const result = typeof(dataType);
    return result
}

const myInfo = {
    name: "dinavel",
    hobby: "coding, playing video games",
    vices: "smoking and drinking",
    dream: "Be a full stack developer"
}

function getObjectKeys(obj){
    for (let keys in obj){
     console.log(`${keys}: ${obj[keys]}`)
    }
    return obj
}

const objWPrim = {
    name: "dinavel",
    hobby: ["coding", "playing", "listening to music", "learning JS"],
    isDrinking: true,
    dream: "Be a full stack developer",
    age: 19,

    fullInfo: function (obj){
        for(let keys in obj){
            //parameterName[] = this is called bracket notation to access the keys even their valeus changes
            //by dynamic keys means u dont know the keys, and its changing ahead of time
            console.log(`${keys}: ${obj[keys]}`)
            
        }
    }
}
    const myArray = [
        {
            name: 'dina',
            lName: 'Binongo',
            isInRelationship: true
        }
    ]

    function displayArrray(array){
        try{
                //use entries() method if u want the index and keys of an object inside of the array
                for(let [index, obj] of myArray.entries()){
                console.log(index)
                console.log(`Name: ${obj.name}`)
                console.log(`Lastname: ${obj.lName}`)
                console.log(`In a Relationship: ${obj.isInRelationship}`)
                console.log
            }
        } catch (error){
            console.log('you have an err    or at:', error.message)
        }
        
    }

    //this is object shorthand means shortcut for constructor
    function addInfo(name, lName, isInRelationship){
        if(typeof name !== 'string'){
            throw new Error ('enter a valid name')
        }
         if(typeof lName !== 'string'){
            throw new Error ('enter a valid lastname')
        }
         if(typeof isInRelationship !== 'boolean'){
            throw new Error ('set true or false')
        }
        try{
                let ret = {
                name, 
                lName,
                isInRelationship
            }

                myArray.push(ret)
                return ret;
        }
         catch (myError){
            console.log('error:', myError.message)
        }
    
    }

    addInfo('Andrew', 'Batnag', true);


    const personalInfo = {
        name: 'dinavel',
        lastName: 'Binongo',
        "is InRelationship": "true"
    }

    let  fname = personalInfo['name']//this is dot notation, keys are strings.
    let status = personalInfo["is InRelationship"]

    let contact = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
    }
    try{
        for(i=1; i<=2; i++) {
        let key = "email_" + i;
        console.log(key);
        console.log(contact[key]);
    }
    } catch (error){
        console.log('error at: ' , error.message)
    }
    
    let keys = Object.keys(contact);
    name2 = 'test'
    let name1 = name2;//this is referencing, storing a variable to another variable
   

    const test ={
        x: 10,
        y: 13
    }

    let demo = test
    let demoSec = {}
    
    //this is how to assign properties to an object, demoSec is a object name.
    Object.assign(demoSec, demo, {z: 30}) // referencing.

    const sampleObj = {
        fName: 'Dinavel',
        lName: 'Binongo',
        contactInfo: {
            email: 'binongo.dinavel.escodero@gmail.com',
            num: 9126574018
        }
    }

    function setInfoName(name, lastName, contact){
       let objInfo = {
        name,
        lastName,
        contact
       }
       return objInfo
    }
    function getInfoName( objectName){
                for (let properties in objectName){
                console.log(`${properties}: ${objectName[properties]}`)
            }
    }

    const newInfo = setInfoName('dinavel', 'binongo', 9126574018)
    console.log(getInfoName(newInfo))
    //you cant call the object inside of the function but instead you can make it return an object. below of this message is not the correct way to call an object inside of the function
    //console.log(getInfoName(setInfoName()))

    try{
        //cloning 
        function cloning (theObj){
           // “Take all the own enumerable properties of theObj and copy them into this new object.” the spread operator
        let sampleObject = {...theObj}
        for(let properties in theObj){
            if(typeof sampleObject[properties] === 'object'){
                sampleObject[properties] = cloning(sampleObject[properties])
            }
        }

        return sampleObject;
    }
    } catch (error){
        console.log('error at:', error.message)
    }
    
    function addNum(a, b){
        return a + b
    }

    //in shorthand function operator
    let addNumber = (a,b) => a + b;



    console.log(cloning(sampleObj))
    console.log(sampleObj)


// this is how to add a property with a valuw to an object
console.log(getObjectKeys(myInfo))
console.log(checkPrimitiveDataType(myName))
console.log(objWPrim.fullInfo(objWPrim));
console.log(displayArrray(myArray))
console.log(demoSec)

