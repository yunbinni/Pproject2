<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<c:set var="newChar" value="" scope="application" />

<!-- 세션 임의로 생성해서 테스트 -->
<%--<%--%>
<%--    HttpSession sess = request.getSession();--%>

<%--    sess.setAttribute("UID", "anrdl3294");--%>
<%--%>--%>

<div class="container mt-5">
    <div class="mt-5">
        <h2><i class="fas fa-list">질문 게시판</i></h2>
        <hr>
    </div><!-- 페이지 타이틀 -->

    <div class="row">
        <div class="col-lg-8">
            <!-- Post content-->
            <article>
                <!-- Post header-->
                <header class="mb-4">
                    <!-- Post title-->
                    <h1 class="fw-bolder mb-1">${q.title}</h1>
                    <!-- Post meta content-->
                    <div class="text-muted fst-italic mb-2">${fn:substring(q.regdate, 0, 19)}</div>
                    <!-- Post categories-->
                    <span class="text-muted fst-italic">작성자 ${q.userid} / </span>
                    <span class="text-muted fst-italic">조회수 ${q.views} / </span>
                    <span class="text-muted fst-italic">추천수 ${q.thumbup}</span>
                    <c:if test="${not empty UID and UID eq q.userid}">
                        <span style="float: right">
                            <button type="button" class="btn btn-warning text-white" id="modbdbtn">
                                <i class="fas fa-edit"></i> 수정하기</button>
                            <button type="button" class="btn btn-danger" id="rmvbdbtn">
                                <i class="fas fa-trash-alt"></i> 삭제하기</button>
                        </span>
                    </c:if>
                </header>
                <!-- Post content-->
                <section class="mb-5" style="min-height:300px">
                    <p class="fs-5 mb-4" s>${fn:replace(q.contents, newChar, "<br>")}</p>
                    <input type="hidden" id="bdno" value="${param.qno}">
                </section>
                <c:if test="${not empty UID}">
                    <div style="float: right" class="mb-3">
                        <button type="button" class="btn btn-danger" id="thumbbtn">
                            <i class="far fa-thumbs-up"></i> 추천하기</button>
                    </div>
                </c:if>
            </article>
            <!-- Comments section-->
            <section class="mb-5" style="clear: both">
                <div class="card bg-light">
                    <div class="card-body">
                        <!-- Comment form-->
                        <form class="mb-5" name="replefrm" id="replefrm">
                            <textarea class="form-control" name="contents" id="contents" rows="3"
                                      <c:if test="${not empty sessionScope.UID}">
                                        placeholder="댓글을 달아보세요!"
                                      </c:if>
                                      <c:if test="${empty sessionScope.UID}">
                                        placeholder="로그인 후 이용해주세요!!" disabled
                                      </c:if>></textarea>
                            <button type="button" id="newbrbtn" class="btn btn-outline-dark btn-sm mt-1">작성완료</button>
                            <input type="hidden" name="userid" value="${UID}">
                            <input type="hidden" name="bdno" value="${q.qno}">
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>

