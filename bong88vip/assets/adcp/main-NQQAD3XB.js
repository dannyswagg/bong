import{e as ne}from"./chunk-YF6DHDYM.js";import{b as ae,c as se}from"./chunk-OL6DOV22.js";import{a as te,b as ie,c as M}from"./chunk-4GBYN5GN.js";import{a as oe}from"./chunk-QD3AVGAJ.js";import{d as ee}from"./chunk-IYMRGB2C.js";import{f as re}from"./chunk-YMXYSE3L.js";import{q as _,r as K,x as Z,y as q}from"./chunk-JUKEY4C5.js";import{F as v,M as Y,s as G,t as Q,u as V,v as X}from"./chunk-I542ZMBG.js";import{c as W,d as $,f as H}from"./chunk-BFOO2OG4.js";import{B as U,e as O,h as J,q as L,y as P,z as B}from"./chunk-5QXQBUCH.js";import{Bb as E,Cb as f,Db as h,Eb as b,Fa as s,I as D,K as A,N as C,P as y,T as F,Yb as z,ba as a,dc as g,ja as u,lb as N,mb as c,o as m,oa as p,ob as R,ra as l,u as w,ub as x,v as S,w as I,z as T}from"./chunk-U56GQCYX.js";var pe=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l({type:t,selectors:[["app-page-not-found"]],standalone:!0,features:[g],decls:2,vars:0,template:function(e,r){e&1&&(f(0,"p"),z(1,"page-not-found works!"),h())}});let i=t;return i})();var ce=[{path:"",redirectTo:"/user",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-2NWQX354.js").then(i=>i.AuthRoutes)},{path:"",pathMatch:"prefix",loadChildren:()=>import("./chunk-TFIKZGKJ.js").then(i=>i.PagesRoutes)},{path:"**",component:pe}];var Me=[X,V,G,Q];function de(){return s(v.forRoot(Me))}function ke(i){let t=i,ve=Math.floor(Math.abs(i)),o=i.toString().replace(/^[^.]*\.?/,"").length;return ve===1&&o===0?1:5}var me=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",ke];var ue=(()=>{let t=class t{constructor(o,e,r,n){this.jwtData=o,this.auth=e,this.router=r,this.notificationService=n,this.isRefreshingToken=!1,this.tokenSubject=new m(null)}intercept(o,e){return this.isInBlockedList(o.url)?e.handle(o):this.addAccessToken(o).pipe(a(r=>e.handle(r).pipe(this.catchLocalAccessToken(o,e))))}catchLocalAccessToken(o,e){return r=>r.pipe(A(n=>n.status==401?this.jwtData.checkLocalAccessToken().pipe(a(d=>d?this.addAccessToken(o).pipe(a(k=>e.handle(k).pipe(this.catchLocalAccessToken(o,e)))):this.handleRefreshToken(o,e))):I(()=>n)))}handleRefreshToken(o,e){return this.isRefreshingToken?this.tokenSubject.pipe(D(r=>r!==null),y(1),a(r=>r?this.addAccessToken(o).pipe(a(n=>e.handle(n))):this.tokenExpired())):(this.isRefreshingToken=!0,this.tokenSubject.next(null),S(this.jwtData.getLocalRefreshToken()).pipe(a(r=>r?this.auth.resetToken(r,this.jwtData.tokenId).pipe(a(n=>S(this.jwtData.setToken(n)).pipe(a(d=>this.addAccessToken(o).pipe(a(k=>e.handle(k).pipe(this.catchLocalAccessToken(o,e)))))))).pipe(A(n=>this.tokenExpired())):this.tokenExpired()),F(()=>this.isRefreshingToken=!1)))}tokenExpired(){return this.isRefreshingToken=!1,this.notificationService.error("Login session expired","Please log in again"),w(this.auth.loginUrl(this.router.url)).pipe(T(()=>this.jwtData.removeToken()))}addAccessToken(o){return this.jwtData.token$.pipe(D(e=>e!==null),y(1),T(e=>o.clone({setHeaders:{Authorization:`Bearer ${e}`,member:this.jwtData.memberId||"",token:this.jwtData.tokenId||""}})))}isInBlockedList(o){return o.indexOf("/auth")>=0||o.indexOf("/refresh-token")>=0}};t.\u0275fac=function(e){return new(e||t)(p(M),p(te),p($),p(oe))},t.\u0275prov=u({token:t,factory:t.\u0275fac});let i=t;return i})();var le={provide:P,useClass:ue,multi:!0};O(me);var fe={providers:[H(ce),Y(),de(),q(Z),s(_),s(K),s(B),s(ie.forRoot()),s(ee),s(ae),le]};var he=(()=>{let t=class t{constructor(){this._loading=new m(!1),this.loading$=this._loading.asObservable()}show(){this._loading.next(!0)}hide(){this._loading.next(!1)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function De(i,t){i&1&&(f(0,"div",1)(1,"div",2)(2,"div",3),b(3,"div")(4,"div")(5,"div")(6,"div")(7,"div")(8,"div")(9,"div")(10,"div"),h()()())}var ge=(()=>{let t=class t{constructor(o,e,r,n){this.loading=o,this.cd=e,this.jwtDataStorage=r,this.adminSocket=n,this._loadingData=!1,this.jwtDataStorage.loadToken().subscribe(),this.loading.loading$.pipe(C(50)).subscribe(d=>{this.loadingData=d})}set loadingData(o){this._loadingData=o,this.cd.detectChanges()}get loadingData(){return this._loadingData}};t.\u0275fac=function(e){return new(e||t)(c(he),c(R),c(M),c(se))},t.\u0275cmp=l({type:t,selectors:[["app-root"]],standalone:!0,features:[g],decls:2,vars:1,consts:[["class","loading-wrapper",4,"ngIf"],[1,"loading-wrapper"],[1,"loading-content"],[1,"lds-roller"]],template:function(e,r){e&1&&(b(0,"router-outlet"),E(1,De,11,0,"div",0)),e&2&&(N(1),x("ngIf",r.loadingData))},dependencies:[L,J,W,v,ne,re]});let i=t;return i})();U(ge,fe).catch(i=>console.error(i));
