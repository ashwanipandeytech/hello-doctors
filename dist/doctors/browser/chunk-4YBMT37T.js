import{g as S,h as Z,i as y,j as E,k as G,l as $,m as I,n as W,q as N,r as J}from"./chunk-BTM3F7GR.js";import{$ as m,H as p,I as u,O as c,S as U,T as t,U as r,V as g,Y as P,aa as k,ba as a,d as v,fa as f,h as w,k as F,ka as V,l as M,la as q,ma as z,n as j,na as Y,p as b,q as C,t as O,u as D,va as _,xa as L}from"./chunk-6XCLLFMJ.js";var h={production:!0,DEVELOP:{APPLICATION:"CONTROL_PANEL",NGVERSION:"v16",Auth_Key:"eyJhdXRoIjoiOWVkMjMwNzY1ZWU0MmExNGYxNzk0YjY5M2M1MmQ3NzUiLCJESVNUUklCVVRFRF9UT0tFTiI6IjU5ZWMzZDU4NDIxYjdmYzJiOWJkZjBkODU4MmQ2MWI0In0=",FRONT_END_API_URL:"https://adminmagicmart.webhandler.in/",API_URL:"https://adminmagicmart.webhandler.in/admin/",DOMAIN:"https://adminmagicmart.webhandler.in/",FIT_IN_200:"fit-in/200x200/",DESIGNBLOCKCSS_URL:"designedTemplate/designblock.css",imageFolders:{PRODUCT_CATEGORY:"uploads/category/",APP_IMAGES:"app_images/",PRODUCT:"uploads/product/",PRODUCT_VARIATION:"uploads/product/variations/",PRODUCT_GALLERY:"uploads/product/gallery/",SYSTEM_IMAGES:"uploads/systemimages/",LOGOS:"logos/"},ADMIN_THEME:"dark_Theme"}};var T=(()=>{let e=class e{constructor(o){this.http=o,this.httpOptions={headers:new z({"Content-Type":"application/json"})}}isAuthenticated(){return localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).ID!=""?{validUser:!0,redirectTologin:!1}:localStorage.getItem("user-unauthorised")=="YES"?{validUser:!1,redirectTologin:!1}:{validUser:!0,redirectTologin:!0}}callApi(o,n,i=!1){let d={application:h[window.environmentType].APPLICATION,version:h[window.environmentType].VERSION,data:o},l;return i?l=h[window.environmentType].FRONT_END_API_URL:l=h[window.environmentType].API_URL,this.http.post(l+n,d,this.httpOptions)}uploadVideo(o){let n;n=h[window.environmentType].API_URL;let i=new FormData;return i.append("videosrc",o.file),i.append("userId",o.userId),i.append("oemCode",o.oemCode),i.append("groupCode",o.groupCode),i.append("productCode",o.productCode),this.http.post(n+"upload-video",i)}};e.\u0275fac=function(n){return new(n||e)(j(Y))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var B=()=>({standalone:!0}),K=(()=>{let e=class e{constructor(o,n,i){this.router=o,this.dataService=n,this.toastr=i,this.name="",this.email="",this.mobileNo="",this.password="",this.destroyed$=new v(1)}ngOnInit(){}submitForm(){let o={name:this.name,mobileNo:this.mobileNo,email:this.email,password:this.password},n=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;if(o.email=="")return this.toastr.error("Please enter your Email."),!1;if(n.test(o.email)){if(o.password=="")return this.toastr.error("Password should not be blank."),!1}else return this.toastr.error("Please enter a valid  email address.","Error"),!1;this.dataService.callApi(o,"login").pipe(w(this.destroyed$)).subscribe(i=>{this.isLoading=!1,i.success||this.toastr.error("Error in registration")},i=>{console.error("API Error:",i),this.toastr.error("An error occurred while processing your request."),this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(u(_),u(T),u(S))},e.\u0275cmp=b({type:e,selectors:[["app-signin"]],decls:47,vars:6,consts:[[1,"content","top-space"],[1,"container-fluid"],[1,"row"],[1,"col-md-8","offset-md-2"],[1,"account-content"],[1,"row","align-items-center","justify-content-center"],[1,"col-md-7","col-lg-6","login-left"],["src","assets/img/login-banner.png","alt","Doccure Login",1,"img-fluid"],[1,"col-md-12","col-lg-6","login-right"],[1,"login-header"],[1,"mb-3","form-focus"],["type","text","id","emailAddr","required","","autocomplete","new-emailAddr",1,"form-control","floating",3,"ngModel","ngModelOptions","ngModelChange"],["emailAddr","ngModel"],[1,"focus-label"],["type","password","type","password","name","Password","id","password","autocomplete","new-password","required","",1,"form-control","floating",3,"ngModel","ngModelOptions","ngModelChange"],["passWord","ngModel"],[1,"text-end"],["href","forgot-password.html",1,"forgot-link"],[1,"btn","btn-primary","w-100","btn-lg","login-btn",3,"click"],[1,"login-or"],[1,"or-line"],[1,"span-or"],[1,"row","social-login"],[1,"col-6"],["href","#",1,"btn","btn-facebook","w-100"],[1,"fab","fa-facebook-f","me-1"],["href","#",1,"btn","btn-google","w-100"],[1,"fab","fa-google","me-1"],[1,"text-center","dont-have"],["href","account/register"]],template:function(n,i){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),g(7,"img",7),r(),t(8,"div",8)(9,"div",9)(10,"h3"),a(11,"Login "),t(12,"span"),a(13,"Doccure"),r()()(),t(14,"form")(15,"div",10)(16,"input",11,12),m("ngModelChange",function(l){return i.email=l}),r(),t(18,"label",13),a(19,"Email"),r()(),t(20,"div",10)(21,"input",14,15),m("ngModelChange",function(l){return i.password=l}),r(),t(23,"label",13),a(24,"Create Password"),r()(),t(25,"div",16)(26,"a",17),a(27,"Forgot Password ?"),r()(),t(28,"button",18),m("click",function(){return i.submitForm()}),a(29,"Login"),r(),t(30,"div",19),g(31,"span",20),t(32,"span",21),a(33,"or"),r()(),t(34,"div",22)(35,"div",23)(36,"a",24),g(37,"i",25),a(38," Login"),r()(),t(39,"div",23)(40,"a",26),g(41,"i",27),a(42," Login"),r()()(),t(43,"div",28),a(44,"Don\u2019t have an account? "),t(45,"a",29),a(46,"Register"),r()()()()()()()()()()),n&2&&(p(16),c("ngModel",i.email)("ngModelOptions",f(4,B)),p(5),c("ngModel",i.password)("ngModelOptions",f(5,B)))},dependencies:[W,y,E,G,N,I,$]});let s=e;return s})();function oe(s,e){if(s&1){let x=P();t(0,"h3"),a(1,"Patient Register "),t(2,"a",33),m("click",function(){O(x);let n=k();return D(n.isDoctor=!0)}),a(3,"Are you a Doctor?"),r()()}}function ne(s,e){if(s&1){let x=P();t(0,"h3"),a(1,"Doctor Register "),t(2,"a",33),m("click",function(){O(x);let n=k();return D(n.isDoctor=!1)}),a(3,"Are you a Patient?"),r()()}}var A=()=>({standalone:!0}),Q=(()=>{let e=class e{constructor(o,n,i){this.router=o,this.dataService=n,this.toastr=i,this.name="",this.mobileNo="",this.email="",this.password="",this.isDoctor=!1,this.destroyed$=new v(1)}ngOnInit(){}submitForm(){let o={name:this.name,mobileNo:this.mobileNo,email:this.email,password:this.password,userType:this.isDoctor?"D":"P"};var n=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,i=/^[6-9]\d{9}$/;let d=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;if(o.name=="")return this.toastr.error("Please enter your name."),!1;if(n.test(o.name))return this.toastr.error("Name should not contain special characters.","Error"),!1;if(i.test(o.mobileNo))if(d.test(o.email)){if(o.password=="")return this.toastr.error("Password should not be blank."),!1}else return this.toastr.error("Please enter a valid  email address.","Error"),!1;else return this.toastr.error("Please enter a valid  mobile number.","Error"),!1;this.dataService.callApi(o,"register").pipe(w(this.destroyed$)).subscribe(l=>{this.isLoading=!1,l.success?this.router.navigate(["/login"]):this.toastr.error("Error in registration")},l=>{console.error("API Error:",l),this.toastr.error("An error occurred while processing your request."),this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(u(_),u(T),u(S))},e.\u0275cmp=b({type:e,selectors:[["app-register"]],decls:50,vars:14,consts:[[1,"content","top-space"],[1,"container-fluid"],[1,"row"],[1,"col-md-8","offset-md-2"],[1,"account-content"],[1,"row","align-items-center","justify-content-center"],[1,"col-md-7","col-lg-6","login-left"],["src","assets/img/login-banner.png","alt","Doccure Register",1,"img-fluid"],[1,"col-md-12","col-lg-6","login-right"],[1,"login-header"],[4,"ngIf"],[1,"mb-3","form-focus"],["type","text","id","username","required","","autocomplete","new-username",1,"form-control","floating",3,"ngModel","ngModelOptions","ngModelChange"],["userName","ngModel"],[1,"focus-label"],["type","text","id","phoneNo","required","","autocomplete","new-mobile",1,"form-control","floating",3,"ngModel","ngModelOptions","ngModelChange"],["phoneNo","ngModel"],["type","text","id","emailAddr","required","","autocomplete","new-emailAddr",1,"form-control","floating",3,"ngModel","ngModelOptions","ngModelChange"],["emailAddr","ngModel"],["type","password","type","password","name","Password","id","password","autocomplete","new-password","required","",1,"form-control","floating",3,"ngModel","ngModelOptions","ngModelChange"],["passWord","ngModel"],[1,"text-end"],["href","account/login",1,"forgot-link"],[1,"btn","btn-primary","w-100","btn-lg","login-btn",3,"click"],[1,"login-or"],[1,"or-line"],[1,"span-or"],[1,"row","social-login"],[1,"col-6"],["href","#",1,"btn","btn-facebook","w-100"],[1,"fab","fa-facebook-f","me-1"],["href","#",1,"btn","btn-google","w-100"],[1,"fab","fa-google","me-1"],["href","javascript:void(0)",3,"click"]],template:function(n,i){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),g(7,"img",7),r(),t(8,"div",8)(9,"div",9),U(10,oe,4,0,"h3",10)(11,ne,4,0,"h3",10),r(),t(12,"div",11)(13,"input",12,13),m("ngModelChange",function(l){return i.name=l}),r(),t(15,"label",14),a(16,"Name"),r()(),t(17,"div",11)(18,"input",15,16),m("ngModelChange",function(l){return i.mobileNo=l}),r(),t(20,"label",14),a(21,"Mobile Number"),r()(),t(22,"div",11)(23,"input",17,18),m("ngModelChange",function(l){return i.email=l}),r(),t(25,"label",14),a(26,"Email"),r()(),t(27,"div",11)(28,"input",19,20),m("ngModelChange",function(l){return i.password=l}),r(),t(30,"label",14),a(31,"Create Password"),r()(),t(32,"div",21)(33,"a",22),a(34,"Already have an account?"),r()(),t(35,"button",23),m("click",function(){return i.submitForm()}),a(36," Signup"),r(),t(37,"div",24),g(38,"span",25),t(39,"span",26),a(40,"or"),r()(),t(41,"div",27)(42,"div",28)(43,"a",29),g(44,"i",30),a(45," Login"),r()(),t(46,"div",28)(47,"a",31),g(48,"i",32),a(49," Login"),r()()()()()()()()()()),n&2&&(p(10),c("ngIf",!i.isDoctor),p(1),c("ngIf",i.isDoctor),p(2),c("ngModel",i.name)("ngModelOptions",f(10,A)),p(5),c("ngModel",i.mobileNo)("ngModelOptions",f(11,A)),p(5),c("ngModel",i.email)("ngModelOptions",f(12,A)),p(5),c("ngModel",i.password)("ngModelOptions",f(13,A)))},dependencies:[V,y,E,N,I]});let s=e;return s})();var re=[{path:"login",component:K},{path:"register",component:Q}],X=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=C({type:e}),e.\u0275inj=M({imports:[L.forChild(re),L]});let s=e;return s})();var Oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=C({type:e}),e.\u0275inj=M({imports:[q,X,J,Z.forRoot({timeOut:1e4,positionClass:"toast-bottom-right",preventDuplicates:!0})]});let s=e;return s})();export{Oe as AccountModule};
