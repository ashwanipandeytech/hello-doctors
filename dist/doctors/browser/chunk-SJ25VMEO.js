import{a as d,b as l}from"./chunk-3LVZCU3R.js";import{W as p,aa as a}from"./chunk-NSSSZMJV.js";var i={production:!0,DEVELOP:{APPLICATION:"DOCTORS",NGVERSION:"v16",Auth_Key:"eyJhdXRoIjoiOWVkMjMwNzY1ZWU0MmExNGYxNzk0YjY5M2M1MmQ3NzUiLCJESVNUUklCVVRFRF9UT0tFTiI6IjU5ZWMzZDU4NDIxYjdmYzJiOWJkZjBkODU4MmQ2MWI0In0=",FRONT_END_API_URL:"https://hellodoctorsbackend.webhandler.in/api/",API_URL:"https://hellodoctorsbackend.webhandler.in/admin/",DOMAIN:"https://hellodoctorsbackend.webhandler.in/",FIT_IN_200:"fit-in/200x200/",DESIGNBLOCKCSS_URL:"designedTemplate/designblock.css",imageFolders:{PRODUCT_CATEGORY:"uploads/category/",APP_IMAGES:"app_images/",PRODUCT:"uploads/product/",PRODUCT_VARIATION:"uploads/product/variations/",PRODUCT_GALLERY:"uploads/product/gallery/",SYSTEM_IMAGES:"uploads/systemimages/",LOGOS:"logos/"},ADMIN_THEME:"dark_Theme"}};var O=(()=>{let o=class o{constructor(e){this.http=e,this.httpOptions={headers:new d({"Content-Type":"application/json"})}}isAuthenticated(){return localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).ID!=""?{validUser:!0,redirectTologin:!1}:localStorage.getItem("user-unauthorised")=="YES"?{validUser:!1,redirectTologin:!1}:{validUser:!0,redirectTologin:!0}}callApi(e,r,t=!1){let c={application:i[window.environmentType].APPLICATION,version:i[window.environmentType].VERSION,data:e},s;return t?s=i[window.environmentType].FRONT_END_API_URL:s=i[window.environmentType].API_URL,this.http.post(s+r,c,this.httpOptions)}uploadVideo(e){let r;r=i[window.environmentType].API_URL;let t=new FormData;return t.append("videosrc",e.file),t.append("userId",e.userId),t.append("oemCode",e.oemCode),t.append("groupCode",e.groupCode),t.append("productCode",e.productCode),this.http.post(r+"upload-video",t)}};o.\u0275fac=function(r){return new(r||o)(a(l))},o.\u0275prov=p({token:o,factory:o.\u0275fac,providedIn:"root"});let n=o;return n})();export{O as a};
