# JavaScript



- 데이터 타입

  - 원시 타입(Primitive type)
    - 객체(object)가 아닌 기본 타입
    - 변수에 해당 타입의 값이 담김
    - 다른 변수에 복사할 때 실제 값이 복사됨
  - 참조 타입(Reference type)
    - 객체(object) 타입의 자료형
      - Array, Function,...
    - 변수에 해당 객체의 참조 값이 담김
    - 다른 변수에 복사할 때 참조 값이 복사됨

  

- **원시 타입**

  - 숫자형 : NaN (Not-A-Number)
    - 계산 불가능한 경우 반환되는 값
      - ex) 'Angel'/1004 = > NaN

  - 문자열 : 템플릿 리터럴(Template Literal)

    - ES6부터 지원

      - 따옴표 대신 backtick(``)으로 표현
      - &{expression} 형태로 표현식 삽입 가능

      ```
      const firstName = '민지'
      const lastName = '채'
      const fullName = `${firstName}${lastName}`
      console.log(fullName) // 민지채
      ```

  - undefined

    - 변수의 값이 없음을 나타내는 데이터 타입
    - 변수 선언 이후 직접 값을 할당하지 않으면, 자동으로 할당

  - null

    - 변수의 값이 없음을 의도적으로 표현할 때 사용하는 데이터 타입
    - typeof 연산자의 결과 : 객체

  - Boolean

    - 조건문 또는 반복문에서 유용하게 사용

      - boolean이 아닌 데이터 타입은 자동형 변환 규칙에 따라 true 또는 false로 변환

      | 데이터 타입 | 거짓       | 참               |
      | ----------- | ---------- | ---------------- |
      | Undefined   | 항상 거짓  |                  |
      | Null        | 항상 거짓  |                  |
      | Number      | 0, -0, NaN | 나머지 모든 경우 |
      | String      | 빈 문자열  | 나머지 모든 경우 |
      | Object      |            | 항상 참          |

      

- **할당 연산자**

  - 오른쪽에 있는 피연산자의 평가 결과를 왼쪽 피연산자에 할당하는 연산자

  - Increment(++) : 1증가

  - Decrement(--) : 1감소

    ```
    let a = 10
    a += 5
    console.log(a) // 15
    a -= 5
    console.log(a) // 10
    a *= 5
    console.log(a) // 50
    a /= 5
    console.log(a) // 10
    a++
    console.log(a) // 11
    a--
    console.log(a) // 10
    ```



- **비교 연산자**

  - 피연산자들을 비교하고 결과값을 boolean으로 변환하는 연산자

  - 문자열은 유니코드 값을 사용하며 표준 사전 순서를 기반으로 비교

    - ex) 알파벳 : 알파벳 순서상 후순위가 크다, 소문자가 대문자보다 크다

    ```
    const one = 1
    const two = 2
    console.log(one < two) // true
    const aa = 'a'
    const bb = 'bb'
    console.log(aa > bb) // false
    ```

    

- **동등 비교 연산자(==)**

  - 두 피연산자가 값은 값으로 평가되는지 비교 후 boolean 값을 반환
  - 비교할 때 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교
  - 두 피연산자가 모두 객체일 경우 메모리가 같은 객체를 바라보는지 판별
  - 예상치 못한 결과가 발생할 수 있으므로 특별한 경우를 제외하고 사용X

  

- **일치 비교 연산자(===)**

  - 두 피연산자가 같은 값으로 평가되는지 비교 후 boolean 값을 반환

  - 엄격한 비교가 이뤄지며 암묵적 타입 변환이 발생X

  - 두 피연산자가 모두 객체일 경우 메모리가 같은 객체를 바라보는지 판별

    ```
    const q = 1004
    const p = '1004'
    console.log(p == q) // true 
    console.log(p === q) // false
    ```

    

- **논리 연산자**
  - and : &&
    - false && true => false
  - or : ||
    - true || false => true
  - not : !



- **삼항 연산자**

  - 세 개의 피연산자를 사용하여 조건에 따라 값을 반환하는 연산자

  - 가장 왼쪽의 조건식이 참이면 콜론 앞의 값을 사용하고 그렇지 않으면 콜론 뒤에 값을 사용

  - 삼항 연산자의 결과 값이기 때문에 변수에 할당 가능

  - 한 줄에 표기하는 것을 권장

    ```
    console.log(true ? 1:2) // 1
        console.log(false ? 1:2) // 2
        const result = Math.PI > 4 ? 'Yes' : 'No'
        console.log(result) // No
    ```

    