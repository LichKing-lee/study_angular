#directive function
* 반환타입
첫번째 인자로 사용자 정의 지시자의 이름이 들어가며 두번째 인자로 해당 지시자가 수행할 콜백함수가 들어가게됩니다.
콜백함수는 사용자 정의 지시자의 설정을 반환하게됩니다. 설정은 함수와 객체를 이용할 수 있는데 객체가 더 상세한 설정을 할 수 있으며, 함수로 반환할경우 객체로 설정할때의 compile 속성에 들어가는 링크함수가 들어가게됩니다.
**카페에서 말씀드릴때 compile 속성에 link함수를 설정한다고 말씀드렸었죠?? directive 함수에 객체가 아니라 함수를 반환하게 하면 다른 설정 다 건너뛰고 그 link 함수만 이용하게되는겁니다.**

# 지시자 설정 객체
restrict : 'EACM' 으로 설정하며 각각에 대한 설정은 책에 나옴. 테스트 결과 EACM 4개를 모두 같이 사용할 수는 없다. 
-E는 A와만 사용 가능, EAC, EAM, EC, EM 사용 불가
-A는 모두 사용 가능. ACM 가능
-C는 모두 사용 가능. CM 가능 M도 E 제외 같이 사용 가능

compile : link 함수, link 객체를 반환하는 함수 굳이 compile 함수를 이용하지않고 바로 link 속성을 이용해도 됨

scope : true/false/객체
-true : 해당 지시자 내에서의 스코프를 가지는 새로운 scope를 생성함(상위 scope의 자손 객체)
-false : 해당 지시자가 적용된 DOM보다 상위 DOM에서 사용중인 scope를 사용함. 주로 controller scope를 사용
-객체 : 새로운 scope 객체를 생성한다. 여기서 생성하는 scope객체는 상위 scope와 상속관계에 있지않는다. 완전히 새로운 영역의 scope객체이다.
scope : { title : "@name" } 새로 생성한 scope 객체의 title 속성에 템플릿에 존재하는 name 속성의 값을 집어넣는다. title : "@" 일경우 템플렛이 존재하는 title을 가져온다.
scope : { title : "&name" } 지시자 내에서 함수를 사용할때 해당 함수를 가져온다.
<custom-directive name="goFunction(param)" /> 으로 지시자를 사용할때 템플릿에 goFunction() 함수를 적용하고 싶다면 {{title({param : 10})}} 이런식으로 사용하면 템플릿에서 title() 함수를 호출하고 파라미터로 10을 전달하게 된다. 지시자에서는 name에다가 함수를 저장하고 템플릿에서는 title로 호출하는 이유는 위에 {{title : &name}}으로 선언했기때문.
scope : { title : "=name" } 생성한 지시자의 scope객체의 title 속성에 상위 컨트롤러 scope의 name 속성과 양방향 연결관계를 만든다. 양방향이라는것은 자식에서 수정해도 부모에 영향을 주고 부모에서 수정해도 자식에게 영향을 준다는 뜻.

controller : 지시자에서 사용할 컨트롤러 함수. 인자로 들어오는것들이 전부 $객체들임. $객체라는건 앵귤러가 생성해서 주입해주는 객체라는걸 뜻하고 명칭을 지켜야한다는 뜻임.
$element : 지시자의 요소 객체
$attrs : 지시자의 속성 객체
$transclude : 이거 솔직히 모르겠어요.....ㅋㅋㅋ그냥 소리소문없이 넘어가고...만약 반장님이 짚으면 그냥 제가 안가르쳐줬다고하고 한대맞는걸로...

해놓고 보니까 정리가 미흡한거같은데 혹시라도 보시다가 이해안가거나 제가 빼먹은거같은건 꼭 말씀주세요!!