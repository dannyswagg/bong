import{a as q}from"./chunk-IVFLTLGE.js";import{a as U}from"./chunk-GNK7FYUU.js";import{a as w,b as $,c as O,d as V,e as j,f as k,g as H}from"./chunk-JXDMAI73.js";import"./chunk-FL4M6M5O.js";import"./chunk-5OAHLW4P.js";import"./chunk-RKZT45YI.js";import"./chunk-7SITBUYR.js";import"./chunk-RFOR6XZY.js";import"./chunk-BFOO2OG4.js";import{g as F,h as y,n as N,p as A,q as B,x as M}from"./chunk-5QXQBUCH.js";import{$b as E,Bb as u,Cb as t,Db as i,Fb as T,Gb as C,Ib as v,Qb as I,Sb as g,Wb as P,Yb as a,Zb as p,dc as b,hc as d,ic as D,jc as f,lb as m,mb as _,ra as x,rb as S,ub as c,wa as z,xa as h}from"./chunk-U56GQCYX.js";function G(o,r){if(o&1&&(t(0,"tr")(1,"td"),a(2),i(),t(3,"td"),a(4),i(),t(5,"td"),a(6),d(7,"number"),i(),t(8,"td"),a(9),d(10,"number"),i(),t(11,"td"),a(12),i()()),o&2){let n=r.$implicit;m(2),p(n.createdAt),m(2),E("",n.user==null?null:n.user.username," | ",n.user==null?null:n.user.accountName,""),m(2),p(f(7,6,n.amount,"1.0-2")),m(3),p(f(10,9,n.afterBalance,"1.0-2")),m(3),p(n.description)}}function J(o,r){if(o&1){let n=v();T(0),t(1,"nz-table",1,2),I("nzPageIndexChange",function(e){z(n);let s=g();return h(s.changePage(e))}),t(3,"thead")(4,"tr")(5,"th"),a(6,"Th\u01A1\u0300i gian"),i(),t(7,"th"),a(8,"Ta\u0300i khoa\u0309n"),i(),t(9,"th"),a(10,"S\xF4\u0301 ti\xEA\u0300n"),i(),t(11,"th"),a(12,"S\xF4\u0301 d\u01B0 sau giao di\u0323ch"),i(),t(13,"th"),a(14,"M\xF4 ta\u0309"),i()()(),t(15,"tbody"),u(16,G,13,12,"tr",3),i()(),C()}if(o&2){let n=r.ngIf,l=P(2),e=g();m(1),c("nzData",n.data)("nzTotal",e.total)("nzPageIndex",e.pageIndex+1)("nzPageSize",e.pageSize),m(15),c("ngForOf",l.data)}}var ee=(()=>{let r=class r extends U{constructor(l){super(),this.http=l,this.pageSize=20,this.transaction$=this.createObservableData((e,s)=>this.getAllUserTransaction(e,s))}getAllUserTransaction(l,e){return this.http.get(q.apiUrl+`user-transaction?perPage=${l}&page=${e}`)}};r.\u0275fac=function(e){return new(e||r)(_(M))},r.\u0275cmp=x({type:r,selectors:[["app-user-transaction"]],standalone:!0,features:[S,b],decls:2,vars:3,consts:[[4,"ngIf"],["nzSize","small","nzShowPagination","true","nzFrontPagination","false",3,"nzData","nzTotal","nzPageIndex","nzPageSize","nzPageIndexChange"],["transactionTable",""],[4,"ngFor","ngForOf"]],template:function(e,s){e&1&&(u(0,J,17,5,"ng-container",0),d(1,"async")),e&2&&c("ngIf",D(1,1,s.transaction$))},dependencies:[H,O,w,$,k,V,j,B,F,y,N,A]});let o=r;return o})();export{ee as UserTransactionComponent};