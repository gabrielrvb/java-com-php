class Car{
    #personagem;
    constructor(Motor, personagem){
            this.motor = Motor;
            this.#personagem = personagem;
        }
    run(){
        return this.motor.acelerar();
    }

    get perso(){
        return this.#personagem;
    }

    set perso(perso){
        this.#personagem = perso;
    }
}

class Motor{

    acelerar() {
        return " ";
    }
}

class MotorToad extends Motor {
     acelerar(){
         return "RANDAMDAMDAM TOAD!!!!";
     }    
}

class MotorBowser extends Motor {
    acelerar(){
        return "ZUUUUUUUUUM BOWSER!!";
    }    
}