import { fetchApi } from '@/hooks';
import { ref, Ref } from 'vue';
export interface Product {
        id: string;
        title: string;
        category: string;
        description: string;
        images: string[];
        variants: Variant[];
        price: string;
        tags: Tag[];
}

export enum Tag {
        Awesome = "Awesome",
        Ergonomic = "Ergonomic",
        Fantastic = "Fantastic",
        Generic = "Generic",
        Gorgeous = "Gorgeous",
        Handcrafted = "Handcrafted",
        Handmade = "Handmade",
        Incredible = "Incredible",
        Intelligent = "Intelligent",
        Licensed = "Licensed",
        Practical = "Practical",
        Refined = "Refined",
        Rustic = "Rustic",
        Sleek = "Sleek",
        Small = "Small",
        Tasty = "Tasty",
        Unbranded = "Unbranded",
}

export interface Variant {
        id: string;
        quantity: number;
        title: string;
        sku: string;
}
export type UsableProducts = Promise<{ products: Ref<Product[] | undefined> }>;
export default async function useProducts(): UsableProducts {
        const { response: products, request } = fetchApi<Product[]>('https://ecomm-products.modus.workers.dev/');
        const loaded = ref(false);
        if (loaded.value === false) {
                await request();
                loaded.value = true;
        }
        return { products };
}