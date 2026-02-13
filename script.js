"use strict";

// working with select
const select = document.querySelector("select");
const currentMonth = new Date().getMonth();

select.value = currentMonth + 1;
