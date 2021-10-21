define(["exports"],(function(e){let n=-1e9;e.increment=function(){return n+=1,"production"!==process.env.NODE_ENV&&n>=0&&console.warn(["Material-UI: You might have a memory leak.","The indexCounter is not supposed to grow that much."].join("\n")),n},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=indexCounter.js.map
