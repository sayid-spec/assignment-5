let seatData = document.getElementById("showseat");
let total = document.getElementById("total");
let grandTotal = document.getElementById("grand");
let coupon = document.getElementById("coupon");
let allSeat = document.getElementsByClassName("seat");
let couponBtn = document.getElementById("applyCoupon");
let discountBox = document.getElementById("discountBox");
let seatLeft = document.getElementById("seat-left");
let bookedSeat = document.getElementById("booked-seat");
let nextBtn = document.getElementById("nextBtn");
console.log(couponBtn);
let fairSum = 0;
let selectedSeatCount = 0;
// console.log(allSeat, seatData);

for (let seat of allSeat) {
  seat.addEventListener("click", function (e) {
    let seatNo = e.target.innerHTML;
    // next btn disablity

    phone.addEventListener("keyup", function () {
      if (selectedSeatCount > 0 && phone.value.length >= 10) {
        nextBtn.disabled = false;
      } else {
        nextBtn.disabled = true;
      }
    });

    if (selectedSeatCount < 4) {
      seat.classList.toggle("selected");
      if (seat.classList.contains("selected")) {
        // count seat No

        selectedSeatCount++;
        //   update booked seat and seat left
        bookedSeat.innerHTML = selectedSeatCount;
        seatLeft.innerHTML = 40 - selectedSeatCount;

        //   append seat details
        let seatDetails = document.createElement("div");
        seatDetails.classList.add("seatdetails");
        seatDetails.classList.add(`${seatNo}`);
        let col1 = document.createElement("h2");
        col1.innerHTML = seatNo;
        let col2 = document.createElement("h2");
        col2.innerHTML = "economy";
        let col3 = document.createElement("h2");
        col3.innerHTML = 550;
        seatDetails.appendChild(col1);
        seatDetails.appendChild(col2);
        seatDetails.appendChild(col3);

        fairSum += +col3.innerText;
        total.innerText = fairSum;
        grandTotal.innerText = fairSum;

        seatData.appendChild(seatDetails);

        // console.log(selectedSeatCount);

        if (selectedSeatCount === 4) {
          couponBtn.disabled = false;
          couponBtn.addEventListener("click", function () {
            if (coupon.value === "NEW15") {
              couponbox.classList.add("hidden");

              discountBox.classList.remove("hidden");
              let totalPrice = +total.innerHTML;
              let discountPrice = (totalPrice * 15) / 100;
              discount.innerHTML = discountPrice;
              grandTotal.innerText = totalPrice - discountPrice;
            } else if (coupon.value === "Couple 20") {
              couponbox.classList.add("hidden");
              discountBox.classList.remove("hidden");
              let totalPrice = +total.innerHTML;
              let discountPrice = (totalPrice * 20) / 100;
              discount.innerHTML = discountPrice;
              grandTotal.innerText = totalPrice - discountPrice;
            } else {
              alert("Invalid Coupon code");
            }
          });
        }

        //   end
      } else {
        let removeelem = document.querySelector(`.${seatNo}`);

        fairSum -= +removeelem.lastChild.innerText;
        total.innerText = fairSum;

        removeelem.remove();
        selectedSeatCount--;
        // console.log(selectedSeatCount);
      }
    } else {
      alert("you can only select 4 seat at once");
    }
  });
}
