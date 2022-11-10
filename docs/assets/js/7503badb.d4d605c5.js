"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[36081],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"config_dump",title:"Config Dump",slug:"config-dump.html"},u=void 0,l={unversionedId:"framework/config_dump",id:"framework/config_dump",title:"Config Dump",description:"Kotest can optionally print the configuration that will be used for the test run when the test engine starts up.",source:"@site/docs/framework/config_dump.md",sourceDirName:"framework",slug:"/framework/config-dump.html",permalink:"/docs/next/framework/config-dump.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/config_dump.md",tags:[],version:"current",frontMatter:{id:"config_dump",title:"Config Dump",slug:"config-dump.html"},sidebar:"framework",previous:{title:"Fail On Empty Test Suite",permalink:"/docs/next/framework/fail-on-empty-test-suite.html"}},c={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kotest can optionally print the configuration that will be used for the test run when the test engine starts up.\nTo do this, set a system property or environment variable, with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest.framework.dump.config")," and the value ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"For example, with gradle, you set the system property inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," task configuration block."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'test {\n  systemProperty "kotest.framework.dump.config", "true"\n}\n')),(0,i.kt)("p",null,"When activated, you should find output like the following in standard out:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"~~~ Kotest Configuration ~~~\n-> Parallelization factor: 1\n-> Concurrent specs: null\n-> Global concurrent tests: 1\n-> Dispatcher affinity: true\n-> Coroutine debug probe: false\n-> Spec execution order: Lexicographic\n-> Default test execution order: Sequential\n-> Default test timeout: 600000ms\n-> Default test invocation timeout: 600000ms\n-> Default isolation mode: SingleInstance\n-> Global soft assertions: false\n-> Write spec failure file: false\n-> Fail on ignored tests: false\n-> Fail on empty test suite: false\n-> Duplicate test name mode: Warn\n-> Remove test name whitespace: false\n-> Append tags to test names: false\n-> Extensions\n  - io.kotest.engine.extensions.SystemPropertyTagExtension\n")))}m.isMDXComponent=!0}}]);