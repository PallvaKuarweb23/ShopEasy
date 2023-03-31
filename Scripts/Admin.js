let data = [];
// ///////////////////////////////////////////////////////////////////////////////
let url1 = "https://mockapi-nr5i.onrender.com/Smartphones";

fetchData();

function showAddModal() {
  document.getElementById("add-modal").style.display = "block";
}

function closeAddModal() {
  document.getElementById("add-modal").style.display = "none";
}

let registerButton = document.querySelector("#submitform1");
registerButton.addEventListener("click", registerdeta);
let form = document.querySelector("#add-form");
async function registerdeta(event) {
  event.preventDefault();
  //  console.log(data)
  try {
    let obj = {
      image: form.image.value,
      name: form.name.value,
      price: form.number.value,
      description: form.desc.value,
      gender: form.gender.value,
      category: form.category.value,

      // department:registerUserLevel.value
    };
    // console.log(obj)

    let register_request = await fetch(`${url1}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    //  console.log(register_request)
    fetchData();
  } catch (error) {
    console.log(error);
  }
}

function renderCardList(cardData) {
  let cardList = `
    <div class="card-list">
      ${cardData
        .map((item) =>
          getCard(
            item.id,
            item.name,
            // item.department,
            item.image,
            item.price,
            item.category,
            item.gender,
            item.description
          )
        )
        .join("")}
    </div>
  `;

  mainSection = document.querySelector("#data-table-body");
  mainSection.innerHTML = cardList;
}

function getCard(id, name, image, number, category, gender, desc) {
  let card = `
        <tr>
            <td>${id}</td>
            <td><img src="${image}" height="100" width="100"></td>
            <td>${name}</td>
            <td>${category}</td>
             <td>${gender}</td>
            <td>${number}</td>
            <td>${desc}</td>
            <td><button id="delete" onclick="deleteData(${id})">Delete</button></td>
        </tr>
  `;
  return card;
}

async function fetchData() {
  try {
    let get_employee = await fetch(`${url1}`);
    let data = await get_employee.json();

    renderCardList(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  document.querySelector("#footer").style = "block";
  document.querySelector("#toptodown").style.display = "block";
}

// DELETE///

async function deleteData(id) {
  // Find item with matching id
  let item = data.find((i) => i.id === id);
  // Remove item from data array
  data.splice(data.indexOf(item), 1);

  try {
    // Remove item from API
    let response = await fetch(`${url1}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    fetchData();
    if (!response.ok) {
      throw new Error("Failed to delete item from API");
    }
    // Remove item from table
    let tableRow = document.querySelector(
      `#data-table-body tr[data-id="${id}"]`
    );
    tableRow.remove();
    // showEditModal(id)
  } catch (error) {
    console.error(error);
  }
}

// /////////////////UPDATE-PRICE///////////////////////////////

document
  .querySelector("#form2")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
      let id = document.querySelector("#Product_id").value;
      let price = document.querySelector("#update_price").value;

      let Patch_request = await fetch(`${url1}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price: price }),
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  });

document.querySelector("#womenY").addEventListener("click", function () {
  window.location.assign("Admin2.html");
});
