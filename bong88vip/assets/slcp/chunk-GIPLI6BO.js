import{c as P}from"./chunk-2Y6YJXVM.js";import{c as ye,d as ve,e as b,f as Te}from"./chunk-GX7475IY.js";import{c as de,d as ce,e as ge}from"./chunk-SMSACOKG.js";import"./chunk-N6K7GODK.js";import{A as I,B as N,C as fe,R as ze,S as Ce,h as ue,i as D,p as me,v as he}from"./chunk-AJGDOIBK.js";import{Bb as L,Cb as re,D as G,Db as oe,Fb as Q,Hb as H,Ib as V,Jb as q,Ka as E,Ma as F,Oa as s,Pa as d,Ra as ee,Sa as te,Xa as a,Ya as Z,Z as O,Za as M,Zb as x,ab as g,bb as l,cb as p,cc as ae,db as u,dc as se,ea as J,eb as v,fb as T,fc as le,gb as ne,gc as pe,i as A,ja as W,ka as c,kb as _,la as K,mb as m,nb as S,o as w,oa as j,ob as k,pa as X,pb as $,qa as Y,qb as C,tb as ie,u as U,xb as h,yb as y}from"./chunk-N5HMSUQW.js";var B=["*"],Pe=["nz-sider-trigger",""];function be(e,t){}function Be(e,t){if(e&1&&(v(0),g(1,be,0,0,"ng-template",3),T()),e&2){let o=m(),r=$(5);s(),a("ngTemplateOutlet",o.nzZeroTrigger||r)}}function Re(e,t){}function Ae(e,t){if(e&1&&(v(0),g(1,Re,0,0,"ng-template",3),T()),e&2){let o=m(),r=$(3);s(),a("ngTemplateOutlet",o.nzTrigger||r)}}function Oe(e,t){if(e&1&&u(0,"span",5),e&2){let o=m(2);a("nzType",o.nzCollapsed?"right":"left")}}function We(e,t){if(e&1&&u(0,"span",5),e&2){let o=m(2);a("nzType",o.nzCollapsed?"left":"right")}}function je(e,t){if(e&1&&g(0,Oe,1,1,"span",4)(1,We,1,1,"span",4),e&2){let o=m();a("ngIf",!o.nzReverseArrow),s(),a("ngIf",o.nzReverseArrow)}}function Ee(e,t){e&1&&u(0,"span",6)}function Fe(e,t){if(e&1){let o=ne();l(0,"div",2),_("click",function(){X(o);let n=m();return Y(n.setCollapsed(!n.nzCollapsed))}),p()}if(e&2){let o=m();a("matchBreakPoint",o.matchBreakPoint)("nzCollapsedWidth",o.nzCollapsedWidth)("nzCollapsed",o.nzCollapsed)("nzBreakpoint",o.nzBreakpoint)("nzReverseArrow",o.nzReverseArrow)("nzTrigger",o.nzTrigger)("nzZeroTrigger",o.nzZeroTrigger)("siderWidth",o.widthSetting)}}var _e=(()=>{let t=class t{constructor(r,n){this.elementRef=r,this.renderer=n,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}};t.\u0275fac=function(n){return new(n||t)(d(E),d(F))},t.\u0275cmp=c({type:t,selectors:[["nz-content"]],exportAs:["nzContent"],standalone:!0,features:[h],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(S(),k(0))},encapsulation:2,changeDetection:0});let e=t;return e})();var Se=(()=>{let t=class t{constructor(r,n){this.elementRef=r,this.renderer=n,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}};t.\u0275fac=function(n){return new(n||t)(d(E),d(F))},t.\u0275cmp=c({type:t,selectors:[["nz-header"]],exportAs:["nzHeader"],standalone:!0,features:[h],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(S(),k(0))},encapsulation:2,changeDetection:0});let e=t;return e})(),ke=(()=>{let t=class t{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=this.nzCollapsedWidth===0&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=this.nzCollapsedWidth!==0}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(n,i){n&2&&(Z("width",i.isNormalTrigger?i.siderWidth:null),M("ant-layout-sider-trigger",i.isNormalTrigger)("ant-layout-sider-zero-width-trigger",i.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",i.isZeroTrigger&&i.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",i.isZeroTrigger&&!i.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],standalone:!0,features:[j,h],attrs:Pe,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(n,i){n&1&&g(0,Be,2,1,"ng-container",0)(1,Ae,2,1,"ng-container",0)(2,je,2,2,"ng-template",null,1,q)(4,Ee,1,0,"ng-template",null,2,q),n&2&&(a("ngIf",i.isZeroTrigger),s(),a("ngIf",i.isNormalTrigger))},dependencies:[x,ae,N,I],encapsulation:2,changeDetection:0});let e=t;return e})(),R=(()=>{let t=class t{updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:ue(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&this.nzMenuDirective.nzMode==="inline"&&this.nzCollapsedWidth!==0&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(r){r!==this.nzCollapsed&&(this.nzCollapsed=r,this.nzCollapsedChange.emit(r),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}constructor(r,n,i){this.platform=r,this.cdr=n,this.breakpointService=i,this.destroy$=new A,this.nzMenuDirective=null,this.nzCollapsedChange=new te,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(ze,!0).pipe(O(this.destroy$)).subscribe(r=>{let n=this.nzBreakpoint;n&&me().subscribe(()=>{this.matchBreakPoint=!r[n],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(r){let{nzCollapsed:n,nzCollapsedWidth:i,nzWidth:f}=r;(n||i||f)&&this.updateStyleMap(),n&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};t.\u0275fac=function(n){return new(n||t)(d(he),d(ee),d(Ce))},t.\u0275cmp=c({type:t,selectors:[["nz-sider"]],contentQueries:function(n,i,f){if(n&1&&H(f,b,5),n&2){let z;Q(z=V())&&(i.nzMenuDirective=z.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(n,i){n&2&&(Z("flex",i.flexSetting)("max-width",i.widthSetting)("min-width",i.widthSetting)("width",i.widthSetting),M("ant-layout-sider-zero-width",i.nzCollapsed&&i.nzCollapsedWidth===0)("ant-layout-sider-light",i.nzTheme==="light")("ant-layout-sider-dark",i.nzTheme==="dark")("ant-layout-sider-collapsed",i.nzCollapsed)("ant-layout-sider-has-trigger",i.nzCollapsible&&i.nzTrigger!==null))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],standalone:!0,features:[j,h],ngContentSelectors:B,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(n,i){n&1&&(S(),l(0,"div",0),k(1),p(),g(2,Fe,1,8,"div",1)),n&2&&(s(2),a("ngIf",i.nzCollapsible&&i.nzTrigger!==null))},dependencies:[x,ke],encapsulation:2,changeDetection:0});let e=t;return w([D()],e.prototype,"nzReverseArrow",void 0),w([D()],e.prototype,"nzCollapsible",void 0),w([D()],e.prototype,"nzCollapsed",void 0),e})(),xe=(()=>{let t=class t{constructor(r){this.directionality=r,this.dir="ltr",this.destroy$=new A}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(O(this.destroy$)).subscribe(r=>{this.dir=r})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};t.\u0275fac=function(n){return new(n||t)(d(fe,8))},t.\u0275cmp=c({type:t,selectors:[["nz-layout"]],contentQueries:function(n,i,f){if(n&1&&H(f,R,4),n&2){let z;Q(z=V())&&(i.listOfNzSiderComponent=z)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(n,i){n&2&&M("ant-layout-rtl",i.dir==="rtl")("ant-layout-has-sider",i.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],standalone:!0,features:[h],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(S(),k(0))},encapsulation:2,changeDetection:0});let e=t;return e})(),we=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=K({type:t}),t.\u0275inj=J({imports:[R,ke]});let e=t;return e})();function $e(e,t){if(e&1&&(v(0),C(1),L(2,"number"),T()),e&2){let o=t.$implicit;s(),ie(" ",o.username," | ",oe(2,2,o.balance,"1.0-0")," ")}}var Le=()=>["/user"],Qe=()=>["/change-password"],He=()=>["/transaction"],Ve=()=>["/sale-actions"],qe=()=>["/auth"],Me=(()=>{let t=class t{constructor(r){this.jwt=r,this.isCollapsed=!1}};t.\u0275fac=function(n){return new(n||t)(d(P))},t.\u0275cmp=c({type:t,selectors:[["app-pages-template"]],standalone:!0,features:[h],decls:34,vars:17,consts:[[1,"app-layout"],["nzCollapsible","","nzWidth","256px","nzBreakpoint","md",1,"menu-sidebar",3,"nzCollapsed","nzTrigger","nzCollapsedChange"],[1,"sidebar-logo"],["href","#","target","_blank"],["src","/assets/logo.png","alt","logo"],[4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",3,"nzInlineCollapsed"],["nz-submenu","","nzOpen","","nzTitle","Qua\u0309n ly\u0301 ta\u0300i khoa\u0309n","nzIcon","usergroup-add"],["nz-menu-item","","nzMatchRouter",""],[3,"routerLink"],[1,"app-header"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],[1,"inner-content"]],template:function(n,i){n&1&&(l(0,"nz-layout",0)(1,"nz-sider",1),_("nzCollapsedChange",function(z){return i.isCollapsed=z}),l(2,"div",2)(3,"a",3),u(4,"img",4),l(5,"h1"),g(6,$e,3,5,"ng-container",5),L(7,"async"),p()()(),l(8,"ul",6)(9,"li",7)(10,"ul")(11,"li",8)(12,"a",9),C(13," Ta\u0300i khoa\u0309n ng\u01B0\u01A1\u0300i ch\u01A1i "),p()(),l(14,"li",8)(15,"a",9),C(16," \u0110\xF4\u0309i m\xE2\u0323t kh\xE2\u0309u qua\u0309n ly\u0301 "),p()(),l(17,"li",8)(18,"a",9),C(19," Li\u0323ch s\u01B0\u0309 giao di\u0323ch "),p()(),l(20,"li",8)(21,"a",9),C(22," Li\u0323ch s\u01B0\u0309 ta\u0300i khoa\u0309n "),p()(),l(23,"li",8)(24,"a",9),C(25," \u0110\u0103ng xu\xE2\u0301t "),p()()()()()(),l(26,"nz-layout")(27,"nz-header")(28,"div",10)(29,"span",11),_("click",function(){return i.isCollapsed=!i.isCollapsed}),u(30,"span",12),p()()(),l(31,"nz-content")(32,"div",13),u(33,"router-outlet"),p()()()()),n&2&&(s(),a("nzCollapsed",i.isCollapsed)("nzTrigger",null),s(5),a("ngIf",re(7,10,i.jwt.userData$)),s(2),a("nzInlineCollapsed",i.isCollapsed),s(4),a("routerLink",y(12,Le)),s(3),a("routerLink",y(13,Qe)),s(3),a("routerLink",y(14,He)),s(3),a("routerLink",y(15,Ve)),s(3),a("routerLink",y(16,qe)),s(6),a("nzType",i.isCollapsed?"menu-unfold":"menu-fold"))},dependencies:[de,N,I,we,xe,Se,_e,R,Te,b,ye,ve,ge,pe,x,se,le],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{height:100vh}.menu-sidebar[_ngcontent-%COMP%]{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px #00152959}.header-trigger[_ngcontent-%COMP%]{height:64px;padding:20px 24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.trigger[_ngcontent-%COMP%]:hover{color:#1890ff}.sidebar-logo[_ngcontent-%COMP%]{position:relative;height:64px;padding-left:24px;overflow:hidden;line-height:64px;background:#001529;transition:all .3s}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;height:32px;width:32px;vertical-align:middle}.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block;margin:0 0 0 20px;color:#fff;font-weight:600;font-size:14px;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;vertical-align:middle}nz-header[_ngcontent-%COMP%]{padding:0;width:100%;z-index:2}.app-header[_ngcontent-%COMP%]{position:relative;height:64px;padding:0;background:#fff;box-shadow:0 1px 4px #00152914}nz-content[_ngcontent-%COMP%]{margin:24px}.inner-content[_ngcontent-%COMP%]{padding:24px;background:#fff;height:100%;overflow:auto}"]});let e=t;return e})();var De=(e,t)=>{let o=W(P),r=W(ce);return o.token$.pipe(G(n=>n!==null),U(n=>n?!0:(r.navigate(["/auth","login"],{queryParams:{retUrl:t.url}}).then(),!1)))};var Pt=[{path:"",pathMatch:"prefix",component:Me,canActivate:[De],children:[{path:"user",loadComponent:()=>import("./chunk-YAMGF3IM.js").then(e=>e.UserIndexComponent)},{path:"transaction",loadComponent:()=>import("./chunk-57DUSG7P.js").then(e=>e.TransactionComponent)},{path:"change-password",loadComponent:()=>import("./chunk-YHBJTQWR.js").then(e=>e.ChangeSalePasswordComponent)},{path:"sale-actions",loadComponent:()=>import("./chunk-V2BPO2GP.js").then(e=>e.SaleActionComponent)}]},{path:"",pathMatch:"full",redirectTo:"user"}];export{Pt as PagesRoutes};
