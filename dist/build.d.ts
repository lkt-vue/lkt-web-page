declare namespace jl {
    function install(s: any): void;
}
declare function Rl(): void;
declare function El(): void;
export { jl as default, Rl as setupWebElementsHttp, El as setupWebPagesHttp };
