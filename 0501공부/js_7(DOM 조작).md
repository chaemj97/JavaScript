# JavaScript



- **DOM 조작**

  - Document는 문서 한 장(HTML)에 해당하고 이를 조작

  - 조작 순서

    - 선택(Select) -> 변경(Manipulation)

    

- **DOM 관련 객체의 상속 구조**
  - EventTarget -> Node -> Element/Document -> HTMLElement
  - EventTarget 
    - Event Listener를 가질 수 있는 객체가 구현하는 DOM 인터페이스
  - Node
    - 여러 가지 DOM 타입들이 상속하는 인터페이스
  - Element
    - Document 안의 모든 객체가 상속하는 가장 범용적인 인터페이스
    - 부모인 Node와 그 부모인 EventTarget의 속성을 상속
  - Document
    - 브라우저가 불러온 웹 페이지를 나타냄
    - DOM 트리의 진입점(entry point) 역할을 수행
  - HTMLElement
    - 모든 종류의 HTMl 요소
    - 부모 element의 속성 상속



- **DOM 선택 - 선택 관련 메서드**

  - document.querySelector(seletor)
    - '#id', '.class'
    - 제공한 선택자와 일치하는 element 하나 선택
    - 제공한 CSS selector를 만족하는 첫 번째 element 객체를 반환(없다면 null)
  - document.querySelectorAll(seletor)
    - 제공한 선택자와 일치하는 여러 element를 선택
    - 매칭 할 하나 이상의 셀렉터를 포함하는 유효한 CSS selector를 인자(문자열)로 받음
    - 지정된 셀렉터에 일치하는 NodeList를 반환
    - 반환되는 NodeList는 실시간으로 반영되지 않음
  - (getElementById(id), getElementByTagName(name), getElementByClassName(names))

  ```
  // h1태그 선택
  const h1 = document.querySelector('h1')
  // 클래스가 ssafy인거 선택
  const ssafyTag = document.querySelectorAll('.ssafy')
  ```

  

- **DOM 선택 - Collection**
  - Live Collection
    - 문서가 바뀔 때 실시간으로 업데이터
    - ex) HTMLCollection, NodeList
  - Static Collection(non-live)
    - DOM 이 변경되어도 collection 내용에는 영양을 주지 않음



- **DOM 변경  - 변경 관련 메서드**

  - document.createElement()

    - 작성한 태그 명의 HTMl 요소를 생성하여 반환

  - Element.append()

    - 특정 부모  Node의 자식 NodeList 중 마지막 자식 다음에 Node 객체나 DOMString을 삽입
    - 여러 개의 Node 객체, DOMString을 추가 할 수 있음
    - 반환 값이 없음
    - 여러 개 추가 가능

    ```
    // li 태그 생성
    const liTag = document.createElement('li')
    liTag.innerText = '부울경'
    
    // ul 태그 밑으로 넣기
    const ulTag = document.querySelector('ul')
    ulTag.append(liTag)
    ulTag.append('캠퍼스')
    ```

  - Node.appendChild()

    - 한 Node를 특정 부모 Node의 자식 NodeList 중 마지막 자식으로 삽입(Node만 추가 가능)
    - 한번에 오직 하나의 Node만 추가할 수 있음
    - 만약 주어진 Node가 이미 문서에 존재하는 다른 Node를 참조한다면 새로운 위치로 이동

    ```
    // li 태그 생성
    const newliTag = document.createElement('li')
    newliTag.innerText = '대전'
    
    // ul 태그 밑으로 넣기
    ulTag.appendChild(newliTag)
    ulTag.appendChild('캠퍼스') // 불가
    ```

  

- **DOM 변경 - 변경 관련 속성**

  - Node.innerText
    - Node 객체와 그 자손의 텍스트 컨텐츠(DOMString)를 표현
    - 줄 바꿈을 인식하고 숨겨진 내용을 무시하는 등 최종적으로 스타일링이 적용된 모습으로 표현
  - Element.innerHTMl
    - 요소 내에 포함된 HTML 마크업을 반환
    - XSS 공격에 취약하므로 사용 시 주의
      - 공격자가 입력요소를 사용하여 웹 사이트 클라이언트 측 코드에 악성 스크립트를 삽입해 공격하는 방법
      - 피해자의 브라우저가 악성 스크립트를 실행하며 공격자가 엑세스 제어를 우회하고 사용자를 가장 할 수 있도록 함

  ```
  const liTag2 = document.createElement('li')
  liTag2.innerText = '<li>춘천</li>' // <li>춘천</li>
  const liTag3 = document.createElement('li')
  liTag3.innerHTML = '<li>춘천</li>' // 춘천
  ulTag.append(liTag2, liTag3)
  ```

  

- **DOM 삭제 - 삭제 관련 메서드**

  - ChildNode.remove()

    - Node가 속한 트리에서 해당 Node를 제거

    ```
    h1.remove()
    ```

  - Node.removeChild()

    - DOM에서 자식  Node를 제거하고 제거된 Node를 반환
    - Node는 인자로 들어가는 자식 Node의 부모 Node

    ```
    const parent = document.querySelector('ul')
    const child = document.querySelector('ul > li') // 첫번째꺼
    const removedChild = parent.removeChild(child)
    console.log(removedChild)
    ```

    

- **DOM 속성 - 속성 관련 메서드**

  - Element.setAttribute(name, value)

    - 지정된 요소의 값을 설정
    - 속성이 이미 존재하면 값을 갱신, 존재하지 않으면 지정된 이름과 값으로 새 속성을 추가

    ```
    h1.setAttribute('class','ssafy')
    ```

  - Element.getAttribute(attributeName)

    - 해당 요소의 지정된 값(문자열)을 반환
    - 인자(attributeName)는 값을 얻고자 하는 속성의 이름

    ```
    h1.getAttribute('class') // ssafy(클래스 이름 반환)
    ```

    