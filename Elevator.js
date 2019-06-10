class Elevator {
    constructor(iId){
        this._currentFloor = 0;
        this._id = iId;
        this._capacity = 900;
        this._nextFloor = 0;
        this._instructionsQueueUp = [];
        this._instructionsQueueDown = [];
    }

    startThisLift(){/* init this lift with all the instructed functions */}
    shutThisLift(){/*shut this lift if the outer system instructed that */}
    onFloorButtonPressed(iFloor){/* set the instruction according to direction */}
    isCapacityValid(iCurrentWeight){return this._capacity >= iCurrentWeight}
    isGoingUp(){/*get the direction of lift */  return (this._nextFloor - this._currentFloor) > 0;}
    switchDirectionOfLift(){/*change direction if the instruction queue is empty  */}
    isLiftCloseToFloor(){/*will be for algorithm used by building to check the closest lift with direction */}
    goToSpecificFloor(){/*keep on checking queue to get to the next floor */}
    onReachedFloor(){/* set next floor and current floor */}
    onQueueEmpty(){/* set next floor to null as there will be no instructions */}
    onStopButtonPressed(){/* internally pressed button stop to stop the lift to pause the lift system */}
    onCloseDoorButtonPressed(){/*on close door buton pressed */}
    onOpenDoorButtonPressed(){/*on open door button pressed */}
};

class Building {
    constructor(iNumberOfFloors, iNumberOfLifts){
        this._nFloors = iNumberOfFloors;
        this._nLifts = iNumberOfLifts;
        this._liftData = {};
        for(let i = 0; i < iNumberOfLifts; i++){
            let id = "lift_"+i;
            let elevator = new Elevator(id);
            this._liftData[id] = elevator;
        }
    }

    startLiftSystem(){/*get all the lifts and start if stopped using startThisLift */}
    shutLiftSystems(){/*get all lift and stop the lift system */}
    onUserPressedButtonFromOutside(iFloor){
        // get all lifts
        //check the direction of all the lift iFloor should be between currentFloor and nextFloor
        //get closest lift in the direction of iFloor
        // add the instructions to that lift according to direction
        // sort the lift ascending if going up and descending if going down
    }
};

const main = function(){
    let numberOfFloors = 10;
    let numberOfLifts = 2;
    let building = new Building(numberOfFloors, numberOfLifts);
    building.startLiftSystem();
}

main();