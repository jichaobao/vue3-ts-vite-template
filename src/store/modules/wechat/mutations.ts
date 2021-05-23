import { GET_DATA } from "./constants";
import { useState } from "./store";

const mutations = {
        [GET_DATA](state:useState,payload:boolean):void{
                state.loading = payload;
        }
};
export default mutations;