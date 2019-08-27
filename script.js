function personInfo(personName, persongender, personHobbies) {
    return {
        "name": personName,
        "gender": persongender,
        "hobbies": personHobbies,
        eat: function (meal) {
            console.log(meal);
        },
        greet: function () {
            console.log(`helo I'm ${this.name}`);
        }
    }
}

function carFactory(carName, carColor, carNo, carOwner, carIssueDate, Features) {
    return {
        "name": carName,
        "color": carColor,
        "numPlate": carNo,
        "owner": carOwner,
        "issueDate": carIssueDate,
        "carFeatures": Features,
        action: function (carMoving){
            console.log(carMoving);
        }
    }
}





function mobCompany(mobNAme, mobColor, mobFeatures, mobNo){
    return{
        "name": mobNAme,
        "color": mobColor,
        "features": mobFeatures,
        "no": mobNo,
        about: function(){
            console.log(`its dual sim mobile and ${this.name} bettery is best.`)
        }
    }
}
 let comapnyBox = mobCompany("Samsung", "white", ["4gb Ram", "8gb Rom", "16gb memory"], 2302546565);