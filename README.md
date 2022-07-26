## Demo Link
[https://archive-640e9.web.app/](https://archive-640e9.web.app/)

## 제작 기간
6월 28일 ~ 7월 7일  
1인 개발


## 프로젝트 개요
대학 OpenGL, 3D 프로젝트 영상 결과물들과 설명, 디자인 프로세스/영상/일러스트, 외주 작업물 등이 포함된 아카이브 1개 페이지,  

2019년부터 개인 프로젝트의 일환으로 작업해온 2D/3D 캐릭터 기획/디자인/콘텐츠에 대한 2개 페이지로 구성된 정적 웹 페이지 프로젝트입니다.   

프레임워크로 React, 전역 state 관리로 recoil을 사용했으며, three.js 일부 기능을 사용하여 블렌더로 작업한 gltf 파일을 로드했습니다.  

반응형 디자인으로 구현되었으며, 스크롤 추적 기능과 스크롤 위치에 따른 스타일링 변화, css3 애니메이션 구현과 html5 video 태그 등을 사용하였으며, 이외 세부적인 기능 구현들은 아래에 작성되었습니다.  

- 스크롤 기반 인터랙션
- setInterval 기반 애니메이션
- 반응형 디자인
- 인터랙션(Moyang 페이지) / flex(Kode Kat 페이지) / grid (Archive 페이지) 화면 구성  

## 기능 구현

### global 기능

- 반응형 디자인 구현(800px 이하 모바일, 태블릿 / 800px 이상 웹)

- react-router-dom의 useLocation() 메서드를 이용한 Navigation 요소 구현

- 페이지 이동시 window.scrollTo 메서드 이용, 다음 페이지 최상단으로 이동하는 기능 구현  
![archive09](https://user-images.githubusercontent.com/68191058/179494487-5a9fddb4-c60d-4ac2-8b1f-e8d78f709393.gif)  

- 페이지 변경시 setTimeout과 framer-motion을 이용한 Fade In / Fade out 기능 구현

- 개발 단계에서 마우스, 스크롤 이벤트 발생시 DOM 내 pageX, pageY, scrollY 값을 받아 특정 위치에서의 동적 인터랙션시 트리거 역할 구현

- 스크롤 위치의 전역 state 관리를 위한 Recoil atom 객체 선언 및 useSetRecoilState, useRecoilValue 메서드 사용

- 웹킷 스크롤바 스타일링 변경

- common.scss 스타일링 파일을 이용한 point, base color 글로벌 변수화





### Moyang 페이지  

- 스크롤 값 변경시 발산형 원 애니메이션, 키프레임 구현  
![archive01](https://user-images.githubusercontent.com/68191058/179493611-212d2902-1101-4fa1-b25b-93fe80890fbd.gif)  

- position: sticky 값을 이용한 동적 타이틀 텍스트, 설명 텍스트 구현 + 스크롤 값 변경시 blur 값, opacity값 변경 구현  
![archive02](https://user-images.githubusercontent.com/68191058/179493725-5c222d1b-433a-43af-8652-3e6ac14e5ada.gif)  

- 스크롤 값 변경시 텍스트 위치 translateY 값 변경, filter(blur)값 변경, opacity값 변경 구현  
![archive03](https://user-images.githubusercontent.com/68191058/179493775-60e3b9d5-f043-4f76-a537-3dd16610a11b.gif)  

- 스크롤 값 변경시 이미지 슬라이드(slide) 정방향 / 역방향 구현  
![archive04](https://user-images.githubusercontent.com/68191058/179493816-41a4fc21-7534-4bdb-8328-5e7b52266914.gif)  

- 텍스트 gradient 구현

- 스크롤 변경 시 특정 구간 배경 Dark모드/Light모드 전환 구현  
![archive07](https://user-images.githubusercontent.com/68191058/179494246-55b10526-c68c-4ec2-9870-4cdf853350a5.gif)  

- 3D 블렌더 gltf 모델 추출 및 jsxgltf 라이브러리 이용, three.js 서브셋 @react-three/fiber, @react-three/drei 를 이용하여 gltf 모델 mesh값 선언.  
![archive05](https://user-images.githubusercontent.com/68191058/179494095-d4847dfc-c4b8-43b7-b84a-c721fce553bc.gif)  

- @react-three/fiber Canvas 컴포넌트내 camera / light / orbitControl 컴포넌트 attribute 사용 및 gltf 모델 회전 및 인터랙션 구현

- Suspense 컴포넌트 속성 fallback={null}을 이용해 브라우저 렌더링시 Canvas 내 모델의 렌더링 지연을 통한 최적화 구현

- video 태그 사용간 스크롤 값에 따른 영상 위치 변경 애니메이션과 video태그 attribute 중 재생,정지, 볼륨, 속도 인터페이스 포함된 controls, 스크롤 위치에 따른 muted boolean값 적용과 loop boolean값 적용  
![archive06](https://user-images.githubusercontent.com/68191058/179494175-4570e127-5c29-447f-9e66-4956815f657a.gif)  

- sticky 특성을 이용한 스크롤 이동간 비디오, 모바일폰 이미지 고정 구현  
![archive08](https://user-images.githubusercontent.com/68191058/179494355-30bc82d5-0847-4e96-a6d9-b71e195d99f6.gif)  

- 반복되는 아래 방향 아이콘 애니메이션 키프레임 구현

- 스크롤 값 변경에 따른 비디오 설명 텍스트 고정 및 Opacity 값을 이용한 Fade in Fade out 전환 구현

- 스크롤 값 변경시 video layout의 좌우 이동 인터랙션 구현

- 인스타그램 아이콘 색상변경/크기변경 애니메이션 및 연결 링크 구현






### Kode Kat 페이지

- display: flex를 이용한 레이아웃 구성

- setTimeout을 이용하여 3000ms 주기로 이미지 확대/축소 및 투명도 변경 구현  
![archive10](https://user-images.githubusercontent.com/68191058/179494550-83552c55-3d71-4c70-b340-8f2ce541a3ca.gif)  

- 이미지 마우스 hover시 이미지 확대/축소, 투명도 변경 구현

- Image Infinite Auto Slide 구현 - 10장의 이미지 세트에 동일한 추가 이미지 세트를 이어붙인 후, 이어붙인 이미지 세트의 첫번째 이미지가 기존 세트의 첫번째 이미지 위치에 도달할 시 가장 처음 이미지 위치로 translateX의 형식으로 구현  
![archive11](https://user-images.githubusercontent.com/68191058/179494659-81ed46c1-b385-41f9-8753-778c733a1665.gif)  







### Archive 페이지

- 스크롤 위치 값에 따른 진행도를 시각화한 최상단 ProgressBar 구현  
![archive12](https://user-images.githubusercontent.com/68191058/179494697-b64a8666-bbcf-4a71-9ded-992823e54dbe.gif)  

- 이미지 클릭시 클릭된 이미지 및 화면 비율에 맞게 출력하는 모달 작동 구현, 아무 곳이나 클릭하면 기존 페이지로 돌아가는 기능 구현  
![archive13](https://user-images.githubusercontent.com/68191058/179494735-233fc3be-72ad-4812-87e5-d27eff720b6b.gif)  

- display: grid 구현 및 이미지 개수에 따른 이미지 비율 조정 및 구분 구현

- 반복되는 레이아웃 특성에 맞춘 최적화를 위한 텍스트용 컴포넌트 선언  




## 기술 스택

- react, recoil, three.js
- react-router-dom, recoilize, styled-components, framer-motion, @react-three/fiber, @react-three/drei, three-gltf-loader, react-icons







## 회고

#### DOM의 직접 조작 및 html, css, js를 이용한 다양한 동적 애니메이션, 인터랙션 요소를 구현한 프로젝트입니다.

브라우저 렌더링 성능의 한계는 어디까지인지, 외부 DB를 이용한 이미지 데이터 송수신 과정에 발생하는 딜레이가 페이지를 경험하는 사용자 입장에서 어떻게 느껴질지, 페이지 내 대량의 이미지가 들어가는 경우 어느 정도 렌더링 성능이 떨어지는지에 대해 직접 경험하고 고민해볼 수 있었고, 디자인, 인터랙션 구성요소와 렌더링 성능 사이에 어떤 타협이 필요한지에 대해 생각해 볼 수 있는 프로젝트였습니다.

이전 토이 프로젝트들에서는 연산이 필요한 인터페이스 인터랙션 구현보다는 레이아웃 마크업에 초점을 맞췄었고 RESTapi를 통한 백엔드와의 axios 통신을 구현할 때는 브라우저 성능보다는 네트워크 통신의 성능에 의존했습니다.

이번 프로젝트에서 동적 인터페이스 및 애니메이션 구현만으로 브라우저 렌더링 성능이 크게 하락하는 경험을 했고, 이는 사용자 경험(UX)에 있어 치명적이었습니다. 그 과정에서 몇몇 UI, 애니메이션 요소에 대해선 정말 필요한 것인지 고민하고 판단할 필요가 있었으며, 그 결과 일부 인터랙션 요소들을 삭제하거나 브라우저의 연산 부담을 덜어내는 방식으로 타협하고 구현하였습니다.

Moyang 페이지에 스크롤 위치 정보를 props로 받아 커지는 circle 인터랙션은 트리거 형식의 키프레임 애니메이션으로 대체되었고, 카드 슬라이드 요소는 스크롤이 특정 위치 밖에 있을 때 렌더링 하지 않는 조건부 렌더링으로 변경되었습니다. 3D gltf 모델 갯수와 하나의 모델이 가지는 particle의 갯수도 줄었습니다. 전반적으로 이미지들의 용량도 기존에 비해 1/5~1/10 수준으로 줄여 렌더링 속도를 높였습니다.

KodeKat 페이지 또한 고해상도로 출력되었던 이미지들의 크기를 모두 줄였으며, 이미지 개수에 대해서도 굳이 필요한 내용이 아니면 축소시키거나 3D gltf 모델파트는 삭제하는 과정을 거쳤고, 그만큼 인터랙션 가능한 요소의 숫자도 줄였습니다. 

Archive 페이지 내 영상은 용량을 극단적으로 줄이기 위해 영상툴을 이용한 재렌더링이 진행되었고, '모바일 서비스 디자인 프로세스' 파트의 이미지들은 모두 resize 이후에도 로딩이 매끄럽지 못하지만, 해당 이미지 집합이 프로세스 과정을 더 잘 보여준다 판단했기에 삭제하지 않았습니다. 때문에 해당 컴포넌트가 있는 위치를 스크롤이 지날 때 30여개의 이미지 로드에 약간의 버벅임이 발생합니다.

전역 state 관리 라이브러리로 기존의 익숙한 리덕스보다 가벼운 recoil을 처음으로 사용하게 된 계기도 위와 같은 맥락입니다. 

해당 프로젝트를 진행하며, 인터랙션, 애니메이션, 이미지 등이 브라우저의 렌더링 연산에 심각한 성능저하를 야기시킬 수 있음을 알게 되었습니다. 또한 사용자 경험을 편하게 해주는 성능과 속도, 이와 별개로 사용자가 용인할 수 있는 수준의 성능, 속도는 어느 정도인지 고민해 볼 필요성이 있다고 생각합니다.

** 이미지, 비디오 등의 리소스를 줄이는 방법 이전에 DOM 생성 후 Reflow, Repaint를 최소화 시켜, 최적화된 브라우저 렌더링하는 방식에 대해 학습하고 있습니다.
