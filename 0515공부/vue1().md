# Vue.js

- Vue.js

  - 사용자가 인터페이스를 만들기 위한 진보적인 자바스크립트 프레임워크

  

- SPA (Single Page Application)

  - 현재 페이지를 동적으로 렌더링함으로써 사용자와 소통하는 웹 애플리케이션
  - 단일 페이지로 구성, 서버로부터 최조에만 페이지 다운로드, 이후에는 동적으로 DOM을 구성
    - 현재 페이지 중 필요한 부분만 동적으로 다시 작성
  - 연속되는 페이지 간의 사용자 경험(UX)을 향상
    - 모바일 사용량이 증가하고 있는 현재 트래픽의 감소와 속도, 사용성, 반응성의 향상은 매우 중요
  - 동작 원리의 일부가 CSR(Client Side Rendering)의 구조를 따름
  - SPA 등장 배경
    - 스마트폰이 등장하면서 모바일 최적화의 필요성이 대두됨
      - 모바일 네이티브 앱과 같은 형태의 웹 페이지가 필요해짐
    - 이러한 문제를 해결하기 위해 Vue.js와 같은 프론트엔드 프레임워크가 등장
    - 1개의 웹 페이지에서 여러 동작이 이루어지며 모바일 앱과 비슷한 형태의 사용자 경험을 제공

  

- CSR (Client Side Rendering)

  - 서버에서 화면을 구성하는 SSR 방식과 달리 클라이언트에서 화면을 구성

  - 최초 요청 시 HTML, CSS, JS 등 데이터를 제외한 각종 리소스를 응답하고 이후 클라이언트에서는 필요한 데이터만 요청해 JS로 DOM을 렌더링하는 방식

  - 즉, 처음에는 뼈대만 받고 브라우저에서 동적으로 DOM을 그림

  - SPA가 사용하는 렌더링 방식

  - 장점

    - 서버와 클라이언트 간 트래픽 감소
    - UX 향상

  - 단점

    - SSR에 비해 전체 페이지 최종 렌더링 시점이 느림
    - 검색 엔진 최적화(SEO)에 어려움이 있음(최초 문서에 데이터 마크업이 없기 때문)

    

- SSR (Server Side Rendering)

  - 서버에서 클라이언트에게 보여줄 페이지를 모두 구성하여 전달하는 방식
  - JS 웹 프레임워크 이전에 사용되던 전통적인 렌더링 방식
  - 장점
    - 초기 구동 속도가 빠름
    - SEO에 적합(DOM에 이미 모든 데이터가 작성되어있기 때문)
  - 단점
    - 모든 요청마다 새로운 페이지를 구성하여 전달
      - 반복되는 전체 새로고침으로 인해 사용자 경험이 떨어짐
      - 상대적으로 트래픽이 많아 서버의 부담이 클 수 있음

- SSR & CSR

  - 두 방식의 차이는 최종 HTML 생성 주체가 누구인가에 따라 결정
  - 즉 실제 브라우저에 그려질(렌더링) HTML을
    서버가 만든다면 SSR / 클라이언트가 만든다면 CSR
  - 내 서비스 또는 프로젝트 구성에 맞는 방법을 적절하게 선택하는 것이 중요

  

- Vanilla JS

  - 한 유저가 작성한 게시글이 DOM상에 100개 존재
  - 이 유저가 닉네임을 변경하면, DB의 Update와 별도로 DOM상의 100개의 작성자 이름이 모두 수정되어야 함
  - '모든 요소'를 선택해서 '이벤트'를 등록하고 값을 변경

  

- Vue.js

  - DOM과 Data가 연결되어 있고
  - Data를 변경하면 이에 연결된 DOM은 알아서 변경
  - 즉, 우리가 신경 써야 할 것은 오직 Data에 대한 관리 (Developer Exp 향상)

  

- MVVM

  - Model

    - Vue에서 Model은 JS Object
    - Object === {key:value}
    - Model은 Vue Instance 내부에서 data라는 이름으로 존재
    - 이 data가 바뀌면 View(DOM)가 반응

  - View

    - Vue에서 View는 DOM(HTML)
    - Data의 변화에 따라서 바뀌는 대상

  - ViewModel

    - Vue에서 ViewModel은 모든 Vue Instance
    - View와 Model 사이에서 Data와 DOM에 관련된 모든 일을 처리
    - ViewModel을 활용해 Data를 얼마만큼 잘 처리해서 보여줄 것인지(DOM)를 고민하는 것

    

- Vue instance

  - 모든 Vue 앱은 Vue 함수로 새 인스턴스를 만드는 것부터 시작
  - Vue 인스턴스를 생성할 때는 Options 객체를 전달해야 함
  - 여러 Options들을 사용하여 원하는 동작을 구현
  - Vue Instance === Vue Component

  

- Options/DOM 

  - el
    - Vue 인스턴스에 연결할 기존 DOM 요소가 필요
    - CSS 선택자 문자열 혹은 HTML Element로 작성
    - new를 이용한 인스턴스 생성 때만 사용
  - data
    - Vue 인스턴스의 데이터 객체
    - Vue 인스턴스의 상태 데이터를 정의하는 곳
    - Vue template에서 interpolations을 통해 접근 가능
    - v-bind, v-on과 같은 directive에서도 사용 가능
    - Vue 객체 내 다른 함수에서 this 키워드를 통해 접근 가능
  - methods
    - Vue 인스턴스에 추가할 메서드
    - Vue template에서 interpolation을 통해 접근 가능
    - v-on과 같은 directive에서도 사용 가능
    - Vue 객체 내 다른 함수에서 this 키워드를 통해 접근 가능
    - 호출하면 렌더링을 다시 할 때마다 항상 함수를 실행

- 'this' keyword in vue.js

  - Vue 함수 객체 내에서 vue 인스턴스를 가리킴
  - 단, 화살표 함수 시 window

  

  

