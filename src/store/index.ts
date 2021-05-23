import {createStore} from "vuex";
import {modules} from "./module";
import { useState } from "./modules/user/store";
type State  = {
        user:useState
};
const store = createStore<State>({
        modules
});
export {State}
export default store;