# JavaScript



- **문자열(String) 관련 주요 메서드 목록**

  - includes : 특정 문자열의 존재여부를 참/거짓으로 반환

    ```
    const str = 'a santa at nasa'
    str.includes('santa') // true
    str.includes('asan') // false
    ```

  - split : 문자열을 토큰 기준으로 나눈 배열 반환

    - 인자가 없으면 기존 문자열을 배열에 담아 반환

    ```
    const str2 = 'a cup'
    str2.split() // ['a cup']
    str2.split('') // ['a', ' ', 'c', 'u', 'p']
    str2.split(' ') // ['a', 'cup']
    ```

  - replace : 해당 문자열을 대상 문자열로 교체하여 반환(맨 왼쪽 1개만)

    - replaceAll(모두)

    ```
    const str3 = 'a b c d'
    str3.replace(' ','-') // 'a-b c d'
    str3.replaceAll(' ','-') // 'a-b-c-d'
    ```

  - trim : 문자열의 좌우 공백 제거하여 반환

    - trimStart(왼쪽 공백만 제거), trimEnd(오른쪽 공백만 제거)

    ```
    const str4 = '   hello   '
    str4.trim() // 'hello'
    str4.trimStart() // 'hello   '
    str4.trimEnd() // '   hello'
    ```

    

- **배열 관련 메서드 목록**

  - 참조 타입

  - reverse : 원본 배열의 요소들의 순서를 반대로 정렬

    ```
    const n = [1,2,3,4,5,6]
    n.reverse()
    console.log(n) // [6, 5, 4, 3, 2, 1]
    ```

  - push & pop : 배열의 가장 뒤에 요소를 추가 또는 제거

    ```
    n.push(100)
    console.log(n) // [6, 5, 4, 3, 2, 1, 100]
    n.pop()
    console.log(n) // [6, 5, 4, 3, 2, 1]
    ```

  - unshift & shift : 배열의 가장 앞에 요소를 추가 또는 제거

    ```
    n.unshift(100)
    console.log(n) // [100, 6, 5, 4, 3, 2, 1]
    n.shift()
    console.log(n) // [6, 5, 4, 3, 2, 1]
    ```

  - includes : 배열에 특정 값이 존재하는지 판별 후 참/거짓 반환

    ```
    console.log(n.includes(1)) // true
    console.log(n.includes(100)) // false
    ```

  - indexOf : 배열에 특정 값이 존재하는지 판별 후 인덱스 반환

    - 요소가 없을 경우 -1 반환

    ```
    let result1
    result1 = n.indexOf(3)
    console.log(result1) // 3
    result2 = n.indexOf(100)
    console.log(result2) // -1
    ```

  - join : 배열의 모든 요소를 구분자를 이용하여 연결

    - 구분자 생략 시 쉼표 기준

    ```
    result3 = n.join()
    console.log(result3) // 6,5,4,3,2,1
    result4 = n.join('')
    console.log(result4) // 654321
    result5 = n.join(' ')
    console.log(result5) // 6 5 4 3 2 1
    result6 = n.join('-')
    console.log(result6) // 6-5-4-3-2-1
    ```

  - Spread operator

    ```
    const array5 =[1,2,3]
    const newArray = [0,...array5,4]
    console.log(newArray) // [0,1,2,3,4]
    ```

    

- **배열 관련 메서드 2**

  - 배열을 순회하며 특정 로직을 수행하는 메서드

  - 메서드 호출 시 인자로 callback 함수를 받는 것이 특징

    - callback 함수 : 어떤 함수의 내부에서 실행될 목적으로 인자로 넘겨받는 함수를 말함

  - forEach : 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행

    - 콜백 함수 매개변수 : element, index, arry
    - 반환 값 없음

    ```
    const fruits1 = ['딸기','수박','메론','체리']
    	fruits1.forEach((fruit,index) => {
    	console.log(fruit,index)
    	// 딸기 0
    	// 수박 1
    	// 메론 2
    	// 체리 3
    })
    ```

  - map : 콜백 함수의 반환 값을 요소로 하는 새로운 배열 반환

    ````
    const nn = [1,2,3,4,5]
    	const doublenn = nn.map((num) => {
    	return num*2
    })
    console.log(doublenn) // [2, 4, 6, 8, 10]
    ````

  - filter : 콜백 함수의 반환 값이 참인 요소들만 모아서 새로운 배열을 반환

    ```
    const oddNumber = nn.filter((num) => {
    	return num % 2
    })
    console.log(oddNumber) // 1, 3, 5
    ```

  - reduce : 콜백 함수의 반환 값들을 하나의 값(acc)에 누적 후 반환

    - acc : 이전 callback 함수의 반환 값이 누적되는 변수
    - initialValue(optional) : 최초 callback 함수 호출 시 acc에 할당되는 값, default 값은 배열의 첫번째 값, 빈 배열의 경우 제공하지 않으면 에러 발생

    ```
    const result7 = nn.reduce((acc,num) => {
    	return acc + num
    },0)
    console.log(result7) // 15
    ```

  - find : 콜백 함수의 반환 값이 참이면, 조건을 만족하는 첫번째 요소를 반환

    - 없으면 undefined 반환

    ```
    const pro = [
    	{name:'minji',age:26},
    	{name:'jiwon',age:23},
    	{name:'hyojung',age:29}
    ]
    const result8 = pro.find((p) => {
    	return p.name === 'minji'
    })
    console.log(result8) // {name: 'minji', age: 26}
    ```

  - some : 배열의 요소 중 하나라도 판별 함수를 통과하면 참을 반환

    - 빈 배열은 항상 거짓 반환

    ```
    const num = [1,3,5,7,9]
    const hasEvenNumber = num.some((n) => {
    	return n % 2 === 0 
    })
    console.log(hasEvenNumber) // false
    const hasOddNumber = num.some((n) => {
    	return n % 2
    })
    console.log(hasOddNumber) // true
    ```

  - every : 배열의 모든 요소가 판별 함수를 통과하면 참을 반환

    - 빈 배열은 항상 참 반환

    ```
    const num1 = [2,4,6,8,10]
    const isEveryNumberEven = num1.every((n) => {
    	return n % 2 === 0
    })
    console.log(isEveryNumberEven) // true
    const isEveryNumberOdd = num1.every((n) => {
    	return n % 2
    })
    console.log(isEveryNumberOdd) // false
    ```

    