기존 Pproject를 merge하는 도중 오류가 발생하여 Pproject2로 다시 올려두었습니다.

Contributors에 **haneul-lim**님이 빠졌습니다.
아쉽지만 여기에라도 대신 추가합니다.

함께 해주신 여러분 진심으로 감사합니다.

<hr/>

![1메인](https://user-images.githubusercontent.com/59231602/130787362-3ff35741-2db4-42eb-8f39-dffab37d2b4d.png)

# 더조은주차장
> 내가 원하는 주차장을 찾아보자! 😃

예를 들어, "서울시설공단" 홈페이지에 가보면 <u>서울시에 있는 공영주차장에 국한하여</u> 주차장을 검색할 수 있습니다.

또한 앱 "모두의 주차장"에서의 주차장 검색을 <u>웹 기반의 서비스화</u>도 필요하다고 느꼈습니다.

이에 따라 **전국에 있는** 주차장을 **원하는 조건에 맞게** 검색하고 저장하는 서비스가 필요하다 느껴 이 프로젝트를 진행했습니다.

<hr />
## 주요 기능

### 1. 전국에 있는 주차장의 검색을 운영시간, 요일, 요일제여부, 결제방법 등에 따라 검색하고 지도에서 위치를 파악할 수 있습니다.

### 2. 자유게시판 성격을 띄는 커뮤니티에서 소통할 수 있습니다.

### 3. 지역별로 주차장에 대한 후기를 공유할 수 있습니다.


<hr />

## 사용방법
### 1. 사이트 메뉴의 [회원가입] 버튼을 눌러, 약관 동의와 본인확인 절차, 개인정보 입력 절차를 거친다.
![join1](https://user-images.githubusercontent.com/59231602/130947017-d2cfca0a-4011-40f2-996f-b3ac575a37c4.png)

### 2. 로그인을 한다.
![login-1](https://user-images.githubusercontent.com/59231602/132198457-a7b64fb4-1166-40c9-9554-c2ae23377d1b.png)

우측 상단에 로그인 상태를 확인할 수 있다.
![login-2](https://user-images.githubusercontent.com/59231602/132198474-1de29f68-7317-4f40-a5a5-39d734b3705c.png)


### 2. [주차장찾기] 버튼을 눌러 원하는 조건으로 주차장을 검색한다.

![park1](https://user-images.githubusercontent.com/59231602/130793059-a7bd8736-8f50-4b1b-b87f-c97bb614f3ad.png)

![park2](https://user-images.githubusercontent.com/59231602/130793100-7ac3cc8b-e45b-4a61-90ce-bb151f8993a9.png)

![park3](https://user-images.githubusercontent.com/59231602/130793111-3430bd5e-5038-4060-b5bd-519f93de5fab.png)

#### 길찾기를 원하시는 분은, 지도 위의 주차장 이름을 클릭하면 Kakao 길찾기 서비스로 이동합니다.

![park1-1](https://user-images.githubusercontent.com/59231602/130793161-c4e8a86f-59d1-4eb7-b1cd-3b3aa79adfe9.png)

### 3. [커뮤니티]에서 자유 게시판을 이용하거나, 주차장 관련 정보는 [리뷰]에서 공유한다.

### [자유게시판] 부분 - 사람들과 다양한 대화를 하며, 댓글과 대댓글로 소통한다.
![board-1](https://user-images.githubusercontent.com/59231602/132199396-47792cfa-294f-4404-a045-d2a3c78ee044.png)

![board-2](https://user-images.githubusercontent.com/59231602/132199409-d61db8cb-6c75-4322-b9f3-87dfe95de854.png)

![board-3](https://user-images.githubusercontent.com/59231602/132199421-36fae161-c9c1-4afe-ba7a-1b8775d50098.png)

![board-4](https://user-images.githubusercontent.com/59231602/132199433-50a5d25f-2f86-44ab-8597-dbcb058e657d.png)


### [리뷰] 부분 - 지역별로 검색하여 주차장에 대한 후기와 정보를 공유한다.

![review-1](https://user-images.githubusercontent.com/59231602/132200196-8e34d81a-d136-47a0-a1a6-2b014cbc1c92.png)

![review-2](https://user-images.githubusercontent.com/59231602/132200204-35e5a246-7d04-4fb4-900e-5af64acae0d6.png)

### 4. [내 정보]를 확인한다.

![myinfo](https://user-images.githubusercontent.com/59231602/132201111-899c4beb-f127-4854-b58d-bd7e51907268.png)

<hr/>

### 5. [문의사항]에서 [FAQ]의 답변 내용을 확인하고, [QNA]에서 관리자에게 직접 문의사항을 물어볼 수 있다.

![FAQ](https://user-images.githubusercontent.com/59231602/132201754-354ba028-514e-487e-8006-da76e7b45895.png)

![QNA](https://user-images.githubusercontent.com/59231602/132201770-d16014e7-0242-4bfb-99dc-0b42fa2e42d8.png)

# Project Structure
사용한 기술스택은 다음과 같습니다.
> Front
> > HTML, CSS
> > 
> > Bootstrap
> > 
> > JavaScript(+AJAX), JQuery
> > 
> > Kakao Map API
>
> Back
> > Spring (MVC)
> > 
> > JSP
> 
> DB, Infra
> > IntelliJ (IDE)
> > 
> > AWS RDS (Infra)
> > 
> > Apache Tomcat (WAS)
> > 
> > MyBatis (ORM)
> > 
> > Git (VCS, 협업)

# 작업환경, WAS

![spring](https://user-images.githubusercontent.com/59231602/133765683-d32c18ed-8da9-437d-bd9f-cdbb9ac84fee.png)

![intellij](https://user-images.githubusercontent.com/59231602/133765845-21865e67-eb00-4ead-ae08-4e43c34e6d83.jpg)

![apache tomcat](https://user-images.githubusercontent.com/59231602/133766010-f1a64479-e0da-42d8-bc7a-a94844e0e8ae.png)

## 데이터베이스와 그 통신

![aws rds](https://user-images.githubusercontent.com/59231602/133765956-77b16d7c-903a-4be5-92cf-0d6af7876d80.png)

![mybatis](https://user-images.githubusercontent.com/59231602/133766160-25fc8f10-5180-4e82-8ca3-54c7ab0aa4ff.png)

## 뷰

![jsp](https://user-images.githubusercontent.com/59231602/133765747-fabfbee6-6e5b-409d-9611-80bc765ffc40.png)

![jquery](https://user-images.githubusercontent.com/59231602/133765320-77f118af-7917-4fa1-b1cd-d58df6ca1a96.png)

![bootstrap](https://user-images.githubusercontent.com/59231602/133765362-69fd6edf-a7ce-4495-b235-41de08ae091f.png)


## 특수기능(회원가입 안내문구, 지도에서 찾기)

![ajax](https://user-images.githubusercontent.com/59231602/133765490-5658000a-3dac-4d8d-87f3-1ea7935e2612.jpg)

![kakao map api](https://user-images.githubusercontent.com/59231602/133765622-d83638bf-c2ee-4a24-8cee-a4c8714d4c21.jpg)


## 버전관리, 협업 툴

![github](https://user-images.githubusercontent.com/59231602/133766222-b8ef3039-c127-47f9-b532-ed786a5964a7.png)
