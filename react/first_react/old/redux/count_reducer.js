
const initState = 0 

export default function countReducer(preState=initState,action){
    const {type,data} = action
    switch(type){
        case 'in':
            return preState+data
        case 'de':
            return preState-data

        default:
            return preState
    }
}