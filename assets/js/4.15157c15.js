(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{219:function(t,s,a){t.exports=a.p+"assets/img/quickstart-guide to-til-002.1f723723.png"},220:function(t,s,a){t.exports=a.p+"assets/img/quickstart-guide to-til-003.22955794.png"},221:function(t,s,a){t.exports=a.p+"assets/img/quickstart-guide to-til-001.97e4e39a.png"},222:function(t,s,a){t.exports=a.p+"assets/img/quickstart-guide to-til-004.a8803f33.png"},235:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"quickstart-guide-to-til"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-guide-to-til"}},[t._v("#")]),t._v(" Quickstart guide to TIL")]),t._v(" "),e("p",[e("em",[t._v("Aseembled by GimunLee")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"tech-stack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tech-stack"}},[t._v("#")]),t._v(" Tech Stack")]),t._v(" "),e("ul",[e("li",[t._v("VuePress → View")]),t._v(" "),e("li",[t._v("GitHub Repository → Repository")]),t._v(" "),e("li",[t._v("GitHub Pages → Hosting")]),t._v(" "),e("li",[t._v("GitHub Actions → Deploy")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"step"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step"}},[t._v("#")]),t._v(" Step")]),t._v(" "),e("h3",{attrs:{id:"_1-create-github-repository-clone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-github-repository-clone"}},[t._v("#")]),t._v(" 1. Create GitHub Repository & Clone")]),t._v(" "),e("h3",{attrs:{id:"_2-install-vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-vuepress"}},[t._v("#")]),t._v(" 2. Install VuePress")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress\n")])])]),e("h3",{attrs:{id:"_3-create-vuepress-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-vuepress-project"}},[t._v("#")]),t._v(" 3.  Create VuePress Project")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repository"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install as a local dependency")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D vuepress")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create a docs directory")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create a markdown file")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docs/README.md\n")])])]),e("h3",{attrs:{id:"_4-add-scripts-to-package-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-add-scripts-to-package-json"}},[t._v("#")]),t._v(" 4. Add scripts to package.json")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuepress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.3.1"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"_5-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-run"}},[t._v("#")]),t._v(" 5. Run")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n")])])]),e("h3",{attrs:{id:"_6-github-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-github-actions"}},[t._v("#")]),t._v(" 6. GitHub Actions")]),t._v(" "),e("p",[e("strong",[t._v("1) Create key pair")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ ssh-keygen -t rsa -b "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" -C "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" -f gh-pages -N "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You will get 2 files:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   gh-pages.pub (public key)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   gh-pages     (private key)")]),t._v("\n")])])]),e("p",[e("strong",[t._v("2) gh-pages.pub (public key) → Deploy Keys")])]),t._v(" "),e("img",{attrs:{src:a(219),height:"300"}}),t._v(" "),e("p",[e("strong",[t._v("3) gh-pages (private key) → Secrets")])]),t._v(" "),e("img",{attrs:{src:a(220),height:"300"}}),t._v(" "),e("p",[e("strong",[t._v("4) Create wrokflow")])]),t._v(" "),e("img",{attrs:{src:a(221),height:"200"}}),t._v(" "),e("p",[e("strong",[t._v("5) Change the content to the script below")])]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GitHub Actions Build and Deploy \n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@master\n      \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn install\n      \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn build\n      \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v2.5.0\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ACTIONS_DEPLOY_KEY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PUBLISH_BRANCH")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("PUBLISH_DIR")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n")])])]),e("h3",{attrs:{id:"_7-github-pages-setting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-github-pages-setting"}},[t._v("#")]),t._v(" 7. GitHub Pages Setting")]),t._v(" "),e("img",{attrs:{src:a(222),height:"500"}}),t._v(" "),e("h3",{attrs:{id:"_8-add-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-add-plugin"}},[t._v("#")]),t._v(" 8. Add plugin")]),t._v(" "),e("p",[e("strong",[t._v("1) back-to-top")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-back-to-top@next\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config.js")]),t._v("\nplugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/back-to-top'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[e("strong",[t._v("2) PWA")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-pwa@next\n")])])]),e("ul",[e("li",[e("p",[t._v("Add logo in "),e("code",[t._v(".vuepress/public/images")])])]),t._v(" "),e("li",[e("p",[t._v("Create manifest.json in "),e("code",[t._v(".vuepress/public/")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manifest.json")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TIL"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"short_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GimunLee"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start_url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/?utm_source=homescreen"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icons"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/logo-144.png"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"144x144"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/png"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"theme_color"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#000000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"background_color"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#FFFFFF"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"display"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fullscreen"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"orientation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"portrait"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"_9-customize-vuepress-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-customize-vuepress-project"}},[t._v("#")]),t._v(" 9. Customize VuePress Project")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n")])])]),e("p",[e("em",[t._v("※ You must run the command above to create "),e("code",[t._v(".vuepress")]),t._v(".")])]),t._v(" "),e("ul",[e("li",[t._v("Add home component → "),e("code",[t._v(".vuepress/components/home.vue")])]),t._v(" "),e("li",[t._v("Add auto-sidebar-generator")]),t._v(" "),e("li",[t._v("Change accent color → "),e("code",[t._v(".vuepress/styles/palette.styl")])])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 공식사이트"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/93030651",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress + GitHub Actions 静态博客全攻略"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://62che.com/blog/vuepress/Component-%EC%8B%A4%EC%8A%B5.html#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EC%84%B1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Component 실습 | 유기체의 다락방"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://limdongjin.github.io/vuejs/vuepress/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tutorial :: Vuepress로 기술문서 빠르게 만들어보자!"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"http://milooy.github.io/TIL/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Today Yurim Learned"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=n.exports}}]);