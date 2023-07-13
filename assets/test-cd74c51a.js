(function(){"use strict";console.log("worker started");let e=0;setInterval(()=>{e+=1,postMessage(["update",e])},1e3),onmessage=s=>{s.data[0]==="read"&&postMessage(["update",e])}})();
