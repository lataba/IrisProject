const s=""+new URL("../assets/Plus.58fae48e.png",import.meta.url).href,a=""+new URL("../assets/EditPen.2b30f624.png",import.meta.url).href,y=""+new URL("../assets/DeleteBin.60b51900.png",import.meta.url).href;let i;const r=new Uint8Array(16);function p(){if(!i&&(i=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(r)}const e=[];for(let n=0;n<256;++n)e.push((n+256).toString(16).slice(1));function m(n,t=0){return e[n[t+0]]+e[n[t+1]]+e[n[t+2]]+e[n[t+3]]+"-"+e[n[t+4]]+e[n[t+5]]+"-"+e[n[t+6]]+e[n[t+7]]+"-"+e[n[t+8]]+e[n[t+9]]+"-"+e[n[t+10]]+e[n[t+11]]+e[n[t+12]]+e[n[t+13]]+e[n[t+14]]+e[n[t+15]]}const l=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),c={randomUUID:l};function U(n,t,o){if(c.randomUUID&&!t&&!n)return c.randomUUID();n=n||{};const u=n.random||(n.rng||p)();if(u[6]=u[6]&15|64,u[8]=u[8]&63|128,t){o=o||0;for(let d=0;d<16;++d)t[o+d]=u[d];return t}return m(u)}export{y as D,a as E,s as P,U as v};