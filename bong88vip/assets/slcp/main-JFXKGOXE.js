import{d as V}from"./chunk-V6GHD2VX.js";import{a as Y}from"./chunk-75GLU2MB.js";import{q as H,r as _,x as K,y as Q}from"./chunk-OVOI2WLF.js";import{a as X,b as Z,c as g}from"./chunk-2Y6YJXVM.js";import{c as W,d as $,f as U}from"./chunk-SMSACOKG.js";import{I as G}from"./chunk-AJGDOIBK.js";import{D as T,F as S,I,K as D,O as C,Oa as R,Pa as l,Ra as x,Wb as J,Xa as F,Y as a,Zb as z,ab as E,bb as m,cb as h,da as d,db as A,gc as L,ia as p,j as c,ka as u,kc as P,lc as B,nc as O,p as j,q as M,qb as N,r as w,u as k,xb as f,ya as s}from"./chunk-N5HMSUQW.js";var q=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u({type:t,selectors:[["app-page-not-found"]],standalone:!0,features:[f],decls:2,vars:0,template:function(e,r){e&1&&(m(0,"p"),N(1,"page-not-found works!"),h())}});let o=t;return o})();var ee=[{path:"",redirectTo:"/user",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-DW4FYKNN.js").then(o=>o.AuthRoutes)},{path:"",pathMatch:"prefix",loadChildren:()=>import("./chunk-GIPLI6BO.js").then(o=>o.PagesRoutes)},{path:"**",component:q}];function pe(o){let t=o,se=Math.floor(Math.abs(o)),i=o.toString().replace(/^[^.]*\.?/,"").length;return se===1&&i===0?1:5}var te=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",pe];var ie=(()=>{let t=class t{constructor(i,e,r,n){this.jwtData=i,this.auth=e,this.router=r,this.notificationService=n,this.isRefreshingToken=!1,this.tokenSubject=new c(null)}intercept(i,e){return this.isInBlockedList(i.url)?e.handle(i):this.addAccessToken(i).pipe(a(r=>e.handle(r).pipe(this.catchLocalAccessToken(i,e))))}catchLocalAccessToken(i,e){return r=>r.pipe(S(n=>n.status==401?this.jwtData.checkLocalAccessToken().pipe(a(b=>b?this.addAccessToken(i).pipe(a(v=>e.handle(v).pipe(this.catchLocalAccessToken(i,e)))):this.handleRefreshToken(i,e))):w(()=>n)))}handleRefreshToken(i,e){return this.isRefreshingToken?this.tokenSubject.pipe(T(r=>r!==null),D(1),a(r=>r?this.addAccessToken(i).pipe(a(n=>e.handle(n))):this.tokenExpired())):(this.isRefreshingToken=!0,this.tokenSubject.next(null),M(this.jwtData.getLocalRefreshToken()).pipe(a(r=>r?this.auth.resetToken(r,this.jwtData.tokenId).pipe(a(n=>M(this.jwtData.setToken(n)).pipe(a(b=>this.addAccessToken(i).pipe(a(v=>e.handle(v).pipe(this.catchLocalAccessToken(i,e)))))))).pipe(S(n=>this.tokenExpired())):this.tokenExpired()),C(()=>this.isRefreshingToken=!1)))}tokenExpired(){return this.isRefreshingToken=!1,this.notificationService.error("Login session expired","Please log in again"),j(this.auth.loginUrl(this.router.url)).pipe(k(()=>this.jwtData.removeToken()))}addAccessToken(i){return this.jwtData.token$.pipe(T(e=>e!==null),D(1),k(e=>i.clone({setHeaders:{Authorization:`Bearer ${e}`,member:this.jwtData.memberId||"",token:this.jwtData.tokenId||""}})))}isInBlockedList(i){return i.indexOf("/auth")>=0||i.indexOf("/refresh-token")>=0}};t.\u0275fac=function(e){return new(e||t)(p(g),p(X),p($),p(Y))},t.\u0275prov=d({token:t,factory:t.\u0275fac});let o=t;return o})();var oe={provide:P,useClass:ie,multi:!0};J(te);var re={providers:[U(ee),Q(K),s(H),s(_),s(B),G(),s(Z.forRoot()),s(V),oe]};var ne=(()=>{let t=class t{constructor(){this._loading=new c(!1),this.loading$=this._loading.asObservable()}show(){this._loading.next(!0)}hide(){this._loading.next(!1)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();function ue(o,t){o&1&&(m(0,"div",1)(1,"div",2)(2,"div",3),A(3,"div")(4,"div")(5,"div")(6,"div")(7,"div")(8,"div")(9,"div")(10,"div"),h()()())}var ae=(()=>{let t=class t{constructor(i,e,r){this.loading=i,this.cd=e,this.jwtDataStorage=r,this._loadingData=!1,this.jwtDataStorage.loadToken().subscribe(),this.loading.loading$.pipe(I(50)).subscribe(n=>{this.loadingData=n})}set loadingData(i){this._loadingData=i,this.cd.detectChanges()}get loadingData(){return this._loadingData}};t.\u0275fac=function(e){return new(e||t)(l(ne),l(x),l(g))},t.\u0275cmp=u({type:t,selectors:[["app-root"]],standalone:!0,features:[f],decls:2,vars:1,consts:[["class","loading-wrapper",4,"ngIf"],[1,"loading-wrapper"],[1,"loading-content"],[1,"lds-roller"]],template:function(e,r){e&1&&(A(0,"router-outlet"),E(1,ue,11,0,"div",0)),e&2&&(R(),F("ngIf",r.loadingData))},dependencies:[L,z,W]});let o=t;return o})();O(ae,re).catch(o=>console.error(o));
