const modules = [
  {
    name: "Main",
    description: "Enrollment, Classroll, Appraisal",
    image: "images/main.webp"
  },
  {
    name: "Accounting",
    description: "SLS, CRS, CDS, JV, GL, BTS",
    image: "images/accounting.webp"
  },
  {
    name: "Cashier",
    description: "Collections, Bank Deposits",
    image: "images/cashier.webp"
  },
  {
    name: "Transaction Charts",
    description: "Non-AR Other Fees",
    image: "images/charts.webp"
  },
  {
    name: "Management",
    description: "Promissory, Config, System Users",
    image: "images/management.webp"
  },
  {
    name: "FCU WebPortal",
    description: "Students and Teachers",
    image: "images/portal.webp"
  },
  {
    name: "University Enterprise",
    description: "Collection and Inventory Sales",
    image: "images/ue.webp"
  },
  {
    name: "Payroll",
    description: "Salaries, Payslips, Loans",
    image: "images/payroll.webp"
  },
  {
    name: "HR Office",
    description: "Employee Records, Leave, Benefits",
    image: "images/hr.webp"
  }
];

const container = document.getElementById("cardContainer");

modules.forEach(module => {

  const card = document.createElement("a");
  card.className = "card";
  card.href = `login.html?module=${encodeURIComponent(module.name)}`;

  card.innerHTML = `
      <img src="${module.image}" alt="${module.name}">
      <div class="card-body">
          <h3>${module.name}</h3>
          <p>${module.description}</p>
      </div>
  `;

  container.appendChild(card);

});