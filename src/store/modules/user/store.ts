export const createState = ()=>{
        const store = {
                loading:true
        };
        return store;
}
//类型推导
export type useState = ReturnType<typeof createState>