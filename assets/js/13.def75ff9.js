(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{434:function(t,s,a){"use strict";a.r(s);var e=a(24),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如何给before和after伪类动态添加style样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何给before和after伪类动态添加style样式"}},[t._v("#")]),t._v(" 如何给before和after伪类动态添加style样式")]),t._v(" "),a("h2",{attrs:{id:"一-attr-目前attr只支持给content使用其他还只是实验属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-attr-目前attr只支持给content使用其他还只是实验属性"}},[t._v("#")]),t._v(" 一.attr(),目前attr只支持给content使用其他还只是实验属性")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".inner::before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data-index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h5",{attrs:{id:"注-这里的data-index是标签的属性-attr-参数可为标签任意属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注-这里的data-index是标签的属性-attr-参数可为标签任意属性"}},[t._v("#")]),t._v(" 注:这里的data-index是标签的属性，attr(参数可为标签任意属性)")]),t._v(" "),a("h2",{attrs:{id:"二-通过addrule和insertrule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-通过addrule和insertrule"}},[t._v("#")]),t._v(" 二.通过addRule和insertRule")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("styleSheets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.demo::before'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color: red, font-size: 15px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.demo::before {color: red; fint-size: 15px;}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个0是索引，表示在style标签的首位插入样式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注：addRule和insertRule默认会加载最后")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"三-新建一个style标签-不推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-新建一个style标签-不推荐"}},[t._v("#")]),t._v(" 三.新建一个style标签(不推荐)")]),t._v(" "),a("h2",{attrs:{id:"四-通过特定样式的类名-将类名进行切换从而达到样式的变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-通过特定样式的类名-将类名进行切换从而达到样式的变换"}},[t._v("#")]),t._v(" 四.通过特定样式的类名，将类名进行切换从而达到样式的变换")])])}),[],!1,null,null,null);s.default=n.exports}}]);