import{a as V}from"./chunk-GNK7FYUU.js";import{a as U}from"./chunk-WZVPSXF5.js";import{a as $,b as k,c as j,d as q,e as G,f as K,g as L}from"./chunk-4HLJ22PI.js";import"./chunk-5HZ56MLH.js";import"./chunk-HYQXC5SP.js";import"./chunk-SMFLS7MR.js";import"./chunk-H75Z5SQQ.js";import{E as B,F as H}from"./chunk-K5DAZWAR.js";import"./chunk-BFOO2OG4.js";import{g as N,h as A,n as F,p as M,q as O}from"./chunk-5QXQBUCH.js";import{$b as R,Bb as u,Cb as t,Db as n,Eb as C,Fb as _,Gb as E,Ib as I,Qb as y,Sb as x,Wb as P,Yb as i,Zb as l,_b as f,dc as w,hc as h,ic as b,jc as D,lb as o,mb as S,ra as z,rb as T,ub as c,wa as g,wb as m,xa as v}from"./chunk-U56GQCYX.js";function J(a,d){a&1&&C(0,"span",8),a&2&&c("nzTheme","twotone")("nzTwotoneColor","#eb2f96")}function Q(a,d){if(a&1&&(t(0,"tr")(1,"td"),i(2),n(),t(3,"td"),i(4),n(),t(5,"td",4),i(6),n(),t(7,"td",5),i(8),n(),t(9,"td"),i(10),n(),t(11,"td"),i(12),n(),t(13,"td"),i(14),n(),t(15,"td"),i(16),n(),t(17,"td"),i(18),n(),t(19,"td"),i(20),n(),t(21,"td"),i(22),n(),t(23,"td",6),i(24),n(),t(25,"td"),i(26),h(27,"number"),n(),t(28,"td"),u(29,J,1,2,"span",7),n()()),a&2){let e=d.$implicit;o(2),l(e.createdAt),o(2),l(e.coinToss.name),o(2),R("",e.user.username," | ",e.user.accountName,""),o(2),f("",e.redCoin," \u0111o\u0309"),o(1),m("text-info",e.even)("dt",e.even),o(1),l(e.even),o(1),m("text-info",e.odd)("dt",e.odd),o(1),l(e.odd),o(1),m("text-info",e.fourRed)("dt",e.fourRed),o(1),l(e.fourRed),o(1),m("text-info",e.threeRed)("dt",e.threeRed),o(1),l(e.threeRed),o(1),m("text-info",e.twoRed)("dt",e.twoRed),o(1),l(e.twoRed),o(1),m("text-info",e.oneRed)("dt",e.oneRed),o(1),l(e.oneRed),o(1),m("text-info",e.zeroRed)("dt",e.zeroRed),o(1),l(e.zeroRed),o(2),f(" ",e.even+e.odd+e.fourRed+e.threeRed+e.twoRed+e.oneRed+e.zeroRed," "),o(1),m("text-warning",e.winAmount)("dt",e.winAmount),o(1),l(D(27,47,e.winAmount,"0.0-2")),o(3),c("ngIf",e.isAdmin)}}function W(a,d){if(a&1){let e=I();_(0),t(1,"nz-table",1,2),y("nzPageIndexChange",function(r){g(e);let p=x();return v(p.changePage(r))}),t(3,"thead")(4,"tr")(5,"th"),i(6,"Th\u01A1\u0300i gian"),n(),t(7,"th"),i(8,"Game"),n(),t(9,"th"),i(10,"User"),n(),t(11,"th"),i(12,"K\xEA\u0301t qua\u0309"),n(),t(13,"th"),i(14,"Ch\u0103\u0303n "),n(),t(15,"th"),i(16,"Le\u0309 "),n(),t(17,"th"),i(18,"4 \u0111o\u0309 "),n(),t(19,"th"),i(20,"3 \u0111o\u0309 "),n(),t(21,"th"),i(22,"2 \u0111o\u0309 "),n(),t(23,"th"),i(24,"1 \u0111o\u0309 "),n(),t(25,"th"),i(26,"0 \u0111o\u0309 "),n(),t(27,"th"),i(28,"T\xF4\u0309ng C\u01B0\u01A1\u0323c "),n(),t(29,"th"),i(30,"T\xF4\u0309ng Th\u0103\u0301ng "),n(),t(31,"th"),i(32,"Admin"),n()()(),t(33,"tbody"),u(34,Q,30,50,"tr",3),n()(),E()}if(a&2){let e=d.ngIf,s=P(2),r=x();o(1),c("nzData",e.data)("nzTotal",r.total)("nzPageIndex",r.pageIndex+1)("nzPageSize",r.pageSize),o(33),c("ngForOf",s.data)}}var re=(()=>{let d=class d extends V{constructor(s){super(),this.coinTossService=s,this.pageSize=20,this.history$=this.createObservableData((r,p)=>this.coinTossService.history(r,p))}};d.\u0275fac=function(r){return new(r||d)(S(U))},d.\u0275cmp=z({type:d,selectors:[["app-coin-toss-history"]],standalone:!0,features:[T,w],decls:2,vars:3,consts:[[4,"ngIf"],["nzSize","small","nzShowPagination","true","nzFrontPagination","false",3,"nzData","nzTotal","nzPageIndex","nzPageSize","nzPageIndexChange"],["historyTable",""],[4,"ngFor","ngForOf"],[1,"username","text-success"],[1,"redCoin","text-danger"],[1,"text-danger","dt"],["nz-icon","","nzType","check-circle","nzTheme","outline",3,"nzTheme","nzTwotoneColor",4,"ngIf"],["nz-icon","","nzType","check-circle","nzTheme","outline",3,"nzTheme","nzTwotoneColor"]],template:function(r,p){r&1&&(u(0,W,35,5,"ng-container",0),h(1,"async")),r&2&&c("ngIf",b(1,1,p.history$))},dependencies:[L,j,$,k,K,q,G,O,N,A,F,M,H,B],styles:[".dt[_ngcontent-%COMP%]{font-weight:700;font-size:18px}"]});let a=d;return a})();export{re as CoinTossHistoryComponent};