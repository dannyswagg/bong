import{a as Oe,b as Ue,c as Le,f as je}from"./chunk-RECFOFNC.js";import{a as A,b as D}from"./chunk-XSFL3EMG.js";import{a as P,b as k}from"./chunk-A6MY7YGW.js";import{b as Ve}from"./chunk-WQJWU2OV.js";import{a as x,b as Xe,c as Be}from"./chunk-D3B2BIM5.js";import{a as _e,b as we,c as ye,d as Ne,e as Te,f as Fe,h as Ee}from"./chunk-ORRLLQZN.js";import{a as Ce,b as Se,c as ve,e as be,g as xe}from"./chunk-PAX2HDJK.js";import"./chunk-QD3AVGAJ.js";import"./chunk-IYMRGB2C.js";import{a as Ie,b as Me,c as Ae,d as De,e as Pe,f as ke,g as $e}from"./chunk-RP6UQ7FK.js";import"./chunk-VOYKCQUF.js";import"./chunk-YMXYSE3L.js";import"./chunk-3KEVF4HQ.js";import{d as me,e as se,g as T,h as de,k as pe,l as le,n as ce,o as ue,q as fe,r as ze,s as F,t as E,v as I,w as M}from"./chunk-JUKEY4C5.js";import{Aa as z,E as he,F as ge}from"./chunk-I542ZMBG.js";import"./chunk-BFOO2OG4.js";import{g as ie,h as ne,n as re,o as oe,q as N,x as ae}from"./chunk-5QXQBUCH.js";import{Bb as $,Cb as r,Db as o,Eb as l,Fb as K,Gb as Q,Ib as V,N as q,Qb as f,Sb as v,Wb as Y,Yb as p,Zb as X,a as y,ac as Z,ba as G,dc as b,ea as W,hc as B,ic as ee,ja as H,jc as te,lb as d,mb as C,oa as J,p as L,ra as g,rb as S,t as j,ub as m,wa as _,xa as w,z as R}from"./chunk-U56GQCYX.js";var c=(()=>{let e=class e{constructor(t){this.http=t}getAllAdmin(t=10,n=0){return this.http.get(z.apiUrl+`admin?perPage=${t}&page=${n}`).pipe(R(([a,h])=>({admin:a,count:h})))}getAdminById(t){return this.http.get(z.apiUrl+`admin/${t}`)}createAdmin(t){return this.http.post(z.apiUrl+"admin",t)}updateAdmin(t){return this.http.put(z.apiUrl+"admin",t)}deleteAdmin(t){return this.http.delete(z.apiUrl+`admin/${t}`)}changePassword(t){return this.http.put(z.apiUrl+"admin/change-password",t)}};e.\u0275fac=function(n){return new(n||e)(J(ae))},e.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var Re=(()=>{let e=class e extends x(P,k){constructor(t){super(),this.adminService=t,this._formErrorMsg=y({username:{required:"Username is not valid"}},Le)}ngOnInit(){this.validateForm=this.fb.group(y({username:[null,[se.required]],disabled:[!1]},Oe),y({},Ue))}submitForm(){this.formValid()&&this.adminService.createAdmin(this.validateForm.value).pipe(this.httpErrorOperator("username")).subscribe(t=>{this.destroyModal(t)})}};e.\u0275fac=function(n){return new(n||e)(C(c))},e.\u0275cmp=g({type:e,selectors:[["app-admin-create"]],standalone:!0,features:[S,b],decls:25,vars:24,consts:[["nz-form","",3,"formGroup","ngSubmit"],["nzRequired","","nzFor","user",3,"nzSm","nzXs"],[3,"nzSm","nzXs","nzErrorTip"],["nz-input","","formControlName","username","id","username"],["nzFor","password","nzRequired","",3,"nzSm","nzXs"],["nz-input","","type","password","id","password","formControlName","password"],["nzFor","passwordConfirm","nzRequired","",3,"nzSm","nzXs"],["nz-input","","type","password","formControlName","passwordConfirm","id","passwordConfirm"],["nzFor","disabled","nzRequired","",3,"nzSm","nzXs"],["nzSize","small","formControlName","disabled"],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary",3,"disabled"]],template:function(n,a){n&1&&(r(0,"form",0),f("ngSubmit",function(){return a.submitForm()}),r(1,"nz-form-item")(2,"nz-form-label",1),p(3,"Username"),o(),r(4,"nz-form-control",2),l(5,"input",3),o()(),r(6,"nz-form-item")(7,"nz-form-label",4),p(8,"Password"),o(),r(9,"nz-form-control",2),l(10,"input",5),o()(),r(11,"nz-form-item")(12,"nz-form-label",6),p(13,"Confirm Password"),o(),r(14,"nz-form-control",2),l(15,"input",7),o()(),r(16,"nz-form-item")(17,"nz-form-label",8),p(18,"Khoa\u0301 ta\u0300i khoa\u0309n"),o(),r(19,"nz-form-control",2),l(20,"nz-switch",9),o()(),r(21,"nz-form-item",10)(22,"nz-form-control",11)(23,"button",12),p(24,"\u0110\u0103ng ky\u0301 ta\u0300i khoa\u0309n"),o()()()()),n&2&&(m("formGroup",a.validateForm),d(2),m("nzSm",10)("nzXs",24),d(2),m("nzSm",14)("nzXs",24)("nzErrorTip",a.formErrors.username),d(3),m("nzSm",10)("nzXs",24),d(2),m("nzSm",14)("nzXs",24)("nzErrorTip",a.formErrors.password),d(3),m("nzSm",10)("nzXs",24),d(2),m("nzSm",14)("nzXs",24)("nzErrorTip",a.formErrors.passwordConfirm),d(3),m("nzSm",10)("nzXs",24),d(2),m("nzSm",14)("nzXs",24)("nzErrorTip",a.formErrors.disabled),d(3),m("nzSpan",12)("nzOffset",8),d(1),m("disabled",!a.validateForm.valid))},dependencies:[Te,Se,Ce,we,_e,Ne,ye,Ee,Fe,ve,ze,le,me,T,de,ce,ue,M,I,F,E,D,A,N]});let s=e;return s})();var qe=(()=>{let e=class e extends x(P,k){constructor(t){super(),this.adminService=t}submit(t){return this.adminService.changePassword(t)}};e.\u0275fac=function(n){return new(n||e)(C(c))},e.\u0275cmp=g({type:e,selectors:[["app-admin-change-password"]],standalone:!0,features:[S,b],decls:1,vars:1,consts:[[3,"submitFunc"]],template:function(n,a){n&1&&l(0,"app-change-password",0),n&2&&m("submitFunc",a.submit.bind(a))},dependencies:[je]});let s=e;return s})();function Ye(s,e){if(s&1){let i=V();r(0,"tr")(1,"td"),p(2),B(3,"date"),o(),r(4,"td"),p(5),o(),r(6,"td")(7,"nz-switch",7),f("ngModelChange",function(){let a=_(i).$implicit,h=v(2);return w(h.changeDisabled(a,!a.disabled))}),o()(),r(8,"td",8)(9,"button",9),f("click",function(){let a=_(i).$implicit,h=v(2);return w(h.changePassword(a))}),l(10,"span",10),o()()()}if(s&2){let i=e.$implicit;d(2),X(te(3,3,i.createdAt,"short")),d(3),X(i.username),d(2),m("ngModel",i.disabled)}}function Ze(s,e){if(s&1){let i=V();K(0),r(1,"nz-table",1,2),f("nzPageIndexChange",function(n){_(i);let a=v();return w(a.changePage(n))}),r(3,"thead")(4,"tr")(5,"th"),p(6,"Ng\xE0y kh\u1EDFi t\u1EA1o"),o(),r(7,"th"),p(8,"Ta\u0300i khoa\u0309n"),o(),r(9,"th"),p(10,"Disabled"),o(),r(11,"th"),p(12,"X\u1EED l\xFD "),o()(),r(13,"tr")(14,"th",3)(15,"button",4),f("click",function(){_(i);let n=v();return w(n.create())}),l(16,"span",5),o()()()(),r(17,"tbody"),$(18,Ye,11,6,"tr",6),o()(),Q()}if(s&2){let i=e.ngIf,t=Y(2),n=v();d(1),m("nzData",i.admin)("nzTotal",n.totalAdmin)("nzPageIndex",n.pageIndex+1)("nzPageSize",n.pageSize),d(17),m("ngForOf",t.data)}}var u,Ge=(u=class extends x(Xe){constructor(e){super(),this.adminService=e,this.pageSize=10,this.pageIndex=0,this.totalAdmin=0,this.adminLoad$=new L(1),this.admin$=this.adminLoad$.pipe(q(100),G(()=>this.adminService.getAllAdmin(this.pageSize,this.pageIndex))).pipe(W(i=>{this.totalAdmin=i.count}))}ngOnInit(){this.adminLoad$.next(!0)}changePage(e){this.pageIndex=e-1,this.adminLoad$.next(!0)}ngOnDestroy(){}update(e){}delete(e){this.adminService.deleteAdmin(e.id).subscribe({complete:()=>{this.adminLoad$.next(!0)}})}create(){let e=this.createComponentModal({nzTitle:"Ta\u0323o ta\u0300i khoa\u0309n Admin"},Re);this.createModalSubscription$=e.afterClose.subscribe(i=>{i&&i.id&&this.adminLoad$.next(!0)})}changeDisabled(e,i){this.adminService.updateAdmin({id:e.id,disabled:i}).subscribe(t=>{this.adminLoad$.next(!0)})}changePassword(e){this.createComponentModal({nzTitle:"\u0110\xF4\u0309i m\xE2\u0323t kh\xE2\u0309u ta\u0300i khoa\u0309n "+e.username},qe,e)}},u.\u0275fac=function(i){return new(i||u)(C(c))},u.\u0275cmp=g({type:u,selectors:[["app-admin-index"]],standalone:!0,features:[Z([c]),S,b],decls:2,vars:3,consts:[[4,"ngIf"],["nzSize","small","nzShowPagination","true","nzFrontPagination","false",3,"nzData","nzTotal","nzPageIndex","nzPageSize","nzPageIndexChange"],["adminTable",""],["colspan","11",1,"center-align"],["nz-button","","nzType","primary","nz-tooltip","","nzTooltipTitle","T\u1EA1o ta\u0300i khoa\u0309n",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"],[4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"],[1,"btn-float"],["nz-button","","nzType","primary","nz-tooltip","","nzTooltipTitle","\u0110\xF4\u0309i m\xE2\u0323t kh\xE2\u0309u admin",1,"mr1",3,"click"],["nz-icon","","nzType","key","nzTheme","outline"]],template:function(i,t){i&1&&($(0,Ze,19,5,"ng-container",0),B(1,"async")),i&2&&m("ngIf",ee(1,1,t.admin$))},dependencies:[$e,Ae,Ie,Me,ke,De,Pe,M,I,F,E,ge,he,re,ne,oe,Ve,D,A,fe,T,pe,N,ie,xe,be]}),u);Ge=j([Be()],Ge);export{Ge as AdminIndexComponent};
