# JavaScript



- **JavaScript의 필요성**

  - 브라우저 화면을 '동적'으로 만들기 위함
  - 브라우저를 조작하 수 있는 유일한 언어

  

- **브라우저에서 할 수 있는 일**

  - DOM(Document Object Model) 조작
    - 문서(HTML) 조작
  - BOM(Browser Object Model) 조작
    - navigator, screen,location,frames,history, XHR
  - JavaScript Core(ECMAScript)
    - Data Structure(Object, Array), Conditional Expression,Iteration

  

- **DOM**

  - HTML, XML과 같은 문서를 다루기 위한 프로그래밍 인터페이스

  - 문서를 구조화하고, 구조화된 구성 요소를 하나의 객체로 취급하여 다루는 논리적 트리 모델

  - 문서가 객체(object)로 구조하되어 있으며 key로 접근 가능

  - 단순한 속성 접근, 메서드 활용뿐만 아니라 프로그래밍 언어적 특성을 활용한 조작 가능

  - 주요 객체 : window, document, navigator

  - 파싱(Parsing) 

    - 구문 분석, 해석

    - 브라우저가 문자열을 해석하여 DOM Tree로 만드는 과정

      ```
      document.title = '~~'
      ```

      

- **BOM**

  - 자바스크립트가 브라우저와 소통하기 위한 모델

  - 브라우저의 창이나 프레임을 추상화해서 프로그래밍적으로 제어할 수 있도록 제공하는 수단

  - window 객체는 모든 브라우저로부터 지원받으며 브라우저의 창(window)를 지칭

    ```
    // 탭 창 열기
    window.open()
    // 인쇄 창 열기
    window.print()
    // 메시지 및 확인, 취소 버튼이 있는 대화상자 창 열기
    window.confirm()
    // document도 브라우저 내에 종속되어 있기 때문에 window 전역 객체에 포함
    // document 표시
    window.document
    ```

    

- **JavaScript Core**

  - 브라우저을 조작하기 위한 명령어 약속(언어)

  

- 브라우저(BOM)과 그 내부의 문서(DOM)를 조작하기 위해 ECMAScript(JS)를 학습

​	

- **세미콜론 (semicolon)**
  - 자바스크립트는 세미콜론을 선택적으로 사용 가능
  - 세미콜론이 없으면 자동으로 세미콜론이 삽입됨 (ASI*)



- **식별자 작성 스타일**
  - 카멜 케이스(camelCase) : 변수, 객체, 함수에 사용
  - 파스칼케이스(PascalCase) : 클래스, 생성자에 사용
  - 대문자 스네이크 케이스(SNAKE_CASE) : 상수(변경될 가능성이 없는 값)에 사용



- **변수 선언 키워드**

  - let

    - 재할당 에정인 변수 선언시 사용

    - 변수 재선언 불가능

    - 블록 스코프

      ```
      let number = 10 // 선언 및 초기값 할당
      number = 10 // 재할당 가능
      
      let number = 50 // Uncaught SyntaxError: Identifier 'number' has already been declared
      ```

  - const

    - 재할당 예정이 없는 변수 선언 시 사용

    - 변수 재선언 불가능

    - 블록 스코프

      ```
      const number2 = 10 
      number2 = 10 // ncaught TypeError: Assignment to constant variable.
      
      const number2 = 50 // Uncaught SyntaxError: Identifier 'number' has already been declared
      ```

  - var

    - 재선언, 재할당 모두 가능

    - ES6 이전 사용

    - 호이스팅되는 특성으로 인해 예기치 못한 문제 발생 가능

      - 호이스팅 : 변수 선언 이전에 참조할수 있는 현상, undefined를 반환

    - 함수 스코프

      ```
      var number3 = 10
          var number3 = 50 // 재할당 가능
          console.log(number3) //50
      ```

      

  - 선언(Declaration) : 변수를 생성하는 행위 또는 시점

  - 할당(Assignment) : 선언된 변수에 값을 저장하는 행위 또는 시점

  - 초기화(Initialization) : 선언된 변수에 처음으로 값을 저장하는 행위 또는 시점



- **블록 스코프(block scope)**

  - if, for, 함수 등의 중괄호 내부를 가리킴
  - 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능
  - (전역 변수는 블록 스코프에서 사용 가능)

  

- **함수 스코프(function scope)**

  - 함수의 중괄호 내부를 가리킴
  - 함수 스코프를 가지는 변수는 함수 바깥에서 접근 불가능

