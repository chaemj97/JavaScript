- Template Syntax

  - 렌더링 된 DOM을 기본 Vue인스턴스의 데이터에 선언적으로 바인딩할 수 있는 HTML 기반 템플릿 구문을 사용

  - Interpolation

    - ```
      <p>{{msg}}</p>
      ```

  - Directive

    - v-접두사가 있는 특수 속성

    - 속성 값은 단일 JS 표현식이 됨(v-for는 예외)

    - 표현식의 값이 변경될 때 반응적으로 DOM에 적용하는 역할을 함

    - 전달인자 (Arguments)

      - ':' 을 통해 전달인자를 받을 수도 있음

    - 수식어 (Modifiers)

      - '.' 으로 표시되는 특수 접미사
      - directive를 특별한 방법으로 바인딩 해야 함을 나타냄

    - v-text  : 엘리먼트의 textContnet를 업데이트

    - v-html : 엘리먼트의 innerHTML을 업데이트, XSS 공격에 취약, 임의로 입력받은 내용 절대 사용 금지 

    - v-show : 조건부, 요소는 항상 렌더링 되고 DOM에 남아있음

      ```
      <p v-show = 'isTrue'>....
      
      date :{
      	isTrue : true
      }
      ```

    - v-if, v-else-if, v-else : 조건부, directive의 표현식이 ture일 때만 렌더링

    - 한 번 만 렌더링 되는 경우 : v-if / 자주 변경 : v-show

    - v-for : item in items 구문 사용, 반드시 key 속성을 각 요소에 작성, v-if와 함께 사용하는 경우 v-for가 우선 순위가 높음(가능하면 같이 사용X)

    - v-on : 이벤트 리스너를 연결, 약어@

    - v-bind : HTMl 요소의 속성에 Vue의 상태 데이터를 값으로 할당, Object 형태로 사용하면 value가 true인 key가 class 바인딩 값으로 할당, 약어:

    - v-model : HTMl form 요소의 값과 data를 양방향 바인딩



- Options/Data

  - computed

    - 데이터를 기반으로 하는 계산된 속성

    - 함수의 형태로 정의하지만 함수가 아닌 함수의 반환 값이 바인딩 됨

    - 종속된 데이터에 따라 저장됨

    - 종속된 데이터가 변경될 때만 함수를 실행

    - 어떤 데이터에도 의존하지 않는 computed 속성의 경우 절대로 업데이트되지 않음

    - 반드시 반환 값이 있어야 함

  - watch

    - 데이터를 감시
    - 데이터에 변화가 일어났을 때 실행되는 함수
    - 특정 대상이 변경되었을 때 콜백 함수를 실행시키기 위한 트리거



- Options/Assets
  - filter
    - 텍스트 형식화를 적용할 수 있는 필터
    - interpolations 혹은 v-bind를 이용할 때 사용 가능
    - 필터는 자바스크립트 표현식 마지막에 | 와 함께 추가되어야 함
    - 이어서 사용 가능



- Lifecycle Hooks

  - 각 Vue 인스턴스는 생성될 때 일연의 초기화 단계를 거침

    - 예
      - 데이터 관찰 설정이 필요한 경우
      - 인스턴스를 DOM에 마운트하는 경우
      - 데이터가 변경되어 DOM를 업데이트하는 경우

  - 그 과정에서 사용자 정의 로직을 실행할 수 있는 Lifecycle Hooks도 호출됨

    