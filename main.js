const specificsAspectData = [
  "office",
  "department",
  "postDate",
  "applicationDeadline",
];

const specificAspectsDataTitle = {
  office: "Office",
  department: "Department",
  postDate: "Date Posted",
  applicationDeadline: "Application Deadline",
};

const listOfJobs = [
  {
    position: "Job Title Comes Here",
    office: "Toronto",
    department: "Finance",
    postDate: "April 11, 2022",
    applicationDeadline: "May 15, 2022",
    details:
      "The Toronto office of Lorem Ipsum seeks a Job Title Comes Here with 3-5 years experience with a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit massa a rutrum posuere. Suspendisse quis dolor tortor.",
  },
  {
    position: "Job Title Comes Here",
    office: "Toronto",
    department: "Finance",
    postDate: "April 11, 2022",
    applicationDeadline: "May 15, 2022",
    details:
      "The Toronto office of Lorem Ipsum seeks a Job Title Comes Here with 3-5 years experience with a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit massa a rutrum posuere. Suspendisse quis dolor tortor.",
  },
  {
    position: "Job Title Comes Here",
    office: "Toronto",
    department: "Finance",
    postDate: "April 11, 2022",
    applicationDeadline: "May 15, 2022",
    details:
      "The Toronto office of Lorem Ipsum seeks a Job Title Comes Here with 3-5 years experience with a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit massa a rutrum posuere. Suspendisse quis dolor tortor.",
  },
  {
    position: "Job Title Comes Here",
    office: "Toronto",
    department: "Finance",
    postDate: "April 11, 2022",
    applicationDeadline: "May 15, 2022",
    details:
      "The Toronto office of Lorem Ipsum seeks a Job Title Comes Here with 3-5 years experience with a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit massa a rutrum posuere. Suspendisse quis dolor tortor.",
  },
  {
    position: "Job Title Comes Here",
    office: "Toronto",
    department: "Finance",
    postDate: "April 11, 2022",
    applicationDeadline: "May 15, 2022",
    details:
      "The Toronto office of Lorem Ipsum seeks a Job Title Comes Here with 3-5 years experience with a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit massa a rutrum posuere. Suspendisse quis dolor tortor.",
  },
  {
    position: "Job Title Comes Here",
    office: "Toronto",
    department: "Finance",
    postDate: "April 11, 2022",
    applicationDeadline: "May 15, 2022",
    details:
      "The Toronto office of Lorem Ipsum seeks a Job Title Comes Here with 3-5 years experience with a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit massa a rutrum posuere. Suspendisse quis dolor tortor.",
  },
  {
    position: "Job Title Comes Here",
    office: "Toronto",
    department: "Finance",
    postDate: "April 11, 2022",
    applicationDeadline: "May 15, 2022",
    details:
      "The Toronto office of Lorem Ipsum seeks a Job Title Comes Here with 3-5 years experience with a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit massa a rutrum posuere. Suspendisse quis dolor tortor.",
  },
  {
    position: "Job Title Comes Here",
    office: "Toronto",
    department: "Finance",
    postDate: "April 11, 2022",
    applicationDeadline: "May 15, 2022",
    details:
      "The Toronto office of Lorem Ipsum seeks a Job Title Comes Here with 3-5 years experience with a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit massa a rutrum posuere. Suspendisse quis dolor tortor.",
  },
];

// function that creates job posting block
let createJobPost = (i) => {
  let mainContent = document.getElementById("main-content");

  let jobPostBlock = document.createElement("div");
  jobPostBlock.className = "job-post-block-" + (i + 1);

  let jobContent = document.createElement("div");
  jobContent.className = "job-content";

  let arrowBtnContainer = document.createElement("div");
  arrowBtnContainer.className = "arrow-btn-container";

  let arrowBtn = document.createElement("button");
  arrowBtn.className = "arrow-btn";

  let title = document.createElement("div");
  title.className = "title";

  let specifics = document.createElement("div");
  specifics.className = "specifics";

  specificsAspectData.forEach((aspect) => {
    let specificsAspect = document.createElement("div");
    specificsAspect.className = "specificsAspect";

    let specificsTitle = document.createElement("span");
    specificsTitle.className = "specificsTitle";

    let specificsContent = document.createElement("span");
    specificsContent.className = "specificsContent";

    specifics.append(specificsAspect);
    specificsAspect.append(specificsTitle, specificsContent);
    specificsTitle.textContent = specificAspectsDataTitle[aspect].toUpperCase();
    specificsContent.textContent = listOfJobs[i][aspect];
  });

  let details = document.createElement("div");
  details.className = "details";

  if (mainContent) {
    mainContent.append(jobPostBlock);
    jobPostBlock.append(jobContent);
    jobPostBlock.append(arrowBtnContainer);
    arrowBtnContainer.append(arrowBtn);
    arrowBtn.innerHTML = "<i class='fas fa-arrow-right'></i>";
    jobContent.append(title);
    title.textContent = listOfJobs[i].position;
    jobContent.append(specifics);
    jobContent.append(details);
    details.textContent = listOfJobs[i].details;
  }
};

for (i = 0; i < listOfJobs.length; i++) {
  createJobPost(i);
}

$(document).ready(function () {
  $("#filter-default-btn").click(function () {
    $(this).addClass("hidden");
    $("#filter-close-btn").removeClass("hidden");
    $(".filter-bar-wrapper").addClass("open-filter-bar");
  });

  $("#filter-close-btn").click(function () {
    $(this).addClass("hidden");
    $("#filter-default-btn").removeClass("hidden");
    $(".filter-bar-wrapper").removeClass("open-filter-bar");
  });

  $("#simple-layout").click(function () {
    $(this).addClass("active");
    $("#detailed-layout").removeClass("active");

    $(".main-content").addClass("change-style");
  });

  $("#detailed-layout").click(function () {
    $(this).addClass("active");
    $("#simple-layout").removeClass("active");

    $(".main-content").removeClass("change-style");
  });

  $(".num-of-positions").text(listOfJobs.length);

  $(".arrow-btn").click(function () {
    window.location.href = "./apply.html";
    return false;
  });

  $(".cancel-btn").click(function () {
    window.location.href = "./index.html";
    return false;
  });

  $("#legal-notice-agree-btn").click(function () {
    $(".step-1-main-content").addClass("hidden");
    $(".step-2-main-content").removeClass("hidden");
    $(".step-1").addClass("step-completed");
    $(".step-2").addClass("active");
    return false;
  });

  $("#submit-email-btn").click(function () {
    $(".step-2-main-content").addClass("hidden");
    $(".step-3-main-content").removeClass("hidden");
    $(".step-1").addClass("step-completed step-completed-former");
    $(".step-2").addClass("step-completed step-completed-next");
    $(".step-3").addClass("active");
    return false;
  });

  $("#browse-btn").click(function () {
    alert("Dummy Browse");
    return false;
  });

  $("#manual-entry-btn").click(function () {
    $(".step-3-main-content").addClass("hidden");
    $(".step-4-main-content").removeClass("hidden");
    return false;
  });

  $("#upload-btn").click(function () {
    $(".step-3-main-content").addClass("hidden");
    $(".step-4-main-content").removeClass("hidden");
    return false;
  });

  $("#submit-application-btn").click(function () {
    window.location.href = "./submitted.html";
    return false;
  });

  $("#back-home").click(function () {
    window.location.href = "./index.html";
    return false;
  });
});
