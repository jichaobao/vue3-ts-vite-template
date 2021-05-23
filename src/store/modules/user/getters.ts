import { useState } from "./store";

const moduleGetters={
        isLogin:(state:useState):string=>{
                return `${state.loading}`
        }
};
export default moduleGetters;