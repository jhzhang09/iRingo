class e{constructor(){this.name="Lodash",this.version="1.0.0",console.log(`\n${this.name} v${this.version}\n`)}get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const a=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===a?s:a}set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,a)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[a+1])?[]:{}),e)[t[t.length-1]]=s,e}toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}}var t={Switch:!0},s={Storefront:[["AE","143481"],["AF","143610"],["AG","143540"],["AI","143538"],["AL","143575"],["AM","143524"],["AO","143564"],["AR","143505"],["AT","143445"],["AU","143460"],["AZ","143568"],["BA","143612"],["BB","143541"],["BD","143490"],["BE","143446"],["BF","143578"],["BG","143526"],["BH","143559"],["BJ","143576"],["BM","143542"],["BN","143560"],["BO","143556"],["BR","143503"],["BS","143539"],["BT","143577"],["BW","143525"],["BY","143565"],["BZ","143555"],["CA","143455"],["CD","143613"],["CG","143582"],["CH","143459"],["CI","143527"],["CL","143483"],["CM","143574"],["CN","143465"],["CO","143501"],["CR","143495"],["CV","143580"],["CY","143557"],["CZ","143489"],["DE","143443"],["DK","143458"],["DM","143545"],["DO","143508"],["DZ","143563"],["EC","143509"],["EE","143518"],["EG","143516"],["ES","143454"],["FI","143447"],["FJ","143583"],["FM","143591"],["FR","143442"],["GA","143614"],["GB","143444"],["GD","143546"],["GF","143615"],["GH","143573"],["GM","143584"],["GR","143448"],["GT","143504"],["GW","143585"],["GY","143553"],["HK","143463"],["HN","143510"],["HR","143494"],["HU","143482"],["ID","143476"],["IE","143449"],["IL","143491"],["IN","143467"],["IQ","143617"],["IS","143558"],["IT","143450"],["JM","143511"],["JO","143528"],["JP","143462"],["KE","143529"],["KG","143586"],["KH","143579"],["KN","143548"],["KP","143466"],["KR","143466"],["KW","143493"],["KY","143544"],["KZ","143517"],["TC","143552"],["TD","143581"],["TJ","143603"],["TH","143475"],["TM","143604"],["TN","143536"],["TO","143608"],["TR","143480"],["TT","143551"],["TW","143470"],["TZ","143572"],["LA","143587"],["LB","143497"],["LC","143549"],["LI","143522"],["LK","143486"],["LR","143588"],["LT","143520"],["LU","143451"],["LV","143519"],["LY","143567"],["MA","143620"],["MD","143523"],["ME","143619"],["MG","143531"],["MK","143530"],["ML","143532"],["MM","143570"],["MN","143592"],["MO","143515"],["MR","143590"],["MS","143547"],["MT","143521"],["MU","143533"],["MV","143488"],["MW","143589"],["MX","143468"],["MY","143473"],["MZ","143593"],["NA","143594"],["NE","143534"],["NG","143561"],["NI","143512"],["NL","143452"],["NO","143457"],["NP","143484"],["NR","143606"],["NZ","143461"],["OM","143562"],["PA","143485"],["PE","143507"],["PG","143597"],["PH","143474"],["PK","143477"],["PL","143478"],["PT","143453"],["PW","143595"],["PY","143513"],["QA","143498"],["RO","143487"],["RS","143500"],["RU","143469"],["RW","143621"],["SA","143479"],["SB","143601"],["SC","143599"],["SE","143456"],["SG","143464"],["SI","143499"],["SK","143496"],["SL","143600"],["SN","143535"],["SR","143554"],["ST","143598"],["SV","143506"],["SZ","143602"],["UA","143492"],["UG","143537"],["US","143441"],["UY","143514"],["UZ","143566"],["VC","143550"],["VE","143502"],["VG","143543"],["VN","143471"],["VU","143609"],["XK","143624"],["YE","143571"],["ZA","143472"],["ZM","143622"],["ZW","143605"]]},a={Settings:t,Configs:s},i={Switch:!0,PEP:{GCC:"US"},Services:{PlaceData:"CN",Directions:"AUTO",Traffic:"AUTO",RAP:"XX",Tiles:"AUTO"},Geo_manifest:{Dynamic:{Config:{Country_code:{default:"AUTO",iOS:"CN",iPadOS:"CN",watchOS:"US",macOS:"CN"}}}},Config:{Announcements:{"Environment:":{default:"AUTO",iOS:"CN",iPadOS:"CN",watchOS:"XX",macOS:"CN"}},Defaults:{LagunaBeach:!0,DrivingMultiWaypointRoutesEnabled:!0,GEOAddressCorrection:!0,LookupMaxParametersCount:!0,LocalitiesAndLandmarks:!0,POIBusyness:!0,PedestrianAR:!0,"6694982d2b14e95815e44e970235e230":!0,OpticalHeading:!0,UseCLPedestrianMapMatchedLocations:!0,TransitPayEnabled:!0,SupportsOffline:!0,SupportsCarIntegration:!0,WiFiQualityNetworkDisabled:!1,WiFiQualityTileDisabled:!1}}},o={Settings:i},r={Switch:!0,CountryCode:"US",newsPlusUser:!0},n={Settings:r},l={Switch:!0,CountryCode:"US",canUse:!0},c={Settings:l},p={Switch:!0,CountryCode:"SG",Domains:["web","itunes","app_store","movies","restaurants","maps"],Functions:["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],Safari_Smart_History:!0},h={VisualIntelligence:{enabled_domains:["pets","media","books","art","nature","landmarks"],supported_domains:["ART","BOOK","MEDIA","LANDMARK","ANIMALS","BIRDS","FOOD","SIGN_SYMBOL","AUTO_SYMBOL","DOGS","NATURE","NATURAL_LANDMARK","INSECTS","REPTILES","ALBUM","STOREFRONT","LAUNDRY_CARE_SYMBOL","CATS","OBJECT_2D","SCULPTURE","SKYLINE","MAMMALS"]}},u={Settings:p,Configs:h},d={Switch:"true",CountryCode:"US",MultiAccount:"false",Universal:"true"},g={Settings:d},f={Switch:!0,"Third-Party":!1,HLSUrl:"play-edge.itunes.apple.com",ServerUrl:"play.itunes.apple.com",Tabs:["WatchNow","Originals","MLS","Sports","Kids","Store","Movies","TV","ChannelsAndApps","Library","Search"],CountryCode:{Configs:"AUTO",Settings:"AUTO",View:["SG","TW"],WatchNow:"AUTO",Channels:"AUTO",Originals:"AUTO",Sports:"US",Kids:"US",Store:"AUTO",Movies:"AUTO",TV:"AUTO",Persons:"SG",Search:"AUTO",Others:"AUTO"}},y={Locale:[["AU","en-AU"],["CA","en-CA"],["GB","en-GB"],["KR","ko-KR"],["HK","yue-Hant"],["JP","ja-JP"],["MO","zh-Hant"],["TW","zh-Hant"],["US","en-US"],["SG","zh-Hans"]],Tabs:[{title:"主页",type:"WatchNow",universalLinks:["https://tv.apple.com/watch-now","https://tv.apple.com/home"],destinationType:"Target",target:{id:"tahoma_watchnow",type:"Root",url:"https://tv.apple.com/watch-now"},isSelected:!0},{title:"Apple TV+",type:"Originals",universalLinks:["https://tv.apple.com/channel/tvs.sbd.4000","https://tv.apple.com/atv"],destinationType:"Target",target:{id:"tvs.sbd.4000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.4000"}},{title:"MLS Season Pass",type:"MLS",universalLinks:["https://tv.apple.com/mls"],destinationType:"Target",target:{id:"tvs.sbd.7000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.7000"}},{title:"体育节目",type:"Sports",universalLinks:["https://tv.apple.com/sports"],destinationType:"Target",target:{id:"tahoma_sports",type:"Root",url:"https://tv.apple.com/sports"}},{title:"儿童",type:"Kids",universalLinks:["https://tv.apple.com/kids"],destinationType:"Target",target:{id:"tahoma_kids",type:"Root",url:"https://tv.apple.com/kids"}},{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}},{title:"商店",type:"Store",universalLinks:["https://tv.apple.com/store"],destinationType:"SubTabs",subTabs:[{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}}]},{title:"频道和 App",destinationType:"SubTabs",subTabsPlacementType:"ExpandedList",type:"ChannelsAndApps",subTabs:[]},{title:"资料库",type:"Library",destinationType:"Client"},{title:"搜索",type:"Search",universalLinks:["https://tv.apple.com/search"],destinationType:"Target",target:{id:"tahoma_search",type:"Root",url:"https://tv.apple.com/search"}}],i18n:{WatchNow:[["en","Home"],["zh","主页"],["zh-Hans","主頁"],["zh-Hant","主頁"]],Movies:[["en","Movies"],["zh","电影"],["zh-Hans","电影"],["zh-Hant","電影"]],TV:[["en","TV"],["zh","电视节目"],["zh-Hans","电视节目"],["zh-Hant","電視節目"]],Store:[["en","Store"],["zh","商店"],["zh-Hans","商店"],["zh-Hant","商店"]],Sports:[["en","Sports"],["zh","体育节目"],["zh-Hans","体育节目"],["zh-Hant","體育節目"]],Kids:[["en","Kids"],["zh","儿童"],["zh-Hans","儿童"],["zh-Hant","兒童"]],Library:[["en","Library"],["zh","资料库"],["zh-Hans","资料库"],["zh-Hant","資料庫"]],Search:[["en","Search"],["zh","搜索"],["zh-Hans","搜索"],["zh-Hant","蒐索"]]}},S={Settings:f,Configs:y},m=Database={Default:Object.freeze({__proto__:null,Configs:s,Settings:t,default:a}),Location:Object.freeze({__proto__:null,Settings:i,default:o}),News:Object.freeze({__proto__:null,Settings:r,default:n}),PrivateRelay:Object.freeze({__proto__:null,Settings:l,default:c}),Siri:Object.freeze({__proto__:null,Configs:h,Settings:p,default:u}),TestFlight:Object.freeze({__proto__:null,Settings:d,default:g}),TV:Object.freeze({__proto__:null,Configs:y,Settings:f,default:S})};const v=new class{constructor(t,s){this.name=t,this.version="1.4.0",this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,s),this.log("","🚩 开始!",`ENV v${this.version}`,""),this.lodash=new e(this.name),this.log("",this.name,"")}platform(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.platform()}isQuanX(){return"Quantumult X"===this.platform()}isSurge(){return"Surge"===this.platform()}isLoon(){return"Loon"===this.platform()}isShadowrocket(){return"Shadowrocket"===this.platform()}isStash(){return"Stash"===this.platform()}toObj(e,t=null){try{return JSON.parse(e)}catch{return t}}toStr(e,t=null){try{return JSON.stringify(e)}catch{return t}}getjson(e,t){let s=t;if(this.getdata(e))try{s=JSON.parse(this.getdata(e))}catch{}return s}setjson(e,t){try{return this.setdata(JSON.stringify(e),t)}catch{return!1}}getScript(e){return new Promise((t=>{this.get({url:e},((e,s,a)=>t(a)))}))}runScript(e,t){return new Promise((s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let i=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");i=i?1*i:20,i=t&&t.timeout?t.timeout:i;const[o,r]=a.split("@"),n={url:`http://${r}/v1/scripting/evaluate`,body:{script_text:e,mock_type:"cron",timeout:i},headers:{"X-Key":o,Accept:"*/*"},timeout:i};this.post(n,((e,t,a)=>s(a)))})).catch((e=>this.logErr(e)))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const e=this.path.resolve(this.dataFile),t=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(e),a=!s&&this.fs.existsSync(t);if(!s&&!a)return{};{const a=s?e:t;try{return JSON.parse(this.fs.readFileSync(a))}catch(e){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const e=this.path.resolve(this.dataFile),t=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(e),a=!s&&this.fs.existsSync(t),i=JSON.stringify(this.data);s?this.fs.writeFileSync(e,i):a?this.fs.writeFileSync(t,i):this.fs.writeFileSync(e,i)}}getdata(e){let t=this.getval(e);if(/^@/.test(e)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(e),i=s?this.getval(s):"";if(i)try{const e=JSON.parse(i);t=e?this.lodash.get(e,a,""):t}catch(e){t=""}}return t}setdata(e,t){let s=!1;if(/^@/.test(t)){const[,a,i]=/^@(.*?)\.(.*?)$/.exec(t),o=this.getval(a),r=a?"null"===o?null:o||"{}":"{}";try{const t=JSON.parse(r);this.lodash.set(t,i,e),s=this.setval(JSON.stringify(t),a)}catch(t){const o={};this.lodash.set(o,i,e),s=this.setval(JSON.stringify(o),a)}}else s=this.setval(e,t);return s}getval(e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(e);case"Quantumult X":return $prefs.valueForKey(e);case"Node.js":return this.data=this.loaddata(),this.data[e];default:return this.data&&this.data[e]||null}}setval(e,t){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(e,t);case"Quantumult X":return $prefs.setValueForKey(e,t);case"Node.js":return this.data=this.loaddata(),this.data[t]=e,this.writedata(),!0;default:return this.data&&this.data[t]||null}}initGotEnv(e){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,e&&(e.headers=e.headers?e.headers:{},void 0===e.headers.Cookie&&void 0===e.cookieJar&&(e.cookieJar=this.ckjar))}async fetch(e={}||"",t={}){switch(e.constructor){case Object:e={...e,...t};break;case String:e={url:e,...t}}e.method||(e.method="GET",(e.body??e.bodyBytes)&&(e.method="POST")),delete e.headers?.["Content-Length"],delete e.headers?.["content-length"];const s=e.method.toLocaleLowerCase();switch(this.platform()){case"Loon":case"Surge":case"Stash":case"Shadowrocket":default:return delete e.id,e.policy&&(this.isLoon()&&(e.node=e.policy),this.isStash()&&this.lodash.set(e,"headers.X-Stash-Selected-Proxy",encodeURI(e.policy))),ArrayBuffer.isView(e.body)&&(e["binary-mode"]=!0),await new Promise(((t,a)=>{$httpClient[s](e,((s,i,o)=>{s?a(s):(i.ok=/^2\d\d$/.test(i.status),i.statusCode=i.status,o&&(i.body=o,1==e["binary-mode"]&&(i.bodyBytes=o)),t(i))}))}));case"Quantumult X":switch(delete e.scheme,delete e.sessionIndex,delete e.charset,e.policy&&this.lodash.set(e,"opts.policy",e.policy),(e?.headers?.["Content-Type"]??e?.headers?.["content-type"])?.split(";")?.[0]){default:delete e.bodyBytes;break;case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":delete e.body,ArrayBuffer.isView(e.bodyBytes)&&(e.bodyBytes=e.bodyBytes.buffer.slice(e.bodyBytes.byteOffset,e.bodyBytes.byteLength+e.bodyBytes.byteOffset));case void 0:}return await $task.fetch(e).then((e=>(e.ok=/^2\d\d$/.test(e.statusCode),e.status=e.statusCode,e)),(e=>Promise.reject(e.error)));case"Node.js":let t=require("iconv-lite");this.initGotEnv(e);const{url:a,...i}=e;return await this.got[s](a,i).on("redirect",((e,t)=>{try{if(e.headers["set-cookie"]){const s=e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),t.cookieJar=this.ckjar}}catch(e){this.logErr(e)}})).then((e=>(e.statusCode=e.status,e.body=t.decode(e.rawBody,this.encoding),e.bodyBytes=e.rawBody,e)),(e=>Promise.reject(e.message)))}}time(e,t=null){const s=t?new Date(t):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in a)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[t]:("00"+a[t]).substr((""+a[t]).length)));return e}msg(e=name,t="",s="",a){const i=e=>{switch(typeof e){case void 0:return e;case"string":switch(this.platform()){case"Surge":case"Stash":default:return{url:e};case"Loon":case"Shadowrocket":return e;case"Quantumult X":return{"open-url":e};case"Node.js":return}case"object":switch(this.platform()){case"Surge":case"Stash":case"Shadowrocket":default:return{url:e.url||e.openUrl||e["open-url"]};case"Loon":return{openUrl:e.openUrl||e.url||e["open-url"],mediaUrl:e.mediaUrl||e["media-url"]};case"Quantumult X":return{"open-url":e["open-url"]||e.url||e.openUrl,"media-url":e["media-url"]||e.mediaUrl,"update-pasteboard":e["update-pasteboard"]||e.updatePasteboard};case"Node.js":return}default:return}};if(!this.isMute)switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,t,s,i(a));break;case"Quantumult X":$notify(e,t,s,i(a));case"Node.js":}if(!this.isMuteLog){let a=["","==============📣系统通知📣=============="];a.push(e),t&&a.push(t),s&&a.push(s),console.log(a.join("\n")),this.logs=this.logs.concat(a)}}log(...e){e.length>0&&(this.logs=[...this.logs,...e]),console.log(e.join(this.logSeparator))}logErr(e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️ ${this.name}, 错误!`,e);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e.stack)}}wait(e){return new Promise((t=>setTimeout(t,e)))}done(e={}){const t=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🚩 ${this.name}, 结束! 🕛 ${t} 秒`),this.log(),this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(e);break;case"Node.js":process.exit(1)}}getENV(e,t,s){let a=this.getjson(e,s),i={};if("undefined"!=typeof $argument&&Boolean($argument)){let e=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let t in e)this.lodash.set(i,t,e[t])}const o={Settings:s?.Default?.Settings||{},Configs:s?.Default?.Configs||{},Caches:{}};Array.isArray(t)||(t=[t]);for(let e of t)o.Settings={...o.Settings,...s?.[e]?.Settings,...i,...a?.[e]?.Settings},o.Configs={...o.Configs,...s?.[e]?.Configs},a?.[e]?.Caches&&"string"==typeof a?.[e]?.Caches&&(a[e].Caches=JSON.parse(a?.[e]?.Caches)),o.Caches={...o.Caches,...a?.[e]?.Caches};return this.traverseObject(o.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>this.string2number(e))):this.string2number(t)),t))),o}traverseObject(e,t){for(var s in e){var a=e[s];e[s]="object"==typeof a&&null!==a?this.traverseObject(a,t):t(s,a)}return e}string2number(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}(" iRingo: 📺 TV v3.2.3(3) response"),b=new class{constructor(e=[]){this.name="URI v1.2.6",this.opts=e,this.json={scheme:"",host:"",path:"",query:{}}}parse(e){let t=e.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups??null;if(t?.path?t.paths=t.path.split("/"):t.path="",t?.paths){const e=t.paths[t.paths.length-1];if(e?.includes(".")){const s=e.split(".");t.format=s[s.length-1]}}return t?.query&&(t.query=Object.fromEntries(t.query.split("&").map((e=>e.split("="))))),t}stringify(e=this.json){let t="";return e?.scheme&&e?.host&&(t+=e.scheme+"://"+e.host),e?.path&&(t+=e?.host?"/"+e.path:e.path),e?.query&&(t+="?"+Object.entries(e.query).map((e=>e.join("="))).join("&")),t}},T=b.parse($request.url);v.log(`⚠ ${v.name}`,`URL: ${JSON.stringify(T)}`,"");const w=$request.method,C=T.host,O=T.path,L=T.paths;v.log(`⚠ ${v.name}`,`METHOD: ${w}`,"");const A=($response.headers?.["Content-Type"]??$response.headers?.["content-type"])?.split(";")?.[0];function U(e,t,s){v.log(`☑️ ${v.name}, Set Playable Content`,"");let a=e?.assets,i=e?.itunesMediaApiData;return a&&(a=o(a,t,s)),i?.movieClips&&(i.movieClips=i.movieClips.map((e=>o(e,t,s)))),i?.offers&&(i.offers=i.offers.map((e=>o(e,t,s)))),i?.personalizedOffers&&(i.personalizedOffers=i.personalizedOffers.map((e=>o(e,t,s)))),v.log(`✅ ${v.name}, Set Playable Content`,""),e;function o(e,t,s){if(v.log(`☑️ ${v.name}, Set Url`,""),e?.hlsUrl){let s=b.parse(e.hlsUrl);switch(s.path){case"WebObjects/MZPlay.woa/hls/playlist.m3u8":break;case"WebObjects/MZPlayLocal.woa/hls/subscription/playlist.m3u8":s.host=t||"play-edge.itunes.apple.com"}e.hlsUrl=b.stringify(s)}if(e?.fpsKeyServerUrl){let t=b.parse(e.fpsKeyServerUrl);t.host=s||"play.itunes.apple.com",e.fpsKeyServerUrl=b.stringify(t)}if(e?.fpsNonceServerUrl){let t=b.parse(e.fpsNonceServerUrl);t.host=s||"play.itunes.apple.com",e.fpsNonceServerUrl=b.stringify(t)}return v.log(`✅ ${v.name}, Set Url`,""),e}}v.log(`⚠ ${v.name}`,`FORMAT: ${A}`,""),(async()=>{const{Settings:e,Caches:t,Configs:s}=function(e,t,s,a){console.log("☑️ Set Environment Variables","");let{Settings:i,Caches:o,Configs:r}=e.getENV(t,s,a);if(i?.Tabs&&!Array.isArray(i?.Tabs)&&e.lodash_set(i,"Tabs",i?.Tabs?[i.Tabs.toString()]:[]),i?.Domains&&!Array.isArray(i?.Domains)&&e.lodash_set(i,"Domains",i?.Domains?[i.Domains.toString()]:[]),i?.Functions&&!Array.isArray(i?.Functions)&&e.lodash_set(i,"Functions",i?.Functions?[i.Functions.toString()]:[]),console.log(`✅ Set Environment Variables, Settings: ${typeof i}, Settings内容: ${JSON.stringify(i)}`,""),r.Storefront=new Map(r.Storefront),r.Locale&&(r.Locale=new Map(r.Locale)),r.i18n)for(let e in r.i18n)r.i18n[e]=new Map(r.i18n[e]);return{Settings:i,Caches:o,Configs:r}}(v,"iRingo","TV",m);switch(v.log(`⚠ ${v.name}`,`Settings.Switch: ${e?.Switch}`,""),e.Switch){case!0:default:let t={};switch(A){case void 0:case"application/x-www-form-urlencoded":case"text/plain":case"text/html":default:case"application/x-mpegURL":case"application/x-mpegurl":case"application/vnd.apple.mpegurl":case"audio/mpegurl":case"text/xml":case"text/plist":case"application/xml":case"application/plist":case"application/x-plist":case"text/vtt":case"application/vtt":break;case"text/json":case"application/json":switch(t=JSON.parse($response.body),C){case"uts-api.itunes.apple.com":switch(O){case"uts/v3/configurations":const a=parseInt(T.query?.v,10),i=T.query?.pfm,o=($request.headers?.["X-Apple-I-Locale"]??$request.headers?.["x-apple-i-locale"])?.split("_")?.[0]??"zh";if("wta"!==T.query.caller&&(v.log(`⚠ ${v.name}`,`Locale: ${o}`,`Platform: ${i}`,`Version: ${a}`,""),t?.data?.applicationProps)){let r=[];e.Tabs.forEach((e=>{if(t.data.applicationProps.tabs.some((t=>t?.type===e))){let s=t.data.applicationProps.tabs.find((t=>t?.type===e));0===t.data.applicationProps.tabs.findIndex((t=>t?.type===e))?r.unshift(s):r.push(s)}else if(s.Tabs.some((t=>t?.type===e))){let t=s.Tabs.find((t=>t?.type===e));switch(t?.destinationType){case"SubTabs":t.subTabs=t.subTabs.map((e=>(e.title=s.i18n?.[e.type]?.get(o)??t.title,e)));case"Target":case"Client":t.title=s.i18n?.[t.type]?.get(o)??t.title}switch(t?.type){case"WatchNow":case"Originals":case"Library":default:r.push(t);break;case"Store":a>=54&&(a>=74&&(t.destinationType="Target",t.target={id:"tahoma_store",type:"Root",url:"https://tv.apple.com/store"},t.universalLinks=["https://tv.apple.com/store","https://tv.apple.com/movies","https://tv.apple.com/tv-shows"],delete t?.subTabs),r.push(t));break;case"Movies":case"TV":a<54&&(t.secondaryEnabled=!0),a<54&&r.push(t);break;case"MLS":if(a>=64)switch(i){case"atv":case"ipad":case"appletv":case"desktop":default:r.push(t);case"iphone":return}break;case"Sports":case"Kids":if(a<54&&(t.secondaryEnabled=!0),a<54)r.push(t);else switch(i){case"atv":case"ipad":case"appletv":case"desktop":default:r.push(t);case"iphone":}break;case"Search":a>=74&&(t.target.id="tahoma_searchlanding"),r.push(t);break;case"ChannelsAndApps":if(a>=74)switch(i){case"atv":case"ipad":case"appletv":r.push(t)}}}})),t.data.applicationProps.tabs=r}break;case"uts/v3/user/settings":break;case"uts/v3/canvases/Roots/watchNow":case"uts/v3/canvases/Channels/tvs.sbd.4000":case"uts/v3/canvases/Channels/tvs.sbd.7000":let r=t?.data?.canvas?.shelves;r&&(r=r.map((t=>(t?.items&&(t.items=t.items.map((t=>{let s=t?.playable||t?.videos?.shelfVideoTall,a=t?.playables;return s&&(s=U(s,e?.HLSUrl,e?.ServerUrl)),a&&Object.keys(a).forEach((t=>a[t]=U(a[t],e?.HLSUrl,e?.ServerUrl))),t}))),t))),t.data.canvas.shelves=r);break;case"uts/v3/shelves/uts.col.UpNext":case"uts/v3/shelves/uts.col.ChannelUpNext.tvs.sbd.4000":case"uts/v3/shelves/uts.col.ChannelUpNext.tvs.sbd.7000":case"uts/v3/shelves/edt.col.62d7229e-d9a1-4f00-98e5-458c11ed3938":let n=t?.data?.shelf;n?.items&&(n.items=n.items.map((t=>{let s=t?.playable||t?.videos?.shelfVideoTall,a=t?.playables;return s&&(s=U(s,e?.HLSUrl,e?.ServerUrl)),a&&Object.keys(a).forEach((t=>a[t]=U(a[t],e?.HLSUrl,e?.ServerUrl))),t})));break;default:if("uts"===L[0])if("v3"===L[1])switch(L[2]){case"movies":case"shows":case"sporting-events":let s=t?.data?.canvas?.shelves,a=t?.data?.content?.backgroundVideo,i=t?.data?.playables;s&&(s=s.map((t=>(t?.items&&(t.items=t.items.map((t=>{let s=t?.playable||t?.videos?.shelfVideoTall,a=t?.playables;return s&&(s=U(s,e?.HLSUrl,e?.ServerUrl)),a&&Object.keys(a).forEach((t=>a[t]=U(a[t],e?.HLSUrl,e?.ServerUrl))),t}))),t))),t.data.canvas.shelves=s),a&&(a=U(a,e?.HLSUrl,e?.ServerUrl)),i&&Object.keys(i).forEach((t=>i[t]=U(i[t],e?.HLSUrl,e?.ServerUrl)))}}break;case"umc-tempo-api.apple.com":switch(O){case"v3/register":case"v3/channels/scoreboard":case"v3/channels/scoreboard/":v.log(JSON.stringify(t))}}$response.body=JSON.stringify(t);case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"applecation/octet-stream":}case!1:}})().catch((e=>v.logErr(e))).finally((()=>{if(void 0!==$response)if(v.log(`🎉 ${v.name}, finally`,"$response",`FORMAT: ${A}`,""),$response?.headers?.["Content-Encoding"]&&($response.headers["Content-Encoding"]="identity"),$response?.headers?.["content-encoding"]&&($response.headers["content-encoding"]="identity"),v.isQuanX())switch(A){case void 0:v.done({status:$response.status,headers:$response.headers});break;default:v.done({status:$response.status,headers:$response.headers,body:$response.body});break;case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"applecation/octet-stream":v.done({status:$response.status,headers:$response.headers,bodyBytes:$response.bodyBytes.buffer.slice($response.bodyBytes.byteOffset,$response.bodyBytes.byteLength+$response.bodyBytes.byteOffset)})}else v.done($response)}));
