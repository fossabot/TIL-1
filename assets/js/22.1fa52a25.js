(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{414:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_03장-쿠버네티스-컨테이너-실행하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03장-쿠버네티스-컨테이너-실행하기"}},[t._v("#")]),t._v(" 03장 쿠버네티스 컨테이너 실행하기")]),t._v(" "),s("ABG"),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"kubectl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl"}},[t._v("#")]),t._v(" kubectl")]),t._v(" "),s("ul",[s("li",[t._v("쿠버네티스 클러스터를 관리하는 동작 대부분은 "),s("strong",[t._v("kubectl이라는 커맨드 인터페이스로(Command Line interface, CLI)로 실행 가능")])]),t._v(" "),s("li",[t._v("쿠버네티스 자원들의 생성, 업데이트, 삭제(create, update, delete)")]),t._v(" "),s("li",[t._v("디버그, 모니터링, 트러블 슈팅(log, exec, cp, top, attach)")]),t._v(" "),s("li",[t._v("클러스터 관리(cordon, top, drain, taint)")])]),t._v(" "),s("h3",{attrs:{id:"기본-사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본-사용법"}},[t._v("#")]),t._v(" 기본 사용법")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("command:")]),t._v(" 자원에 실행하려는 동작 (create, get, delete)")]),t._v(" "),s("li",[s("strong",[t._v("TYPE:")]),t._v(" 자원 타입 (pod, service, ingress)")]),t._v(" "),s("li",[s("strong",[t._v("NAME:")]),t._v(" 자원 이름")]),t._v(" "),s("li",[s("strong",[t._v("FLAG:")]),t._v(" 부가적으로 설정할 옵션")])]),t._v(" "),s("h3",{attrs:{id:"kubectl-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-get"}},[t._v("#")]),t._v(" kubectl get")]),t._v(" "),s("ul",[s("li",[t._v("쿠버네티스 자원 상태 확인하는 명령어")])]),t._v(" "),s("h4",{attrs:{id:"kubctl-get-pods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubctl-get-pods"}},[t._v("#")]),t._v(" kubctl get pods")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl get pods\n")])])]),s("ul",[s("li",[s("p",[s("strong",[t._v("NAME:")]),t._v(" 파드 이름 표시")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("READY:")]),t._v(" 파드의 준비 상태 표시")]),t._v(" "),s("ul",[s("li",[t._v("0/1: 파드가 생성되었으나 사용할 준비가 되지 않음")]),t._v(" "),s("li",[t._v("1/1: 파드가 생성되었고 사용할 준비가 되었음")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("STATUS:")]),t._v(" 파드의 현재 상태 표시")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Running: 파드가 실행됨")])]),t._v(" "),s("li",[s("p",[t._v("Terminating: 컨테이너 접속 중")])]),t._v(" "),s("li",[s("p",[t._v("ContainerCreating: 컨테이너 생성 중")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("RESTARTS:")]),t._v(" 해당 파드가 몇 번 재시작했는지를 표시")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("AGE:")]),t._v(" 파드를 생성한 후 얼마나 시간이 지났는지 표시")])])]),t._v(" "),s("h4",{attrs:{id:"kubectl-get-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-get-services"}},[t._v("#")]),t._v(" Kubectl get services")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl get services\n")])])]),s("ul",[s("li",[s("p",[s("strong",[t._v("NAME:")]),t._v(" 서비스의 이름 표시")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("TYPE:")]),t._v(" 서비스 타입 표시")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("CLUSTER-IP:")]),t._v(" 현재 클러스터 안에서 사용되는 IP")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("EXTERNAL-IP:")]),t._v(" 클러스터 외부에서 접속할 때 사용하는 IP")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("PORT(S):")]),t._v(" 해당 서비스에 접속하는 포트 표시")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("AGE:")]),t._v(" 자원을 생성한 후 얼마나 시간이 지났는지 표시")])]),t._v(" "),s("li",[s("p",[t._v("추가로, kubernets라는 이름의 서비스는 kube-apiserver 관련 파드들을 가르킴")])])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"posix-gnu-스타일의-명령-작성-규칙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#posix-gnu-스타일의-명령-작성-규칙"}},[t._v("#")]),t._v(" POSIX/GNU 스타일의 명령 작성 규칙")]),t._v(" "),s("ul",[s("li",[t._v("kubectl은 기본적으로 POSIX/GNU 스타일의 명령 작성 규칙을 따름")])]),t._v(" "),s("h3",{attrs:{id:"주요-규칙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#주요-규칙"}},[t._v("#")]),t._v(" 주요 규칙")]),t._v(" "),s("ul",[s("li",[t._v("-과 함께 사용하는 옵션은 단일 알파벳/숫자 문자 인자와 같은 짧은 옵션(short option)")]),t._v(" "),s("li",[t._v("일부 옵션은 인자를 필요로 함")]),t._v(" "),s("li",[t._v("--과 함께 사용하는 옵션은 알파벳 두 글자 이상으로 구성한 긴 옵션(long options)")]),t._v(" "),s("li",[t._v("-- 이후에 작성하는 인자가 있다면 쿠버네티스 관련 옵션들을 종료")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"kubeconfig-환경-변수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubeconfig-환경-변수"}},[t._v("#")]),t._v(" Kubeconfig 환경 변수")]),t._v(" "),s("ul",[s("li",[t._v("kubectl은 기본적으로 $HOME/.kube/config 파일에서 클러스터, 인증, 컨텍스트 정보를 읽어들이는데, 이러한 클러스터 구성 정보를 kubeconfig라고 칭함")]),t._v(" "),s("li",[t._v("클러스터에서 사용할 수 있는 자원들은 "),s("code",[t._v("$ kubectl api-resources")]),t._v(" 명령으로 확인 가능한데, 자원을 사용하기 전 반드시 확인하는 것이 좋음")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"디플로이먼트를-이용해-컨테이너-실행하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#디플로이먼트를-이용해-컨테이너-실행하기"}},[t._v("#")]),t._v(" 디플로이먼트를 이용해 컨테이너 실행하기")]),t._v(" "),s("ul",[s("li",[t._v("쿠버네티스를 이용해서 컨테이너를 실행하는 방법에는 크게 두 가지가 존재\n"),s("ol",[s("li",[s("code",[t._v("$ kubectl run")]),t._v(" 명령으로 직접 컨테이너를 실행")]),t._v(" "),s("li",[t._v("컨테이너를 어떻게 실행할지 세부 내용을 담은 YAML 형식의 템플릿으로 컨테이너 실행")])])]),t._v(" "),s("li",[t._v("템플릿으로 컨테이너를 관리하면 버전 관리 시스템과 연동해서 자원 정의 변동 사항을 추적하기 쉽다는 장점이 있음")])]),t._v(" "),s("h3",{attrs:{id:"kubectl-run으로-컨테이너-실행하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-run으로-컨테이너-실행하기"}},[t._v("#")]),t._v(" kubectl run으로 컨테이너 실행하기")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl run 디플로이먼트이름 --image 컨테이너이미지이름 --port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("포트번호\n")])])]),s("ul",[s("li",[t._v("쿠버네티스는 파드를 실행하는 여러 가지 컨트롤러를 제공하는데, "),s("code",[t._v("$ kubectl run")]),t._v("으로 파드를 실행시킬때 기본 컨트롤러는 "),s("strong",[t._v("디플로이먼트(deployment)")])]),t._v(" "),s("li",[t._v("사용자가 쿠버네티스 클러스터에 컨테이너를 실행하라고 명령하면 지정된 컨테이너 이미지를 가져와 쿠버네티스 클러스터 안에서 실행")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl get deployments\n")])])]),s("ul",[s("li",[s("strong",[t._v("NAME:")]),t._v(" 클러스터에 배포한 디플로이먼트 이름")]),t._v(" "),s("li",[s("strong",[t._v("READY:")]),t._v(" 사용자가 최종 배포한 파드 개수와 디플로이먼트를 이용해 현재 클러스터에 실제로 동작시킨 파드 개수를 X/X 형태로 표시")]),t._v(" "),s("li",[s("strong",[t._v("UP-TO-DATE:")]),t._v(" 디플로이먼트 설정에 정의한 대로 동작중인 신규 파드 개수")]),t._v(" "),s("li",[s("strong",[t._v("AVAILABLE:")]),t._v(" 서비스 가능한 파드 개수로 헬스 체크로 서비스 가능한 상태라고 판단하면, AVAILABLE 항목의 파드 개수에 포함")]),t._v(" "),s("li",[s("strong",[t._v("AGE:")]),t._v(" 디플로이먼트를 생성한 후 얼마나 지났는지 시간을 표시")])]),t._v(" "),s("h3",{attrs:{id:"템플릿으로-컨테이너-실행하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#템플릿으로-컨테이너-실행하기"}},[t._v("#")]),t._v(" 템플릿으로 컨테이너 실행하기")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ kubectl apply -f nginx-app.yaml\n")])])]),s("ul",[s("li",[t._v("쿠버네티스의 자원들은 관련 설정을 정의한 템플릿과 "),s("code",[t._v("$ kubectl apply")]),t._v(" 명령을 이용해 선억적 형태로 관리할 것을 권장")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"referenses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referenses"}},[t._v("#")]),t._v(" Referenses")]),t._v(" "),s("ul",[s("li",[t._v("쿠버네티스 입문 - 90가지 예제로 배우는 컨테이너 관리 자동화 표준 / 동양북스")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);