(window.webpackJsonp=window.webpackJsonp||[]).push([[8,37],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(109),o=a(16),l=a(27),r=a(114),s=a(3),d=a(7),u=a(111),b=a(110),m=a(132),p=a(136),h=a(137),f=a(135),v=a(113),O=a(125),E=a(138),j=function(e){return i.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),i.a.createElement("g",{fill:"#7a7a7a"},i.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),i.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=a(140),C=a(112),k=a(74),N=a.n(k);var S=function e(t,a){return"link"===t.type?Object(b.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},_=Object(n.memo)((function(e){var t=e.items,a=Object(d.a)(e,["items"]);return t.map((function(e,t){return i.a.createElement(I,Object(s.a)({key:t,item:e},a))}))}));function I(e){switch(e.item.type){case"category":return i.a.createElement(T,e);case"link":default:return i.a.createElement(w,e)}}function T(e){var t,a,c,o=e.item,l=e.onItemClick,r=e.collapsible,b=e.activePath,m=Object(d.a)(e,["item","onItemClick","collapsible","activePath"]),p=o.items,h=o.label,f=S(o,b),v=(a=f,c=Object(n.useRef)(a),Object(n.useEffect)((function(){c.current=a}),[a]),c.current),O=Object(n.useState)((function(){return!!r&&(!f&&o.collapsed)})),E=O[0],j=O[1],g=Object(n.useRef)(null),C=Object(n.useState)(void 0),k=C[0],I=C[1],T=function(e){var t;void 0===e&&(e=!0),I(e?(null===(t=g.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){f&&!v&&E&&j(!1)}),[f,v,E]);var w=Object(n.useCallback)((function(e){e.preventDefault(),k||T(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[k]);return 0===p.length?null:i.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":E})},i.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&f},t[N.a.menuLinkText]=!r,t)),onClick:r?w:void 0,href:r?"#!":void 0},m),h),i.a.createElement("ul",{className:"menu__list",ref:g,style:{height:k},onTransitionEnd:function(){E||T(!1)}},i.a.createElement(_,{items:p,tabIndex:E?"-1":"0",onItemClick:l,collapsible:r,activePath:b})))}function w(e){var t,a=e.item,n=e.onItemClick,c=e.activePath,o=(e.collapsible,Object(d.a)(e,["item","onItemClick","activePath","collapsible"])),l=a.href,r=a.label,b=S(a,c);return i.a.createElement("li",{className:"menu__list-item",key:r},i.a.createElement(v.a,Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--active":b},t[N.a.menuLinkExternal]=!Object(O.a)(l),t)),to:l},Object(O.a)(l)&&{isNavLink:!0,exact:!0,onClick:n},o),r))}function y(e){var t=e.onClick;return i.a.createElement("button",{type:"button",title:Object(C.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(C.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(u.a)("button button--secondary button--outline",N.a.collapseSidebarButton),onClick:t},i.a.createElement(j,{className:N.a.collapseSidebarButtonIcon}))}function x(e){var t=e.responsiveSidebarOpened,a=e.onClick;return i.a.createElement("button",{"aria-label":t?Object(C.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(C.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?i.a.createElement("span",{className:Object(u.a)(N.a.sidebarMenuIcon,N.a.sidebarMenuCloseIcon)},"\xd7"):i.a.createElement(g.a,{className:N.a.sidebarMenuIcon,height:24,width:24}))}var R=function(e){var t,a,c=e.path,o=e.sidebar,l=e.sidebarCollapsible,r=void 0===l||l,s=e.onCollapse,d=e.isHidden,v=function(){var e=Object(m.a)().isAnnouncementBarClosed,t=Object(n.useState)(!e),a=t[0],i=t[1];return Object(f.a)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),O=Object(b.useThemeConfig)(),j=O.navbar.hideOnScroll,g=O.hideableSidebar,C=Object(m.a)().isAnnouncementBarClosed,k=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];Object(p.a)(t);var i=Object(h.a)();return Object(n.useEffect)((function(){i===h.b.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:Object(n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:Object(n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),S=k.showResponsiveSidebar,I=k.closeResponsiveSidebar,T=k.toggleResponsiveSidebar;return i.a.createElement("div",{className:Object(u.a)(N.a.sidebar,(t={},t[N.a.sidebarWithHideableNavbar]=j,t[N.a.sidebarHidden]=d,t))},j&&i.a.createElement(E.a,{tabIndex:-1,className:N.a.sidebarLogo}),i.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",N.a.menu,(a={"menu--show":S},a[N.a.menuWithAnnouncementBar]=!C&&v,a))},i.a.createElement(x,{responsiveSidebarOpened:S,onClick:T}),i.a.createElement("ul",{className:"menu__list"},i.a.createElement(_,{items:o,onItemClick:I,collapsible:r,activePath:c}))),g&&i.a.createElement(y,{onClick:s}))},A=a(122),P=a(127),B=a(23),L=a(78),M=a.n(L);function H(e){var t,a,l,s,d,m=e.currentDocRoute,p=e.versionMetadata,h=e.children,f=Object(o.default)(),v=f.siteConfig,O=f.isClient,E=p.pluginId,g=p.permalinkToSidebar,k=p.docsSidebars,N=p.version,S=g[m.path],_=k[S],I=Object(n.useState)(!1),T=I[0],w=I[1],y=Object(n.useState)(!1),x=y[0],P=y[1],B=Object(n.useCallback)((function(){x&&P(!1),w(!T)}),[x]);return i.a.createElement(r.a,{key:O,wrapperClassName:b.ThemeClassNames.wrapper.docPages,pageClassName:b.ThemeClassNames.page.docPage,searchMetadatas:{version:N,tag:Object(b.docVersionSearchTag)(E,N)}},i.a.createElement("div",{className:M.a.docPage},_&&i.a.createElement("div",{className:Object(u.a)(M.a.docSidebarContainer,(t={},t[M.a.docSidebarContainerHidden]=T,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(M.a.docSidebarContainer)&&T&&P(!0)},role:"complementary"},i.a.createElement(R,{key:S,sidebar:_,path:m.path,sidebarCollapsible:null===(a=null===(l=v.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===a||a,onCollapse:B,isHidden:x}),x&&i.a.createElement("div",{className:M.a.collapsedDocSidebar,title:Object(C.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(C.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:B,onClick:B},i.a.createElement(j,{className:M.a.expandSidebarButtonIcon}))),i.a.createElement("main",{className:Object(u.a)(M.a.docMainContainer,(s={},s[M.a.docMainContainerEnhanced]=T||!_,s))},i.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",M.a.docItemWrapper,(d={},d[M.a.docItemWrapperEnhanced]=T,d))},i.a.createElement(c.a,{components:A.a},h)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,c=t.find((function(e){return Object(B.matchPath)(n.pathname,e)}));return c?i.a.createElement(H,{currentDocRoute:c,versionMetadata:a},Object(l.a)(t)):i.a.createElement(P.default,e)}},127:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(114),o=a(112);t.default=function(){return i.a.createElement(c.a,{title:"Page Not Found"},i.a.createElement("main",{className:"container margin-vert--xl"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--6 col--offset-3"},i.a.createElement("h1",{className:"hero__title"},i.a.createElement(o.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),i.a.createElement("p",null,i.a.createElement(o.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),i.a.createElement("p",null,i.a.createElement(o.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);