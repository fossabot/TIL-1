(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{228:function(t,a,v){"use strict";v.r(a);var s=v(19),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_03장-역할-책임-협력"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_03장-역할-책임-협력"}},[t._v("#")]),t._v(" 03장 역할, 책임, 협력")]),t._v(" "),v("p",[v("em",[t._v("Assembled by GimunLee")])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"introduction"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),v("p",[t._v("객체지향의 본질은 협력하는 객체들의 공동체를 창조하는 것이다. 객체지형 설계의 핵심은 협력을 구성하기 위해 적절한 객체를 찾고 적절한 책임을 할당하는 과정에서 드러난다.")]),t._v(" "),v("p",[t._v("애플리케이션의 기능을 구현하기 위해 어떤 협력이 필요하고 협력을 위해 어떤 역할과 책임이 필요한지를 고민하지 않은 채 너무 이른 시기에 구현에 초점을 맞추는 것은 변경하기 어렵고 유연하지 못한 코드를 낳는 원인이 된다.")]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_01-협력"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_01-협력"}},[t._v("#")]),t._v(" 01. 협력")]),t._v(" "),v("p",[t._v("객체들은 요청의 흐름을 따라 자신에게 분배된 로직을 실행하면서 애플리케이션의 전체 기능을 완성한다. 여기서 중요한 것은 다양한 객체들이 영화 예매라는 기능을 구현하기 위해 메시지를 주고받으면서 상호작용한다는 점이다.")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("협력 :")]),t._v(" 객체들이 애플리케이션의 기능을 구현하기 위해 수행하는 상호작용")]),t._v(" "),v("li",[v("strong",[t._v("책임 :")]),t._v(" 객체가 협력에 참여하기 위해 수행하는 로직")]),t._v(" "),v("li",[v("strong",[t._v("역할 :")]),t._v(" 객체들이 협력 안에서 수행하는 책임(로직)들이 모여 구성하는 것")])]),t._v(" "),v("h3",{attrs:{id:"협력"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#협력"}},[t._v("#")]),t._v(" 협력")]),t._v(" "),v("p",[t._v("협력이란 어떤 객체가 다른 객체에게 무엇인가를 요청하는 것이다. 한 객체는 어떤 것이 필요할 때 다른 객체에게 전적으로 위임하거나 서로 협력한다. 즉, 두 객체가 상호작용을 통해 더 큰 책임을 수행하는 것이다. 객체 사이의 협력을 설계할 때는 객체를 서로 분리된 인스턴스가 아닌 협력하는 파트너로 인식해야 한다.")]),t._v(" "),v("h3",{attrs:{id:"자율적인-존재"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#자율적인-존재"}},[t._v("#")]),t._v(" 자율적인 존재")]),t._v(" "),v("p",[t._v("메시지를 수신한 객체는 메서드를 실행해 요청에 응답한다. 여기서 객체가 메시지를 처리할 방법을 스스로 선택한다는 점이 중요하다. 외부의 객체는 오직 메시지만 전송할 수 있을 뿐이며 메시지를 어떻게 처리할지는 메시지를 수신한 객체가 직접 결정한다. 이것은 객체가 자신의 일을 스스로 처리할 수 있는 "),v("strong",[t._v("자율적인 존재")]),t._v("라는 것을 의미한다.")]),t._v(" "),v("h3",{attrs:{id:"예매-요금-계산"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#예매-요금-계산"}},[t._v("#")]),t._v(" 예매 요금 계산")]),t._v(" "),v("p",[t._v("Screening은 Movie에 calculataeMovieFee 메시지를 전송함으로써 예매자 한 명의 요금 계산을 요청한다. Screening이 Movie에게 처리를 위임하는 이유는 요금을 계산하는 데 필요한 기본 요금과 할인 정책을 가장 잘 알고 있는 객체가 Movie이기 때문이다.")]),t._v(" "),v("p",[t._v("요금을 계산하는 작업을 Screening이 수행한다면 Movie의 인스턴스 변수인 fee와 discountPolicy에 직접 접근해야만 할 것이다. 이 경우 Screening은 Moive의 내부 구현에 결합된다. 가장 큰 문제점은 Movie의 자율성을 훼손한다는 것이다. 자율적인 객체란 자신의 상태를 직접 관리하고 스스로의 결정에 따라 행동하는 객체이다. 객체의 자율성을 보장하기 위해서는 필요한 정보와 정보에 기반한 행동을 같은 객체 안에 모아놓아야 한다.")]),t._v(" "),v("p",[t._v("결과적으로 객체를 자율적으로 만드는 가장 기본적인 방법은 내부 구현을 "),v("strong",[t._v("캡슐화")]),t._v("하는 것이다.")]),t._v(" "),v("h3",{attrs:{id:"협력이-설계를-위한-문맥을-결정한다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#협력이-설계를-위한-문맥을-결정한다"}},[t._v("#")]),t._v(" 협력이 설계를 위한 문맥을 결정한다.")]),t._v(" "),v("p",[t._v("객체란 상태와 행동을 함께 캡슐화하는 실행 단위다. 그렇다면 객체가 가질 수 있는 상태와 행동을 어떤 기준으로 결정해야 할까? 객체를 설계할 때 어떤 행동과 상태를 할당했다면 그 이유는 무엇인가?")]),t._v(" "),v("p",[t._v("애플리케이션 안에 어떤 객체가 필요하다면 그 이유는 단 하나여야 한다. 그 객체가 어떤 협력에 참여하고 있기 때문이다. 객체가 협력에 참여할 수 있는 이유는 협력에 필요한 적절한 행동을 보유하고 있기 때문이다. 결론적으로 객체의 행동을 결정하는 것은 객체가 참여하고 있는 협력이다.")]),t._v(" "),v("p",[t._v("일반적으로 영화라는 단어를 들었을 때 대부분의 사람들은 Movie 객체가 play라는 행동을 수행할 것이라고 생각할 것이다. 하지만 지금 애플리케이션 안의 Movie에는 영화를 상영하기 위한 어떤 코드도 포함돼있지 않다.")]),t._v(" "),v("div",{staticClass:"language-java extra-class"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Movie")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Money")]),t._v(" fee"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountPolicy")]),t._v(" discountPolicy"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Money")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("calcualateMovieFee")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screening")]),t._v(" screening"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fee"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("discountPolicy"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateDiscountAmount")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("Movie의 행동을 결정하는 것은 영화 예매를 위한 협력이다. 협력이라는 문맥을 고려하지 않고 Movie의 행동을 결정하는 것은 아무런 의미가 없다. "),v("em",[v("strong",[t._v("협력이 존재하기 때문에 객체가 존재하는 것이다.")])])]),t._v(" "),v("p",[t._v("객체의 행동을 결정하는 것이 협력이라면 객체의 상태를 결정하는 것은 행동이다. 객체의 상태는 그 객체가 행동을 수행하는 데 필요한 정보가 무엇인지로 결정된다.")]),t._v(" "),v("p",[t._v("상태는 객체가 행동하는 데 필요한 정보에 의해 결정되고 행동은 협력 안에서 객체가 처리할 메시지로 결정된다. 결과적으로 객체가 참여하는 협력이 객체를 구성하는 행동과 상태 모두를 결정한다. 따라서 협력은 객체를 설계하는 데 필요한 일종의 **문맥(Context)**을 제공한다.")]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_02-책임"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_02-책임"}},[t._v("#")]),t._v(" 02. 책임")]),t._v(" "),v("h3",{attrs:{id:"책임이란-무엇인가"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#책임이란-무엇인가"}},[t._v("#")]),t._v(" 책임이란 무엇인가")]),t._v(" "),v("p",[t._v("객체를 설계하기 위해 필요한 문맥인 협력이 갖춰졌다고 하자. 다음으로 할 일은 협력에 필요한 행동을 수행할 수 있는 적절한 객체를 찾는 것이다. 이때 협력에 참여하기 위해 객체가 수행하는 행동을 "),v("strong",[t._v("책임")]),t._v("이라고 부른다.")]),t._v(" "),v("p",[t._v("객체의 책임은 "),v("strong",[t._v("객체가 무엇을 알고 있는가")]),t._v("와 "),v("strong",[t._v("무엇을 할 수 있는가")]),t._v("로 구성된다. 크레이그 라만(Craig Larman)은 이러한 분류 체계에 따라 객체의 책임을 크게 **하는 것(doing)**과 **아는 것(knowing)**의 두 가지 범주로 나누어 세분화 하고 있다.")]),t._v(" "),v("p",[t._v("객체는 자신이 맡은 책임을 수행하는 데 필요한 정보를 알고 있을 책임이 있다. 또한 객체는 자신이 할 수 없는 작업을 도와줄 객체를 알고 있을 책임이 있다. 어떤 책임을 수행하기 위해서는 그 책임을 수행하는데 필요한 정보도 함께 알아야 할 책임이 있는 것이다. 이것은 객체에게 책임을 할당하기 위한 가장 기본적인 원칙에 대한 힌트를 제공한다.")]),t._v(" "),v("p",[t._v("책임은 객체지향 설계의 핵심이다. 크레이그 라만은 ***객체지향 개발에서 가장 중요한 능력은 책임을 능숙하게 소프트웨어 객체에 할당하는 것***이라는 말로 책임 할당의 중요성을 강조하기도 했다. 사실 협력이 중요한 이유는 객체에게 할당할 책임을 결정할 수 있는 문맥을 제공하기 때문이다.")]),t._v(" "),v("p",[t._v("적절한 협력이 적절한 책임을 제공하고, 적절한 책임을 적절한 객체에게 할당해야만 단순하고 유연한 설계를 창조할 수 있다.")]),t._v(" "),v("h3",{attrs:{id:"crc-카드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#crc-카드"}},[t._v("#")]),t._v(" CRC 카드")]),t._v(" "),v("p",[t._v("CRC라는 단어는 후보(Candidate), 책임(Responsibility), 협력자(Collaborator)의 첫 글자를 따서 만들어졌다. CRC 카드는 역할을 식별하고, 책임을 할당하며, 협력을 명시적으로 표현하는 구체적이면서도 실용적인 설계 기법이다.")]),t._v(" "),v("h3",{attrs:{id:"책임-할당"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#책임-할당"}},[t._v("#")]),t._v(" 책임 할당")]),t._v(" "),v("p",[t._v("자율적인 객체를 만드는 가장 기본적인 방법은 책임을 수행하는 데 필요한 정보를 가장 잘 알고 있는 전문가에게 그 책임을 할당하는 것이다. 이를 책임 할당을 위한 "),v("strong",[t._v("INFORMATION EXPERT(정보 전문가)")]),t._v(" 패턴이라고 부른다.")]),t._v(" "),v("p",[t._v("객체들은 협력에 필요한 지식과 방법을 가장 잘 알고 있는 객체에게 도움을 요청한다. 요청에 응답하기 위해 필요한 이 행동이 객체가 수행할 책임으로 이어지는 것이다.")]),t._v(" "),v("p",[t._v("객체지향 설게는 시스템의 책임을 완료하는 데 필요한 더 작은 책임을 찾아내고 이를 객체들에게 할당하는 반복적인 과정을 통해 모양을 갖춰간다.")]),t._v(" "),v("h4",{attrs:{id:"영화-예매-시스템-책임-할당-방법"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#영화-예매-시스템-책임-할당-방법"}},[t._v("#")]),t._v(" 영화 예매 시스템 책임 할당 방법")]),t._v(" "),v("p",[v("strong",[t._v("1. 메시지 선택하기")])]),t._v(" "),v("p",[t._v("객체가 책임을 수행하게 하는 유일한 방법은 메시지를 전송하는 것이므로 책임을 할당한다는 것은 메시지의 이름을 결정하는 것과 같다. 이 예에서는 "),v("em",[t._v("예매하라")]),t._v("라는 이름의 메시지로 협력을 시작하는 것이 좋을 것 같다.")]),t._v(" "),v("p",[v("strong",[t._v("2. 메시지를 처리할 객체 선택하기")])]),t._v(" "),v("p",[t._v("영화 예매와 관련된 정보를 가장 많이 알고 있는 객체에게 책임을 할당하는 것이 바람직하다. 영화를 예매하기 위해서는 상영시간과 기본 요금을 알아야 한다. 이 예에서는 "),v("em",[t._v("Screening")]),t._v("을 선택한다.")]),t._v(" "),v("p",[v("strong",[t._v("3. 새로운 메시지 선택하고 적절한 객체 찾기")])]),t._v(" "),v("p",[t._v("영화를 예매하기 위해서는 예매 가격을 계산해야 한다. Screening은 예매 가격을 계산하기 위한 정보를 충분히 들고 있지 않다. 따라서 외부의 객체에게 요청한다. 따라서 새로운 메시지가 필요하다. "),v("em",[t._v("가격을 계산하라")]),t._v("라는 이름의 새로운 메시지를 만들고, 이 메시지를 처리할 적절한 객체를 찾는다. 여기서 적절한 객체는 Movie이다. 가격을 계산할 책임을 Movie에게 할당하자. 가격을 계산하기 위해서는 할인 요금이 필요하지만 Movie는 할인 요금을 계산하는 데 적절한 정보 전문가가 아니다. 따라서 Movie는 요금을 계산하는 데 필요한 요청을 외부에 전송해야 한다. "),v("em",[t._v("할인 요금을 계산하라")]),t._v("라는 새로운 메시지를 발견하게 된 것이다.")]),t._v(" "),v("p",[v("em",[v("strong",[t._v("이처럼 객체지향 설계는 협력에 필요한 메시지를 찾고 메시지에 적절한 객체를 선택하는 반복적인 과정을 통해 이뤄진다. 그리고 이런 메시지가 메시지를 수신할 객체의 책임을 결정한다.")])])]),t._v(" "),v("p",[t._v("물론 모든 책임 할당 과정이 이렇게 단순한 것은 아니다. 어떤 경우에는 응집도와 결합도의 관점에서 정보 전문가가 아닌 다른 객체에게 책임을 할당하는 것이 더 적절한 경우도 있다. 하지만 기본적인 전략은 책임을 수행할 정보 전문가를 찾는 것이다. 정보 전문가에게 책임을 할당하는 것만으로도 상태와 행동을 함께 가지는 자율적인 객체를 만들 가능성이 높아지기 때문이다.")]),t._v(" "),v("h3",{attrs:{id:"책임-주도-설계"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#책임-주도-설계"}},[t._v("#")]),t._v(" 책임 주도 설계")]),t._v(" "),v("p",[t._v("책임을 찾고 책임을 수행할 적절한 객체를 찾아 책임을 할당하는 방식으로 협력을 설계하는 방법을 **책임 주도 설계(Resposibility-Driven Design, RDD)**라고 부른다. 방금 전에 살펴본 영화 예메 시스템의 설계 과정은 책임 주도 설계 방법에서 제시하는 기본적인 흐름을 따른 것이다.")]),t._v(" "),v("h4",{attrs:{id:"책임-주도-설계-과정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#책임-주도-설계-과정"}},[t._v("#")]),t._v(" 책임 주도 설계 과정")]),t._v(" "),v("ol",[v("li",[t._v("시스템이 사용자에게 제공해야 하는 기능인 시스템 책임을 파악한다.")]),t._v(" "),v("li",[t._v("시스템 책임을 더 작은 책임으로 분할한다.")]),t._v(" "),v("li",[t._v("분할된 책임을 수행할 수 있는 적절한 객체 또는 역할을 찾아 책임을 할당한다.")]),t._v(" "),v("li",[t._v("객체가 책임을 수행하는 도중 다른 객체의 도움이 필요한 경우 이를 책임질 적절한 객체 또는 역할을 찾는다.")]),t._v(" "),v("li",[t._v("해당 객체 또는 역할에게 책임을 할당함으로써 두 객체가 협력하게 된다.")])]),t._v(" "),v("h3",{attrs:{id:"메시지가-객체를-결정한다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#메시지가-객체를-결정한다"}},[t._v("#")]),t._v(" 메시지가 객체를 결정한다.")]),t._v(" "),v("p",[t._v("객체에게 책임을 할당하는 데 필요한 메시지를 먼저 식별하고 메시지를 처리할 객체를 나중에 선택했다는 것이 중요하다. 다시 말해 "),v("em",[v("strong",[t._v("객체가 메시지를 선택하는 것이 아니라 메시지가 객체를 선택하게 했다.")])])]),t._v(" "),v("p",[t._v("메시지가 객체를 선택하게 해야 하는 두 가지 중요한 이유가 있다.")]),t._v(" "),v("p",[v("strong",[t._v("첫째,")]),t._v(" 최소한의 인터페이스를 가질 수 있게 된다. 필요한 메시지가 식별될 때까지 객체의 퍼블릭 인터페이스에 어떤 것도 추가하지 않기 때문에 객체는 애플리케이션에 크지도, 작지도 않은 꼭 필요한 크기의 퍼블릭 인터페이스를 가질 수 있다.")]),t._v(" "),v("p",[v("strong",[t._v("둘째,")]),t._v(" 객체의 인터페이스는 무엇(what)을 하는지는 표현해야 하지만 어떻게(how) 수행하는지를 노출해서는 안 된다. 메시지는 외부의 객체가 요청하는 무언가를 의미하기 때문에 메시지를 먼저 식별하면 무엇을 수행할지에 초점을 맞추는 인터페이스를 얻을 수 있다.")]),t._v(" "),v("p",[t._v("협력을 구성하는 객체들의 인터페이스는 충분히 추상적인 동시에 최소한의 크기를 유지할 수 있었다. 객체가 충분히 추상적이면서 미니멀리즘을 따르는 인터페이스를 가지게 하고 싶다면 메시지가 객체를 선택하게 하라.")]),t._v(" "),v("h3",{attrs:{id:"행동이-상태를-결정한다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#행동이-상태를-결정한다"}},[t._v("#")]),t._v(" 행동이 상태를 결정한다.")]),t._v(" "),v("p",[t._v("객체가 존재하는 이유는 협력에 참여하기 위해서다. 따라서 객체는 협력에 필요한 행동을 제공해야 한다. 객체를 객체답게 만드는 것은 객체의 상태가 아니라 객체가 다른 객체에게 제공하는 행동이다.")]),t._v(" "),v("p",[t._v("초보자들은 객체의 행동이 아니라 상태에 초점을 맞추어 생각한다. 먼저 객체에 필요한 상태가 무엇인지를 결정하고, 그 후에 상태에 필요한 행동을 결정한다. 이런 방식은 객체의 내부 구현이 객체의 퍼블릭 인터페이스에 노출되도록 만들기 때문에 "),v("strong",[t._v("캡슐화")]),t._v("를 저해한다.")]),t._v(" "),v("p",[t._v("협력 관계 속에서 다른 객체에게 무엇을 제공해야 하고 다른 객체로부터 무엇을 얻어야 하는지를 고민해야만 훌륭한 책임을 수확할 수 있다. 개별 객체의 상태와 행동이 아닌 시스템의 기능을 구현하기 위한 협력에 초점을 맞춰야만 응집도가 높고 결합도가 낮은 객체들을 창조할 수 있다. 상태는 단지 객체가 행동을 정상적으로 수행하기 위해 필요한 재료일 뿐이다.")]),t._v(" "),v("p",[t._v("협력이 객체의 행동을 결정하고 행동이 상태를 결정한다. 그리고 그 행동이 바로 객체의 책임이 된다.")]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"역할"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#역할"}},[t._v("#")]),t._v(" 역할")]),t._v(" "),v("h3",{attrs:{id:"역할과-협력"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#역할과-협력"}},[t._v("#")]),t._v(" 역할과 협력")]),t._v(" "),v("p",[t._v("객체는 협력이라는 주어진 문맥 안에서 특정한 목적을 갖게 된다. 객체의 목적은 협력 안에서 객체가 맡게 되는 책임의 집합으로 표시된다. 이처럼 "),v("strong",[t._v("객체가 어떤 특정한 협력 안에서 수행하는 책임의 집합을 역할")]),t._v("이라고 부른다. 실제로 협력을 모델링할 때는 특정한 객체가 아니라 역할에게 책임을 할당한다고 생각하는 게 좋다.")]),t._v(" "),v("p",[v("em",[t._v("예매하라")]),t._v("라는 메시지를 처리하기에 적합한 객체를 선택할 때, 실제로는 두 개의 독립적인 단계가 합쳐진 것이다. 첫 번째 단계는 영화를 예매할 수 있는 적절한 역할이 무엇인가를 찾는 것이고, 두 번째 단계는 역할을 수행할 객체를 선택하는 것이다.")]),t._v(" "),v("h3",{attrs:{id:"유연하고-재사용-가능한-협력"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#유연하고-재사용-가능한-협력"}},[t._v("#")]),t._v(" 유연하고 재사용 가능한 협력")]),t._v(" "),v("p",[t._v("역할이 중요한 이유는 역할을 통해 유연하고 재사용 가능한 협력을 얻을 수 있기 때문이다. 만약 Movie에서 역할을 고려하지 않고 책임을 할당한다면, 할인 정책에 따라 참여하는 협력을 개별적으로 만들어야 한다. 이런 방법으로 두 협력을 구현하면 대부분의 코드가 중복되고 말 것이다. 프로그래밍에서 코드 중복은 모든 문제의 근원이기 때문에 이런 방법은 피해야 한다.")]),t._v(" "),v("p",[t._v("문제를 해결하기 위해서는 객체가 아닌 책임에 초점을 맞춰야 한다. 순수하게 책임의 관점에서 두 협력을 바라보면 모두 할인 요금 계산이라는 동일한 책임을 수행한다는 사실을 알 수 있다. 따라서 객체라는 존재를 지우고 "),v("em",[t._v("할인 요금을 계산하라")]),t._v("라는 메시지에 응답할 수 있는 대표자를 생각한다면 두 협력을 하나로 통할할 수 있고, 이 대표자를 협력 안에서 두 종류의 객체를 교대로 바꿔 끼울 수 있는 일종의 슬롯이라고 생각할 수 있다. 이 슬롯이 바로 "),v("strong",[t._v("역할")]),t._v("이다.")]),t._v(" "),v("p",[v("em",[v("strong",[t._v("역할은 다른 것으로 교체할 수 있는 책임의 집합이다.")])])]),t._v(" "),v("h4",{attrs:{id:"역할의-구현"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#역할의-구현"}},[t._v("#")]),t._v(" 역할의 구현")]),t._v(" "),v("p",[t._v("역할을 구현하는 가장 일반적인 방법은 추상 클래스와 인터페이스를 사용하는 것이다. 협력의 관점에서 추상 클래스와 인터페이스는 구체 클래스들이 따라야 하는 책임의 집합을 서술한 것이다. 추상 클래스는 책임의 일부를 구현해 놓은 것이고 인터페이스는 일체의 구현 없이 책임의 집합 만을 나열해 놓았다는 차이가 있지만 협력의 관점에서는 둘 모두 역할을 정의할 수 있는 구현 방법이라는 공통점을 공유한다.")]),t._v(" "),v("h3",{attrs:{id:"객체-대-역할"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#객체-대-역할"}},[t._v("#")]),t._v(" 객체 대 역할")]),t._v(" "),v("p",[t._v("협력에 적합한 책임을 수행하는 대상이 한 종류라면 간단하게 객체로 간주한다. 만약 여러 종류의 객체들이 참여할 수 있다면 역할이라고 부르면 된다.")]),t._v(" "),v("p",[t._v("트리그비 린스카우는 역할을 설계의 중심 개념으로 보는 "),v("strong",[t._v("역할 모델링(Role Modeling)")]),t._v(" 개념을 제안했다. 상호작용하는 객체들의 협력 패턴을 역할들 사이이 협력 패턴으로 추상화함으로써 유연하고 재사용 가능한 시스템을 얻을 수 있는 방법에 관해 잘 설명하고 있다. 역할 모델링 기법은 후에 UML에 큰 영향을 미치기도 했으며 최근의 객체지향 언어와 설계 기법들은 역할을 중요한 구성 요소로 간주하기 시작했다.")]),t._v(" "),v("p",[t._v("중요한 것은 협력을 구체적인 객체가 아니라 추상적인 역할의 관점에서 설계하면 협력이 유연하고 재사용 가능해진다는 것이다. 따라서 역할의 가장 큰 장점은 설계의 구성 요소를 추상화할 수 있다는 것이다.")]),t._v(" "),v("h3",{attrs:{id:"역할과-추상화"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#역할과-추상화"}},[t._v("#")]),t._v(" 역할과 추상화")]),t._v(" "),v("p",[t._v("협력이라는 관점에서는 세부적인 사항을 무시하고 추상화에 집중하는 것이 유용하다. 요금 계산에서 세부 사항은 할인 정책과 할인 조건의 종류다. 추상화는 할인 정책과 할인 조건이 조합되어 영화의 예매 요금을 결정한다는 사실이다.")]),t._v(" "),v("p",[v("em",[v("strong",[t._v("추상화는 상황을 단순화한다. 또한 설계를 유연하게 만들 수 있다.")])])]),t._v(" "),v("p",[t._v("앞으로 추가될 미지의 할인 정책과 할인 조건을 수용할 수 있는 유연한 설계를 얻을 수 있다. 프레임워크나 디자인 패턴과 같이 재사용 가능한 코드나 설계 아이디어를 구성하는 핵심적인 요소가 바로 역할이다.")])])}),[],!1,null,null,null);a.default=_.exports}}]);