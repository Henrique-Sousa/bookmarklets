list = document.querySelectorAll(".ProfileCard,.js-actionable-user");
arr = Array.from(list);
arr = arr.slice(3);

alert(
  arr
    .filter(user=>user.querySelector(".FollowStatus") === null)
    .map(user=>user.querySelector(".fullname")
      .innerText)
);