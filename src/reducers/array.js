export default function array (state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map( (item, index) => {
        if(item.id !== action.payload.id) {
            return item;
        }
        
        return {
            ...item,
            ...action.payload
        };    
    });
    default:
      return state;
  }
}
