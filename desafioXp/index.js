console.log("aqui iremos apresentar o seu nivel de Xp e seu correspondente, para comercarmos vamos entender quem voce é ?");
let nike =" mariazinha "
let nivelXp = "5600"
let ranking = nivelXp

switch(true){

    case ( nivelXp <=1000):
    nivelXp = "ferro"
    break;

    case ( nivelXp >=1001 && nivelXp <=2000):
    nivelXp = "bronze"
    break;

    case ( nivelXp >=2001 && nivelXp <=5000):
    nivelXp = "Prata"
    break;

    case ( nivelXp >=5001 && nivelXp <=7000): 
    nivelXp = "Ouro"
    break;

    case( nivelXp >=7001 && nivelXp <=8000):
    nivelXp ="Platina"
    break; 

    case( nivelXp >=8001 && nivelXp <=9000):
    nivelXp ="Ascendente"
    break; 

    case( nivelXp >=9001 && nivelXp <=10000):
    nivelXp ="Imortal"
    break; 

    case( nivelXp >=10001 ):
    nivelXp ="Radiante"
    break; 
    default:
    nivelXp = "Não existente"

};

console.log ("Bem vindo"+ nike +"voce é do ranking "+ ranking + " no qual entra na categoria "+ nivelXp)