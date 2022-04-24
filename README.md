# 원티드 프리온보딩 프론트엔드 코스 서류 과제

## 파일 구조

```bash
/src
	App.js
	App.css
	/asset
	/components
		/common
			Container.js
		/toggle
			Toggle.css
		    	Toggle.js
		/tab
		    	Tab.css
		    	Tab.js
		/slider
		    	Slider.css
		    	Slider.js
		/input
		    	Input.css
		    	Input.js
		/dropdown
		    	Dropdown.css
		    	Dropdown.js
```
## 과제 구현 설명
### 1. Toggle
**설명**  
버튼을 두개 이어서 클릭하면 밑에 내용이 바뀌게 설계  
배경이 자연스럽게 슬라이드하게 보이기 위해 배경을 따로 만들어서 움직이게 한다.  
useState로 선택된 버튼의 index를 인식  
  
**어려웠던 점**  
하얀 배경을 움직이는 데 버튼의 index만큼 움직여야 했기에 css에 index를 보내려고 했다.  
하지만 일반 css에 props를 넣을 방법이 없어보여서 inline style을 이용해서 변수로 움직일 수 있게 했다.  
그런데 css와 inline style을 두 개 같이 사용하니 뭔가 안좋아 보여서 다음에는 style-component를 사용해보자는 생각을 했다.

### 2. Tab
**설명**  
tab 버튼이 늘어날 것을 예상하고 배열로 tab 이름과 내용을 만든다.  
버튼은 선택된 것을 알 수 있게 active와 inactive로 css 분리  
tab이 몇개일지 모르기 때문에 map을 이용해서 tabList 제작  
  
**어려웠던 점**  
Toggle과 같으므로 생략  

### 3. Slider
**설명**  
Panel에선 slider가 어느 값에 있는지만 보여주게 설계  
input의 range를 이용해서 slider를 제작  
slider 밑의 버튼은 5개만 만들어서 누르면 해당 값으로 slider의 값이 변환  
  
**어려웠던 점**  
input type range를 처음 써봐서 헷갈렸다.  
custom하는 방법을 많이 알아보고 나서야 감을 잡고 만들 수 있었다.  
slider와 버튼의 위치를 딱 맞추고 싶어서 width를 고정시켰다.  
  
### 4. Input
**설명**  
ID부분과 PW부분을 따로 제작  

ID  
- useEffect로 input에 text가 써질때 마다 정규식을 확인하여 이미지로 정규식에 맞는지 표현
- input에서 foucs out되면 input box 밑에 정규식이 틀렸는지 맞는지 빨간 text로 표현

PW  
- 오른쪽의 눈 이미지를 클릭해서 input에 type을 바꾸게 설계
  
**어려웠던 점**  
PW는 큰 어려움이 없었는데 ID는 정규식으로 에러 메세지나 완료 이미지를 표현하는 것이 조금 어려웠다.  
최대한 과제 예시와 비슷하게 하고 싶었기 때문에 input box 밑의 에러메세지는 input에서 focus가 out되었을 때 나오게 설계했다.  
그리고 ID에 text가 아예 없을 때는 에러 메세지가 안뜨는 것도 구현하기 위해 두 가지 bool을 이용해서 구현하는데 헷갈렸다.  

### 5. Dropdown
**설명**  
클릭하면 Dropdown item list가 나오고 선택한 text를 표시하는 버튼을 구현  
버튼을 클릭하면 밑에 나오는 Dropdown item list를 따로 구현  
useState로 버튼을 누르면 open이 true가 되면서 Dropdown item list가 열림  
Dropdown item list 중 하나를 클릭하면 버튼에 나와있는 text가 해당 item text로 바뀜  
검색하면 검색어에 매칭되는 list만 나옴  
item을 선택하거나 Dropdown을 닫으면 검색하던 text 삭제  
  
**어려웠던 점**  
검색하는 부분에서 시간이 좀 걸렸다.  
로직이 어려웠던 것이 아니라 사소한 실수 하나로 시간을 잡아먹은 것이다.  
![image](https://user-images.githubusercontent.com/52916848/164974490-bd748956-1616-40bd-98d4-fdb9ee8af985.png)  
검색에 매칭되는 item을 추가하는 로직인데 data 자체를 추가해야하는 부분을 data.item으로 해놓아서 계속 안된것이다.  
실수로 시간이 걸린 것 말고는 큰 어려움이 없었다.  

## 후기
요새 React native로 개발을 하고 있었어서 오랜만에 css를 사용했는지 처음에 적응하는데 시간이 조금 걸렸다.  
이번 과제는 재활치료를 하는 느낌으로 했는데 꽤 재밌게 했다.  
최대한 분리할 건 분리해서 component로 만드려고 했고, 예시로 보여준 과제와 비슷하게 하기 위해 노력했다.  
꼭 이후에 코스에 붙게되어서 많은 사람들과 교류하고 실력을 높이고 싶다.  
