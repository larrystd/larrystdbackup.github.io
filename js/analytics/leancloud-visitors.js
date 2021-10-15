function initLeancloudVisitors(){function r(e){return e=encodeURI(e),document.getElementById(e).querySelector(".leancloud-visitors-count")}const{app_id:s,app_key:c,server_url:e}=CONFIG.leancloudVisitors;function t(o){var e=(e,t,n)=>fetch(`${o}/1.1${t}`,{method:e,headers:{"X-LC-Id":s,"X-LC-Key":c,"Content-Type":"application/json"},body:JSON.stringify(n)});CONFIG.page.isPost?function(t){var e=document.querySelector(".leancloud_visitors");const n=decodeURI(e.id),o=e.dataset.flagTitle;t("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({url:n}))).then(e=>e.json()).then(({results:e})=>{0<e.length?(e=e[0],r(n).innerText=e.time+1,t("put","/classes/Counter/"+e.objectId,{time:{__op:"Increment",amount:1}}).catch(e=>{console.error("Failed to save visitor count",e)})):t("post","/classes/Counter",{title:o,url:n,time:1}).then(e=>e.json()).then(()=>{r(n).innerText=1}).catch(e=>{console.error("Failed to create",e)})}).catch(e=>{console.error("LeanCloud Counter Error",e)})}(e):1<=document.querySelectorAll(".post-title-link").length&&function(e){const o=[...document.querySelectorAll(".leancloud_visitors")].map(e=>decodeURI(e.id));e("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({url:{$in:o}}))).then(e=>e.json()).then(({results:e})=>{for(let t of o){var n=e.find(e=>e.url===t);r(t).innerText=n?n.time:0}}).catch(e=>{console.error("LeanCloud Counter Error",e)})}(e)}var n="-MdYXbMMI"===s.slice(-9)?`https://${s.slice(0,8).toLowerCase()}.api.lncldglobal.com`:e;n?t(n):fetch("https://app-router.leancloud.cn/2/route?appId="+s).then(e=>e.json()).then(({api_server:e})=>{t("https://"+e)})}document.addEventListener("DOMContentLoaded",initLeancloudVisitors),document.addEventListener("pjax:success",initLeancloudVisitors);