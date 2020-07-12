(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{423:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_11장-시크릿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11장-시크릿"}},[t._v("#")]),t._v(" 11장 시크릿")]),t._v(" "),s("ABG"),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"시크릿-개념"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시크릿-개념"}},[t._v("#")]),t._v(" 시크릿 개념")]),t._v(" "),s("ul",[s("li",[t._v("시크릿은 비밀번호, OAuth 토근, SSH 키 같은 민감한 정보들을 저장하는 용도로 사용")]),t._v(" "),s("li",[t._v("시크릿은 컨테이너 안에 저장하지 않고 별도 보관했다가 실제 파드를 실행할 때의 템플릿으로 컨테이너 제공")]),t._v(" "),s("li",[t._v("시크릿은 내장 시크릿과 사용자 정의 시크릿으로 구분\n"),s("ul",[s("li",[s("strong",[t._v("내장 시크릿:")]),t._v(" 쿠버네티스 클러스터 안에서 쿠버네티스 API에 접근할 때 사용, 클러스터 안에서 사용하는 ServiceAccount라는 계정을 생성하면 자동으로 관련 시크릿 생성하고 이 시크릿으로 허용된 API에 접근 가능")]),t._v(" "),s("li",[s("strong",[t._v("사용자 정의 시크릿:")]),t._v(" 사용자가 만든 시크릿")])])])]),t._v(" "),s("h3",{attrs:{id:"명령으로-시크릿-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#명령으로-시크릿-만들기"}},[t._v("#")]),t._v(" 명령으로 시크릿 만들기")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("사용자 이름과 비밀번호를 설정하는 파일 생성")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./username.txt\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./password.txt\n")])])])]),t._v(" "),s("li",[s("p",[t._v("시크릿 생성 // 자동으로 base64 문자 인코딩")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl create secret generic user-pass-secret --from-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./username.txt\n")])])])]),t._v(" "),s("li",[s("p",[t._v("생성한 시크릿 확인")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl get secret user-pass-secret -o yaml\n")])])])]),t._v(" "),s("li",[s("p",[t._v("디코딩해서 확인")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("인코딩된값"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64 --decode\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"템플릿으로-시크릿-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#템플릿으로-시크릿-만들기"}},[t._v("#")]),t._v(" 템플릿으로 시크릿 만들기")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yaml\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Opaque "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 기본값")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dXNlcm5hbWU=\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cGFzc3dvcmQ=\n")])])]),s("ul",[s("li",[t._v("시크릿 타입\n"),s("ul",[s("li",[s("strong",[t._v("Opaque:")]),t._v(" 기본값으로 키-값 형식으로 임의의 데이터를 설정할 수 있음")]),t._v(" "),s("li",[s("strong",[t._v("kubernetes.io/service-account-token:")]),t._v(" 쿠버네티스 인증 토큰을 저장함")]),t._v(" "),s("li",[s("strong",[t._v("kubernetes.io/dockerconfigjson:")]),t._v(" 도커 저장소 인증 정보를 저장함")]),t._v(" "),s("li",[s("strong",[t._v("kubernetes.io/tls:")]),t._v(" TLS 인증서를 저장함")])])])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"시크릿-사용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시크릿-사용하기"}},[t._v("#")]),t._v(" 시크릿 사용하기")]),t._v(" "),s("h3",{attrs:{id:"파드의-환경-변수로-시크릿-사용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파드의-환경-변수로-시크릿-사용하기"}},[t._v("#")]),t._v(" 파드의 환경 변수로 시크릿 사용하기")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" testapp\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" arisu1000/simple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SECRET_USERNAME "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 환경 변수 이름 설정")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretKeyRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yaml "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 시크릿의 이름")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" username "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 키 값")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SECRET_PASSWORD\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valueFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretKeyRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yaml\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("svc\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30900")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NodePort\n")])])]),s("h3",{attrs:{id:"볼륨-형식으로-파드에-시크릿-제공하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#볼륨-형식으로-파드에-시크릿-제공하기"}},[t._v("#")]),t._v(" 볼륨 형식으로 파드에 시크릿 제공하기")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" testapp\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" arisu1000/simple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" volume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/volume-secret"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 시크릿 설정 내용을 파일 형태로 저장")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("readOnly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 볼륨을 읽기 전용으로 사용")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" volume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secret")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yaml "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 필드 값 설정")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("svc\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30900")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretapp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NodePort\n")])])]),s("h3",{attrs:{id:"프라이빗-컨테이너-이미지를-가져올-때-시크릿-사용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#프라이빗-컨테이너-이미지를-가져올-때-시크릿-사용하기"}},[t._v("#")]),t._v(" 프라이빗 컨테이너 이미지를 가져올 때 시크릿 사용하기")]),t._v(" "),s("ul",[s("li",[t._v("보통 컨테이너 이미지를 가져올 때는 대부분 공개된 이미지를 사용")]),t._v(" "),s("li",[t._v("프라이빗 컨테이너 이미지를 사용하려면 인증 정보가 필요한데 이 인증 정보를 시크릿에 설정해 저장한 후 사용")])]),t._v(" "),s("h3",{attrs:{id:"시크릿으로-tls-인증서를-저장해-사용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시크릿으로-tls-인증서를-저장해-사용하기"}},[t._v("#")]),t._v(" 시크릿으로 TLS 인증서를 저장해 사용하기")]),t._v(" "),s("ul",[s("li",[t._v("HTTPS 인증서를 저장하는 용도로 시크릿 사용 가능")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl create secret tls tlssecret --key tls.key --cert tls.crt\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"시크릿-데이터-용량-제한"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시크릿-데이터-용량-제한"}},[t._v("#")]),t._v(" 시크릿 데이터 용량 제한")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("시크릿 데이터는 etcd에 암호화하지 않은 텍스트로 저장되는데, 이때 시크릿 데이터의 용량이 너무 크면 쿠버네티스의 kube-apiserver나 kubelet의 메모리 용량을 많이 차지. 개별 시크릿 데이터의 최대 용량은 1MB")])]),t._v(" "),s("li",[s("p",[t._v("누군가 etcd에 직접 접근한다면 시크릿 데이터의 내용뿐 아니라 다른 중요한 데이터를 확인 가능")])]),t._v(" "),s("li",[s("p",[t._v("중요한 서비스에 쿠버네티스를 사용 중이라면 etcd 접근을 제한하고 기본적으로 etcd를 실행할 때 etcd 관련 명령을 사용하는 API 통신에 TLS 인증이 적용되어 있으므로 인증서가 있는 사용자만 etcd에 접근해 관련 명령을 사용할 수 있음")])]),t._v(" "),s("li",[s("p",[t._v("그 외에 etcd가 실행 중인 마스터 자체에 직접 접속해서 데이터에 접근하는 것을 막으려고 마스터에 접근할 수 있는 사용자들을 계정 기반이나 IP 기반 접근 제어 등올 제한하는 방법 존재")])]),t._v(" "),s("li",[s("p",[t._v("etcd에 저장되는 시크릿 데이터 암호화 가능")])])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"referenses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referenses"}},[t._v("#")]),t._v(" Referenses")]),t._v(" "),s("ul",[s("li",[t._v("쿠버네티스 입문 - 90가지 예제로 배우는 컨테이너 관리 자동화 표준 / 동양북스")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);