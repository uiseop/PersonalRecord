# <a href="https://school.programmers.co.kr/skill_check_assignments/331">(React)프로그래머스 인사 정보 SPA 리뉴얼 제작</a>

<img src="https://grepp-programmers.s3.amazonaws.com/production/file_resource/2443/img-skillup-bg-human-resources_2x.png">


- 프로그래머스 Vanilla JS 과제를 React로 구현해봤습니다.
- 필수 요구사항 중 몇 직접 구현해보고자 하는 기술들을 구현해보자!

## 무한 스크롤 구현
- Scroll Event로 구현의 한계를 해결하고자 `Intersection Oberserver API`를 사용해서 구현해보았습니다.

## Form 구현
1. `useRef`로 구현
  - `useRef`만을 사용하여 사용자의 입력의 Valid를 단순히 `submit` 이벤트가 발생했을 때에만 확인. Valid 확인 메시지는 input 요소의 `setAttribute`를 통해 설정
2. `useState`로 구현
  - 사용자의 입력을 동적으로 확인하며 `onSubmit` 이벤트를 감지하는 코드로 변경
3. `React Hook Form`라이브러리 활용
  - Form과 관련된 기능들을 쉽게 처리해주는 라이브러리를 활용해서 구현