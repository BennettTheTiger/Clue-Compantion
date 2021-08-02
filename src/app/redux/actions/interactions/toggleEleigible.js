import { TOGGLE_ELEGIBLE } from "../types";

function toggleElegible (entityName){
    return {
        type: TOGGLE_ELEGIBLE,
        entityName
    }
}

export default toggleElegible;