import{wa as d}from"./chunk-YYNK4LQV.js";import{B as f,Na as g,R as u,ba as o,ea as c,k as h,m as a}from"./chunk-IOOJ2VXR.js";var l=(()=>{let e=class e{constructor(t){this.notification=t}httpError(t,i=!0){let n="",s="";return t&&t.error&&t.error.message?(n=`Error: ${t.error.message}`,s=t.error.message):t.message?(n=`Error: ${t.message}`,s=t.message):n=s="Something bad happened; please try again later.",i&&(t.status===0?this.notification.error("An error occurred",n):this.notification.error(`Backend returned code ${t.status}, body was: `,n)),s||"L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh"}error(t,i){this.notification.create("error",t,i)}userPasswordError(){this.notification.create("error","M\u1EADt kh\u1EA9u kh\xF4ng ch\xEDnh x\xE1c","Vui l\xF2ng nh\u1EADp m\u1EADt kh\u1EA9u t\xE0i kho\u1EA3n \u0111ang \u0111\u0103ng nh\u1EADp")}unknownError(){this.notification.create("error","L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh","Vui l\xF2ng th\u1EED l\u1EA1i sau")}success(t,i,n=5e3){this.notification.create("success",t,i,{nzDuration:n})}info(t,i,n=5e3){this.notification.create("info",t,i,{nzDuration:n})}warning(t,i,n=5e3){this.notification.create("warning",t,i,{nzDuration:n})}};e.\u0275fac=function(i){return new(i||e)(c(d))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var k=(()=>{let e=class e{constructor(t){this.zone=t,this.width$=new a(1),this.height$=new a(1),this.screen$=new h,this.zone.runOutsideAngular(()=>{f(window,"resize").pipe(u(500)).subscribe(i=>{this.getScreenSize()})}),this.getScreenSize()}getScreenSize(){this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight,this.width$.next(this.screenWidth),this.height$.next(this.screenHeight),this.screen$.next({width:this.screenWidth,height:this.screenHeight})}};e.\u0275fac=function(i){return new(i||e)(c(g))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{k as a,l as b};
