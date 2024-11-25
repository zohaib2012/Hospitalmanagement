
import { create } from "zustand";
import axioinstance from "../axios";
import axios from "axios";
// import axios from "axios";

export let usedoctorstore=create((set)=>({
    Doctors:[],
    loading:false,


adddoctor:async(data)=>{
    set({loading:true})
    try {
        let{ name,
            specialization,
            consultationFees,
            email,
            password}=data
        let response =await axios.post("http://localhost:3000/api/adddoctor",{ name,
            specialization,
            consultationFees,
            email,
            password})
        set((state)=>({
            Doctors:[...state.Doctors, response.data]
        }))
    } catch (error) {
        console.log(error)
    }
},

getdoctor:async()=>{
    set({loading:true})
    try {
      let response=await axioinstance.get("http://localhost:3000/api/getdoctor")
      set({Doctors:response.data.getdoctor, loading:false})  
        console.log(response.data.getdoctor)
    } catch (error) {
        console.log(error)
    }
}



}))