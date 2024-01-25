import "./chunk-CPNXOV62.js";

// src/app/sic-bo/sic-bo.routes.ts
var SicBoRoutes = [
  {
    path: "",
    pathMatch: "prefix",
    children: [
      {
        path: "coin-toss",
        loadComponent: () => import("./chunk-QIPDA6IV.js").then((m) => m.CoinTossComponent)
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
//# sourceMappingURL=chunk-OBXVFAKJ.js.map
