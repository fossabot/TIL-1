(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{419:function(t,s,a){"use strict";a.r(s);var e=a(27),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_07장-서비스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_07장-서비스"}},[t._v("#")]),t._v(" 07장 서비스")]),t._v(" "),a("ABG"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"서비스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#서비스"}},[t._v("#")]),t._v(" 서비스")]),t._v(" "),a("ul",[a("li",[t._v("파드는 컨트롤러가 관리하므로 한군데에 고정해서 실행되지 않고, 클러스터 안을 옮겨다니는데 이 과정에서 노드가 변경되기도 하고 클러스터 안 파드의 IP가 변경되기도 함")]),t._v(" "),a("li",[a("strong",[t._v("쿠버네티스 서비스는 위처럼 동적으로 변하는 파드들에 고정적으로 접근할 때 사용")])]),t._v(" "),a("li",[t._v("서비스는 주로 L4 영역(전송계층)에서 통신할 때 사용됨")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"서비스-타입"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#서비스-타입"}},[t._v("#")]),t._v(" 서비스 타입")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("ClustserIP")])]),t._v(" "),a("ul",[a("li",[t._v("기본 서비스 타입이며, 쿠버네티스 클러스터 안에서만 사용 가능함")]),t._v(" "),a("li",[t._v("클러스터 안 노드나 파드에서는 ClusterIP를 이용해서 서비스에 연결된 파드에 접근")]),t._v(" "),a("li",[t._v("클러스터 외부에서 이용 불가")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("NodePort")])]),t._v(" "),a("ul",[a("li",[t._v("서비스 하나에 모든 노드의 지정된 포트를 할당")]),t._v(" "),a("li",[t._v("노드에 상관없이 서비스에 지정된 포트 번호만 사용하면 파드에 접근 가능")]),t._v(" "),a("li",[t._v("클러스터 외부에서 접근 가능")]),t._v(" "),a("li",[t._v("자동으로 실행되고 있는 파드로 연결해주는 특징이 있음")]),t._v(" "),a("li",[t._v("클러스터 외부에서 클러스터 안 파드로 접근하는 가장 간단한 방법")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("LoadBalancer")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("쿠버네티스를 지원하는 로드밸런서 장비에서 사용")])]),t._v(" "),a("li",[a("p",[t._v("로드밸런서와 파드를 연결한 후 해당 로드밸런서의 IP를 이용해 클러스터 외부에서 파드에 접근 가능하도록함")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("kubectl get service")]),t._v(" 명령으로 서비스 상태를 확인하면 EXTERNAL-IP 항목에 외부에서 파드에 접근할 수 있는 로드밸런서 IP 표시")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("ExternalName")])]),t._v(" "),a("ul",[a("li",[t._v("서비스를 .spec.externalName 필드에 설정한 값과 연결")]),t._v(" "),a("li",[t._v("클러스터 안에서 외부에 접근할 때 주로 사용")]),t._v(" "),a("li",[t._v("이 서비스로 클러스터 외부에 접근하면 설정해둔 CNAME값을 이용해 클러스터 외부에 접근 가능")]),t._v(" "),a("li",[t._v("외부에 접근할 때 사용하는 값이므로 설정할 때 셀렉터(.spec.selector 필드)가 필요 없음")])])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"서비스-사용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#서비스-사용하기"}},[t._v("#")]),t._v(" 서비스 사용하기")]),t._v(" "),a("h3",{attrs:{id:"기본적인-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기본적인-설정"}},[t._v("#")]),t._v(" 기본적인 설정")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIP "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 서비스 타입 설정 (default: ClusterIP)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clusterIP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10.0.10.10 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 설정하지 않으면 자동으로 IP 설정")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyApp "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 서비스와 연결한 파드에 설정한 .labes 필드 값 설정")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 서비스에서 한꺼번에 포트 여러 개를 외부에 제공할 때는 하위에 필드값으로 설정")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9376")]),t._v("\n")])])]),a("h3",{attrs:{id:"관련-명령어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#관련-명령어"}},[t._v("#")]),t._v(" 관련 명령어")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 자세한 서비스 정보 조회")]),t._v("\n$ kubectl describe "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("서비스 이름"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 실행 중인 파드들의 IP 확인")]),t._v("\n$ kubectl get pods -o wide\n")])])]),a("h3",{attrs:{id:"netshoot-컨테이너-활용하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netshoot-컨테이너-활용하기"}},[t._v("#")]),t._v(" netshoot 컨테이너 활용하기")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ClusterIP는 클러스터 내부에서만 접근할 수 있어서 간단한 테스트를 하기위해서는 같은 클러스터 안에 컨테이너를 하나 띄워야하는데, 이때 netshoot 컨테이너를 활용하여 쉽게 테스트 가능")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 컨테이너, 파드 생성 및 실행")]),t._v("\n$ kubectl run -it --generator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("run-pod/v1 --image"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nicolaka/netshoot --overrides"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"spec": {"nodeSelector": {"kubernetes.io/hostname": "{워커명}" }}}\'')]),t._v(" netshoot - "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 서비스 생성")]),t._v("\n$ kubectl expose deployment hello-kube --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("NodePort --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hello-kube-service\n")])])])])]),t._v(" "),a("h4",{attrs:{id:"netshoot-컨테이너"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netshoot-컨테이너"}},[t._v("#")]),t._v(" netshoot 컨테이너")]),t._v(" "),a("ul",[a("li",[t._v("네트워크 문제 추적을 위해 필요한 여러가지 도구를 포함한 별도의 컨테이너")])]),t._v(" "),a("h4",{attrs:{id:"활용-스텝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#활용-스텝"}},[t._v("#")]),t._v(" 활용 스텝")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ kubectl run -it --image nicolaka/netshoot testnet "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("clusterIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 마크업 출력")]),t._v("\n")])])]),a("h3",{attrs:{id:"nodeport-타입-서비스-사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodeport-타입-서비스-사용"}},[t._v("#")]),t._v(" NodePort 타입 서비스 사용")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"referenses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#referenses"}},[t._v("#")]),t._v(" Referenses")]),t._v(" "),a("ul",[a("li",[t._v("쿠버네티스 입문 - 90가지 예제로 배우는 컨테이너 관리 자동화 표준 / 동양북스")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);