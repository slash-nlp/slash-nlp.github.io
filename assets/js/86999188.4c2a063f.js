(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{111:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=n,d=p["".concat(i,".").concat(g)]||p[g]||b[g]||a;return r?o.a.createElement(d,c(c({ref:t},u),{},{components:r})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(111)),i={sidebar_position:2},c={unversionedId:"contributing/tutorial-basics/create-a-blog-post",id:"contributing/tutorial-basics/create-a-blog-post",isDocsHomePage:!1,title:"Create a Blog Post",description:"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",source:"@site/docs/contributing/tutorial-basics/create-a-blog-post.md",sourceDirName:"contributing/tutorial-basics",slug:"/contributing/tutorial-basics/create-a-blog-post",permalink:"/docs/contributing/tutorial-basics/create-a-blog-post",editUrl:"https://github.com/slash-nlp/slash-nlp/docs/contributing/tutorial-basics/create-a-blog-post.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"contributionSidebar",previous:{title:"Create a Document",permalink:"/docs/contributing/tutorial-basics/create-a-document"},next:{title:"Embed a Video",permalink:"/docs/contributing/tutorial-basics/embed-a-video"}},s=[{value:"Create your first Post",id:"create-your-first-post",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Docusaurus creates a ",Object(a.b)("strong",{parentName:"p"},"page for each blog post"),", but also a ",Object(a.b)("strong",{parentName:"p"},"blog index page"),", a ",Object(a.b)("strong",{parentName:"p"},"tag system"),", an ",Object(a.b)("strong",{parentName:"p"},"RSS")," feed..."),Object(a.b)("h2",{id:"create-your-first-post"},"Create your first Post"),Object(a.b)("p",null,"Create a file at ",Object(a.b)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthor: Steven Hansel\nauthor_title: Docusaurus Contributor\nauthor_url: https://github.com/ShinteiMai\nauthor_image_url: https://github.com/ShinteiMai.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),Object(a.b)("p",null,"A new blog post is now available at ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000/blog/greetings"),"."))}l.isMDXComponent=!0}}]);