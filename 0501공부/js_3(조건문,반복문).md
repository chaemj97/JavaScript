# JavaScript



- **조건문(블록 스코프)**

  - if

    - 조건 표현식의 결과값을 Boolean 타입으로 변환 후 참/거짓을 판단

      ```
      const nation = 'Korea'
      if (nation === 'Korea') {
      console.log('안녕!')
      } else if (nation === 'France') {
      console.log('Bonjour!')
      } else {
      console.log('Hello!')
      }
      // 안녕
      ```

  - switch

    - 조건 표현식의 결과값이 어느 값(case)에 해당하는지 판별

    - 조건이 많아질 경우 if문보다 가독성이 나을 수 있음

      ```
      const nation2 = 'Korea'
      switch(nation2) {
      case 'Korea' : {
      console.log('안녕!')
      break // 이거 안하면 아래도 항상 실행
      }
      case 'France' : {
      console.log('Bonjour!')
      break
      }
      default : {
      console.log('Hello!')
      }
      }
      // 안녕
      ```

      

- **반복문(블록 스코프)**

  - while

    ```
    let i = 0
    while (i < 6) {
    console.log(i)
    i++
    }
    // 0,1,2,3,4,5,6
    ```

  - for

    ```
    for (initialization; condition; expression) {
    	// do something
    }
    for (let j = 0; j < 6; j++) {
    	console.log(j)
    }
    // 0,1,2,3,4,5
    ```

  - for ... in

    - 주로 객체(object)의 속성들을 순회할 때 사용
    - 배열도 순회 가능하지만 인덱스 순으로 순회한다는 보장이 없으므로 권장X

    ```
    const capitals = {
        korea : 'seoul',
        france : 'paris',
        USA : 'washington D.C'
    }
    for (let capital in capitals) {
    	console.log(capital)
    }
    // korea, france, USA 
    
    for (let capital in capitals) {
    	console.log(capitals[capital])
    }
    // seoul, paris, washington D.C
    ```

  - for ... of

    - 반복 가능한(iterable) 객체를 순회하며 값을 꺼낼 때 사용
      - array, map, set, string

    ```
    const fruits = ['딸기','바나나','메론']
    for (let fruit of fruits) {
    	fruit = fruit + '!'
    	console.log(fruit)
    }
    // 딸기!, 바나나!, 메론!
    ```

    

