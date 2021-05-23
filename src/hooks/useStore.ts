import { useStore } from "vuex";
import { State } from "../store";
import { Getters } from "../store/utils";
interface IUserVuexStore {
        state: State;
        getters: Getters;

}
const useVuexStore = (): IUserVuexStore => {
        const { state, getters } = useStore<State>();
        return { state, getters }
};
export default useVuexStore;
export {
        useVuexStore
}