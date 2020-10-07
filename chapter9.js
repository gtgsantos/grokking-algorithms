//import {reverseDefaultSort} from './sort-algorithms'

function selectBestFit(equipments, sizeTarget) {
    
    for (let index = equipments.length; index >= 0; index--) {
        
        //const element = array[index];
        var  equipmentSelected; 
        if ((sortedEquipments[index] === sizeTarget) 
         || (sortedEquipments[index] <= sizeTarget)) {
            equipmentSelected = sortedEquipments[index]
            break
        } 
        
    }
    return equipmentSelected
}