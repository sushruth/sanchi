var A=Object.create;var f=Object.defineProperty,g=Object.defineProperties,C=Object.getOwnPropertyDescriptor,I=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,T=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var O=(t,e,s)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,h=(t,e)=>{for(var s in e||(e={}))y.call(e,s)&&O(t,s,e[s]);if(R)for(var s of R(e))b.call(e,s)&&O(t,s,e[s]);return t},x=(t,e)=>g(t,I(e)),D=t=>f(t,"__esModule",{value:!0});var F=(t,e)=>{D(t);for(var s in e)f(t,s,{get:e[s],enumerable:!0})},M=(t,e,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of E(e))!y.call(t,r)&&r!=="default"&&f(t,r,{get:()=>e[r],enumerable:!(s=C(e,r))||s.enumerable});return t},N=t=>M(D(f(t!=null?A(T(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var m=(t,e,s)=>new Promise((r,c)=>{var p=o=>{try{u(s.next(o))}catch(a){c(a)}},i=o=>{try{u(s.throw(o))}catch(a){c(a)}},u=o=>o.done?r(o.value):Promise.resolve(o.value).then(p,i);u((s=s.apply(t,e)).next())});F(exports,{addDevtools:()=>W,createState:()=>k});var d=N(require("react")),V=t=>t+1;function k({init:t,reducer:e}){let s=new Map,r=new Map,c={_state:t,get state(){return this._state},set state(a){this._state=a;for(let[n,l]of s.entries()){if(!l)continue;let _=r.get(n),w=n(this._state);w!=_&&(r.set(n,w),l())}}};function p(){return c.state}function i(a){return m(this,null,function*(){let n=yield e(a,p,i);c.state=n})}function u(a){s.delete(a),r.delete(a)}function o(a){let n=(0,d.useRef)(a),[,l]=(0,d.useReducer)(V,0),_=n.current(c.state);return s.set(n.current,l),(0,d.useEffect)(()=>()=>u(n.current),[]),_}return[i,o,p]}var v="__REDUX_DEVTOOLS_EXTENSION__",S=(()=>{try{return window[v]||window.top[v]}catch(t){return}})(),P=0;function W({init:t,reducer:e,name:s,replacer:r,reviver:c}){return S?(S.connect({name:s||`ProxyState ${P++}`,serialize:{replacer:r,reviver:c},features:{persist:!1,export:!0,import:"custom",jump:!1,skip:!1,reorder:!1,dispatch:!0,test:!0}}),S.send("__INIT__",t),{reducer:(i,u,o)=>m(this,null,function*(){let a=new Date().toISOString(),n=e(i,u,o),l=yield n;return n instanceof Promise?S.send(x(h({},i),{__startTime:a,__endTime:new Date().toISOString()}),l):S.send(i,n),n}),init:t}):{reducer:e,init:t}}
