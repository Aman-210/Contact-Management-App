import { createSlice } from '@reduxjs/toolkit';
import { UserList } from '../Store/Data';

const userSlice = createSlice({
  name: 'users',
  initialState: UserList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser : (state , action)=>{
     const { id , FirstName , LastName , Status} = action.payload;
     const uu  = state.find(user=> user.id == id);
     if(uu){
      uu.FirstName =FirstName
      uu.LastName =LastName
      uu.Status =Status
     }
    },
    deleteUser: (state , action) =>{
      const{id} = action.payload;
      const uu = state.find(user=> user.id == id);
      if(uu){
        return state.filter(f => f.id !== id);
      }
    }
  },
});

export const { addUser  , updateUser , deleteUser} = userSlice.actions;
export default userSlice.reducer;
