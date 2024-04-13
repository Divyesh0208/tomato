/////////////// scroll events  /////////////////

////check window width function
function checkMaxWidth(maxWidth) {
  const windowWidth = window.innerWidth;

  if (windowWidth <= maxWidth) {
    return true;
  } else {
    return false;
  }
}

let navbar = document.getElementById("navbar");
let search_section = document.getElementById("search_section");
let filter = document.getElementById("filter");
let online_ordering = document.getElementById("online_ordering");
// let online_ordering_close = document.getElementsByClassName("online_ordering_svg")[0];
let dineDeliverySection = document.getElementById("dineDeliverySection");
let back_to_top = document.getElementById("back_to_top");
let body = document.getElementsByTagName("body")[0];

let search_section_add = document.getElementsByClassName("search_section_add")[0];
let search_section_food = document.getElementsByClassName("search_section_food")[0];
let search_for_res_cui_dish = document.getElementsByClassName("search_for_res_cui_dish")[0];

let lastScrollTop = 0;
const mobileWidth = 425;

window.onscroll = function () {
  //   console.log("scrolling");
  if (checkMaxWidth(mobileWidth)) {
    if (lastScrollTop < window.scrollY) {
      // Scroll Down
      navbar.style.top = `-${navbar.offsetHeight}px`;
      search_section.style.top = "0px";
      filter.style.top = `${search_section.offsetHeight}px`;
      online_ordering.style.bottom = "0px";

      search_section_add.style.display = "none";
      search_section_food.style.display = "none";
      search_for_res_cui_dish.style.display = "flex";
    } else {
      //Scroll Up
      navbar.style.top = 0;
      search_section.style.top = `${navbar.offsetHeight}px`;
      filter.style.top = `${navbar.offsetHeight + search_section.offsetHeight}px`;
      online_ordering.style.bottom = `${dineDeliverySection.offsetHeight}px`;

      search_section_add.style.display = "flex";
      search_section_food.style.display = "flex";
      search_for_res_cui_dish.style.display = "none";
    }
    lastScrollTop = window.scrollY;
  } else {
    if (window.scrollY > 1000) {
      back_to_top.style.display = "block";
    } else {
      back_to_top.style.display = "none";
    }
  }
};

function OnOnlineOrderingClose() {
  online_ordering.style.display = "none";
}

