"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[663],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3691:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={sidebarDepth:4},l=void 0,p={unversionedId:"php",id:"php",title:"php",description:"\u5927\u5b66\u65f6\u5019\u8bb0\u7684\u7b14\u8bb0\uff0c\u5982\u4ecaPHP\u5df2\u6b7b",source:"@site/docs/php.mdx",sourceDirName:".",slug:"/php",permalink:"/blog/docs/php",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php.mdx",tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"webgl",permalink:"/blog/docs/webgl"}},s={},u=[],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5927\u5b66\u65f6\u5019\u8bb0\u7684\u7b14\u8bb0\uff0c\u5982\u4ecaPHP\u5df2\u6b7b"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5355\u53cc\u5f15\u53f7")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$value = 'abc';\necho \"\u53d8\u91cf\u7684\u503c\u4e3a$value\"; // \u8f93\u51faabc\necho '\u53d8\u91cf\u7684\u503c\u4e3a$value'; // \u8f93\u51fa$value\necho '\u53d8\u91cf\u7684\u503c\u4e3a'.$value; // \u8f93\u51faabc\n?>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6570\u7ec4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$arr = array(\'a\', \'b\', \'c\');\n$arr1 = array("a"=>"aaa", "b"=>"bbb", "c"=>"ccc");\n\necho implode(\'=\', $arr); // a=b=c\necho $arr1[1]; // bbb\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7c7b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// \u4e24\u4e2a\u4e0b\u5212\u7ebf\u5f00\u5934\u7684\u51fd\u6570\u901a\u5e38\u88ab\u79f0\u4e3a\u9b54\u672f\u65b9\u6cd5\uff0c\u5305\u62ec__construct, __destruct, __call,\n// __callStatic, __get, __set, __inset, __unset, __sleep, __wakeup, __clone\u7b49\u7b49\u3002\nclass People {\n    var $id; // \u53ef\u4ee5\u7528public/protected/private\n    var $name;\n    \n    private $n;\n    \n    // \u6784\u9020\u51fd\u6570\n    function __construct($id, $name, $n) {\n        $this->id = $id;\n        $this->name = $name;\n        $this->n = $n;\n    }\n    \n    // \u6790\u6784\u51fd\u6570\n    function __destruct() {\n        \n    }\n    \n    // \u642d\u914dclone\u4f7f\u7528\n    function __clone() {\n        echo \"clone function\"\n    }\n    \n    // \u5b9e\u4f8b\u8c03\u7528\u65b9\u6cd5\u65f6\uff0c\u82e5\u627e\u4e0d\u5230\u65b9\u6cd5\uff0c\u5219\u8c03\u7528\u8be5\u51fd\u6570\n    function __call($name, $arguments) {\n        echo 'call function';\n    }\n    // \u9664\u6b64\u4e4b\u5916\u8fd8\u6709__callStatic\uff0c\u5bf9\u5e94\u7684\u662f\u7c7b\u65b9\u6cd5\n    // BTW\uff0c\u7c7b\u5916\u90e8\u8c03\u7528\u7c7b\u51fd\u6570\u65f6 People::Fn\uff0c\u7c7b\u5185\u90e8\u8c03\u7528\u65f6Self::Fn\n    static function __callStatic($name, $arguments) {\n        echo \"$name\".implode(',', $arguments);\n    }\n    \n    // \u83b7\u53d6 $p->n\u7684\u503c\u7684\u65f6\u5019\uff0c\u56e0\u4e3aprivate\uff0c\u6240\u4ee5\u5b9e\u9645\u4e0a\u65e0\u6cd5\u8bbf\u95ee\u8be5\u5c5e\u6027\u7684\u503c\u3002\n    // \u6b64\u65f6\u4f1a\u81ea\u52a8\u8c03\u7528__get\u51fd\u6570\n    function __get($property) {\n        echo $this->$property;\n    }\n    \n    // \u4fee\u6539 $p->n\u7684\u503c\u7684\u65f6\u5019\uff0c\u56e0\u4e3aprivate\uff0c\u6240\u4ee5\u5b9e\u9645\u4e0a\u65e0\u6cd5\u4fee\u6539\u8be5\u5c5e\u6027\u7684\u503c\u3002\n    // \u6b64\u65f6\u4f1a\u81ea\u52a8\u8c03\u7528__set\u51fd\u6570\n    function __set($property, $value) {\n        $this->$property = $value;\n    }\n    \n    \n    function getInfo() {\n        echo $this->id.'\u53f7\u662f'.$this->name;\n    }\n}\n\n$p = new People(1, 'akara');\n$p->getInfo();\n\n$p->test(); // \u627e\u4e0d\u5230\uff0c\u6240\u4ee5\u8c03\u7528__call\u51fd\u6570\n\necho $p->n; // \u8c03\u7528__get\u51fd\u6570\n$p->n = 1; // \u8c03\u7528__set\u51fd\u6570\n\n$s = clone $p; // \u8c03\u7528__clone\u51fd\u6570\n\n\n\n$data = serialize($arr); // \u5e8f\u5217\u5316\necho $data;\nunserialize($data); // \u53cd\u5e8f\u5217\u5316\n\n// \u8c03\u7528serialize\u51fd\u6570\u65f6\uff0c\u5148\u4f1a\u67e5\u627e\u7c7b\u4e2d\u662f\u5426\u6709__sleep\uff0c\u5982\u679c\u6709\u5219\u8c03\u7528\u540e\u518d\u5e8f\u5217\u5316\n// \u540c\u7406\uff0c\u8c03\u7528unserialize\u65f6\uff0c\u67e5\u770b\u662f\u5426\u6709__wakeup\uff0c\u8c03\u7528\u540e\u624d\u53cd\u5e8f\u5217\u5316\u3002\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PHP\u8fde\u63a5\u6570\u636e\u5e93")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n    $link = mysqli_connect('localhost:3308', 'root', '');\n    mysqli_select_db($link, 'test');\n    $sql = \"SELECT * FROM comments\";\n    $result = mysqli_query($link, $sql);\n    if (mysqli_num_rows($result) > 0) {\n        while ($row = mysqli_fetch_assoc($result)) {\n\n        }\n    }\n\n    mysqli_close($link)\n?>\n")))}d.isMDXComponent=!0}}]);