(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{581:function(a,e,s){"use strict";s.r(e);var t=s(24),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"python虚拟环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python虚拟环境"}},[a._v("#")]),a._v(" python虚拟环境")]),a._v(" "),s("h2",{attrs:{id:"一、python虚拟环境介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、python虚拟环境介绍"}},[a._v("#")]),a._v(" 一、python虚拟环境介绍")]),a._v(" "),s("p",[a._v("​\t虚拟环境（virtual environment），它是一个虚拟化，从电脑独立开辟出来的环境。通俗的来讲，虚拟环境就是借助虚拟机来把一部分内容独立出来，我们把这部分独立出来的东西称作“容器”，在这个容器中，我们可以只安装我们需要的依赖包，各个容器之间互相隔离，互不影响。")]),a._v(" "),s("h2",{attrs:{id:"二、为什么要使用虚拟环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么要使用虚拟环境"}},[a._v("#")]),a._v(" 二、为什么要使用虚拟环境")]),a._v(" "),s("ol",[s("li",[a._v("项目部署时，直接导出项目对应的环境中的库就可以了；")]),a._v(" "),s("li",[a._v("同时开发多个项目，各自项目使用的python版本不同，譬如一个是python2，另一个是python3，那么需要来回的切换python版本；")]),a._v(" "),s("li",[a._v("当你同时开发多个项目时，特别是多个项目使用同一个库，譬如：django，但是各自项目使用的django的版本不一致时，那么你在开发这些项目时，需要来回的卸载和安装不同的版本，因为同一个python环境中，同名的库只能有一个版本。")])]),a._v(" "),s("p",[a._v("PS：实际项目开发时，建议每个项目使用独立的虚拟环境，但是在进行学习时，我们只使用一个虚拟环境就够了，避免频繁的创建虚拟环境，安装第三方库，浪费时间。")]),a._v(" "),s("h2",{attrs:{id:"三、虚拟环境的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、虚拟环境的安装"}},[a._v("#")]),a._v(" 三、虚拟环境的安装")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("安装好python环境")])]),a._v(" "),s("li",[s("p",[a._v("安装虚拟环境库，在cmd中输入：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("pip install virtualenv \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("创建虚拟环境，在cmd中切换到需要创建虚拟环境的目录下，执行：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("virtualenv env_name \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("激活虚拟环境，在cmd中进入到 第三步创建的 env_name/Scripts 目录下，执行：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("activate\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("执行成功后，在cmd中，当前输入行前面会有 (env_name) 的前缀")]),a._v(" "),s("p",[a._v("在当前状态下，使用 pip 就是在虚拟环境中安装第三方库了")])]),a._v(" "),s("li",[s("p",[a._v("退出虚拟环境，cmd中输入：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("deactivate\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"四、虚拟环境优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、虚拟环境优化"}},[a._v("#")]),a._v(" 四、虚拟环境优化")]),a._v(" "),s("p",[a._v("​\t在使用过程中，会发现上述第三步的使用，会有不少局限，譬如必须切换到指定目录才能操作等。通过安装 virtualenvwrapper-win 可以更加简便的使用虚拟环境（需要先安装virtualenv）")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("pip安装")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("pip install virtualenvwrapper-win\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("在环境变量中，配置虚拟环境的指定安装目录")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("打开系统环境变量配置")])]),a._v(" "),s("li",[s("p",[a._v("新建系统变量名：WORKON_HOME")])]),a._v(" "),s("li",[s("p",[a._v("变量值配置为你的系统中一个指定目录，譬如：F:\\python3_env")])]),a._v(" "),s("li",[s("p",[a._v("创建第3步中的文件夹")])]),a._v(" "),s("li",[s("p",[a._v("保存配置")])])])]),a._v(" "),s("li",[s("p",[a._v("在cmd中运行 workon或者lsvirtualenv 即可查看当前的虚拟环境配置情况")])]),a._v(" "),s("li",[s("p",[a._v("新建虚拟环境，cmd中输入：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mkvirtualenv env_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("PS：可以在cmd命令窗口的任意目录下新建，最终虚拟环境文件夹都会创建在 第 2 步中的 WORKON_HOME 指定的文件夹中")])]),a._v(" "),s("li",[s("p",[a._v("激活虚拟环境，cmd中输入：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("workon env_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("退出虚拟环境，cmd中输入：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("deactivate\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("删除虚拟环境，cmd中输入：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("rmvirtualenv env_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);