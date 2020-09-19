const renderContent = (functionName) => {
  let content = window[functionName]();

  document.getElementById('page-content').innerHTML = content;
}


const mountSubitems = (subitems) => {
  return subitems.map(subitem => `
    <a class="collapse-item" href='#' onclick="renderContent('${subitem.path}')">
      ${subitem.text}
    </a>
  `);
};

const mountItems = (menuItems) => {
  return menuItems.map(item => `
    <li class="nav-item">
      <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse-${item.name}" aria-expanded="true" aria-controls="collapseTwo">
        <i class="material-icons">${item.icon}</i>
        <span>${item.name}</span>
      </a>

      <div id="collapse-${item.name}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          ${mountSubitems(item.subitems).join('')}
        </div>
      </div>
    </li>
  `);
};

const options = menu.map(each => {
  return `
    <hr class="sidebar-divider">

    <div class="sidebar-heading">
      ${each.group}
    </div>

    ${mountItems(each.items).join('')}
  `
});

document.getElementById('pedeai-sidebar').innerHTML = `
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <a class="nav-link" href="index.html">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
    </li>

    ${options.join('')}

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

  </ul>
`;
