class Elevator {
    constructor(){
        this._capacity = 900;
        this._currentFloor = 0;
        this._nextFloor = 0;
        this._isLiftAvailable = true;
    }
    isLiftOverLoaded(){}
    isGoingUp(){}
    isLiftStopped(){}
    isLiftMoving(){}
    moveLift(){}
};

class ElevatorManager {
    constructor(){
        this._liftQueue = [];
        this._commandQueue = [];
    }
    init(iLiftCount){}
    callALift(){}
    isLiftAvailable(){}
    storeInstruction(){}
};

class Building {
    constructor(iFloorCount){
        this._floorCount = iFloorCount;
        this._liftManager = new ElevatorManager();
    }
    startElevatorSystem(){this._liftManager.init(iLiftCount);}
    stopElevatorSystem(){}
};

const main = function(){
    let floorCount = 10;
    let liftCount = 2;
    let building = new Building(floorCount);
    building.init(liftCount);

}