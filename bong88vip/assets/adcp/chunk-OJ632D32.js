import{d as v,e as K}from"./chunk-RECFOFNC.js";import{a as k,b as H}from"./chunk-XSFL3EMG.js";import{a as R,c as V,d as _,e as h,f as A,h as w}from"./chunk-ORRLLQZN.js";import{a as y,b as D,c as F}from"./chunk-PAX2HDJK.js";import{a as C,d as P,e as b,g as G,h as E,n as z,o as I,r as g}from"./chunk-JUKEY4C5.js";import{Cb as m,Db as a,Eb as N,Qb as T,Yb as S,ac as d,dc as c,ha as p,lb as s,ra as u,rb as f,ub as n,za as l}from"./chunk-U56GQCYX.js";var j=(()=>{let e=class e extends v{constructor(){super(...arguments),this.validatorError={username:{required:"Username is not valid"}},this.usernameValidator=[b.required]}ngOnInit(){this.addControl("username",this.setValidators(this.validators.username,this.usernameValidator)),this.emitNewErrorMsg("username")}};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=l(e)))(r||e)}})(),e.\u0275cmp=u({type:e,selectors:[["app-username"]],standalone:!0,features:[d([{provide:C,useExisting:p(()=>e),multi:!0}]),f,c],decls:6,vars:6,consts:[[3,"formGroup"],["nzRequired","","nzFor","user",3,"nzSm","nzXs"],[3,"nzSm","nzXs","nzErrorTip"],["nz-input","","formControlName","username","id","username"]],template:function(i,r){i&1&&(m(0,"div",0)(1,"nz-form-item")(2,"nz-form-label",1),S(3,"Username"),a(),m(4,"nz-form-control",2),N(5,"input",3),a()()()),i&2&&(n("formGroup",r.formGroup),s(2),n("nzSm",10)("nzXs",24),s(2),n("nzSm",14)("nzXs",24)("nzErrorTip",r.formErrors.username))},dependencies:[h,D,y,R,_,V,w,A,F,g,P,G,E,z,I]});let o=e;return o})();var zr=(()=>{let e=class e extends v{};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=l(e)))(r||e)}})(),e.\u0275cmp=u({type:e,selectors:[["app-username-password-confirm"]],inputs:{formGroup:"formGroup",formErrors:"formErrors",errorMsgGroup:"errorMsgGroup",defaultValue:"defaultValue",validators:"validators",formErrorMsg:"formErrorMsg"},outputs:{formErrorMsgChange:"formErrorMsgChange"},standalone:!0,features:[d([{provide:C,useExisting:p(()=>e),multi:!0}]),f,c],decls:2,vars:9,consts:[[3,"validators","defaultValue","formErrorMsg","formGroup","formErrors","formErrorMsgChange"],[3,"validators","formErrorMsg","formGroup","formErrors","formErrorMsgChange"]],template:function(i,r){i&1&&(m(0,"app-username",0),T("formErrorMsgChange",function(M){return r.formErrorMsg=M}),a(),m(1,"app-password-confirm",1),T("formErrorMsgChange",function(M){return r.formErrorMsg=M}),a()),i&2&&(n("validators",r.validators)("defaultValue",r.defaultValue)("formErrorMsg",r.formErrorMsg)("formGroup",r.formGroup)("formErrors",r.formErrors),s(1),n("validators",r.validators)("formErrorMsg",r.formErrorMsg)("formGroup",r.formGroup)("formErrors",r.formErrors))},dependencies:[h,w,F,g,E,z,j,K]});let o=e;return o})();var J=(()=>{let e=class e extends v{constructor(){super(...arguments),this.validatorError={fullName:{required:"FullName is required"}}}ngOnInit(){this.addControl("fullName",this.setValidators(this.validators.fullName,[b.required])),this.emitNewErrorMsg("fullName")}};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=l(e)))(r||e)}})(),e.\u0275cmp=u({type:e,selectors:[["app-fullname-input"]],standalone:!0,features:[d([{provide:C,useExisting:p(()=>e),multi:!0}]),f,c],decls:6,vars:7,consts:[[3,"formGroup"],["nzFor","fullName",3,"nzSm","nzXs","nzRequired"],[3,"nzSm","nzXs","nzErrorTip"],["nz-input","","formControlName","fullName","id","fullName"]],template:function(i,r){i&1&&(m(0,"div",0)(1,"nz-form-item")(2,"nz-form-label",1),S(3,"Ho\u0323 t\xEAn"),a(),m(4,"nz-form-control",2),N(5,"input",3),a()()()),i&2&&(n("formGroup",r.formGroup),s(2),n("nzSm",10)("nzXs",24)("nzRequired",r.formErrorMsg.fullName&&r.formErrorMsg.fullName.required),s(2),n("nzSm",14)("nzXs",24)("nzErrorTip",r.formErrors.fullName))},dependencies:[h,D,y,R,_,V,w,A,F,g,P,G,E,z,I]});let o=e;return o})();var Q=(()=>{let e=class e extends v{ngOnInit(){this.addControl("phone",this.validators.phone)}};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=l(e)))(r||e)}})(),e.\u0275cmp=u({type:e,selectors:[["app-phone-input"]],standalone:!0,features:[d([{provide:C,useExisting:p(()=>e),multi:!0}]),f,c],decls:6,vars:7,consts:[[3,"formGroup"],["nzFor","phone",3,"nzSm","nzXs","nzRequired"],[3,"nzSm","nzXs","nzErrorTip"],["nz-input","","formControlName","phone","id","phone"]],template:function(i,r){i&1&&(m(0,"div",0)(1,"nz-form-item")(2,"nz-form-label",1),S(3,"S\u0110T"),a(),m(4,"nz-form-control",2),N(5,"input",3),a()()()),i&2&&(n("formGroup",r.formGroup),s(2),n("nzSm",10)("nzXs",24)("nzRequired",r.formErrorMsg.phone&&r.formErrorMsg.phone.required),s(2),n("nzSm",14)("nzXs",24)("nzErrorTip",r.formErrors.phone))},dependencies:[h,D,y,R,_,V,w,A,F,g,P,G,E,z,I]});let o=e;return o})();var W=(()=>{let e=class e extends v{constructor(){super(...arguments),this.validatorError={email:{email:"Email is not valid"}}}ngOnInit(){this.addControl("email",this.setValidators(this.validators.email,[b.email])),this.emitNewErrorMsg("email")}};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=l(e)))(r||e)}})(),e.\u0275cmp=u({type:e,selectors:[["app-email-input"]],standalone:!0,features:[d([{provide:C,useExisting:p(()=>e),multi:!0}]),f,c],decls:6,vars:7,consts:[[3,"formGroup"],["nzFor","email",3,"nzSm","nzXs","nzRequired"],[3,"nzSm","nzXs","nzErrorTip"],["nz-input","","formControlName","email","id","email"]],template:function(i,r){i&1&&(m(0,"div",0)(1,"nz-form-item")(2,"nz-form-label",1),S(3,"Email"),a(),m(4,"nz-form-control",2),N(5,"input",3),a()()()),i&2&&(n("formGroup",r.formGroup),s(2),n("nzSm",10)("nzXs",24)("nzRequired",r.formErrorMsg.email&&r.formErrorMsg.email.required),s(2),n("nzSm",14)("nzXs",24)("nzErrorTip",r.formErrors.email))},dependencies:[h,D,y,R,_,V,w,A,F,g,P,G,E,z,I]});let o=e;return o})();var Y=(()=>{let e=class e extends v{};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=l(e)))(r||e)}})(),e.\u0275cmp=u({type:e,selectors:[["app-phone-email-input"]],standalone:!0,features:[d([{provide:C,useExisting:p(()=>e),multi:!0}]),f,c],decls:2,vars:10,consts:[[3,"validators","formErrorMsg","defaultValue","formGroup","formErrors","formErrorMsgChange"]],template:function(i,r){i&1&&(m(0,"app-phone-input",0),T("formErrorMsgChange",function(M){return r.formErrorMsg=M}),a(),m(1,"app-email-input",0),T("formErrorMsgChange",function(M){return r.formErrorMsg=M}),a()),i&2&&(n("validators",r.validators)("formErrorMsg",r.formErrorMsg)("defaultValue",r.defaultValue)("formGroup",r.formGroup)("formErrors",r.formErrors),s(1),n("validators",r.validators)("formErrorMsg",r.formErrorMsg)("defaultValue",r.defaultValue)("formGroup",r.formGroup)("formErrors",r.formErrors))},dependencies:[g,E,z,Q,W]});let o=e;return o})();var me=(()=>{let e=class e extends v{};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=l(e)))(r||e)}})(),e.\u0275cmp=u({type:e,selectors:[["app-fullname-phone-email-input"]],standalone:!0,features:[d([{provide:C,useExisting:p(()=>e),multi:!0}]),f,c],decls:2,vars:10,consts:[[3,"defaultValue","validators","formErrorMsg","formGroup","formErrors","formErrorMsgChange"]],template:function(i,r){i&1&&(m(0,"app-fullname-input",0),T("formErrorMsgChange",function(M){return r.formErrorMsg=M}),a(),m(1,"app-phone-email-input",0),T("formErrorMsgChange",function(M){return r.formErrorMsg=M}),a()),i&2&&(n("defaultValue",r.defaultValue)("validators",r.validators)("formErrorMsg",r.formErrorMsg)("formGroup",r.formGroup)("formErrors",r.formErrors),s(1),n("defaultValue",r.defaultValue)("validators",r.validators)("formErrorMsg",r.formErrorMsg)("formGroup",r.formGroup)("formErrors",r.formErrors))},dependencies:[g,E,z,J,Y]});let o=e;return o})();var Ee=(()=>{let e=class e extends v{ngOnInit(){this.addControl("disabled",this.validators.disabled)}};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=l(e)))(r||e)}})(),e.\u0275cmp=u({type:e,selectors:[["app-disabled-input"]],standalone:!0,features:[d([{provide:C,useExisting:p(()=>e),multi:!0}]),f,c],decls:6,vars:6,consts:[[3,"formGroup"],["nzFor","disabled",3,"nzSm","nzXs"],[3,"nzSm","nzXs","nzErrorTip"],["nzSize","small","formControlName","disabled"]],template:function(i,r){i&1&&(m(0,"div",0)(1,"nz-form-item")(2,"nz-form-label",1),S(3,"Khoa\u0301 ta\u0300i khoa\u0309n"),a(),m(4,"nz-form-control",2),N(5,"nz-switch",3),a()()()),i&2&&(n("formGroup",r.formGroup),s(2),n("nzSm",10)("nzXs",24),s(2),n("nzSm",14)("nzXs",24)("nzErrorTip",r.formErrors.disabled))},dependencies:[h,D,y,R,_,V,H,k,F,g,G,E,z,I]});let o=e;return o})();export{zr as a,me as b,Ee as c};
