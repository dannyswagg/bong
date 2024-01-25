import{i as X,j as Y,k as ht}from"./chunk-SPDQKUY6.js";import{a as Q}from"./chunk-NPUGLZHD.js";import{G as pt,H as mt,a as q,b as tt,k as st,l as at,q as ct}from"./chunk-GTSBNQ36.js";import{aa as et,ba as it,ca as ot,da as rt,fa as nt,wa as j}from"./chunk-YYNK4LQV.js";import{$b as B,E as y,G as A,Ia as N,J as F,Ja as p,K as w,La as z,Na as E,O as R,Ob as P,Ra as O,Rb as _,W as s,Wa as J,Xa as v,Ya as k,Za as I,ba as h,dc as $,ea as a,ec as U,ga as g,gc as H,l,lc as W,mb as L,mc as u,oc as G,qc as K,r as C,rb as S,rc as V,s as b,t as x,ta as c,tc as Z,uc as m,v as T}from"./chunk-IOOJ2VXR.js";var dt=(()=>{let i=class i{constructor(t){this.router=t}ngOnInit(){this.router.navigate(["/home"]).then()}};i.\u0275fac=function(e){return new(e||i)(p(u))},i.\u0275cmp=g({type:i,selectors:[["app-page-not-found"]],standalone:!0,features:[S],decls:2,vars:0,template:function(e,r){e&1&&(v(0,"p"),L(1,"page-not-found works!"),k())}});let o=i;return o})();var ft=[{path:"games",loadChildren:()=>import("./chunk-MJSVWXG3.js").then(o=>o.SicBoRoutes)},{path:"saba-games",canActivate:[Q],loadComponent:()=>import("./chunk-RGNGCGFT.js").then(o=>o.SabaGamesComponent)},{path:"home",loadComponent:()=>import("./chunk-QWJR7MNZ.js").then(o=>o.HomeComponent)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",component:dt}];var yt=[rt,ot,et,it];function lt(){return c(nt.forRoot(yt))}var vt=(()=>{let i=class i{constructor(t,e,r,n){this.jwtData=t,this.auth=e,this.router=r,this.notificationService=n,this.isRefreshingToken=!1,this.tokenSubject=new l(null)}intercept(t,e){return this.isInBlockedList(t.url)?e.handle(t):this.addAccessToken(t).pipe(s(r=>e.handle(r).pipe(this.catchLocalAccessToken(t,e))))}catchLocalAccessToken(t,e){return r=>r.pipe(A(n=>n.status==401?this.jwtData.checkLocalAccessToken().pipe(s(f=>f?this.addAccessToken(t).pipe(s(d=>e.handle(d).pipe(this.catchLocalAccessToken(t,e)))):this.handleRefreshToken(t,e))):x(()=>n)))}handleRefreshToken(t,e){return this.isRefreshingToken?this.tokenSubject.pipe(y(r=>r!==null),w(1),s(r=>r?this.addAccessToken(t).pipe(s(n=>e.handle(n))):this.tokenExpired())):(this.isRefreshingToken=!0,this.tokenSubject.next(null),b(this.jwtData.getLocalRefreshToken()).pipe(s(r=>r?this.auth.resetToken(r,this.jwtData.tokenId).pipe(s(n=>b(this.jwtData.setToken(n)).pipe(s(f=>this.addAccessToken(t).pipe(s(d=>e.handle(d).pipe(this.catchLocalAccessToken(t,e)))))))).pipe(A(n=>this.tokenExpired())):this.tokenExpired()),R(()=>this.isRefreshingToken=!1)))}tokenExpired(){return this.isRefreshingToken=!1,this.notificationService.error("Login session expired","Please log in again"),C(this.auth.loginUrl(this.router.url)).pipe(T(()=>this.jwtData.removeToken()))}addAccessToken(t){return this.jwtData.token$.pipe(y(e=>e!==null),w(1),T(e=>t.clone({setHeaders:{Authorization:`Bearer ${e}`,member:this.jwtData.memberId||"",token:this.jwtData.tokenId||""}})))}isInBlockedList(t){return t.indexOf("/auth")>=0||t.indexOf("/refresh-token")>=0}};i.\u0275fac=function(e){return new(e||i)(a(m),a(V),a(u),a(j))},i.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"platform"});let o=i;return o})();var kt={provide:$,useClass:vt,multi:!0};function wt(o){let i=o,Tt=Math.floor(Math.abs(o)),t=o.toString().replace(/^[^.]*\.?/,"").length;return Tt===1&&t===0?1:5}var St=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",wt];function jt(o,i){return i in o}var D=(()=>{let i=class i{set socket(t){this._socket=t,this._socket&&(this._socket?.on("reconnect_attempt",()=>{}),this._socket?.on("connect",()=>{this.registerService()}),this._socket?.on("disconnect",e=>{e==="io server disconnect"&&this.connect()}))}registerService(){this._socket?.removeAllListeners("userData"),this._socket?.offAny(),this._socket&&(this._socket.onAny((t,e)=>{t==="exception"&&e?.message==="Invalid credentials."&&this.jwtStorage.loadToken().subscribe(r=>{r?this.connect():(this.destroy(),this.notification.error("Phi\xEAn \u0111\u0103ng nh\xE2\u0323p h\xEA\u0301t ha\u0323n","Phi\xEAn \u0111\u0103ng nh\u1EADp h\u1EBFt h\u1EA1n, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i"),this.router.navigate(["/"]).then())})}),this._socket.on("userData",t=>{let e=this.jwtStorage.userData;e&&(Object.keys(t).forEach(r=>{jt(e,r)&&(e[r]=t[r])}),this.jwtStorage.userData$.next(e))}),this.socket?.emit("join-user",{join:!0}))}destroy(){this.disconnect(!0)}get socket(){return this._socket}constructor(t,e,r){this.jwtStorage=t,this.notification=e,this.router=r,this.namespace="user",this.jwtStorage.userData$.subscribe(n=>{n?this._socket||this.connect():this.destroy()})}reConnect(){this.disconnect(),this.connect()}connect(){this.socket=ht(K.socket+this.namespace,{extraHeaders:{authorization:`${this.jwtStorage.userData?.accessToken}`,token:this.jwtStorage.userData?.token}})}disconnect(t=!1){this.socket?.removeAllListeners(),this.socket?.offAny(),this.socket?.disconnect(),t&&(this.socket=null)}};i.\u0275fac=function(e){return new(e||i)(a(m),a(j),a(u))},i.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"platform"});let o=i;return o})();P(St);var Mt={providers:[{provide:m,multi:!1},{provide:D,multi:!1},G(ft),tt(),lt(),at(st),c(pt),c(mt),c(q),c(U),c(Z.forRoot()),c(ct),kt]};var Dt=(()=>{let i=class i{constructor(){this._loading=new l(!1),this.loading$=this._loading.asObservable()}show(){this._loading.next(!0)}hide(){this._loading.next(!1)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"platform"});let o=i;return o})();function xt(o,i){o&1&&(v(0,"div",1)(1,"div",2)(2,"div",3),I(3,"div")(4,"div")(5,"div")(6,"div")(7,"div")(8,"div")(9,"div")(10,"div"),k()()())}var bt=(()=>{let i=class i{constructor(t,e,r,n,f){this.zone=t,this.jwtDataStorage=e,this.loading=r,this.cd=n,this.userSocketService=f,this.assets=X.getInstance(),this._loadingData=!1,this.userSocketService.destroy(),this.zone.runOutsideAngular(()=>{Y.add("beep",this.assets.assetsSound+"8bc12ebc-21df-44b4-83c4-4fb6a7127f19.80886.mp3")}),this.jwtDataStorage.loadToken().subscribe(),this.loading.loading$.pipe(F(50)).subscribe(d=>{this.loadingData=d})}set loadingData(t){this._loadingData=t,this.cd.detectChanges()}get loadingData(){return this._loadingData}};i.\u0275fac=function(e){return new(e||i)(p(E),p(m),p(Dt),p(z),p(D))},i.\u0275cmp=g({type:i,selectors:[["app-root"]],standalone:!0,features:[S],decls:2,vars:1,consts:[["class","loading-wrapper",4,"ngIf"],[1,"loading-wrapper"],[1,"loading-content"],[1,"lds-roller"]],template:function(e,r){e&1&&(I(0,"router-outlet"),J(1,xt,11,0,"div",0)),e&2&&(N(1),O("ngIf",r.loadingData))},dependencies:[B,_,W]});let o=i;return o})();H(bt,Mt).catch(o=>console.error(o));
