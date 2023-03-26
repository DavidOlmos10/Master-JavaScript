'use strict'

//switch
var edad = 18;
var imprime = " ";
switch(edad){
    case 18:
    imprime = "Acabas de ser maypr de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
        break;
        case 40:
            imprime = "Crisis de los 40";
            break;
            case 70:
                imprime = "Ya eres un anciano";
                break;
            default:
            imprime = "Tu edad es normal";
            break;
}

console.log(imprime);