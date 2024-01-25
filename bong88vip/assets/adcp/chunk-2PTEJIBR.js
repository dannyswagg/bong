import{a as ee,b as F,c as te,d as ne}from"./chunk-SMFLS7MR.js";import{E as ie,a as Se,d as ye,g as Ce,k as Ie,q as xe}from"./chunk-H75Z5SQQ.js";import{E as J,F as X,G as Y,X as k,ba as Ne,ca as ve,d as T,i as C,r as O}from"./chunk-K5DAZWAR.js";import{f as be,h as E,m as _e}from"./chunk-5QXQBUCH.js";import{B as re,Bb as f,Cb as h,Db as z,Eb as m,F as b,Fb as ce,Gb as me,H as j,Qb as M,S as G,Sb as l,Tb as q,Ub as K,Wb as S,Yb as he,Zb as ze,a as B,aa as oe,ac as W,ba as ae,ca as c,dc as w,eb as Q,gb as L,ha as ue,ka as pe,lb as d,lc as N,mb as p,mc as P,n as $,nc as ge,ob as U,oc as v,pb as Z,pc as D,qb as de,ra as A,sa as le,t as y,tb as fe,ub as u,va as H,wb as _,z as se}from"./chunk-U56GQCYX.js";var De=["upHandler"],Ee=["downHandler"],Te=["inputElement"];function ke(i,r){if(i&1&&m(0,"nz-form-item-feedback-icon",11),i&2){let s=l();u("status",s.status)}}var Ve=["nz-input-number-group-slot",""];function Re(i,r){if(i&1&&m(0,"span",2),i&2){let s=l();u("nzType",s.icon)}}function Be(i,r){if(i&1&&(ce(0),he(1),me()),i&2){let s=l();d(1),ze(s.template)}}var Oe=["*"];function $e(i,r){if(i&1&&m(0,"div",7),i&2){let s=l(2);u("icon",s.nzAddOnBeforeIcon)("template",s.nzAddOnBefore)}}function je(i,r){}function Ge(i,r){if(i&1&&(h(0,"div",8),f(1,je,0,0,"ng-template",9),z()),i&2){let s=l(2),e=S(4);_("ant-input-number-affix-wrapper-disabled",s.disabled)("ant-input-number-affix-wrapper-sm",s.isSmall)("ant-input-number-affix-wrapper-lg",s.isLarge)("ant-input-number-affix-wrapper-focused",s.focused),u("ngClass",s.affixInGroupStatusCls),d(1),u("ngTemplateOutlet",e)}}function He(i,r){if(i&1&&m(0,"span",7),i&2){let s=l(2);u("icon",s.nzAddOnAfterIcon)("template",s.nzAddOnAfter)}}function Qe(i,r){if(i&1&&(h(0,"span",4),f(1,$e,1,2,"div",5)(2,Ge,2,10,"div",6)(3,He,1,2,"span",5),z()),i&2){let s=l(),e=S(6);d(1),u("ngIf",s.nzAddOnBefore||s.nzAddOnBeforeIcon),d(1),u("ngIf",s.isAffix||s.hasFeedback)("ngIfElse",e),d(1),u("ngIf",s.nzAddOnAfter||s.nzAddOnAfterIcon)}}function Le(i,r){}function Ue(i,r){if(i&1&&f(0,Le,0,0,"ng-template",9),i&2){l(2);let s=S(4);u("ngTemplateOutlet",s)}}function Ze(i,r){if(i&1&&f(0,Ue,1,1,"ng-template",10),i&2){let s=l(),e=S(6);u("ngIf",s.isAffix)("ngIfElse",e)}}function qe(i,r){if(i&1&&m(0,"span",13),i&2){let s=l(2);u("icon",s.nzPrefixIcon)("template",s.nzPrefix)}}function Ke(i,r){}function We(i,r){if(i&1&&m(0,"nz-form-item-feedback-icon",16),i&2){let s=l(3);u("status",s.status)}}function Je(i,r){if(i&1&&(h(0,"span",14),f(1,We,1,1,"nz-form-item-feedback-icon",15),z()),i&2){let s=l(2);u("icon",s.nzSuffixIcon)("template",s.nzSuffix),d(1),u("ngIf",s.isFeedback)}}function Xe(i,r){if(i&1&&f(0,qe,1,2,"span",11)(1,Ke,0,0,"ng-template",9)(2,Je,2,3,"span",12),i&2){let s=l(),e=S(6);u("ngIf",s.nzPrefix||s.nzPrefixIcon),d(1),u("ngTemplateOutlet",e),d(1),u("ngIf",s.nzSuffix||s.nzSuffixIcon||s.isFeedback)}}function Ye(i,r){if(i&1&&m(0,"nz-form-item-feedback-icon",16),i&2){let s=l(3);u("status",s.status)}}function et(i,r){if(i&1&&(h(0,"span",18),f(1,Ye,1,1,"nz-form-item-feedback-icon",15),z()),i&2){let s=l(2);d(1),u("ngIf",s.isFeedback)}}function tt(i,r){if(i&1&&(K(0),f(1,et,2,1,"span",17)),i&2){let s=l();d(1),u("ngIf",!s.isAddOn&&!s.isAffix&&s.isFeedback)}}var Fe=(()=>{let r=class r{onModelChange(e){this.parsedValue=this.nzParser(e),this.inputElement.nativeElement.value=`${this.parsedValue}`;let t=this.getCurrentValidValue(this.parsedValue);this.setValue(t)}getCurrentValidValue(e){let t=e;return t===""?t="":this.isNotCompleteNumber(t)?t=this.value:t=`${this.getValidValue(t)}`,this.toNumber(t)}isNotCompleteNumber(e){return isNaN(e)||e===""||e===null||!!(e&&e.toString().indexOf(".")===e.toString().length-1)}getValidValue(e){let t=parseFloat(e);return isNaN(t)?e:(t<this.nzMin&&(t=this.nzMin),t>this.nzMax&&(t=this.nzMax),t)}toNumber(e){if(this.isNotCompleteNumber(e))return e;let t=String(e);if(t.indexOf(".")>=0&&T(this.nzPrecision)){if(typeof this.nzPrecisionMode=="function")return this.nzPrecisionMode(e,this.nzPrecision);if(this.nzPrecisionMode==="cut"){let n=t.split(".");return n[1]=n[1].slice(0,this.nzPrecision),Number(n.join("."))}return Number(Number(e).toFixed(this.nzPrecision))}return Number(e)}getRatio(e){let t=1;return e.metaKey||e.ctrlKey?t=.1:e.shiftKey&&(t=10),t}down(e,t){this.isFocused||this.focus(),this.step("down",e,t)}up(e,t){this.isFocused||this.focus(),this.step("up",e,t)}getPrecision(e){let t=e.toString();if(t.indexOf("e-")>=0)return parseInt(t.slice(t.indexOf("e-")+2),10);let n=0;return t.indexOf(".")>=0&&(n=t.length-t.indexOf(".")-1),n}getMaxPrecision(e,t){if(T(this.nzPrecision))return this.nzPrecision;let n=this.getPrecision(t),a=this.getPrecision(this.nzStep),o=this.getPrecision(e);return e?Math.max(o,n+a):n+a}getPrecisionFactor(e,t){let n=this.getMaxPrecision(e,t);return Math.pow(10,n)}upStep(e,t){let n=this.getPrecisionFactor(e,t),a=Math.abs(this.getMaxPrecision(e,t)),o;return typeof e=="number"?o=((n*e+n*this.nzStep*t)/n).toFixed(a):o=this.nzMin===-1/0?this.nzStep:this.nzMin,this.toNumber(o)}downStep(e,t){let n=this.getPrecisionFactor(e,t),a=Math.abs(this.getMaxPrecision(e,t)),o;return typeof e=="number"?o=((n*e-n*this.nzStep*t)/n).toFixed(a):o=this.nzMin===-1/0?-this.nzStep:this.nzMin,this.toNumber(o)}step(e,t,n=1){if(this.stop(),t.preventDefault(),this.nzDisabled)return;let a=this.getCurrentValidValue(this.parsedValue)||0,o=0;e==="up"?o=this.upStep(a,n):e==="down"&&(o=this.downStep(a,n));let g=o>this.nzMax||o<this.nzMin;o>this.nzMax?o=this.nzMax:o<this.nzMin&&(o=this.nzMin),this.setValue(o),this.updateDisplayValue(o),this.isFocused=!0,!g&&(this.autoStepTimer=setTimeout(()=>{this[e](t,n)},300))}stop(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)}setValue(e){if(`${this.value}`!=`${e}`&&this.onChange(e),this.value=e,this.parsedValue=e,this.disabledUp=this.disabledDown=!1,e||e===0){let t=Number(e);t>=this.nzMax&&(this.disabledUp=!0),t<=this.nzMin&&(this.disabledDown=!0)}}updateDisplayValue(e){let t=T(this.nzFormatter(e))?this.nzFormatter(e):"";this.displayValue=t,this.inputElement.nativeElement.value=`${t}`}writeValue(e){this.value=e,this.setValue(e),this.updateDisplayValue(e),this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.disabled$.next(this.nzDisabled),this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(e,t,n,a,o,g,I,V,R){this.ngZone=e,this.elementRef=t,this.cdr=n,this.focusMonitor=a,this.renderer=o,this.directionality=g,this.destroy$=I,this.nzFormStatusService=V,this.nzFormNoStatusService=R,this.isNzDisableFirstChange=!0,this.isFocused=!1,this.disabled$=new $,this.disabledUp=!1,this.disabledDown=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.status="",this.statusCls={},this.hasFeedback=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzBlur=new Z,this.nzFocus=new Z,this.nzSize="default",this.nzMin=-1/0,this.nzMax=1/0,this.nzParser=x=>x.trim().replace(/。/g,".").replace(/[^\w\.-]+/g,""),this.nzPrecisionMode="toFixed",this.nzPlaceHolder="",this.nzStatus="",this.nzStep=1,this.nzInputMode="decimal",this.nzId=null,this.nzDisabled=!1,this.nzReadOnly=!1,this.nzAutoFocus=!1,this.nzBorderless=!1,this.nzFormatter=x=>x}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe(G((e,t)=>e.status===t.status&&e.hasFeedback===t.hasFeedback),c(this.destroy$)).subscribe(({status:e,hasFeedback:t})=>{this.setStatusStyles(e,t)}),this.focusMonitor.monitor(this.elementRef,!0).pipe(c(this.destroy$)).subscribe(e=>{e?(this.isFocused=!0,this.nzFocus.emit()):(this.isFocused=!1,this.updateDisplayValue(this.value),this.nzBlur.emit(),Promise.resolve().then(()=>this.onTouched()))}),this.dir=this.directionality.value,this.directionality.change.pipe(c(this.destroy$)).subscribe(e=>{this.dir=e}),this.setupHandlersListeners(),this.ngZone.runOutsideAngular(()=>{b(this.inputElement.nativeElement,"keyup").pipe(c(this.destroy$)).subscribe(()=>this.stop()),b(this.inputElement.nativeElement,"keydown").pipe(c(this.destroy$)).subscribe(e=>{let{keyCode:t}=e;t!==38&&t!==40&&t!==13||this.ngZone.run(()=>{if(t===38){let n=this.getRatio(e);this.up(e,n),this.stop()}else if(t===40){let n=this.getRatio(e);this.down(e,n),this.stop()}else this.updateDisplayValue(this.value);this.cdr.markForCheck()})})})}ngOnChanges(e){let{nzStatus:t,nzDisabled:n}=e;if(e.nzFormatter&&!e.nzFormatter.isFirstChange()){let a=this.getCurrentValidValue(this.parsedValue);this.setValue(a),this.updateDisplayValue(a)}n&&this.disabled$.next(this.nzDisabled),t&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef)}setupHandlersListeners(){this.ngZone.runOutsideAngular(()=>{j(b(this.upHandler.nativeElement,"mouseup"),b(this.upHandler.nativeElement,"mouseleave"),b(this.downHandler.nativeElement,"mouseup"),b(this.downHandler.nativeElement,"mouseleave")).pipe(c(this.destroy$)).subscribe(()=>this.stop())})}setStatusStyles(e,t){this.status=e,this.hasFeedback=t,this.cdr.markForCheck(),this.statusCls=O(this.prefixCls,e,t),Object.keys(this.statusCls).forEach(n=>{this.statusCls[n]?this.renderer.addClass(this.elementRef.nativeElement,n):this.renderer.removeClass(this.elementRef.nativeElement,n)})}};r.\u0275fac=function(t){return new(t||r)(p(de),p(Q),p(U),p(ie),p(L),p(Y,8),p(k),p(ee,8),p(F,8))},r.\u0275cmp=A({type:r,selectors:[["nz-input-number"]],viewQuery:function(t,n){if(t&1&&(P(De,7),P(Ee,7),P(Te,7)),t&2){let a;N(a=v())&&(n.upHandler=a.first),N(a=v())&&(n.downHandler=a.first),N(a=v())&&(n.inputElement=a.first)}},hostAttrs:[1,"ant-input-number"],hostVars:16,hostBindings:function(t,n){t&2&&_("ant-input-number-in-form-item",!!n.nzFormStatusService)("ant-input-number-focused",n.isFocused)("ant-input-number-lg",n.nzSize==="large")("ant-input-number-sm",n.nzSize==="small")("ant-input-number-disabled",n.nzDisabled)("ant-input-number-readonly",n.nzReadOnly)("ant-input-number-rtl",n.dir==="rtl")("ant-input-number-borderless",n.nzBorderless)},inputs:{nzSize:"nzSize",nzMin:"nzMin",nzMax:"nzMax",nzParser:"nzParser",nzPrecision:"nzPrecision",nzPrecisionMode:"nzPrecisionMode",nzPlaceHolder:"nzPlaceHolder",nzStatus:"nzStatus",nzStep:"nzStep",nzInputMode:"nzInputMode",nzId:"nzId",nzDisabled:"nzDisabled",nzReadOnly:"nzReadOnly",nzAutoFocus:"nzAutoFocus",nzBorderless:"nzBorderless",nzFormatter:"nzFormatter"},outputs:{nzBlur:"nzBlur",nzFocus:"nzFocus"},exportAs:["nzInputNumber"],standalone:!0,features:[W([{provide:Se,useExisting:ue(()=>r),multi:!0},k]),H,w],decls:11,vars:15,consts:[[1,"ant-input-number-handler-wrap"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-up",3,"mousedown"],["upHandler",""],["nz-icon","","nzType","up",1,"ant-input-number-handler-up-inner"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-down",3,"mousedown"],["downHandler",""],["nz-icon","","nzType","down",1,"ant-input-number-handler-down-inner"],[1,"ant-input-number-input-wrap"],["autocomplete","off",1,"ant-input-number-input",3,"disabled","placeholder","readOnly","ngModel","ngModelChange"],["inputElement",""],["class","ant-input-number-suffix",3,"status",4,"ngIf"],[1,"ant-input-number-suffix",3,"status"]],template:function(t,n){t&1&&(h(0,"div",0)(1,"span",1,2),M("mousedown",function(o){return n.up(o)}),m(3,"span",3),z(),h(4,"span",4,5),M("mousedown",function(o){return n.down(o)}),m(6,"span",6),z()(),h(7,"div",7)(8,"input",8,9),M("ngModelChange",function(o){return n.onModelChange(o)}),z()(),f(10,ke,1,1,"nz-form-item-feedback-icon",10)),t&2&&(d(1),_("ant-input-number-handler-up-disabled",n.disabledUp),d(3),_("ant-input-number-handler-down-disabled",n.disabledDown),d(4),u("disabled",n.nzDisabled)("placeholder",n.nzPlaceHolder)("readOnly",n.nzReadOnly)("ngModel",n.displayValue),fe("id",n.nzId)("autofocus",n.nzAutoFocus?"autofocus":null)("min",n.nzMin)("max",n.nzMax)("step",n.nzStep)("inputmode",n.nzInputMode),d(2),u("ngIf",n.hasFeedback&&!!n.status&&!n.nzFormNoStatusService))},dependencies:[X,J,xe,ye,Ce,Ie,ne,te,E],encapsulation:2,changeDetection:0});let i=r;return y([C()],i.prototype,"nzDisabled",void 0),y([C()],i.prototype,"nzReadOnly",void 0),y([C()],i.prototype,"nzAutoFocus",void 0),y([C()],i.prototype,"nzBorderless",void 0),i})(),Ae=(()=>{let r=class r{constructor(){this.icon=null,this.type=null,this.template=null}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=A({type:r,selectors:[["","nz-input-number-group-slot",""]],hostVars:6,hostBindings:function(t,n){t&2&&_("ant-input-number-group-addon",n.type==="addon")("ant-input-number-prefix",n.type==="prefix")("ant-input-number-suffix",n.type==="suffix")},inputs:{icon:"icon",type:"type",template:"template"},standalone:!0,features:[w],attrs:Ve,ngContentSelectors:Oe,decls:3,vars:2,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType"]],template:function(t,n){t&1&&(q(),f(0,Re,1,1,"span",0)(1,Be,2,1,"ng-container",1),K(2)),t&2&&(u("ngIf",n.icon),d(1),u("nzStringTemplateOutlet",n.template))},dependencies:[X,J,E,ve,Ne],encapsulation:2,changeDetection:0});let i=r;return i})();var nt=(()=>{let r=class r{constructor(e,t,n,a,o,g,I){this.focusMonitor=e,this.elementRef=t,this.renderer=n,this.cdr=a,this.directionality=o,this.nzFormStatusService=g,this.nzFormNoStatusService=I,this.nzAddOnBeforeIcon=null,this.nzAddOnAfterIcon=null,this.nzPrefixIcon=null,this.nzSuffixIcon=null,this.nzStatus="",this.nzSize="default",this.nzCompact=!1,this.isLarge=!1,this.isSmall=!1,this.isAffix=!1,this.isAddOn=!1,this.isFeedback=!1,this.focused=!1,this.disabled=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.affixStatusCls={},this.groupStatusCls={},this.affixInGroupStatusCls={},this.status="",this.hasFeedback=!1,this.destroy$=new $}updateChildrenInputSize(){this.listOfNzInputNumberComponent&&this.listOfNzInputNumberComponent.forEach(e=>e.nzSize=this.nzSize)}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe(G((e,t)=>e.status===t.status&&e.hasFeedback===t.hasFeedback),c(this.destroy$)).subscribe(({status:e,hasFeedback:t})=>{this.setStatusStyles(e,t)}),this.focusMonitor.monitor(this.elementRef,!0).pipe(c(this.destroy$)).subscribe(e=>{this.focused=!!e,this.cdr.markForCheck()}),this.dir=this.directionality.value,this.directionality.change?.pipe(c(this.destroy$)).subscribe(e=>{this.dir=e})}ngAfterContentInit(){this.updateChildrenInputSize();let e=this.listOfNzInputNumberComponent.changes.pipe(oe(this.listOfNzInputNumberComponent));e.pipe(ae(t=>j(e,...t.map(n=>n.disabled$))),re(()=>e),se(t=>t.some(n=>n.nzDisabled)),c(this.destroy$)).subscribe(t=>{this.disabled=t,this.cdr.markForCheck()})}ngOnChanges(e){let{nzSize:t,nzSuffix:n,nzPrefix:a,nzPrefixIcon:o,nzSuffixIcon:g,nzAddOnAfter:I,nzAddOnBefore:V,nzAddOnAfterIcon:R,nzAddOnBeforeIcon:x,nzStatus:Me}=e;t&&(this.updateChildrenInputSize(),this.isLarge=this.nzSize==="large",this.isSmall=this.nzSize==="small"),(n||a||o||g)&&(this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)),(I||V||R||x)&&(this.isAddOn=!!(this.nzAddOnAfter||this.nzAddOnBefore||this.nzAddOnAfterIcon||this.nzAddOnBeforeIcon),this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),Me&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}setStatusStyles(e,t){this.status=e,this.hasFeedback=t,this.isFeedback=!!e&&t;let n=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon);this.isAffix=n||!this.isAddOn&&t,this.affixInGroupStatusCls=this.isAffix||this.isFeedback?this.affixStatusCls=O(`${this.prefixCls}-affix-wrapper`,e,t):{},this.cdr.markForCheck(),this.affixStatusCls=O(`${this.prefixCls}-affix-wrapper`,this.isAddOn?"":e,this.isAddOn?!1:t),this.groupStatusCls=O(`${this.prefixCls}-group-wrapper`,this.isAddOn?e:"",this.isAddOn?t:!1);let a=B(B({},this.affixStatusCls),this.groupStatusCls);Object.keys(a).forEach(o=>{a[o]?this.renderer.addClass(this.elementRef.nativeElement,o):this.renderer.removeClass(this.elementRef.nativeElement,o)})}};r.\u0275fac=function(t){return new(t||r)(p(ie),p(Q),p(L),p(U),p(Y,8),p(ee,8),p(F,8))},r.\u0275cmp=A({type:r,selectors:[["nz-input-number-group"]],contentQueries:function(t,n,a){if(t&1&&ge(a,Fe,5),t&2){let o;N(o=v())&&(n.listOfNzInputNumberComponent=o)}},hostVars:24,hostBindings:function(t,n){t&2&&_("ant-input-number-group",n.nzCompact)("ant-input-number-group-compact",n.nzCompact)("ant-input-number-group-wrapper",n.isAddOn)("ant-input-number-group-wrapper-rtl",n.isAddOn&&n.dir==="rtl")("ant-input-number-group-wrapper-lg",n.isAddOn&&n.isLarge)("ant-input-number-group-wrapper-sm",n.isAddOn&&n.isSmall)("ant-input-number-affix-wrapper",!n.isAddOn&&n.isAffix)("ant-input-number-affix-wrapper-rtl",!n.isAddOn&&n.dir==="rtl")("ant-input-number-affix-wrapper-focused",!n.isAddOn&&n.isAffix&&n.focused)("ant-input-number-affix-wrapper-disabled",!n.isAddOn&&n.isAffix&&n.disabled)("ant-input-number-affix-wrapper-lg",!n.isAddOn&&n.isAffix&&n.isLarge)("ant-input-number-affix-wrapper-sm",!n.isAddOn&&n.isAffix&&n.isSmall)},inputs:{nzAddOnBeforeIcon:"nzAddOnBeforeIcon",nzAddOnAfterIcon:"nzAddOnAfterIcon",nzPrefixIcon:"nzPrefixIcon",nzSuffixIcon:"nzSuffixIcon",nzAddOnBefore:"nzAddOnBefore",nzAddOnAfter:"nzAddOnAfter",nzPrefix:"nzPrefix",nzStatus:"nzStatus",nzSuffix:"nzSuffix",nzSize:"nzSize",nzCompact:"nzCompact"},exportAs:["nzInputNumberGroup"],standalone:!0,features:[W([F]),H,w],ngContentSelectors:Oe,decls:7,vars:2,consts:[["class","ant-input-number-wrapper ant-input-number-group",4,"ngIf","ngIfElse"],["noAddOnTemplate",""],["affixTemplate",""],["contentTemplate",""],[1,"ant-input-number-wrapper","ant-input-number-group"],["nz-input-number-group-slot","","type","addon",3,"icon","template",4,"ngIf"],["class","ant-input-number-affix-wrapper",3,"ant-input-number-affix-wrapper-disabled","ant-input-number-affix-wrapper-sm","ant-input-number-affix-wrapper-lg","ant-input-number-affix-wrapper-focused","ngClass",4,"ngIf","ngIfElse"],["nz-input-number-group-slot","","type","addon",3,"icon","template"],[1,"ant-input-number-affix-wrapper",3,"ngClass"],[3,"ngTemplateOutlet"],[3,"ngIf","ngIfElse"],["nz-input-number-group-slot","","type","prefix",3,"icon","template",4,"ngIf"],["nz-input-number-group-slot","","type","suffix",3,"icon","template",4,"ngIf"],["nz-input-number-group-slot","","type","prefix",3,"icon","template"],["nz-input-number-group-slot","","type","suffix",3,"icon","template"],[3,"status",4,"ngIf"],[3,"status"],["nz-input-number-group-slot","","type","suffix",4,"ngIf"],["nz-input-number-group-slot","","type","suffix"]],template:function(t,n){if(t&1&&(q(),f(0,Qe,4,4,"span",0)(1,Ze,1,2,"ng-template",null,1,D)(3,Xe,3,3,"ng-template",null,2,D)(5,tt,2,1,"ng-template",null,3,D)),t&2){let a=S(2);u("ngIf",n.isAddOn)("ngIfElse",a)}},dependencies:[E,Ae,be,_e,ne,te],encapsulation:2,changeDetection:0});let i=r;return y([C()],i.prototype,"nzCompact",void 0),i})(),Et=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=le({type:r}),r.\u0275inj=pe({imports:[Fe,nt,Ae]});let i=r;return i})();export{Fe as a,Et as b};