back_to_top.addEventListener("click", () => {
  // body.style.transition = "0.5s ease-in";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

///////// dineout delivery buttons mobile /////////////
let dine_out_btn = document.getElementsByClassName("dine_out_btn")[0];
let delivery_btn = document.getElementsByClassName("delivery_btn")[0];

function onDiningOut() {
  delivery_btn.classList.remove("active_btn");
  dine_out_btn.classList.add("active_btn");
}

function onDelivery() {
  delivery_btn.classList.add("active_btn");
  dine_out_btn.classList.remove("active_btn");
}

///////////// navbar popup  ///////////////////

let navbar_address_search_input = document.getElementById("navbar_address_search_input");
let navbar_address_popup1 = document.getElementById("navbar_address_popup1");
let navbar_address_popup2 = document.getElementById("navbar_address_popup2");
let navbar_add_popup_toggler = document.getElementById("navbar_down_angle_svg");

let navbar_food_input = document.getElementById("navbar_food");
let navbar_food_popup = document.getElementById("navbar_food_popup");
let navbar_search_svg = document.getElementById("navbar_search_svg");

// let showNavAddPop1 = false;
navbar_address_search_input.addEventListener("click", () => {
  navbar_add_popup_toggler.style.transform = "rotate(180deg)";
  navbar_address_popup1.style.display = "flex";
});

navbar_add_popup_toggler.addEventListener("click", () => {
  // console.log("togglerclick");
  navbar_add_popup_toggler.style.transform = "rotate(360deg)";
  navbar_address_popup1.style.display = "none";
  navbar_address_popup2.style.display = "none";
});

navbar_address_search_input.addEventListener("input", () => {
  // console.log("sdf");
  navbar_add_popup_toggler.style.transform = "rotate(180deg)";
  // console.log(navbar_address_search_input.value);
  navbar_address_popup1.style.display = "none";
  navbar_address_popup2.style.display = "flex";
});

navbar_food_input.addEventListener("input", () => {
  // console.log(navbar_food_input.value);
  navbar_food_popup.style.display = "flex";
});

navbar_search_svg.addEventListener("click", () => {
  navbar_food_popup.style.display = "none";
});

///////  validation function

const mobileRegex = /^\d{10}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function vaildation(type, value) {
  switch (type) {
    case "mobile":
      if (mobileRegex.test(value)) {
        return true;
      }
      break;

    case "email":
      if (emailRegex.test(value)) {
        return true;
      }
      break;

    default:
      break;
  }
  return false;
}

///////////// login  modal /////////////////

let navbar_login = document.getElementById("navbar_login");
let login_modal = document.getElementById("login_overlay");
let login_close_svg = document.getElementById("login_close_svg");
let create_account = document.getElementsByClassName("login_modal_new_signin")[0];
let login_mobile = document.getElementsByClassName("login_mobile_no")[0];
let mobile_field = document.getElementsByClassName("mobile_field")[0];
let send_otp_btn = document.getElementsByClassName("login_modal_send_otp")[0];
let mobile_error_msg = document.getElementById("login_mobile_error");

function onUserClick() {
  login_modal.style.display = "flex";
  body.style.overflow = "hidden";
}

navbar_login.addEventListener("click", () => {
  login_modal.style.display = "flex";
  body.style.overflow = "hidden";
});

login_close_svg.addEventListener("click", () => {
  login_modal.style.display = "none";
  body.style.overflow = "auto";
});

login_mobile.addEventListener("focus", () => {
  mobile_field.style.borderColor = "#47b098";
});
login_mobile.addEventListener("blur", () => {
  mobile_field.style.borderColor = "#cfcfcf";
  if (login_mobile.value) {
    mobile_field.style.borderColor = "#47b098";
  }
});

send_otp_btn.addEventListener("click", () => {
  if (vaildation("mobile", login_mobile.value)) {
    mobile_field.style.borderColor = "#47b098";
    mobile_error_msg.style.display = "none";
    console.log("mobile number is valid");
  } else {
    mobile_error_msg.style.display = "flex";
    mobile_field.style.borderColor = "red";
  }
});

//// mobile popup..

let country_code_field = document.getElementsByClassName("country_code_field")[0];
let country_list_modal = document.getElementsByClassName("country_list_popup")[0];
let show_countries_svg = document.getElementById("show_countries_svg");

country_code_field.addEventListener("click", () => {
  let defaultModalStyle = getComputedStyle(country_list_modal)["display"];

  if (defaultModalStyle === "none") {
    show_countries_svg.style.transform = "rotate(180deg)";
    country_list_modal.style.display = "block";
  } else {
    show_countries_svg.style.transform = "rotate(360deg)";
    country_list_modal.style.display = "none";
  }
});

///////////// signup  modal /////////////////

let navbar_signup = document.getElementById("navbar_signup");
let signup_modal = document.getElementById("signup_overlay");
let signup_close_svg = document.getElementById("signup_close_svg");
let already_account = document.getElementsByClassName("already_have_account_text")[0];

navbar_signup.addEventListener("click", () => {
  signup_modal.style.display = "flex";
  body.style.overflow = "hidden";
});

signup_close_svg.addEventListener("click", () => {
  signup_modal.style.display = "none";
  body.style.overflow = "auto";
});

create_account.addEventListener("click", () => {
  login_modal.style.display = "none";
  signup_modal.style.display = "flex";
});
already_account.addEventListener("click", () => {
  signup_modal.style.display = "none";
  login_modal.style.display = "flex";
});

//signup form

let full_name_form_group = document.getElementById("full_name_form_group");
let email_form_group = document.getElementById("email_form_group");
let full_name_input = document.getElementById("full_name_input");
let full_name_label = document.getElementById("full_name_label");
let email_input = document.getElementById("email_input");
let email_label = document.getElementById("email_label");
let signup_name_error = document.getElementById("signup_name_error");
let signup_email_error = document.getElementById("signup_email_error");
let signin_policy_checkbox = document.getElementsByClassName("signin_policy_checkbox")[0];
let create_acc_btn = document.getElementById("create_acc_btn");

full_name_input.addEventListener("blur", (e) => {
  if (e.target.value) {
    e.target.style.borderColor = "#47b098";
    full_name_label.style.color = "#47b098";
    signup_name_error.style.display = "none";
  } else {
    e.target.style.borderColor = "#9b9b9b";
    full_name_label.style.color = "#9b9b9b";
  }
});

email_input.addEventListener("blur", (e) => {
  if (e.target.value) {
    e.target.style.borderColor = "#47b098";
    email_label.style.color = "#47b098";
    signup_email_error.style.display = "none";
  } else {
    e.target.style.borderColor = "#9b9b9b";
    email_label.style.color = "#9b9b9b";
  }
});

signin_policy_checkbox.addEventListener("click", () => {
  if (signin_policy_checkbox.checked) {
    // console.log("checked");
    create_acc_btn.disabled = false;
  } else {
    // console.log("not checked");
    create_acc_btn.disabled = true;
  }
});

function createAccount() {
  // console.log("button clicked");

  //full name error
  if (!full_name_input.value) {
    signup_name_error.style.display = "block";
    full_name_input.style.borderColor = "red";
    full_name_label.style.color = "red";
  } else {
    signup_name_error.style.display = "none";
    full_name_input.style.borderColor = "#47b098";
    full_name_label.style.color = "#47b098";
  }

  //email error
  if (!email_input.value || !vaildation("email", email_input.value)) {
    signup_email_error.style.display = "block";
    email_input.style.borderColor = "red";
    email_label.style.color = "red";
  } else {
    signup_email_error.style.display = "none";
    email_input.style.borderColor = "#47b098";
    email_label.style.color = "#47b098";

    const SIGNUP_CREDENTIAL = { name: full_name_input.value, email: email_input.value };
    console.log("SIGNUP_CREDENTIAL: ", SIGNUP_CREDENTIAL);
  }
}

//////////////   delivery, dineout , nightlife  buttons /////////
let dining_out_button = document.getElementById("dining_out_button");
let delivery_button = document.getElementById("delivery_button");
let nightlife_button = document.getElementById("nightlife_button");

dining_out_button.addEventListener("click", () => {
  dining_out_button.classList.add("dining_out_button");

  delivery_button.classList.remove("delivery_button");
  nightlife_button.classList.remove("nightlife_button");
});

delivery_button.addEventListener("click", () => {
  delivery_button.classList.add("delivery_button");

  dining_out_button.classList.remove("dining_out_button");
  nightlife_button.classList.remove("nightlife_button");
});

nightlife_button.addEventListener("click", () => {
  nightlife_button.classList.add("nightlife_button");

  delivery_button.classList.remove("delivery_button");
  dining_out_button.classList.remove("dining_out_button");
});

/////////////////  filter section //////////////
let filter_btn = document.getElementById("filter_btn");
let filter_modal = document.getElementById("filter_overlay");
let filter_btn_svg = filter_btn.getElementsByTagName("img")[0];
let filter_buttons = document.getElementsByClassName("filter_buttons")[0];
let content_sortby = document.getElementsByClassName("content_sortby")[0];
let rate_bar_box = document.getElementsByClassName("rate_bar_box")[0];
let sidebarBtnSort = document.getElementById("sidebarBtnSort");
let sidebarBtnSortTxt = sidebarBtnSort.getElementsByClassName("sub_text")[0];

let filtersObj = {
  "Pure Veg": false,
  rating: {
    Any: false,
    3.5: false,
    "4.0": false,
    4.5: false,
    "5.0": false,
    // "6.0": false,
  },
  sortBy: {
    Popularity: false,
    "Rating: High to Low": false,
    "Delivery Time": false,
    "Cost: High to Low": false,
    "Cost: Low to High": false,
    // "man gamtu": false,
  },
};

for (e of Object.keys(filtersObj.sortBy)) {
  let radio_div = document.createElement("div");
  radio_div.classList.add("content_sortby_radio");

  let radio_input = document.createElement("input");
  radio_input.classList.add("radio");
  radio_input.type = "radio";
  radio_input.name = "sort_by";
  radio_input.value = e;
  if (e === "Popularity") {
    radio_input.checked = true;
  }
  radio_input.addEventListener("click", function (event) {
    onRadioClick(event);
  });
  radio_div.appendChild(radio_input);

  let radio_label = document.createElement("span");
  radio_label.classList.add("label");
  radio_label.textContent = e;
  radio_div.appendChild(radio_label);

  content_sortby.appendChild(radio_div);
}

// sort by CONTAINER

function onRadioClick(e) {
  sidebarBtnSortTxt.textContent = e.target.value;
}

// rating CONTAINER
let countRateBar = 1;
for (e of Object.keys(filtersObj.rating)) {
  let rating_div = document.createElement("div");
  rating_div.classList.add("rating");

  let dot = document.createElement("div");
  dot.classList.add("dot");
  if (e === "Any") {
    dot.classList.add("active_big_dot");
  } else {
    dot.classList.add("active_dot");
  }

  rating_div.appendChild(dot);

  let rateNumber = document.createElement("p");
  rateNumber.textContent = e;
  rating_div.appendChild(rateNumber);

  rate_bar_box.appendChild(rating_div);
  if (countRateBar < Object.keys(filtersObj.rating).length) {
    countRateBar += 1;

    dot.addEventListener("click", function (event) {
      onRatingDotClick(event);
    });

    let ratingBar = document.createElement("div");
    if (e === "Any") {
      ratingBar.id = "rate_bar_0";
    } else {
      ratingBar.id = `rate_bar_${e}`;
    }
    ratingBar.classList.add("rate_bar");
    ratingBar.classList.add("active_bar");

    rate_bar_box.appendChild(ratingBar);
  }
}

filter_btn.addEventListener("click", () => {
  filter_modal.style.display = "block";
  body.style.overflow = "hidden";
});

function closeFilterModal() {
  filter_modal.style.display = "none";
  body.style.overflow = "auto";
}

let selected_count = document.createElement("p");
selected_count.classList.add("selected_count");

// filter selection function (obj)
let veg_btn = document.getElementById("pure_veg_btn");
let rating_btn = document.getElementById("rating_btn");

//rating 4+ button

function onRatingBtnClick() {
  console.log(filtersObj);
  let ratingBtnText = rating_btn.getElementsByTagName("p")[0].textContent;
  let convertedText = ratingBtnText.split(" ")[1].split("+")[0];
  console.log("convertedText: ", convertedText);
  let alreadySelected = filtersObj["rating"][convertedText];
  console.log(filtersObj["rating"][convertedText.toString()]);
  console.log("alreadySelected: ", alreadySelected);
  if (alreadySelected) {
    filtersObj["rating"][convertedText.toString()] = false;
    rating_btn.classList.remove("selected_filter_btn");
    selected_count.textContent = +selected_count.textContent - 1;

    if (selected_count.textContent == 0) {
      filter_btn_svg.style.display = "block";
      selected_count.style.display = "none";
    }
  } else {
    filtersObj["rating"][convertedText.toString()] = true;
    rating_btn.classList.add("selected_filter_btn");
    filter_btn_svg.style.display = "none";
    selected_count.style.display = "block";
    filter_btn.appendChild(selected_count);
    selected_count.textContent = +selected_count.textContent + 1;
  }
}
//pure veg button

function onVegBtnClick() {
  // let alreadySelected = Object.values(veg_btn.classList).includes("selected_filter_btn");
  let alreadySelected = filtersObj["Pure Veg"];
  if (alreadySelected) {
    filtersObj["Pure Veg"] = false;
    // rating_btn.style.order = 0;
    veg_btn.classList.remove("selected_filter_btn");
    selected_count.textContent = +selected_count.textContent - 1;

    if (selected_count.textContent == 0) {
      filter_btn_svg.style.display = "block";
      selected_count.style.display = "none";
    }
  } else {
    filtersObj["Pure Veg"] = true;
    // rating_btn.style.order = 1;
    veg_btn.classList.add("selected_filter_btn");
    filter_btn_svg.style.display = "none";
    selected_count.style.display = "block";
    filter_btn.appendChild(selected_count);
    selected_count.textContent = +selected_count.textContent + 1;
  }
}

// cuisine button

let cuisines_btn = document.getElementById("cuisines_btn");
let cuisine_modal = document.getElementsByClassName("cuisine_modal")[0];
let cuisine_modal_input = document.getElementsByClassName("cuisine_modal_input")[0];
let cuisine_search_div = document.getElementsByClassName("modal_search_cusines")[0];

function filterCuisineBtn() {
  let cuisine_modal_style = getComputedStyle(cuisine_modal)["display"];
  if (cuisine_modal_style === "none") {
    cuisine_modal.style.display = "block";
  } else {
    cuisine_modal.style.display = "none";
  }
}

cuisine_modal_input.addEventListener("focus", () => {
  cuisine_search_div.style.borderColor = "#1b1b1b";
});
cuisine_modal_input.addEventListener("blur", () => {
  cuisine_search_div.style.borderColor = "#cfcfcf";
});

function onCuisineApply() {
  cuisine_modal.style.display = "none";
}
//filter modal
let sidebarBtnCuisine = document.getElementById("sidebarBtnCuisine");
let sidebarBtnRating = document.getElementById("sidebarBtnRating");
let sidebarBtnCost = document.getElementById("sidebarBtnCost");

let content_cuisines = document.getElementsByClassName("content_cuisines")[0];
let content_rating = document.getElementsByClassName("content_rating")[0];
let content_cost = document.getElementsByClassName("content_cost")[0];

function removeActive() {
  sidebarBtnSort.classList.remove("sidebar_active_button");
  sidebarBtnCuisine.classList.remove("sidebar_active_button");
  sidebarBtnRating.classList.remove("sidebar_active_button");
  sidebarBtnCost.classList.remove("sidebar_active_button");

  content_sortby.style.display = "none";
  content_cuisines.style.display = "none";
  content_rating.style.display = "none";
  content_cost.style.display = "none";
}

sidebarBtnSort.addEventListener("click", () => {
  removeActive();
  sidebarBtnSort.classList.add("sidebar_active_button");
  content_sortby.style.display = "block";
});

sidebarBtnCuisine.addEventListener("click", () => {
  removeActive();
  sidebarBtnCuisine.classList.add("sidebar_active_button");
  content_cuisines.style.display = "block";
});

sidebarBtnRating.addEventListener("click", () => {
  removeActive();
  sidebarBtnRating.classList.add("sidebar_active_button");
  content_rating.style.display = "block";
});

sidebarBtnCost.addEventListener("click", () => {
  removeActive();
  sidebarBtnCost.classList.add("sidebar_active_button");
  content_cost.style.display = "block";
});

//rating CONTAINER
let container_head_rating = document.getElementsByClassName("content_rating_rate_head")[0].getElementsByClassName("text")[0];
let rate_bar = rate_bar_box.getElementsByClassName("rate_bar");
rate_bar = Array.from(rate_bar);
let rate_bar_rating = rate_bar_box.getElementsByClassName("rating");
rate_bar_rating = Array.from(rate_bar_rating);

function onRatingDotClick(event) {
  let clickedRate = event.target.parentNode.getElementsByTagName("p")[0];
  if (clickedRate.textContent === "Any") {
    container_head_rating.textContent = clickedRate.textContent;
  } else {
    container_head_rating.textContent = `${clickedRate.textContent}+`;
  }
  // console.log("clicked: ", clickedRate.textContent);

  // changing color of dots
  for (e of rate_bar_rating) {
    let rate = e.getElementsByTagName("p")[0].textContent;
    let dotClass = e.getElementsByClassName("dot")[0].classList;

    if (rate === "Any") {
      rate = 0;
    }

    if (+clickedRate.textContent > rate) {
      dotClass.remove("active_dot");
    } else {
      dotClass.add("active_dot");
    }
    // if (clickedRate.textContent === "Any") {
    //   dotClass.add("active_dot");
    // }
    dotClass.remove("active_big_dot");
  }
  event.target.classList.add("active_big_dot");

  // changing color of bars
  for (e of rate_bar) {
    // console.log("clicked ", clickedRate.textContent);
    // console.log(e.id.split("_")[2]);
    if (+clickedRate.textContent > e.id.split("_")[2]) {
      // console.log(clickedRate.textContent, " > ", e.id.split("_")[2], " = true");
      e.classList.remove("active_bar");
    } else {
      // console.log(clickedRate.textContent, " > ", e.id.split("_")[2], " = false");
      e.classList.add("active_bar");
    }
  }
}

//clear button
function clearFilters() {
  let selectedElements = filter_buttons.getElementsByClassName("selected_filter_btn");

  selectedElements = Array.from(selectedElements);
  // console.log("selectedElements: ", selectedElements);

  selectedElements.forEach((element) => {
    element.classList.remove("selected_filter_btn");

    // console.log(element.getElementsByTagName("p")[0].textContent);
    // let selectedButtonText = element.getElementsByTagName("p")[0].textContent;
    // let abc = selectedButtonText.split(" ")[1].split("+")[0];
    // console.log("selectedButtonText: ", abc);

    // if (filtersObj["Pure Veg"]) {
    //   filtersObj["Pure Veg"] = false;
    // } else if (filtersObj["rating"][abc]) {
    //   filtersObj["rating"][abc] = false;
    //   console.log("filtersObj)[0]]: ", filtersObj["rating"][selectedButtonText.split(" ")[1].split("+")[0]]);
    // } else if (filtersObj["sortBy"][selectedButtonText]) {
    //   filtersObj["sortBy"][selectedButtonText] = false;
    // }
  });

  filtersObj["Pure Veg"] = false;
  for (k of Object.keys(filtersObj["rating"])) {
    filtersObj["rating"][k] = false;
  }
  for (k of Object.keys(filtersObj["sortBy"])) {
    filtersObj["sortBy"][k] = false;
  }

  selected_count.textContent = 0;
  selected_count.style.display = "none";
  filter_btn_svg.style.display = "block";

  filter_modal.style.display = "none";
  body.style.overflow = "auto";
  console.log(filtersObj);
}
///////// onclick created sort by filter button

function onCreatedSortClick() {
  let clickedButton = filter_buttons.getElementsByClassName("createdForSort")[0];

  let buttonText = clickedButton.getElementsByTagName("p")[0].textContent;
  console.log("buttonText: ", buttonText);

  console.log(filtersObj.sortBy);
  let alreadySelected = filtersObj["sortBy"][buttonText];
  console.log("alreadySelected: ", alreadySelected);

  if (alreadySelected) {
    filtersObj["sortBy"][buttonText] = false;
    clickedButton.classList.remove("selected_filter_btn");
    selected_count.textContent = +selected_count.textContent - 1;

    if (selected_count.textContent == 0) {
      filter_btn_svg.style.display = "block";
      selected_count.style.display = "none";
    }
  } else {
    filtersObj["sortBy"][buttonText] = true;
    clickedButton.classList.add("selected_filter_btn");
    filter_btn_svg.style.display = "none";
    selected_count.style.display = "block";
    filter_btn.appendChild(selected_count);
    selected_count.textContent = +selected_count.textContent + 1;
  }
}

//apply button

let filterButtonsNames;

function applyFilters() {
  if (sidebarBtnSortTxt.textContent !== "Popularity") {
    let createdFilterButton = document.createElement("div");
    createdFilterButton.classList.add("filter_button");
    createdFilterButton.classList.add("selected_filter_btn");
    createdFilterButton.classList.add("createdForSort");

    let filterBtnImg1 = document.createElement("img");
    filterBtnImg1.src = "./assets/arrow-up-down.svg";
    createdFilterButton.appendChild(filterBtnImg1);

    let filterBtnParagraph = document.createElement("p");
    filterBtnParagraph.textContent = sidebarBtnSortTxt.textContent;
    createdFilterButton.appendChild(filterBtnParagraph);

    let filterBtnImg2 = document.createElement("img");
    filterBtnImg2.src = "./assets/close.svg";
    filterBtnImg2.classList.add("remove_selection");
    createdFilterButton.appendChild(filterBtnImg2);
    ////////////////////////////////////////////////
    // console.log("filter will be add for");

    // for (i of Object.keys(filtersObj["sortBy"])) {
    //   filtersObj["sortBy"][i] = false;
    // }
    // filtersObj["sortBy"][sidebarBtnSortTxt.textContent] = true;

    let createdForSort = filter_buttons.getElementsByClassName("createdForSort")[0];

    if (createdForSort) {
      let buttonText = createdForSort.getElementsByTagName("p")[0].textContent;
      filtersObj["sortBy"][buttonText] = false;
      createdForSort.remove();
    }

    filtersObj["sortBy"][sidebarBtnSortTxt.textContent] = true;
    filter_buttons.appendChild(createdFilterButton);
    createdFilterButton.onclick = onCreatedSortClick;
    ////////////////////////////////////////////////
  } else {
    let sortButton = filter_buttons.getElementsByClassName("createdForSort")[0];
    // if (sortButton.classList.contains("selected_filter_btn")) {
    //   sortButton.classList.remove("selected_filter_btn");
    // } else {
    // }
    for (e of Object.keys(filtersObj["sortBy"])) {
      if (filtersObj.sortBy[e]) {
        filtersObj.sortBy[e] = false;
        sortButton.classList.remove("selected_filter_btn");
      }
    }
  }

  console.log(filtersObj);

  if (container_head_rating.textContent !== "Any") {
    for (e of Object.keys(filtersObj.rating)) {
      filtersObj.rating[e] = false;
    }
    // console.log("container_head_rating.textContent: ", container_head_rating.textContent);
    filtersObj.rating[container_head_rating.textContent.split("+")[0]] = true;
    rating_btn.getElementsByTagName("p")[0].textContent = `Rating: ${container_head_rating.textContent}`;
    rating_btn.classList.add("selected_filter_btn");

    //  filter_btn_svg.style.display = "none";
    //  selected_count.style.display = "block";
    //  selected_count.textContent = +selected_count.textContent + 1;

    // if (container_head_rating.textContent.split("+")[0] != 4.0) {
    //   ////////////////////////////////////////////////
    //   console.log("filter will be add for");
    //   console.log(container_head_rating.textContent);
    //   ////////////////////////////////////////////////
    // } else {
    //   ////////////////////////////////////////////////
    //   console.log("if already 4.0 selected will break other wise make it selected");
    //   ////////////////////////////////////////////////
    // }
  }

  // filterButtonsNames = filter_buttons.getElementsByTagName("p");
  // filterButtonsNames = Array.from(filterButtonsNames);
  // for (element of filterButtonsNames) {
  //   // console.log("filterButtonsNames: ", element.textContent);
  // }

  let selectedButtons = filter_buttons.getElementsByClassName("selected_filter_btn");
  // console.log("selectedButtons: ", selectedButtons);
  // console.log("sd;f", selectedButtons.length);
  if (selectedButtons.length) {
    // console.log("aaya");
    filter_btn_svg.style.display = "none";
    // console.log("filter_btn_svg: ", filter_btn_svg);
    filter_btn.appendChild(selected_count);
    // console.log("selected_count: ", selected_count);
    selected_count.textContent = selectedButtons.length;
  } else {
    selected_count.textContent = 0;
    selected_count.style.display = "none";
  }

  filter_modal.style.display = "none";
  body.style.overflow = "auto";
}

/////////////// inspiration for you order CAROUSEL ///////////////

let inspiration_prev = document.getElementById("inspiration_prev");
let inspiration_next = document.getElementById("inspiration_next");
let inspiration_slides = document.getElementById("inspiration_slides");
let carouselItem = inspiration_slides.getElementsByClassName("carousel_item")[0];

let inspirationSlideWidth = inspiration_slides.offsetWidth;
let carouselItemWidth = carouselItem.clientWidth;
let padding = 40;

inspiration_prev.style.display = "none";
// console.log(inspiration_slides.offsetWidth - carouselItemWidth);

inspiration_prev.addEventListener("click", () => {
  inspiration_next.style.display = "flex";
  inspiration_slides.scrollLeft -= carouselItemWidth + padding;

  if (inspiration_slides.scrollLeft === carouselItemWidth + padding) {
    inspiration_prev.style.display = "none";
  }
});

inspiration_next.addEventListener("click", () => {
  inspiration_slides.scrollLeft += carouselItemWidth + padding;
  inspiration_prev.style.display = "flex";

  let lastScroll = inspiration_slides.scrollWidth - inspiration_slides.scrollLeft - carouselItemWidth - padding;

  if (lastScroll === inspirationSlideWidth) {
    inspiration_next.style.display = "none";
  }
});

////////  inspiration mobile

let inspiration_section = document.getElementsByClassName("inspiration_first_order_section")[0];
let seeMoreSvg = document.getElementsByClassName("carousel_see_more_svg")[0];

function onClickSeeMore() {
  if (inspiration_section.style.height === "450px") {
    inspiration_section.style.height = "fit-content";
    inspiration_slides.style.height = "210px";
    seeMoreSvg.classList.remove("see_more_rotate");
  } else {
    inspiration_section.style.height = "450px";
    inspiration_slides.style.height = "330px";
    seeMoreSvg.classList.add("see_more_rotate");
  }
}
/////////////// top brands for you order CAROUSEL ///////////////

let top_brands_prev = document.getElementById("top_brands_prev");
let top_brands_next = document.getElementById("top_brands_next");
let top_brands_slides = document.getElementsByClassName("top_brands_slides")[0];

let topBrandsSlideWidth = top_brands_slides.offsetWidth;
// console.log("topBrandsSlideWidth: ", topBrandsSlideWidth);

top_brands_prev.style.display = "none";

top_brands_prev.addEventListener("click", () => {
  top_brands_slides.scrollLeft -= carouselItemWidth + padding;
  top_brands_next.style.display = "flex";

  if (top_brands_slides.scrollLeft === carouselItemWidth + padding) {
    top_brands_prev.style.display = "none";
  }
});

top_brands_next.addEventListener("click", () => {
  top_brands_slides.scrollLeft += carouselItemWidth + padding;
  top_brands_prev.style.display = "flex";

  let lastScroll = top_brands_slides.scrollWidth - top_brands_slides.scrollLeft - carouselItemWidth - padding;

  if (lastScroll === topBrandsSlideWidth) {
    top_brands_next.style.display = "none";
  }
});

/////////////////////////  Explore options  ////////////////////////

let cuicines_near_me = document.getElementById("cuicines_near_me");
let restaurant_near_me = document.getElementById("restaurant_near_me");
let restaurant_chain = document.getElementById("restaurant_chain");
let citis_we_deliver = document.getElementById("citis_we_deliver");

let cuicines_near_me_svg = cuicines_near_me.getElementsByTagName("img")[0];
let restaurant_near_me_svg = restaurant_near_me.getElementsByTagName("img")[0];
let restaurant_chain_svg = restaurant_chain.getElementsByTagName("img")[0];
let citis_we_deliver_svg = citis_we_deliver.getElementsByTagName("img")[0];

let cuicines_near_me_body = cuicines_near_me.getElementsByClassName("explore_option_body")[0];
let restaurant_near_me_body = restaurant_near_me.getElementsByClassName("explore_option_body")[0];
let restaurant_chain_body = restaurant_chain.getElementsByClassName("explore_option_body")[0];
let citis_we_deliver_body = citis_we_deliver.getElementsByClassName("explore_option_body")[0];

cuicines_near_me.addEventListener("click", () => {
  if (getComputedStyle(cuicines_near_me_body)["display"] === "none") {
    cuicines_near_me_svg.style.transform = "rotate(180deg)";
    cuicines_near_me_body.style.display = "block";
  } else {
    cuicines_near_me_svg.style.transform = "rotate(360deg)";
    cuicines_near_me_body.style.display = "none";
  }
});

restaurant_near_me.addEventListener("click", () => {
  if (getComputedStyle(restaurant_near_me_body)["display"] === "none") {
    restaurant_near_me_svg.style.transform = "rotate(180deg)";
    restaurant_near_me_body.style.display = "block";
  } else {
    restaurant_near_me_svg.style.transform = "rotate(360deg)";
    restaurant_near_me_body.style.display = "none";
  }
});

restaurant_chain.addEventListener("click", () => {
  if (getComputedStyle(restaurant_chain_body)["display"] === "none") {
    restaurant_chain_svg.style.transform = "rotate(180deg)";
    restaurant_chain_body.style.display = "grid";
  } else {
    restaurant_chain_svg.style.transform = "rotate(360deg)";
    restaurant_chain_body.style.display = "none";
  }
});

citis_we_deliver.addEventListener("click", () => {
  if (getComputedStyle(citis_we_deliver_body)["display"] === "none") {
    citis_we_deliver_svg.style.transform = "rotate(180deg)";
    citis_we_deliver_body.style.display = "grid";
  } else {
    citis_we_deliver_svg.style.transform = "rotate(360deg)";
    citis_we_deliver_body.style.display = "none";
  }
});
