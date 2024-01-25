import{T as v,b as O,i as m,ka as o,na as w,oa as A}from"./chunk-AJGDOIBK.js";import{Da as X,Ka as f,Ma as b,Pa as s,Z as u,ea as y,la as h,ma as g,o as l,oa as Y,ub as C}from"./chunk-N5HMSUQW.js";var I="nz-animate-disabled",N=(()=>{let t=class t{constructor(e,i,a){this.element=e,this.renderer=i,this.animationType=a,this.nzNoAnimation=!1}ngOnChanges(){this.updateClass()}ngAfterViewInit(){this.updateClass()}updateClass(){let e=O(this.element);e&&(this.nzNoAnimation||this.animationType==="NoopAnimations"?this.renderer.addClass(e,I):this.renderer.removeClass(e,I))}};t.\u0275fac=function(i){return new(i||t)(s(f),s(b),s(X,8))},t.\u0275dir=g({type:t,selectors:[["","nzNoAnimation",""]],inputs:{nzNoAnimation:"nzNoAnimation"},exportAs:["nzNoAnimation"],standalone:!0,features:[Y]});let n=t;return l([m()],n.prototype,"nzNoAnimation",void 0),n})();var r={top:new o({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topCenter:new o({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topLeft:new o({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),topRight:new o({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"}),right:new o({originX:"end",originY:"center"},{overlayX:"start",overlayY:"center"}),rightTop:new o({originX:"end",originY:"top"},{overlayX:"start",overlayY:"top"}),rightBottom:new o({originX:"end",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),bottom:new o({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomCenter:new o({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomLeft:new o({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),bottomRight:new o({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"}),left:new o({originX:"start",originY:"center"},{overlayX:"end",overlayY:"center"}),leftTop:new o({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"}),leftBottom:new o({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"})},q=[r.top,r.right,r.bottom,r.left],G=[r.bottomLeft,r.bottomRight,r.topLeft,r.topRight,r.topCenter,r.bottomCenter],H=[new o({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),new o({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"})],J=[r.bottomLeft,new o({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"top"})];function T(n){for(let t in r)if(n.connectionPair.originX===r[t].originX&&n.connectionPair.originY===r[t].originY&&n.connectionPair.overlayX===r[t].overlayX&&n.connectionPair.overlayY===r[t].overlayY)return t}var p={bottomLeft:new o({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"},void 0,2),topLeft:new o({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"},void 0,-2),bottomRight:new o({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"},void 0,2),topRight:new o({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"},void 0,-2)},Q=[p.bottomLeft,p.topLeft,p.bottomRight,p.topRight],W=(()=>{let t=class t{constructor(e,i){this.cdkConnectedOverlay=e,this.nzDestroyService=i,this.nzArrowPointAtCenter=!1,this.cdkConnectedOverlay.backdropClass="nz-overlay-transparent-backdrop",this.cdkConnectedOverlay.positionChange.pipe(u(this.nzDestroyService)).subscribe(a=>{this.nzArrowPointAtCenter&&this.updateArrowPosition(a)})}updateArrowPosition(e){let i=this.getOriginRect(),a=T(e),c=0,d=0;a==="topLeft"||a==="bottomLeft"?c=i.width/2-14:a==="topRight"||a==="bottomRight"?c=-(i.width/2-14):a==="leftTop"||a==="rightTop"?d=i.height/2-10:(a==="leftBottom"||a==="rightBottom")&&(d=-(i.height/2-10)),(this.cdkConnectedOverlay.offsetX!==c||this.cdkConnectedOverlay.offsetY!==d)&&(this.cdkConnectedOverlay.offsetY=d,this.cdkConnectedOverlay.offsetX=c,this.cdkConnectedOverlay.overlayRef.updatePosition())}getFlexibleConnectedPositionStrategyOrigin(){return this.cdkConnectedOverlay.origin instanceof w?this.cdkConnectedOverlay.origin.elementRef:this.cdkConnectedOverlay.origin}getOriginRect(){let e=this.getFlexibleConnectedPositionStrategyOrigin();if(e instanceof f)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let i=e.width||0,a=e.height||0;return{top:e.y,bottom:e.y+a,left:e.x,right:e.x+i,height:a,width:i}}};t.\u0275fac=function(i){return new(i||t)(s(A),s(v))},t.\u0275dir=g({type:t,selectors:[["","cdkConnectedOverlay","","nzConnectedOverlay",""]],inputs:{nzArrowPointAtCenter:"nzArrowPointAtCenter"},exportAs:["nzConnectedOverlay"],features:[C([v])]});let n=t;return l([m()],n.prototype,"nzArrowPointAtCenter",void 0),n})(),Z=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=h({type:t}),t.\u0275inj=y({});let n=t;return n})();export{N as a,r as b,q as c,T as d,W as e,Z as f};
