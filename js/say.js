function say(t,e,o){document.querySelector("#say-content").innerText=t,o&&(document.querySelector("#say-from").innerText="「"+o+"」"),e&&(document.querySelector("#say-author").innerText=e)}function fetchApiToSay(){CONFIG.say.api&&fetch(CONFIG.say.api).then(t=>{if(!t.ok)throw new Error(CONFIG.say.api+", HTTP error, status = "+t.status);t.json().then(t=>{CONFIG.say.hitokoto?say(t.hitokoto,t.from_who,t.from):(t=t[Math.floor(Math.random()*t.length)]).content?say(t.content,t.author,t.from):say(t)})}).catch(t=>{console.error(t.message)})}document.addEventListener("DOMContentLoaded",fetchApiToSay),document.addEventListener("pjax:success",()=>{Yun.utils.isHome()&&fetchApiToSay()});