const userTable = document.querySelector("#user-table tbody");
const roleTable = document.querySelector("#role-table tbody");
const permissionTable = document.querySelector("#permission-table tbody");

document.getElementById("add-user").addEventListener("click", () => {
  const newRow = userTable.insertRow();
  const id = userTable.rows.length;
  newRow.innerHTML = `
    <td>${id}</td>
    <td contenteditable="true">New User</td>
    <td contenteditable="true">newuser@example.com</td>
    <td contenteditable="true">Viewer</td>
    <td contenteditable="true">Active</td>
    <td>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
      <button class="save-btn" style="display: none;">Save</button>
    </td>`;
  addEventListeners();
});

document.getElementById("add-role").addEventListener("click", () => {
  const newRow = roleTable.insertRow();
  const id = roleTable.rows.length;
  newRow.innerHTML = `
    <td>${id}</td>
    <td contenteditable="true">New Role</td>
    <td contenteditable="true">Read</td>
    <td>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
      <button class="save-btn" style="display: none;">Save</button>
    </td>`;
  addEventListeners();
});
const toggleModeBtn = document.getElementById('toggle-mode');
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


document.getElementById("add-permission").addEventListener("click", () => {
  const newRow = permissionTable.insertRow();
  const id = permissionTable.rows.length;
  newRow.innerHTML = `
    <td>${id}</td>
    <td contenteditable="true">New User</td>
    <td contenteditable="true">New Permission</td>
    <td>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
      <button class="save-btn" style="display: none;">Save</button>
    </td>`;
  addEventListeners();
});

function addEventListeners() {
  document.querySelectorAll(".delete-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.target.closest("tr").remove();
    })
  );

  document.querySelectorAll(".edit-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      row.querySelectorAll("td[contenteditable]").forEach((cell) => {
        cell.setAttribute("contenteditable", "true");
      });
      row.querySelector(".save-btn").style.display = "inline";
      e.target.style.display = "none";
    })
  );

  document.querySelectorAll(".save-btn").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const row = e.target.closest("tr");
      row.querySelectorAll("td[contenteditable]").forEach((cell) => {
        cell.removeAttribute("contenteditable");
      });
      row.querySelector(".edit-btn").style.display = "inline";
      e.target.style.display = "none";
    })
  );
}

addEventListeners();
