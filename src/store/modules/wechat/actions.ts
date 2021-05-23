import { ActionContext } from 'vuex';
import { GET_DATA } from "./constants";
import { useState } from "./store";
export default {
        [GET_DATA]({ commit }: ActionContext<useState, unknown>): void {
                setTimeout(() => {
                        const payload = false;
                        commit(GET_DATA, payload)
                }, 2000);
        }
}