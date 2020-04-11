(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{310:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_05장-책임-할당하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_05장-책임-할당하기"}},[t._v("#")]),t._v(" 05장 책임 할당하기")]),t._v(" "),a("ABG"),t._v(" "),a("h2",{attrs:{id:"_01-책임-주도-설계를-향해"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-책임-주도-설계를-향해"}},[t._v("#")]),t._v(" 01. 책임 주도 설계를 향해")]),t._v(" "),a("p",[t._v("데이터 중심의 설계에서 책임 중심의 설계로 전환하기 위해서는 다음의 두 가지 원칙을 따라야 한다.")]),t._v(" "),a("ul",[a("li",[t._v("데이터보다 행동을 먼저 결정하라")]),t._v(" "),a("li",[t._v("협력이라는 문맥 안에서 책임을 결정하라")])]),t._v(" "),a("h3",{attrs:{id:"데이터보다-행동을-먼저-결정하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터보다-행동을-먼저-결정하라"}},[t._v("#")]),t._v(" 데이터보다 행동을 먼저 결정하라")]),t._v(" "),a("p",[t._v("객체에게 중요한 것은 데이터가 아니라 외부에 제공하는 행동이다. 클라이언트의 관점에서 객체가 수행하는 행동이란 곧 객체의 책임을 의미한다. 객체는 협력에 참여하기 위해 존재하며 협력 안에서 수행하는 책임이 객체의 존재가치를 증명한다.")]),t._v(" "),a("ol",[a("li",[t._v("이 객체가 수행해야 하는 책임은 무엇인가")]),t._v(" "),a("li",[t._v("이 책임을 수행하는 데 필요한 데이터는 무엇인가")])]),t._v(" "),a("p",[t._v("다시 말해 책임 중심의 설계에서는 객체의 행동, 즉 책임을 먼저 결정한 후에 객체의 상태를 결정한다는 것이다.")]),t._v(" "),a("h3",{attrs:{id:"협력이라는-문맥-안에서-책임을-결정하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#협력이라는-문맥-안에서-책임을-결정하라"}},[t._v("#")]),t._v(" 협력이라는 문맥 안에서 책임을 결정하라")]),t._v(" "),a("p",[t._v("객체에게 할당된 책임의 품질은 협력에 적합한 정도로 결정된다. 객체에게 할당된 책임이 협력에 어울리지 않는다면 그 책임이 나쁜 것이다. 객체의 입장에서는 책임이 조금 어색해 보이더라도 협력에 적합하다면 그 책임은 좋은 것이다. 책임은 객체의 입장이 아니라 객체가 참여하는 협력에 적합해야 한다.")]),t._v(" "),a("p",[t._v("협력에 적합한 책임을 수확하기 위해서는 객체를 결정한 후에 메시지를 선택하는 것이 아니라 메시지를 결정한 후에 객체를 선택해야 한다. 메시지가 존재하기 때문에 그 메시지를 처리할 객체가 필요한 것이다. 객체가 메시지를 선택하는 것이 아니라 메시지가 객체를 선택하게 해야 한다.")]),t._v(" "),a("h3",{attrs:{id:"책임-주도-설계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#책임-주도-설계"}},[t._v("#")]),t._v(" 책임 주도 설계")]),t._v(" "),a("p",[t._v("다음은 3장에서 설명한 책임 주도 설계의 흐름을 다시 나열한 것이다.")]),t._v(" "),a("ul",[a("li",[t._v("시스템이 사용자에게 제공해야 하는 기능인 시스템 책임을 파악한다.")]),t._v(" "),a("li",[t._v("시스템 책임을 더 작은 책임으로 분할한다.")]),t._v(" "),a("li",[t._v("분할된 책임을 수행할 수 있는 적절한 객체 또는 역할을 찾아 책임을 할당한다.")]),t._v(" "),a("li",[t._v("객체가 책임을 수행하는 도중 다른 객체의 도움이 필요한 경우 이를 책임질 적절한 객체 또는 역할을 찾는다.")]),t._v(" "),a("li",[t._v("해당 객체 또는 역할에게 책임을 할당함으로써 두 객체가 협력하게 한다.")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_02-책임-할당을-위한-grasp-패턴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-책임-할당을-위한-grasp-패턴"}},[t._v("#")]),t._v(" 02. 책임 할당을 위한 GRASP 패턴")]),t._v(" "),a("p",[t._v("객체지향이 태어나고 성숙해가는 동안 많은 사람들이 다양한 책임 할당 기법을 고안했다. 그중에서 대중적으로 가장 널리 알려진 것은 크레이그 라만(Craig Larman)이 패턴 형식으로 제안한 "),a("strong",[t._v("GRASP 패턴")]),t._v('이다. GRASP은 "General Responsibility Assignment Software Pattern(일반적인 책임 할당을 위한 소프트웨어 패턴)"의 약자로 '),a("strong",[t._v("객체에게 책임을 할당할 때 지침으로 삼을 수 있는 원칙들의 집합을 패턴 형식으로 정리")]),t._v("한 것이다.")]),t._v(" "),a("h3",{attrs:{id:"도메인-개념에서-출발하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#도메인-개념에서-출발하기"}},[t._v("#")]),t._v(" 도메인 개념에서 출발하기")]),t._v(" "),a("p",[t._v("설계를 시작하기 전에 도메인에 대한 개략적인 모습을 그려 보는 것이 유용하다. 도메인 안에는 무수히 많은 개념들이 존재하며 이 도메인 개념들을 책임 할당의 대상으로 사용하면 코드에 도메인의 모습을 투영하기가 좀 더 수월해진다. 따라서 어떤 책임을 할당해야 할 때 가장 먼저 고민해야 하는 유력한 후보는 바로 도메인 개념이다.")]),t._v(" "),a("h3",{attrs:{id:"정보-전문가에게-책임을-할당하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정보-전문가에게-책임을-할당하라"}},[t._v("#")]),t._v(" 정보 전문가에게 책임을 할당하라")]),t._v(" "),a("p",[t._v("책임 주도 설계 방식의 첫 단계는 애플리케이션이 제공해야 하는 기능을 애플리케이션의 책임으로 생각하는 것이다. 이 책임을 애플리케이션에 대해 전송된 메시지로 간주하고 이 메시지를 책임질 첫 번째 객체를 선택하는 것으로 설계를 시작한다.")]),t._v(" "),a("p",[t._v("사용자에게 제공해야 하는 기능은 영화를 예매하는 것이다. 이를 책임으로 간주하면 애플리케이션은 영화를 예매할 책임이 있다고 말할 수 있다. 이제 이 책임을 수행하는 데 필요한 메시지를 결정해야 한다. 메시지는 메시지를 수신할 객체가 아니라 메시지를 전송할 객체의 의도를 반영해서 결정해야 한다. 따라서 첫 번째 질문은 다음과 같다.")]),t._v(" "),a("p",[a("strong",[t._v("1. 메시지를 전송할 객체는 무엇을 원하는가?")])]),t._v(" "),a("p",[a("em",[t._v("예매하라")])]),t._v(" "),a("p",[a("strong",[t._v("2. 메시지를 수신할 적합한 객체는 누구인가?")])]),t._v(" "),a("p",[t._v("이 질문에 답하기 위해서는 객체가 상태와 행동을 통합한 캡슐화의 단위라는 사실에 집중해야 한다. 객체에게 책임을 할당하는 첫 번째 원칙은 책임을 수행할 정보를 알고 있는 객체에게 책임을 할당하는 것이다. GRASP에서는 INFORMATION EXPERT 패턴이라고 부른다.")]),t._v(" "),a("h4",{attrs:{id:"information-expert-정보-전문가-패턴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#information-expert-정보-전문가-패턴"}},[t._v("#")]),t._v(" INFORMATION EXPERT(정보 전문가) 패턴")]),t._v(" "),a("p",[t._v("이 패턴은 객체가 자신이 소유하고 있는 정보와 관련된 작업을 수행한다는 일반적인 직관을 표현한 것이다. 여기서 이야기하는 정보는 데이터와 다르다는 사실에 주의하라. 책임을 수행하는 객체가 정보를 알고 있다고 해서 그 정보를 저장하고 있을 필요는 없다.")]),t._v(" "),a("p",[t._v("INFORMATION EXPERT 패턴에 따르면 예매하는데 필요한 정보를 가장 많이 알고 있는 객체에게 "),a("em",[t._v("예매하라")]),t._v(" 메시지를 처리할 책임을 할당해야 한다. 아마 상영이라는 도메인 개념이 적합할 것이다.")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("이 과정 반복 (책 140p ~ 141p)")])])]),t._v(" "),a("h3",{attrs:{id:"높은-응집도와-낮은-결합도"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#높은-응집도와-낮은-결합도"}},[t._v("#")]),t._v(" 높은 응집도와 낮은 결합도")]),t._v(" "),a("p",[t._v("설계는 트레이드오프 활동이라는 것을 기억하라. 동일한 기능을 구현할 수 있는 무수히 많은 설계가 존재한다. 따라서 실제로 설계를 진행하다 보면 몇 가지 설계 중에서 한 가지를 선택해야 하는 경우가 빈번하게 발생한다.")]),t._v(" "),a("p",[t._v("책임을 할당할 수 있는 다양한 대안들이 존재한다면 응집도와 겹합도의 측면에서 더 나은 대안을 선택하는 것이 좋다. GRASP에서는 이를 "),a("strong",[t._v("LOW COUPLING(낮은 결합도)")]),t._v(" 패턴과 "),a("strong",[t._v("HIGH COHESION(높은 응집도)")]),t._v(" 패턴이라고 부른다.")]),t._v(" "),a("h3",{attrs:{id:"창조자에게-객체-생성-책임을-할당하라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#창조자에게-객체-생성-책임을-할당하라"}},[t._v("#")]),t._v(" 창조자에게 객체 생성 책임을 할당하라")]),t._v(" "),a("p",[t._v("영화 예매 협력의 최종 결과물은 Reservation 인스턴스를 생성하는 것이다. 이것은 협력에 참여하는 어떤 객체에게는 Reservation 인스턴스를 생성할 책임을 할당해야 한다는 것을 의미한다. "),a("strong",[t._v("GRASP의 CREATOR(창조자)")]),t._v(" 패턴은 이 같은 경우에 사용할 수 있는 책임 할당 패턴으로서 객체를 생성할 책임을 어떤 객체에게 할당할지에 대한 지침을 제공한다.")]),t._v(" "),a("p",[a("strong",[t._v("CREATOR 패턴")]),t._v("의 의도는 어떤 방식으로든 생성되는 객체와 연결되거나 관련될 필요가 있는 객체에 해당 객체를 생성할 책임을 맡기는 것이다. 생성될 객체에 대해 잘 알고 있어야 하거나 그 객체를 사용해야 하는 객체는 어떤 방식으로든 생성될 객체와 연결될 것이다. 다시 말해서 두 객체는 서로 결합된다.")]),t._v(" "),a("p",[t._v("이미 결합돼 있는 객체에게 생성 책임을 할당하는 것은 설계의 전체적인 결합도에 영향을 미치지 않는다. 결과적으로 CREATOR 패턴은 이미 존재하는 객체 사이의 관계를 이용하기 때문에 설계가 낮은 결합도를 유지할 수 있게 한다.")]),t._v(" "),a("p",[t._v("이 예에서는 Screening을 Reservation의 "),a("strong",[t._v("CREATOR")]),t._v("로 선택하는 것이 적절해 보인다.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_03-구현을-통한-검증"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_03-구현을-통한-검증"}},[t._v("#")]),t._v(" 03. 구현을 통한 검증")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("구현 (책 146p ~ 151p)")])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountCondition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountConditionType")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sequence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DayOfWeek")]),t._v(" dayOfWeek"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalTime")]),t._v(" startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalTime")]),t._v(" endTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSatisfiedBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screening")]),t._v(" screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PERIOD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSatisFiedByPeriod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSatisfiedBySequence")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSatisfiedByPeriod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screening")]),t._v(" screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dayOfWeek"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWhenScreened")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDayOfWeek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n      startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWhenScreened")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocalTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n      endTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAfter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWhenScreened")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocalTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("'\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSatisfiedBySequence")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screening")]),t._v(" screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sequence "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSequence")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountConditionType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  SEQUENCE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 순번 조건")]),t._v("\n  PERIOD    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 기간 조건")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"discountcondition-개선하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discountcondition-개선하기"}},[t._v("#")]),t._v(" DiscountCondition 개선하기")]),t._v(" "),a("p",[t._v("DiscountCondition 클래스는 아래 3가지 이유로 변경될 수 있다.")]),t._v(" "),a("ul",[a("li",[t._v("새로운 할인 조건 추가")]),t._v(" "),a("li",[t._v("순번 조건을 판단하는 로직 변경")]),t._v(" "),a("li",[t._v("기간 조건을 판단하는 로직이 변경되는 경우")])]),t._v(" "),a("p",[t._v("DiscountCondition은 하나 이상의 변경 이유를 가지기 때문에 응집도가 낮다. 이러한 문제를 해결하기 위해서는 "),a("strong",[t._v("변경의 이유에 따라 클래스를 분리해야 한다.")])]),t._v(" "),a("p",[t._v("코드를 통해 변경의 이유를 파악할 수 있는 첫 번째 방법은 "),a("strong",[t._v("인스턴스 변수가 초기화되는 시점")]),t._v("을 살펴보는 것이다. 응집도가 높은 클래스는 인스턴스를 생성할 때 모든 속성을 함께 초기화한다. 반면 응집도가 낮은 클래스는 객체의 속성 중 일부만 초기화하고 일부는 초기화되지 않은 상태로 남겨진다. "),a("strong",[t._v("함께 초기화 되는 속성을 기준으로 코드를 분리해야 한다.")])]),t._v(" "),a("p",[t._v("두 번째 방법은 "),a("strong",[t._v("메서드들이 인스턴스 변수를 사용하는 방식")]),t._v("을 살펴보는 것이다. 모든 메서드가 객체의 모든 속성을 사용한다면 클래스의 응집도는 높다고 볼 수 있다. 반면 메서드들이 사용하는 속성에 따라 그룹이 나뉜다면 클래스의 응집도가 낮다고 볼 수 있다. "),a("strong",[t._v("속성 그룹과 해당 그룹에 접근하는 메서드 그룹을 기준으로 코드를 분리해야 한다.")])]),t._v(" "),a("h4",{attrs:{id:"클래스-응집도-판단하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#클래스-응집도-판단하기"}},[t._v("#")]),t._v(" 클래스 응집도 판단하기")]),t._v(" "),a("ul",[a("li",[t._v("클래스가 하나 이상의 이유로 변경돼야 한다면 응집도가 낮은 것이다. 변경의 이유를 기준으로 클래스를 분리하라.")]),t._v(" "),a("li",[t._v("클래스의 인스턴스를 초기화하는 시점에 경우에 따라 서로 다른 속성들을 초기화하고 있다면 응집도가 낮은 것이다. 초기화되는 속성의 그룹을 기준으로 클래스를 분리하라.")]),t._v(" "),a("li",[t._v("메서드 그룹이 속성 그룹을 사용하는지 여부로 나뉜다면 응집도가 낮은 것이다. 이들 그룹을 기준으로 클래스를 분리하라.")])]),t._v(" "),a("h3",{attrs:{id:"타입-분리하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#타입-분리하기"}},[t._v("#")]),t._v(" 타입 분리하기")]),t._v(" "),a("p",[t._v("DiscountCondition의 가장 큰 문제는 순번 조건과 기간 조건이라는 두 개의 독립적인 타입이 하나의 클래스 안에 공존하고 있다는 점이다.")]),t._v(" "),a("p",[t._v("해결 방법은 두 타입을 SequenceCondition과 PeriodCondition이라는 두 개의 클래스로 분리하는 것이다. 클래스를 분리하면 응집도는 높이지만, Movie의 인스턴스가 두 개의 서로 다른 클래스의 인스턴스와 모두 협력할 수 있어야 한다. 클래스를 분리하기 전에는 DiscountCondition의 내부 구현만 수정하면 Movie에는 아무런 영향도 미치지 않았다. 하지만 수정 후에는 할인 조건을 추가하려면 Movie도 함께 수정해야 한다. DiscountCondition의 입장에서 보면 응집도가 높아졌지만 변경과 캡슐화라는 관점에서 보면 전체적으로 설계의 품질이 나빠지고만 것이다.")]),t._v(" "),a("h3",{attrs:{id:"다형성을-통해-분리하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다형성을-통해-분리하기"}},[t._v("#")]),t._v(" 다형성을 통해 분리하기")]),t._v(" "),a("p",[t._v("사실 Movie의 입장에서 보면 두 클래스는 아무 차이 없다. 둘 모두 할인 여부를 판단하는 동일한 책임을 수행하고 있을 뿐이다. 이 시점이 되면 자연스럽게 "),a("strong",[t._v("역할")]),t._v("의 개념이 무대 위로 등장한다. Movie의 입장에서 두 클래스가 동일한 책임을 수행한다는 것은 동일한 역햘을 수행한다는 것을 의미한다. 역할은 협력 안에서 대체 가능성을 의미하기 때문에 SequenceCondition과 PeriodCondition에 역할의 개념을 적용하면 Movie가 구체적인 클래스는 알지 못한 채 오직 역할에 대해서만 결합되도록 의존성을 제한할 수 있다.")]),t._v(" "),a("p",[t._v("DiscountCondition의 경우에서 알 수 있듯이 객체의 암시적이 타입에 따라 행동을 분기해야 한다면 암시적인 타입을 명시적인 클래스로 정의하고 행동을 나눔으로써 응집도 문제를 해결할 수 있다. 다시 말해 "),a("em",[a("strong",[t._v("객체의 타입에 따라 변하는 행동이 있다면 타입을 분리하고 변화하는 행동을 각 타입의 책임으로 할당하라는 것이다. GRASP에서는 이를 POLYMORHPHISM(다형성) 패턴이라고 부른다.")])])]),t._v(" "),a("h3",{attrs:{id:"변경으로부터-보호하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#변경으로부터-보호하기"}},[t._v("#")]),t._v(" 변경으로부터 보호하기")]),t._v(" "),a("p",[t._v("Movie의 관점에서 DiscountCondition의 타입이 캡슐화된다는 것은 새로운 DiscountCondition 타입을 추가하더라도 Movie가 영향을 받지 않는다는 것을 의미한다. Movie에 대한 어떤 수정도 필요 없다. 오직 DiscountCondition 인터페이스를 실체화하는 클래스를 추가하는 것으로 할인 조건의 종류를 확장할 수 있다.")]),t._v(" "),a("p",[t._v("이처럼 변경을 캡슐화하도록 책임을 할당하는 것을 GRASP에서는 "),a("strong",[t._v("PROTECTED VARIATIONS(변경 보호) 패턴")]),t._v("이라고 부른다.")]),t._v(" "),a("h3",{attrs:{id:"movie-클래스-개선하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#movie-클래스-개선하기"}},[t._v("#")]),t._v(" Movie 클래스 개선하기")]),t._v(" "),a("p",[t._v("위와 마찬가지로 구현하지만, DiscountCondition의 경우에는 역할을 수행할 클래스들 사이에 구현을 공유할 필요가 없었기 때문에 인터페이스를 이용해 구현했다. Movie의 경우에는 구현을 공유할 필요가 있다. 따라서 추상 클래스를 이용해 역할을 구현하자.")]),t._v(" "),a("h3",{attrs:{id:"변경과-유연성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#변경과-유연성"}},[t._v("#")]),t._v(" 변경과 유연성")]),t._v(" "),a("p",[t._v("설계를 주도하는 것은 변경이다. 현재의 설계에서는 할인 정책을 구현하기 위해 상속을 이용하고 있기 때문에 실행 중에 영화의 할인 정책을 변경하기 위해서는 "),a("strong",[t._v("새로운 인스턴스를 생성한 후 필요한 정보를 복사해야 한다.")]),t._v(" 또한 변경 전후의 인스턴스가 개념적으로는 동일한 객체를 가리키지만 물리적으로 서로 다른 객체이기 때문에 식별자의 관점에서 혼란스러울 수 있다. 해결 방법은 상속 대신 "),a("strong",[t._v("합성")]),t._v("을 사용하는 것이다.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_04-책임-주도-설계의-대안"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04-책임-주도-설계의-대안"}},[t._v("#")]),t._v(" 04. 책임 주도 설계의 대안")]),t._v(" "),a("p",[t._v("책임 주도 설계에 익숙해지기 위해서는 부단한 노력과 시간이 필요하다.")]),t._v(" "),a("blockquote",[a("p",[t._v("객체 디자인에서 가장 기본이 되는 것 중의 하나(원칙은 아닐지라도)는 책임을 어디에 둘지를 결정하는 것이다. 나는 십년 이상 객체를 가지고 일했지만 처임 시작할 때는 여전히 적당한 위치를 찾지 못한다. 늘 이런 점이 나를 괴롭혔지만, 이제는 이런 경우에 리팩터링을 사용하면 된다는 것을 알게 되었다.")])]),t._v(" "),a("h3",{attrs:{id:"메서드-응집도"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메서드-응집도"}},[t._v("#")]),t._v(" 메서드 응집도")]),t._v(" "),a("p",[t._v("메서드의 크기가 작고 목적이 분명할수록 재사용하기도 쉽다. 작은 메서드들로 조합된 메서드는 마치 주석들을 나열한 것처럼 보이기 때문에 코드를 이해하기도 쉽다.")]),t._v(" "),a("p",[t._v("객체로 책임을 분배할 때 가장 먼저 할 일은 메서드를 응집도 있는 수준으로 분해하는 것이다. 긴 메서드를 작고 응집도 높은 메서드로 분리하면 각 메서드를 적절한 클래스로 이동하기가 더 수월해지기 때문이다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Reservation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reserve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screening")]),t._v(" screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Customer")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" audienceCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" discountable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkDiscountable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Money")]),t._v(" fee "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateFee")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" discountable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audienceCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReservation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screening"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" audienceCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("이제 메서드들의 응집도 자체는 높아졌지만 이 메서드들을 담고 있는 ReservationAgency의 응집도는 여전히 낮다. (다른 곳에서 변경이 일어나면 어쨋건 ReservationAgency 안의 메서드를 변경해야하기 때문에 응집도가 낮다.) 응집도를 높이기 위해서는 변경의 이유가 다른 메서드들을 적절한 위치로 분배해야 한다. 적절한 위치란 각 메서드가 사용하는 데이터를 정의하고 있는 클래스를 의미한다.")]),t._v(" "),a("h3",{attrs:{id:"객체를-자율적으로-만들자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#객체를-자율적으로-만들자"}},[t._v("#")]),t._v(" 객체를 자율적으로 만들자")]),t._v(" "),a("p",[t._v("어떤 메서드를 어떤 클래스로 이동시켜야 할까? 객체가 자율적인 존재여야 한다는 사실을 떠올리면 된다.")]),t._v(" "),a("p",[t._v("ReservationAgency의 isDiscountable 메서드를 보자.")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("책 참고 (172p ~ 173p)")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);