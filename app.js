//Same keys and values ES2015

function createInstructor(firstName,lastName){
    return {firstName,
    lastName}
}


// Computed Property Names ES2015
let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber] : "that is my favorite"
}

// Object Methods ES2015
const instructorr = {
    firstName: "Colt",
    sayHi(){
        return "hi"
    },
    sayBye(){
        return this.firstName + " says Bye!"
    }
}

// createAnimal function

function createAnimal(species,verb,noise){return{
    species,
 [verb] : function(){
    return noise
 }

}
}

