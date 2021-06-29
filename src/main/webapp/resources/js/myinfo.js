$("#modimyifbtn").on('click', function () {

})

$("#delmyifbtn").on('click', function () {
    alert("회원탈퇴가 완료되었습니다.");
    location.href = "/join/delid?uid=" +  $("#myid").val();
})