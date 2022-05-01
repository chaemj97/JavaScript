# JavaScript



- 객체 (Object)

  - 객체는 속성(property)의 집합이며, 중괄호 내부에 key와 value의 쌍으로 표현
  - key는 문자열 타입만 가능
    - 구분자가 있으면 따옴표로 묶어서 표현
  - value는 모든 타입 가능
  - 객체 요소 접근은 점 또는 대괄호로 가능
    - key 이름에 구분자가 있으면 대괄호 접근만 가능

  ```
  const me = {
      name :'민지',
      phone : '010',
      'samsung software' : {
     		class :'구미',
     		num : '2'
    }
  }
  console.log(me.name) // 민지
  console.log(me.phone) // 010
  console.log(me['samsung software']) // {class: '구미', num: '2'}
  console.log(me['samsung software'].class) // 구미
  ```

  

- **객체와 메서드**

  - 메서드는 객체의 속성이 참조하는 함수
  - 객체.메서드명()으로 호출 가능
  - 메서드 내부에서는 this 키워드가 객체를 의미

  ```
  const you = {
  	firstName: '진경',
  	lastName: '박',
  	fullName: this.firstName + this.lastName, // 메서드가 아니라 정상출력 X(NaN)
  	getFullName: function() {
  		return this.firstName + this.lastName // 메서드, 진경박
  	}
  }
  you.getFullName()
  ```

  

- **객체 관련 ES6 문법 익히기**

  - 속성명 축약(shorthand)

    - 객체를 정의할 때 key와 할당하는 변수의 이름이 같으면 축약 가능

    ```
    const books = ['a','b']
    const magazines = ['c','d']
    const bookShop = {
    	books : books,
    	magazines : magazines
    }
    console.log(bookShop)
    // {books: Array(2), magazines: Array(2)}
    
    // 축약
    const bookShop2 = {
    	books,
    	magazines
    }
    console.log(bookShop2)
    ```

  - 메서드명 축약

    - 메서드 선언 시 function 키워드 생략 가능

    ```
    const obj = {
    	greeting: function() {
    		console.log('Hi')
    	}	
    }
    obj.greeting() // Hi
    
    //축약
    const obj2 = {
    	greeting() {
    		console.log('Hi')
    	}
    }
    obj2.greeting() // Hi
    ```

  - 계산된 속성 (computed property name)

    - 객체를 정의할 때 key의 이름을 표현식을 이용하여 동적으로 생성 가능

    ```
    const key = 'regions'
    const value = ['구미','서울']
    const ssafy = {
    	[key]: value
    }
    console.log(ssafy) // {regions: Array(2)}
    console.log(ssafy.regions) // ['구미', '서울']
    ```

  - Spread operator

    - spread operator(...)를 사용하면 객체 내부에서 객체 전개 가능
    - 얕은 복사에 활용 가능

    ```
    const obj3 = {b: 1, c: 2, d: 3}
    const newObj = {a : 0, ...obj3, e: 4}
    console.log(newObj) // {a: 0, b: 1, c: 2, d: 3, e: 4}
    ```

    

- **JSON(JavaScript Object Notation)**
  - key-value쌍의 형태로 데이터를 표기하는 언어 독립적 표준 포맷
  - 자바스크립트의 객체와 유사하게 생겼으나 실제로는 문자열 타입
    - JS의 객체로써 조작하기 위해서는 구문 분석(parsing)이 필수
  - 자바스크립트에서는 JSON을 조작하기 위한 두 가지 내장 메서드를 제공
    - JSON.parse() : JSON -> 자바스크립트 객체
    - JSON.stringify() : 자바스크립트 객체 -> JSON



- **this**
  - JS의 this는 실행 문맥(execution context)에 따라 다른 대상을 가리킨다.
  - class 내부의 생성자(constructor)함수
    - this는 생성되는 객체를 가리킴(Python의 self)
  - 메서드(객체.메서드명()으로 호출 가능한 함수)
    - this는 해당 메서드가 소속된 객체를 가리킴
  - 위의 두가지 경우를 제외하면 모두 최상위 객체(window)를 가리킴.



- **function 키워드와 화살표 함수 차이**
  - 함수 내부에 this 키워드가 존재할 경우 : 다르게
  - 함수 내부에 this 키워드가 존재하지 않을 경우 : 완전히 동일하게



- ladash

  - https://www.jsdelivr.com/package/npm/lodash

    - <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

  - 모듈성, 성능 및 추가 기능을 제공하는 JavaScript 유틸리티 라이브러리

  ```
  _.sample([1,2,3,4]) // 랜덤으로 1개 뽑기
  ```

  - 깊은 복사 가능

  ```
  const original = {a: {b: 1}}
  const ref = original
  const copy = _.cloneDeep(original)
  
  console.log(original.a.b, ref.a.b, copy.a.b) // 1, 1, 1
  
  ref.a.b = 10
  console.log(original.a.b, ref.a.b, copy.a.b) // 10, 10, 1
  
  copy.a.b = 100
  console.log(original.a.b, ref.a.b, copy.a.b) // 10, 10, 100
  ```

  