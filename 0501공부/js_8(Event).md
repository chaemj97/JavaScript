# JavaScript



- **Event**
  - 네트워크 활동이나 사용자와의 상호작용 같은 사건의 발생을 알리기 위한 객체
  - 이벤트 발생
    - 마우스 클릭하거나 키보드를 누르는 등 사용자 행동으로 발생할 수도 있음
    - 특정 메서드를 호출하여 프로그래밍적으로도 만들어 낼 수 있음



- **Event 기반 인터페이스**
  - AnimationEvent, ClipboardEvent, DragEvent
  - UIEvent
    - 간단한 사용자 인터페이스 이벤트
    - Event의 상속을 받음



- **Event handler**

  - EventTarget.addEventListener(type, listener[, options])

    - 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정
    - 이벤트를 지원하는 모든 객체를 대상으로 지정 가능
    - type
      - 반응 할 이벤트 유형(대소문자 구분 문자열)
    - listener
      - 지정된 타입의 이벤트가 발생했을 때 알림을 받는 객체
      - 할 일

    ```
    // 버튼을 누르면 알림창이 뜨도록
    // 1.
    <button type="'button">버튼</button>
    
    const btn = document.querySelector('button')
    btn.addEventListener('click',function(evnt) {
      alert('버튼을 클릭했습니다.')
      console.log(event)
    })
    
    // 2.
    <button onclick="alertMessage()">누르기</button>
    
    const alertMessage = function() {
      alert('메롱')
    }
    
    ```

    ```
    // 입력하면 따라적기
    <form action="">
      <label for="my-text-input">내용 입력</label>
      <input type="text" id = "my-text-input">
    </form>
    <p id = 'my-paragraph'></p>
    
    const textInput = document.querySelector('#my-text-input')
    textInput.addEventListener('input', function(event) {
      const pTag = document.querySelector('#my-paragraph')
      pTag.innerText = event.target.value
    })
    ```

    ```
    // 입력하면 색이 바뀌기
    <h2>Change My Color</h2>
    <label for="change-color-input">원하는 색상 입력</label>
    <input type="text" id="change-color-input">
    
    const colorInput = document.querySelector('#change-color-input')
    const changeColor = function(event) {
      const h2Tag = document.querySelector('h2')
      h2Tag.style.color = event.target.value
    }
    colorInput.addEventListener('input', changeColor)
    ```



- **Event 취소**

  - event.preventDefault()
  - 현재 이벤트의 기본 동작을 중단
  - HTML 요소의 기본 동작을 작동하지 않게 막음
    - ex) a 태그의 기본 동작은 클릭 시 링크로 이동
    - form 태그의 기본 동작은 form 데이터 전송
  - 이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지 않고 그 이벤트를 취소
  - 취소 할 수 없는 이벤트도 존재
    - 이벤트의 취소 가능 여부는 event.cancelable을 사용해 확인할 수 있음

  ```
  // 체크박스에 표시 못하도록
  <input type="checkbox" id="my-checkbox">
  
  const checkBox = document.querySelector('#my-checkbox')
  checkBox.addEventListener('click',function(event){
    event.preventDefault()
    console.log(event)
  })
  ```