import{useEffect as _,useReducer as R,useRef as w}from"react";var y=s=>s+1;function x({init:s,reducer:u}){let r=new Map,o=new Map,c={_state:s,get state(){return this._state},set state(e){this._state=e;for(let[t,n]of r.entries()){if(!n)continue;let S=o.get(t),f=t(this._state);f!=S&&(o.set(t,f),n())}}};function d(){return c.state}async function a(e){let t=await u(e,d,a);c.state=t}function l(e){r.delete(e),o.delete(e)}function p(e){let t=w(e),[,n]=R(y,0),S=t.current(c.state);return r.set(t.current,n),_(()=>()=>l(t.current),[]),S}return[a,p,d]}var m="__REDUX_DEVTOOLS_EXTENSION__",i=(()=>{try{return window[m]||window.top[m]}catch{return}})(),O=0;function v({init:s,reducer:u,name:r,replacer:o,reviver:c}){return i?.connect({name:r||`ProxyState ${O++}`,serialize:{replacer:o,reviver:c},features:{persist:!1,export:!0,import:"custom",jump:!1,skip:!1,reorder:!1,dispatch:!0,test:!0}}),i?.send("__INIT__",s),{reducer:async(a,l,p)=>{let e=new Date().toISOString(),t=u(a,l,p),n=await t;return t instanceof Promise?i?.send({...a,__startTime:e,__endTime:new Date().toISOString()},n):i?.send(a,t),t},init:s}}export{v as addDevtools,x as createState};