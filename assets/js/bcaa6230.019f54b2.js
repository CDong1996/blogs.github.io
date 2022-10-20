"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[5596],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(t),f=a,b=s["".concat(p,".").concat(f)]||s[f]||c[f]||l;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6115:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={sidebarDepth:4},p=void 0,d={unversionedId:"node/stream",id:"node/stream",title:"stream",description:"Buffer",source:"@site/docs/node/stream.md",sourceDirName:"node",slug:"/node/stream",permalink:"/blog/docs/node/stream",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/node/stream.md",tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"eventloop",permalink:"/blog/docs/node/eventloop"},next:{title:"build-in-modules",permalink:"/blog/docs/node/build-in-modules"}},u={},c=[{value:"Buffer",id:"buffer",level:2},{value:"<code>Buffer.alloc()</code>",id:"bufferalloc",level:3},{value:"<code>Buffer.from()</code>",id:"bufferfrom",level:3},{value:"<code>buffer.toString()</code>",id:"buffertostring",level:3},{value:"Blob",id:"blob",level:2},{value:"<code>blob.arrayBuffer()</code>",id:"blobarraybuffer",level:3},{value:"<code>blob.text()</code>",id:"blobtext",level:3},{value:"<code>URL.createObjectURL(blob)</code>",id:"urlcreateobjecturlblob",level:3},{value:"<code>blob.slice()</code>",id:"blobslice",level:3},{value:"File",id:"file",level:2},{value:"FileReader",id:"filereader",level:2},{value:"<code>readAsArrayBuffer(blob)</code>",id:"readasarraybufferblob",level:3},{value:"<code>readAsText(blob)</code>",id:"readastextblob",level:3},{value:"<code>readAsDataURL(blob)</code>",id:"readasdataurlblob",level:3},{value:"ArrayBuffer",id:"arraybuffer",level:2},{value:"stream",id:"stream",level:2},{value:"Writable",id:"writable",level:3},{value:"Readable",id:"readable",level:3},{value:"<code>pipeline</code>",id:"pipeline",level:3},{value:"zlib",id:"zlib",level:2}],s={toc:c};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6d41\u4e0e\u4e8c\u8fdb\u5236"},"\u6d41\u4e0e\u4e8c\u8fdb\u5236"),(0,l.kt)("h2",{id:"buffer"},"Buffer"),(0,l.kt)("p",null,"Buffer\u53ea\u5b58\u5728\u4e8eNode\u73af\u5883\u4e2d\uff0c\u7528\u6765\u8868\u793a\u5b57\u8282\u5e8f\u5217\uff0c\u901a\u5e38\u5f53\u6211\u4eec\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"fs"),"\u6a21\u5757\u8bfb\u53d6\u6587\u4ef6\u65f6\u5c31\u53ef\u4ee5\u62ff\u5230\u6587\u4ef6\u6240\u5bf9\u5e94\u7684\u5b57\u8282\u5e8f\u5217\uff08\u6216\u8005\u8bf4\u662f\u5728\u5185\u5b58\u4e2d\u7684\u503c\uff09\u3002\u5f53\u54cd\u5e94\u7684\u5185\u5bb9\u4e3aBuffer\u65f6\uff0c\u54cd\u5e94\u5934",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type"),"\u7684\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"application/octet-stream"),"\u3002"),(0,l.kt)("h3",{id:"bufferalloc"},(0,l.kt)("inlineCode",{parentName:"h3"},"Buffer.alloc()")),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u6765\u751f\u6210\u6307\u5b9a\u957f\u5ea6\u7684Buffer\uff0c\u4e5f\u53ef\u4ee5\u540c\u65f6\u6307\u5b9aBuffer\u5b57\u8282\u5e8f\u5217\u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const buffer = Buffer.alloc(10) // <Buffer 00 00 00 00 00 00 00 00 00 00>\nconst buffer = Buffer.alloc(10, 0xfc) // <Buffer fc fc fc fc fc fc fc fc fc fc>\n")),(0,l.kt)("h3",{id:"bufferfrom"},(0,l.kt)("inlineCode",{parentName:"h3"},"Buffer.from()")),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u6765\u83b7\u53d6\u5b57\u7b26\u4e32\u5bf9\u5e94\u7684\u5b57\u8282\u5e8f\u5217\uff08\u9ed8\u8ba4UTF8\u7f16\u7801\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const buffer = Buffer.from('aka') // <Buffer 61 6b 61>  \nconst buffer = Buffer.from('\u4f60\u597d') // <Buffer e4 bd a0 e5 a5 bd>\n")),(0,l.kt)("h3",{id:"buffertostring"},(0,l.kt)("inlineCode",{parentName:"h3"},"buffer.toString()")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buffer.from()"),"\u7684\u9006\u64cd\u4f5c\uff0c\u83b7\u53d6\u5b57\u8282\u5e8f\u5217\u5bf9\u5e94\u7684\u5b57\u7b26\u4e32\uff08\u9ed8\u8ba4UTF8\u7f16\u7801\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const buffer = Buffer.from('aka') \nconst str = buffer.toString() // aka\n")),(0,l.kt)("h2",{id:"blob"},"Blob"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Blob"),"\u53ea\u5b58\u5728\u4e8e\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u5927\u81f4\u628a\u5b83\u89c6\u4e3a\u4e00\u4e2a\u7c7b\u6587\u4ef6\u5bf9\u8c61\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"File"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Blob"),"\u7684\u5b50\u7c7b\uff09\u3002\u901a\u5e38\u5f53\u6211\u4eec\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"fetch"),"\u53d1\u9001\u8bf7\u6c42\uff0c\u540e\u7aef\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"Buffer"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"res.blob()"),"\u62ff\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"fetch()\n.then(res => res.blob())\n.then(blob => {\n    console.log(blob)\n})\n")),(0,l.kt)("h3",{id:"blobarraybuffer"},(0,l.kt)("inlineCode",{parentName:"h3"},"blob.arrayBuffer()")),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u6765\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u8f6c\u5316\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"arrayBuffer"),"\uff0c\u4ece\u800c\u53ef\u4ee5\u770b\u5230\u5bf9\u5e94\u7684\u5b57\u8282\u5e8f\u5217\u3002"),(0,l.kt)("h3",{id:"blobtext"},(0,l.kt)("inlineCode",{parentName:"h3"},"blob.text()")),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u6765\u83b7\u53d6",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u5185\u90e8\u5b57\u8282\u5e8f\u5217\u6240\u5bf9\u5e94\u7684\u6587\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"blob.text().then(text => console.log(text))\n")),(0,l.kt)("h3",{id:"urlcreateobjecturlblob"},(0,l.kt)("inlineCode",{parentName:"h3"},"URL.createObjectURL(blob)")),(0,l.kt)("p",null,"\u5f53\u540e\u7aef\u5c06\u8bfb\u53d6\u7684\u6587\u4ef6\u4f5c\u4e3a\u54cd\u5e94\u4f53\u53d1\u9001\u7ed9\u524d\u7aef\u65f6\uff0c\u6211\u4eec\u5e38\u89c1\u7684\u9700\u6c42\u6709\uff1a\u2460\u4e0b\u8f7d\u6587\u4ef6\u5230\u672c\u5730\u3002\u2461\u5728\u672c\u5730\u663e\u793a\u56fe\u7247\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u9700\u6c42\u7684\u5173\u952e\u5728\u4e8e\u6839\u636e\u7ed9\u5b9a\u7684\u6587\u4ef6\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u751f\u6210\u4e00\u4e2aURL\u8def\u5f84\uff0c\u5c06\u5176\u653e\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"img"),"\u6807\u7b7e\u7684\u5c5e\u6027\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const url = URL.createObjectURL(blob)\na.href = url // \u7ed3\u6784\u7c7b\u4f3c\u4e8e blob:http://localhost:3000/486ef892-d4fc-485f-b4ab-fae272d35e55\na.download = '\u4e0b\u8f7d\u6587\u4ef6.txt' // \u6587\u4ef6\u540d\n\nconst url2 = URL.createObjectURL(blob)\nimg.src = url2\n")),(0,l.kt)("h3",{id:"blobslice"},(0,l.kt)("inlineCode",{parentName:"h3"},"blob.slice()")),(0,l.kt)("p",null,"\u5c06\u6587\u4ef6\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u5206\u5272\u6210\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\uff0c\u5e38\u7528\u4e8e\u5927\u578b\u56fe\u7247\u7684\u4e0a\u4f20\u3002"),(0,l.kt)("h2",{id:"file"},"File"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"File"),"\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Blob"),"\u7684\u5b50\u7c7b\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u5728",(0,l.kt)("inlineCode",{parentName:"p"},'<input type="file">'),"\u4e2d\u83b7\u53d6\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"file"),"\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const el = document.querySelector('input')\nconsole.log(el.files) // FileList\nel.files[0] // File\n")),(0,l.kt)("h2",{id:"filereader"},"FileReader"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"blob"),"\u81ea\u5e26\u4e86\u4e00\u4e9b\u65b9\u6cd5\u6765\u83b7\u53d6\u4e8c\u8fdb\u5236\u3001\u6587\u672c\u3001URL\u3002\u800c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"FileReader"),"\u6765\u5b9e\u73b0\u7c7b\u4f3c\u7684\u529f\u80fd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const reader = new FileReader()\nreader.onload = function() {\n    console.log(reader.result)\n}\nreader.readAsXXX(blob)\n")),(0,l.kt)("h3",{id:"readasarraybufferblob"},(0,l.kt)("inlineCode",{parentName:"h3"},"readAsArrayBuffer(blob)")),(0,l.kt)("p",null,"\u7c7b\u4f3c",(0,l.kt)("inlineCode",{parentName:"p"},"blob.arrayBuffer()")),(0,l.kt)("h3",{id:"readastextblob"},(0,l.kt)("inlineCode",{parentName:"h3"},"readAsText(blob)")),(0,l.kt)("p",null,"\u7c7b\u4f3c",(0,l.kt)("inlineCode",{parentName:"p"},"blob.text()")),(0,l.kt)("h3",{id:"readasdataurlblob"},(0,l.kt)("inlineCode",{parentName:"h3"},"readAsDataURL(blob)")),(0,l.kt)("p",null,"\u7528\u6cd5\u7c7b\u4f3c",(0,l.kt)("inlineCode",{parentName:"p"},"URL.createObjectURL"),"\uff0c\u4f46\u5b9e\u9645\u4e0a\u4e24\u8005\u8fd8\u662f\u6709\u70b9\u4e0d\u4e00\u6837\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65b9\u5f0f\u662f\u5c06\u6587\u4ef6\u5185\u5bb9\u7684\u5b57\u8282\u5e8f\u5217\u4f7f\u7528Base64\u7f16\u7801\u5f97\u5230\u5b57\u7b26\u4e32\uff0c\u5373\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"data:application/octet-stream;base64,"),"\u5f00\u5934\u7684URL\uff1b\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"URL.createObjectURL()"),"\u62ff\u5230\u7684\u662f\u4e00\u4e2a\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"blob:http://xxx.com/xxx"),"\u5f00\u5934\u7684URL\u3002"),(0,l.kt)("h2",{id:"arraybuffer"},"ArrayBuffer"),(0,l.kt)("p",null,"\u7b80\u5355\u6765\u8bf4",(0,l.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),"\u662f\u4e00\u5757\u5185\u5b58\uff0c\u4f46\u662f\u6211\u4eec\u4e0d\u80fd\u76f4\u63a5\u53bb\u64cd\u4f5c\u8fd9\u5757\u5185\u5b58\uff0c\u5fc5\u987b\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Typed Array"),"\u6765\u64cd\u4f5c\u8fd9\u5757\u5185\u5b58\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Typed Array"),"\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"Int8Array"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Unt8Array"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Int16Array"),"\u7b49\u7b49\u3002"),(0,l.kt)("h2",{id:"stream"},"stream"),(0,l.kt)("p",null,"\u6d41\u5bf9\u8c61\u7528\u6765\u5904\u7406Node\u4e2d\u7684\u6d41\u5f0f\u6570\u636e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Stream"),"\u7ee7\u627f\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"eventEmitter"),"\uff0c\u56e0\u6b64\u5b9e\u4f8b\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"on"),"\u65b9\u6cd5\uff0c\u9664\u6b64\u4e4b\u5916\u6d41\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"pipe"),"\u65b9\u6cd5\u6765\u5b9e\u73b0\u6d41\u5f0f\u6570\u636e\u7684\u4f20\u8f93\u3002"),(0,l.kt)("p",null,"\u6d41\u5bf9\u8c61\u6709\u56db\u79cd\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Writable"),"\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"fs.createWriteStream"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"process.stdout"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"res")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Readable"),"\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"fs.createReadStream"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"process.stdin"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"req")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Duplex"),"\uff0c\u53ef\u4ee5\u5f53\u6210",(0,l.kt)("inlineCode",{parentName:"li"},"Writable"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"Readable"),"\u7684\u7ed3\u5408"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Transform"))),(0,l.kt)("h3",{id:"writable"},"Writable"),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Writable"),"\u7c7b\u578b\u7684\u6d41\u5bf9\u8c61\uff0c\u5b9e\u4f8b\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"write()"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"end()"),"\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"readable"},"Readable"),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Readable"),"\u7c7b\u578b\u7684\u6d41\u5bf9\u8c61\uff0c\u5b9e\u4f8b\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"on('data')"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"on('end')"),"\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"pipeline"},(0,l.kt)("inlineCode",{parentName:"h3"},"pipeline")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { stdout, stdin } = require('process')\nconst { pipeline } = require('stream')\n\n// \u5199\u6cd5\u4e00\nstdin.on('data', chunk => {\n    stdout.write(chunk)\n})\n\n// \u5199\u6cd5\u4e8c\nstdin.pipe(stdout)\n\n// \u5199\u6cd5\u4e09\npipeline(stdin, stdout)\n")),(0,l.kt)("h2",{id:"zlib"},"zlib"),(0,l.kt)("p",null,"Node\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Zlib"),"\u6a21\u5757\u63d0\u4f9b\u4e86\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Stream"),"\u7684API\u6765\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"gzip"),"\u7b49\u683c\u5f0f\u7684\u538b\u7f29\u6216\u89e3\u538b\u7f29\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const zlib = require('zlib')\nconst { pipeline } = require('stream')\nconst gzip = zlib.createGzip() // \u521b\u5efa\u4e00\u4e2a\u6d41\u5bf9\u8c61\nconst source = fs.createReadStream('./a.txt')\nconst target = fs.createWriteStream('./a.txt.gz')\n\npipeline(source, gzip, target, err => console.log(err)) // \u751f\u6210\u538b\u7f29\u6587\u4ef6a.txt.gz\n")),(0,l.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u57fa\u4e8e\u56de\u8c03\u51fd\u6570\u7684\u5199\u6cd5\u6765\u76f4\u63a5\u5bf9\u6587\u4ef6\u8fdb\u884c\u538b\u7f29\uff0c\u7ecf\u8fc7\u6d4b\u8bd5\u53ef\u4ee5\u628a160Kb\u7684\u9875\u9762\u538b\u7f29\u81f34Kb\uff0c\u5f53\u6d4f\u89c8\u5668\u8bc6\u522b\u5230\u54cd\u5e94\u5934\u90e8\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Encoding: gzip"),"\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1a",(0,l.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u5bf9\u54cd\u5e94\u7684\u5185\u5bb9\u8fdb\u884c\u89e3\u538b\u7f29"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// server.js\nconst { promisify } = require('util')\nconst fs = require('fs')\nconst zlib = require('zlib')\nconst readFile = promisify(fs.readFile)\nconst gzip = promisify(zlib.gzip)\nconst http = require('http')\n\nhttp.createServer(async (req, res) => {\n    if (req.url === '/') {\n        const page = await readFile('./index.html')\n        const data = await gzip(page)\n        res.setHeader('Content-Encoding', 'gzip')\n        res.end(data)\n    } \n    else if (req.url === '/test') {\n        let obj = {}\n        for (let i = 0; i < 10000; i++) {\n            obj[i] = i\n        }\n        const data = await gzip(JSON.stringify(obj))\n        res.setHeader('Content-Encoding', 'gzip')\n        res.end(data)\n    }\n}).listen(3000)\n\n// client.js\nfetch('/test')\n.then(res => res.json())\n.then(data => console.log(data)) // \u62ff\u5230obj\n")))}f.isMDXComponent=!0}}]);