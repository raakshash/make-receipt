class ElevatorController {
  constructor(){
      this._commandQueue = [];
  }
  openDoor(){}  
  closeDoor(){}
  moveLift(){}
  stopLift(){}
};

class Elevator {
    constructor(){
        this._capacity = 900;
        this._currentFloor = 0;
        this._nextFloor = 0;
        this._isLiftAvailable = true;
        this._controller = new ElevatorController();
    }
    isLiftOverLoaded(){}
    isGoingUp(){}
    isGoingDown(){}
    isLiftStopped(){}
    isLiftMoving(){}
    addNewInstruction(){}
};

class ElevatorSystemManager {
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
        this._liftManager = new ElevatorSystemManager();
    }
    startElevatorSystem(){this._liftManager.init(iLiftCount);}
    stopElevatorSystem(){}
};


// entry function
const main = function(){
    let floorCount = 10;
    let liftCount = 2;
    let building = new Building(floorCount);
    building.init(liftCount);
}

/*Entry -> */
main();