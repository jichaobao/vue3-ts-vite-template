import { modules } from "./module";
//
type GetGetter<Module> = Module extends { getters: infer G } ? G : unknown;
type GetGetters<Modules> = {
        [K in keyof Modules]: GetGetter<Modules[K]>
};


//&类型合并，要同时满足两者
type AddPrefix<P, K> = `${P & string}/${K & string}`;

type GetSpliceKey<P, Module> = AddPrefix<P, keyof Module>;
type GetSpliceKeys<Modules> = {
        [K in keyof Modules]: GetSpliceKey<K, Modules[K]>;
}[keyof Modules];

type GetFunc<T, A, B> = T[A & keyof T][B & keyof T[A & keyof T]];
type GetSpliceObj<T> = {
        [K in GetSpliceKeys<T>]: K extends `${infer A}/${infer B}` ? GetFunc<T, A, B> : unknown;
}

type InsGetters = GetGetters<typeof modules>;
type ModuleGetters = GetSpliceObj<InsGetters>;

type Getters = {
        [K in keyof ModuleGetters]: ReturnType<ModuleGetters[K]>
};

export { Getters };