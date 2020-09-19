function excluir(id) {
  let confirmation = confirm("Você tem certeza?");

  if(!confirmation) {
    return;
  }

  fetch(API_URL+`category/${id}.json`, {
      method: "DELETE",
    })
    .then(() => {
      document.getElementById('categories-list').innerHTML = categories();
    });
}


function categories() {

    let data = [];

    fetch(API_URL+'category.json')
      .then(response => response.json())
      .then(response => {
          for (let id in response) {
            data.push(` 
                <tr>
                    <td>${response[id].name}</td>
                    <td>
                        <button onclick="excluir('${id}')" class="btn btn-sm btn-danger">Excluir &nbsp;<span class="material-icons">delete_outline</span></button>
                      </td>
                </tr>
            `);
          }

          document.getElementById('categories-list').innerHTML = data.join('');
      });

    return `
      <h1>Listar Categorias</h1>
  
      <div class="row">
        <div class="col-md-12">
          <div class="card shadow">
            <div class="card-body">
  
              <table class="table table-hover table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th>Nome</th>
                    <th>Ações</th>
                  </tr>
                </thead>
  
                <tbody id="categories-list"></tbody>
              </table>
            </div>
          <div>
        </div>
      </div>
    `;
  }

  function insertCategory() {
      if (document.getElementById('name').value === '') {
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById('name').placeholder = 'Nome é obrigatório';
        event.preventDefault();
        return;
      };


      let category = {
          name: document.getElementById('name').value,
      };

      fetch(API_URL+'category.json', {
          method: 'POST',
          body: JSON.stringify(category),
      });

      document.getElementById('page-content').innerHTML = categories();

      event.preventDefault();
  }
  
  function newCategory() {
    return `
      <h1>Nova Categoria</h1>
  
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-body">
              <form onsubmit="insertCategory()">
                <label for="name">Nome da Categoria</label>
                <input class="form-control" type="text" id="name" placeholder="Digite o nome">
  
                <br>
                <button class="btn btn-primary btn-block">Cadastrar</button>
              </form>
            </div>
          <div>
        </div>
      </div>
    `;
  }