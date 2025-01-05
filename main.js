/*$(document).ready(function () {
    document.getElementById("homebtn").addEventListener('click', function () {
        pageTransition("home");
    });

    document.getElementById("corebtn").addEventListener('click', function () {
        pageTransition("core");
    });

    document.getElementById("enginebtn").addEventListener('click', function (e) {
        pageTransition("engine");
    });

    document.getElementById("alienbtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("aliencontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("evolbtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("evolcontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("melobtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("melocontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("mitsubtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("mitsucontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("raikabtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("raikacontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("annebtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("annecontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("therionbtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("therioncontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("techbtn").addEventListener('click', function () {
        pageTransition("tech");
    });

    document.getElementById("listbtn").addEventListener('click', function () {
        pageTransition("list");
    });

    document.getElementById("combobtn").addEventListener('click', function () {
        pageTransition("combo");
    });

    const tabEl = document.querySelector('button[data-bs-toggle="tab"]');
    tabEl.addEventListener('shown.bs.tab', event => {
        //event.target // newly activated tab
        //event.relatedTarget // previous active tab
        console.log("tab shown");
    });
    console.log("works");
});*/

/*function pageTransition(id) {
    var btns = document.getElementsByClassName("nav-link");
    var contents = document.getElementsByClassName("tabContent");
    Array.from(btns).forEach((el) => {
        el.classList.remove("active");
        //console.log("removed");
    });
    Array.from(contents).forEach((el) => {
        el.style.display = "none";
    })
    window.scrollTo(0, 0);
    document.getElementById(`${id}btn`).classList.add("active");
    $(`#${id}content`).fadeIn(600);
    //console.log(`${id}btn ${id}content`);
}

function swapcontent(id) {
    $(`#${id}`).find(".rationale").toggle();
    $(`#${id}`).find(".cardinfo").toggle();
}

function swapcontenttoinfo(id) {
    $(`#${id}`).find(".rationale").hide();
    $(`#${id}`).find(".cardinfo").show();
}

function swapcontenttodisc(id) {
    $(`#${id}`).find(".rationale").show();
    $(`#${id}`).find(".cardinfo").hide();
}*/

/*document.addEventListener('shown.bs.tab', function (event) {
    // Get the newly activated tab
    const newTab = event.target;
    console.log(newTab);
    console.log("^ newtab");
    // Find the parent `.tab-content` and `.tab-content-wrapper` for this tab
    const tabContent = newTab.closest('.card').querySelector('.tab-content');
    console.log(tabContent);
    console.log("^ tabcontent newTab.closest('.card').querySelector('.tab-content')");
    const tabContentWrapper = newTab.closest('.card').querySelector('.tab-content-wrapper');
    console.log(tabContentWrapper);
    console.log("^ tabcontentwrapper newTab.closest('.card').querySelector('.tab-content-wrapper')");
  
    // Get the active pane
    const activePaneId = newTab.getAttribute('data-bs-target'); // The href points to the pane's ID
    console.log(activePaneId);
    console.log("^ activepaneid newTab.getAttribute('href')");
    const activePane = tabContent.querySelector(activePaneId);
    console.log(activePane);
    console.log("^ activepane tabContent.querySelector(activePaneId)");
  
    console.log(tabContentWrapper.offsetHeight);
    console.log("^ activepane.offsetheight before auto");
    // Temporarily set height to 'auto' to measure the full height
    tabContentWrapper.style.height = 'auto';
    const newHeight = activePane.offsetHeight;
    console.log(tabContentWrapper.offsetHeight);
    console.log("^ activepane.offsetheight after auto");
  
    // Set the height to the measured height with a smooth transition
    tabContentWrapper.style.height = `${newHeight}px`;
    console.log(tabContentWrapper.style.height);
    console.log("^ tabContentWrapper.style.height");
  });
  
  // Initialize the height for all tab-content-wrapper elements on page load
  window.addEventListener('load', function () {
    document.querySelectorAll('.tab-content-wrapper').forEach(wrapper => {
      const activePane = wrapper.querySelector('.tab-pane.active');
      if (activePane) {
        wrapper.style.height = `${activePane.offsetHeight}px`;
      }
    });
  });*/
  
document.addEventListener('shown.bs.tab', function (event) {
    const newTab = event.target;
  
    // Find the parent `.tab-content-wrapper` for this tab
    const tabContentWrapper = newTab.closest('.card').querySelector('.tab-content-wrapper');
  
    // Get the active pane
    const activePaneId = newTab.getAttribute('data-bs-target'); // The href points to the pane's ID
    const activePane = document.querySelector(activePaneId);
  
    // Get the current height of the wrapper
    const currentHeight = tabContentWrapper.offsetHeight;
  
    // Temporarily set height to the current height to start the transition
    tabContentWrapper.style.height = `${currentHeight}px`;
  
    // Force reflow to register the current height
    tabContentWrapper.offsetHeight; // Accessing offsetHeight triggers reflow
  
    // Calculate the new height
    const newHeight = activePane.offsetHeight;
  
    // Set the height to the new height with transition
    tabContentWrapper.style.height = `${newHeight}px`;
});
  
// Initialize the height on page load
window.addEventListener('load', function () {
    document.querySelectorAll('.tab-content-wrapper').forEach(wrapper => {
        const activePane = wrapper.querySelector('.tab-pane.active');
        if (activePane) {
            wrapper.style.height = `${activePane.offsetHeight}px`;
        }
    });
});
