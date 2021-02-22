var carburant = ['electrique', 'hybride', 'essence', 'diesel'];

// console.log(carburant);

var carb = document.getElementById("carb");
var trans = document.getElementById("trans");
var days = document.getElementById("days").value;
var price = 0;
var fee = 0;


function checkCars() {
    var car = document.getElementById("cars").value;
    var Choice = "<option> Choice</option>";
    switch (car) {

        case 'Moto':
            carb.innerHTML = Choice + `<option value="${carburant[0]}">${carburant[0]}</option><option value="${carburant[2]}">${carburant[2]}</option>`;
            price = 10;
            trans.innerHTML = Choice + `<option value="None">None</option>`;
            break;

        case 'Citadine':
            for (let i = 0; i < 4; i++)
                carb.innerHTML = Choice + `<option value="${carburant[i]}">${carburant[i]}</option>`;
            trans.innerHTML = Choice + `<option value="Manuelle">Manuelle</option>`;
            price = 12;
            break;

        case 'Compact':
            for (let i = 1; i < 4; i++)
                carb.innerHTML = Choice + `<option value="${carburant[i]}">${carburant[i]}</option>`;
            trans.innerHTML = Choice + `<option value="Manuelle">Manuelle</option>`;
            price = 14;
            break;

        case 'Utilitaire':
            carb.innerHTML = Choice + `<option value="${carburant[0]}">${carburant[0]}</option><option value="${carburant[2]}">${carburant[2]}</option>`;
            trans.innerHTML = Choice + `<option value="Manuelle">Manuelle</option>`;
            price = 20;
            break;

        case 'Berline':
            for (let i = 1; i < 4; i++)
                carb.innerHTML = Choice + `<option value="${carburant[i]}">${carburant[i]}</option>`;
            trans.innerHTML = Choice + `<option value="Automatique">Automatique</option>`;
            price = 50;
            break;

        case 'Engin':
            carb.innerHTML = Choice + `<option value="${carburant[2]}">${carburant[2]}</option><option value="${carburant[3]}">${carburant[3]}</option>`;
            trans.innerHTML = Choice + `<option value="Manuelle">Manuelle</option>`;
            price = 200;
            break;

        case 'Camion':
            carb.innerHTML = Choice + `<option value="${carburant[3]}">${carburant[3]}</option>`;
            trans.innerHTML = Choice + `<option value="Automatique">Automatique</option>`;
            price = 900;
            break;

        default:
            ;

    }
}


function check_carb() {

    switch (carb.value) {
        case "electrique":
            fee = 0.05;
            break;
        case "hybride":
            fee = 0.09;
            break;
        case "essence":
            fee = 0.14;
            break;
        case "diesel":
            fee = 0.21;
            break;
        default:
            ;
    }
}
var transpric = 0;

function check_trans() {

    if (trans.value == "Automatique")
        transpric = 0.19;

}
var total;

function reslt() {
    var day = document.getElementById("days").value;

    total = day * (price + (price * fee) + (price * transpric));

    document.getElementById("resultat").innerHTML = "<p> " + (total).toFixed(2) + " €</p> ";
}


document.getElementById("cars").addEventListener("change", checkCars);
document.getElementById("carb").addEventListener("change", check_carb);
document.getElementById("trans").addEventListener("change", check_trans);
document.getElementById("btn").addEventListener("click", reslt);