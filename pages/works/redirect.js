document.addEventListener("DOMContentLoaded", () => {
  const workDeet = document.querySelectorAll(".work-post");

  workDeet.forEach((node) => {
    node.addEventListener("click", () => {
      console.log(`clicked ${node.getAttribute("slug")}`);
      window.location.href = `/pages/works/${node.getAttribute("slug")}`;
    });
  });
});
