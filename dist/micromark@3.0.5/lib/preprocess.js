define(["exports"],(function(e){const s=/[\0\t\n\r]/g;e.preprocess=function(){let e,t=1,n="",r=!0;return function(u,i,o){const c=[];let h,l,p,a,d;u=n+u.toString(i),p=0,n="",r&&(65279===u.charCodeAt(0)&&p++,r=void 0);for(;p<u.length;){if(s.lastIndex=p,h=s.exec(u),a=h&&void 0!==h.index?h.index:u.length,d=u.charCodeAt(a),!h){n=u.slice(p);break}if(10===d&&p===a&&e)c.push(-3),e=void 0;else switch(e&&(c.push(-5),e=void 0),p<a&&(c.push(u.slice(p,a)),t+=a-p),d){case 0:c.push(65533),t++;break;case 9:for(l=4*Math.ceil(t/4),c.push(-2);t++<l;)c.push(-1);break;case 10:c.push(-4),t=1;break;default:e=!0,t=1}p=a+1}o&&(e&&c.push(-5),n&&c.push(n),c.push(null));return c}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=preprocess.js.map
