let seatData = document.getElementById("showseat");
let allSeat = document.getElementsByClassName("seat");
console.log(allSeat, seatData);

for (let seat of allSeat) {
  seat.addEventListener("click", function (e) {
    let seatNo = e.target.innerHTML;

    seat.classList.toggle("selected");
    if (seat.classList.contains("selected")) {
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

      seatData.appendChild(seatDetails);

      // count seat No
    } else {
      let removeelem = document.querySelector(`.${seatNo}`);
      removeelem.remove();
    }
  });
}
