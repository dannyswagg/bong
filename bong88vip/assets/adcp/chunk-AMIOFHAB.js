import{a as mt,b as ct}from"./chunk-R4TDGSAX.js";import{a as rt,b as ot}from"./chunk-WQJWU2OV.js";import{a as st,b as lt,c as pt}from"./chunk-D3B2BIM5.js";import{a as Y,b as Z,c as tt,e as et,g as it}from"./chunk-PAX2HDJK.js";import"./chunk-IYMRGB2C.js";import{c as nt,d as at}from"./chunk-VOYKCQUF.js";import"./chunk-3KEVF4HQ.js";import{s as q,t as J,v as K,w as Q}from"./chunk-JUKEY4C5.js";import{Aa as d,E as H,F as W}from"./chunk-I542ZMBG.js";import{g as V,h as X,n as k,q as R,x as G}from"./chunk-5QXQBUCH.js";import{Bb as _,Cb as r,Db as s,Eb as u,Fb as N,Gb as F,I as L,Ib as C,N as M,Qb as f,Sb as c,Vb as D,Yb as h,ba as U,bb as O,dc as E,ea as b,fa as S,hc as B,ic as j,ja as I,lb as l,mb as T,o as x,oa as $,p as g,ra as y,rb as w,t as A,ub as m,wa as v,xa as z,z as P}from"./chunk-U56GQCYX.js";var dt=(()=>{let t=class t{constructor(e){this.http=e,this.userAvatarPath=d.homeUrl+"uploads/avatar/"}getAllAvatar(e=10,n=0){return this.http.get(d.apiUrl+`user-avatar?perPage=${e}&page=${n}`)}createAvatar(e){let n=new FormData;return n.append("file",e),this.http.post(d.apiUrl+"user-avatar",n)}deleteAvatar(e){return this.http.delete(d.apiUrl+`user-avatar/${e}`)}};t.\u0275fac=function(n){return new(n||t)($(G))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();function vt(a,t){if(a&1){let i=C();r(0,"div",10),u(1,"img",11)(2,"div",12),r(3,"button",13),f("nzOnConfirm",function(){let p=v(i).$implicit,ft=c(2);return z(ft.delete(p))}),u(4,"span",14),s()()}if(a&2){let i=t.$implicit,e=c(2);l(1),D("src",e.avatarPath+i.avatar,O)}}function zt(a,t){if(a&1){let i=C();N(0),r(1,"nz-pagination",7),f("nzPageIndexChange",function(n){v(i);let p=c();return z(p.changePage(n))}),s(),h(2," ` "),r(3,"div",8),_(4,vt,5,1,"div",9),s(),F()}if(a&2){let i=t.$implicit,e=c();l(1),m("nzPageIndex",e.pageIndex+1)("nzPageSize",e.pageSize)("nzTotal",e.total),l(3),m("ngForOf",i.data)}}var o,ut=(o=class extends st(lt){constructor(t){super(),this.userAvatarService=t,this.pageSize=16,this.pageIndex=0,this.total=0,this.userAvatarLoad$=new g(1),this.userAvatar$=this.userAvatarLoad$.pipe(M(100),U(()=>this.userAvatarService.getAllAvatar(this.pageSize,this.pageIndex))).pipe(b(i=>{this.total=i.count})),this.avatarPath=this.userAvatarService.userAvatarPath,this._fileList=[],this.fileChange$=new x(!1),this.isUpload$=new g(1),this.beforeUpload=i=>(this.fileList=this.fileList.concat(i),!1)}ngOnInit(){this.userAvatarLoad$.next(!1),this.isUpload$.next(!1),this.uploadSubscription$=this.fileChange$.pipe(S(this.isUpload$)).pipe(P(([t,i])=>i)).pipe(L(t=>t===!1&&this._fileList.length>0)).subscribe(()=>{this.isUpload$.next(!0),this.doUpload()})}doUpload(){let t=this.fileList.length;this.fileList.forEach(i=>{this.userAvatarService.createAvatar(i).subscribe(e=>{this.fileList=this.fileList.filter(n=>n.uid!==i.uid),t--,t===0&&(this.isUpload$.next(!1),this.fileChange$.next(!0)),this.userAvatarLoad$.next(!0)})})}ngOnDestroy(){}set fileList(t){this._fileList=t,this.fileChange$.next(!0)}get fileList(){return this._fileList}changePage(t){this.pageIndex=t-1,this.userAvatarLoad$.next(!0)}delete(t){this.userAvatarService.deleteAvatar(t.id).subscribe(()=>this.userAvatarLoad$.next(!0))}},o.\u0275fac=function(i){return new(i||o)(T(dt))},o.\u0275cmp=y({type:o,selectors:[["app-user-avatar"]],standalone:!0,features:[w,E],decls:10,vars:6,consts:[[1,"upload-wrapper"],["nzType","drag",3,"nzMultiple","nzBeforeUpload","nzFileList","nzFileListChange"],[1,"ant-upload-drag-icon"],["nz-icon","","nzType","inbox"],[1,"ant-upload-text"],[1,"ant-upload-hint"],[4,"ngIf"],[3,"nzPageIndex","nzPageSize","nzTotal","nzPageIndexChange"],["nz-row","",1,"avatar-container"],["nzMd","8","nzLg","4","nzXXl","3","nz-col","",4,"ngFor","ngForOf"],["nzMd","8","nzLg","4","nzXXl","3","nz-col",""],["alt","",3,"src"],[1,"clearfix"],["nz-button","","nzDanger","","nzType","primary","nzShape","circle","nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this task?","nzPopconfirmPlacement","bottom","nz-tooltip","","nzTooltipTitle","Xo\xE1 avatar",3,"nzOnConfirm"],["nz-icon","","nzType","delete"]],template:function(i,e){i&1&&(r(0,"div",0)(1,"nz-upload",1),f("nzFileListChange",function(p){return e.fileList=p}),r(2,"p",2),u(3,"span",3),s(),r(4,"p",4),h(5,"Click or drag file to this area to upload"),s(),r(6,"p",5),h(7," Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files "),s()()(),_(8,zt,5,4,"ng-container",6),B(9,"async")),i&2&&(l(1),m("nzMultiple",!0)("nzBeforeUpload",e.beforeUpload)("nzFileList",e.fileList),l(7),m("ngIf",j(9,4,e.userAvatar$)))},dependencies:[R,V,X,k,tt,Z,Y,ot,rt,it,et,Q,K,q,J,W,H,at,nt,ct,mt],styles:["[_nghost-%COMP%]     .upload-list-inline .ant-upload-list-item{float:left;width:200px;margin-right:8px}[_nghost-%COMP%]     .upload-list-inline [class*=-upload-list-rtl] .ant-upload-list-item{float:right}[_nghost-%COMP%]     .upload-list-inline .ant-upload-animate-enter{animation-name:uploadAnimateInlineIn}[_nghost-%COMP%]     .upload-list-inline .ant-upload-animate-leave{animation-name:uploadAnimateInlineOut}.avatar-container[_ngcontent-%COMP%]{text-align:center}.avatar-container[_ngcontent-%COMP%]   .ant-col[_ngcontent-%COMP%]{margin-bottom:2rem}.avatar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:90%;margin:auto}.avatar-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:auto}"]}),o);ut=A([pt()],ut);export{ut as UserAvatarComponent};
