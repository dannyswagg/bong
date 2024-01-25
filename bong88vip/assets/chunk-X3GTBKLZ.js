import "./chunk-CPNXOV62.js";

// src/app/sic-bo/sic-bo.routes.ts
var SicBoRoutes = [
  {
    path: "",
    pathMatch: "prefix",
    children: [
      {
        path: "coin-toss",
        loadComponent: () => import("./chunk-MER3MS4G.js").then((m) => m.CoinTossComponent)
      },
      {
        path: "",
        redirectTo: "coin-toss",
        pathMatch: "full"
      }
    ]
  }
];
export {
  SicBoRoutes
};
//# sourceMappingURL=chunk-X3GTBKLZ.js.map
