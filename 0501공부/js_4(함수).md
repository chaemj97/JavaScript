# JavaScript



- **함수**

  - 참조타입

  - 함수 선언식(function statement, declaration)

    - 함수의 이름과 함께 정의하는 방식

    - 함수의 이름, 매개변수, 몸통(중괄호 내부)

    - 호이스팅 가능

      ```
      function add(num1,num2) {
      	return num1 + num2
      }
      add(1,2) // 3
      ```

  - 함수 표현식(function expression)

    - 함수를 표현식내에서 정의하는 방식

    - 함수 이름 생략 가능

    - 함수의 이름, 매개변수, 몸통(중괄호 내부)

      ```
      const add2 = function(num1,num2) {
      	return num1 + num2
      }
      add2(1,2) // 3
      ```

  - 기본 인자(default arguments)

    - 인자 작성시 '=' 문자 뒤 기본 인자 선언 가능

      ```
      const greeting = function(name = 'Anonymous'){
            return `Hi ${name}`
          }
          greeting() // 'Hi Anonymous'
      ```

  - 매개 변수와 인자의 개수

    ```
    const noArgs = function() {
    	return 0
    }
    noArgs(1,2,3) // 0
    
    const twoArgs = function(arg1, arg2) {
    	return [arg1, arg2]
    }
    twoArgs(1,2,3) // [1,2]
    
    const threeArgs = function(arg1, arg2, arg3) {
    	return [arg1, arg2, arg3]
    }
    threeArgs() // [undefined, undefined, undefined]
    threeArgs(1) // [1, undefined, undefined]
    threeArgs(1,2) // [1, 2, undefined]
    ```

  - Rest Parameter

    - 함수가 정해지지 않은 수의 매개변수를 배열로 받음

    - 매개변수에 인자가 넘어오지 않을 경우에는 빈 배열로 처리

      ```
      const restOpr = function(arg1, arg2, ...restArgs) {
      	return [arg1,arg2,restArgs]
      }
      restOpr(1,2,3,4,5) // [1,2,3,4,5]
      restOpr(1,2) // [1,2,[]]
      ```

  - Spread operator

    - 배열 인자를 전개하여 전달 가능

      ```
      const spreadOpr = function(arg1, arg2, arg3) {
      	return arg1 + arg2 + arg3
      }
      const numbers = [1,2,3]
      spreadOpr(...numbers) // 6
      ```



- **화살표 함수**

  - 함수를 비교적 간결하게 정의할 수 있는 문법
  - function 키워드 생략 가능
  - 함수의 매개변수가 단 하나 뿐이라면, '()'도 생략 가능
  - 함수 몸통이 표현식 하나라면 '{}'과 return도 생략 가능

  ```
  const arrow1 = function(name) {
  	return `hello ${name}`
  }
  
  // function 키워드 삭제
  const arrow2 = (name) => {return `hello ${name}`}
  
  // 매개변수가 1개일 경우 () 생략 가능
  const arrow3 = name => {return `hello ${name}`}
  
  // 몸통 표현식이 1개라면 {}, return 생략 가능
  const arrow4 = name => `hello ${name}`
  ```

  