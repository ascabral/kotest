"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[79668],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||k[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39860:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return k}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Spec Lifecycle and Extensions",slug:"spec-lifecycle.html"},c=void 0,p={unversionedId:"framework/spec_lifecycle",id:"version-5.3/framework/spec_lifecycle",title:"Spec Lifecycle and Extensions",description:"Kotest has an extensive selection of hooks through which you can integrate into the spec lifecycle.",source:"@site/versioned_docs/version-5.3/framework/spec_lifecycle.md",sourceDirName:"framework",slug:"/framework/spec-lifecycle.html",permalink:"/docs/5.3/framework/spec-lifecycle.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/spec_lifecycle.md",tags:[],version:"5.3",frontMatter:{title:"Spec Lifecycle and Extensions",slug:"spec-lifecycle.html"}},l={},k=[],m={toc:k};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kotest has an extensive selection of hooks through which you can integrate into the spec lifecycle."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Lifecycle"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A spec is selected for execution by the ",(0,a.kt)("em",{parentName:"td"},"TestSuiteScheduler")," and a coroutine is created for the spec.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/extensions/SpecLaunchExtension.kt"},"SpecLaunchExtensions")," are invoked, passing in the reference to the spec that has been scheduled. The extensions may opt to skip execution or continue. Any changes to the coroutine context are propagated downstream.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"If either the spec is annotated with ",(0,a.kt)("inlineCode",{parentName:"td"},"@Ignored")," or the spec is annotated with ",(0,a.kt)("inlineCode",{parentName:"td"},"@EnabledIf")," and fails the if condition, then the spec will be skipped. If skipped, any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/extensions/SpecIgnoredListener.kt"},"SpecIgnoredListener")," are invoked with the reference to the spec.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"If the spec is not skipped, an instance of the spec is created. On the JVM this process will delegate to any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/jvmMain/kotlin/io/kotest/core/extensions/ConstructorExtension.kt"},"ConstructorExtensions")," that are registered, or if none exist, then the default instantiation method is used (reflection). On other platforms the spec will be created directly.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On the JVM, the instantiated spec will be passed to any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/extensions/PostInstantiationExtension.kt"},"PostInstantiationExtensions")," which have the ability to adjust the instance (for example, applying dependency injection).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"If spec creation is successful, then any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/extensions/SpecInitializeExtension.kt"},"SpecInitializeExtensions")," are invoked and if spec creation fails, then any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/extensions/SpecCreationErrorListener.kt"},"SpecCreationErrorListeners")," are invoked with the exception.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/extensions/SpecInterceptExtension.kt"},"SpecInterceptExtensions")," are invoked passing in the created spec. These extensions may opt to skip execution or continue. Any changes to the coroutine context are propagated downstream.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"If the spec is active (contains at least one, enabled, root test case), then any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/listeners/PrepareSpecListener.kt"},"PrepareSpecListeners")," are invoked. Otherwise, the spec is inactive, and any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/extensions/InactiveSpecListener.kt"},"InactiveSpecListeners")," are invoked and execution is skipped.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/listeners/BeforeSpecListener.kt"},"BeforeSpecListeners")," are invoked passing in the spec instance. Any errors in these extensions will cause test execution and after spec listeners to be skipped.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"All tests in the spec are executed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/listeners/AfterSpecListener.kt"},"AfterSpecListeners")," are invoked passing in the spec instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Any ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kotest/kotest/blob/master/kotest-framework/kotest-framework-api/src/commonMain/kotlin/io/kotest/core/listeners/FinalizeSpecListener.kt"},"FinalizeSpecListeners")," are invoked passing in the ",(0,a.kt)("inlineCode",{parentName:"td"},"KClass")," reference to the spec that was completed.")))),(0,a.kt)("p",null,"Note: For each isolated spec, a fresh spec instance will be created and the ",(0,a.kt)("inlineCode",{parentName:"p"},"PostInstantiationExtension"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecCreatedListener"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecCreationErrorListener"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecInterceptExtension"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BeforeSpecListener")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AfterSpecListener")," callbacks will be repeated."))}d.isMDXComponent=!0}}]);