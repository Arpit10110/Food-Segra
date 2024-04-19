import { createAction,createReducer } from "@reduxjs/toolkit";
const AddtoLogin=createAction('AddtoLogin')
const LogOut=createAction('LogOut')
export const LocalStorage = createReducer({
  FoodSegraLogin :localStorage.getItem("FoodSegraLogin")? localStorage.getItem("FoodSegraLogin") : 0,
  UserName :localStorage.getItem("UserNameFoodSegra")? localStorage.getItem("UserNameFoodSegra"): "",
  UserPhone :localStorage.getItem("UserPhoneFoodSegra")? localStorage.getItem("UserPhoneFoodSegra") : "",
  UserAddress :localStorage.getItem("UserAddressFoodSegra")? localStorage.getItem("UserAddressFoodSegra") : "",
  UserEmail :localStorage.getItem("UserEmailFoodSegra")? localStorage.getItem("UserEmailFoodSegra") : "",
},(builder)=>{
  builder.addCase(AddtoLogin,(state,action)=>{
    state.UserName=action.payload.name;
    state.UserPhone=action.payload.phone;
    state.UserAddress=action.payload.address;
    state.UserEmail=action.payload.email;
    state.FoodSegraLogin=1; 
    localStorage.setItem("UserNameFoodSegra",state.UserName)
    localStorage.setItem("UserPhoneFoodSegra", state.UserPhone)
    localStorage.setItem("UserAddressFoodSegra",  state.UserAddress)
    localStorage.setItem("UserEmailFoodSegra", state.UserEmail)
    localStorage.setItem("FoodSegraLogin",state.FoodSegraLogin )
  })
  builder.addCase(LogOut,(state,action)=>{
    state.UserName=""; 
    state.UserPhone="";
    state.UserAddress="";
    state.UserEmail="";
    state.FoodSegraLogin=0; 
    localStorage.setItem("UserNameFoodSegra",state.UserName)
    localStorage.setItem("UserPhoneFoodSegra", state.UserPhone)
    localStorage.setItem("UserAddressFoodSegra",  state.UserAddress)
    localStorage.setItem("UserEmailFoodSegra", state.UserEmail)
    localStorage.setItem("FoodSegraLogin",state.FoodSegraLogin )
  })
}) 