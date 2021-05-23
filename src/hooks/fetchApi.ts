//https://ecomm-products.modus.workers.dev/
import { ref, Ref } from "vue";

export type ApiRquest = () => Promise<void>;

export interface UsableAPI<T> {
        response: Ref<T | undefined>,
        request: ApiRquest
}
function fetchApi<T>(url: RequestInfo, options?: RequestInit) {
        const response: Ref<T | undefined> = ref();
        const request = async () => {
                const res = await fetch(url, options);
                const data = await res.json();
                response.value = data;
        }
        return {
                response,
                request
        }
}
export { fetchApi }
export default fetchApi;