import{E as k,F as C}from"./chunk-I542ZMBG.js";import{h as I,q as b}from"./chunk-5QXQBUCH.js";import{Bb as h,Eb as y,Sb as v,ja as c,ka as f,mb as m,o as a,ob as l,p as r,ra as p,sa as d,ub as s,va as u,wb as g}from"./chunk-U56GQCYX.js";function M(t,e){if(t&1&&y(0,"span",1),t&2){let D=v();s("nzType",D.iconType)}}var N=(()=>{let e=class e{constructor(){this.formStatusChanges=new r(1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=c({token:e,factory:e.\u0275fac});let t=e;return t})(),A=(()=>{let e=class e{constructor(){this.noFormStatus=new a(!1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=c({token:e,factory:e.\u0275fac});let t=e;return t})(),w={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"},O=(()=>{let e=class e{constructor(i){this.cdr=i,this.status="",this.iconType=null}ngOnChanges(i){this.updateIcon()}updateIcon(){this.iconType=this.status?w[this.status]:null,this.cdr.markForCheck()}};e.\u0275fac=function(n){return new(n||e)(m(l))},e.\u0275cmp=p({type:e,selectors:[["nz-form-item-feedback-icon"]],hostAttrs:[1,"ant-form-item-feedback-icon"],hostVars:8,hostBindings:function(n,o){n&2&&g("ant-form-item-feedback-icon-error",o.status==="error")("ant-form-item-feedback-icon-warning",o.status==="warning")("ant-form-item-feedback-icon-success",o.status==="success")("ant-form-item-feedback-icon-validating",o.status==="validating")},inputs:{status:"status"},exportAs:["nzFormFeedbackIcon"],features:[u],decls:1,vars:1,consts:[["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"]],template:function(n,o){n&1&&h(0,M,1,1,"span",0),n&2&&s("ngIf",o.iconType)},dependencies:[I,k],encapsulation:2,changeDetection:0});let t=e;return t})(),R=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d({type:e}),e.\u0275inj=f({imports:[b,C]});let t=e;return t})();export{N as a,A as b,O as c,R as d};
