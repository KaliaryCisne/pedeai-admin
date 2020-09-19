const menu = [
  {
    "group": "Administração",
    "items": [
      {
        "name": "Usuários",
        "icon": "group",
        "subitems": [
          {
            "text": "Listar",
            "path": "user.html",
          },
          {
            "text": "Adicionar",
            "path": "#",
          }
        ]
      },
      {
        "name": "Relatórios",
        "icon": "print",
        "subitems": []
      },
      {
        "name": "Estoque",
        "icon": "table_chart",
        "subitems": []
      }
    ],
  },
  {
    "group": "Restaurante",
    "items": [
      {
        "name": "Pedidos",
        "icon": "fastfood",
        "subitems": [
          {
            "text": "Listar",
            "path": "pedidos.html"
          },
          {
            "text": "Adicionar",
            "path": "novo-pedido.html"
          },
        ]
      }
    ],
  },
  {
    "group": "Cardápio",
    "items": [
      {
        "name": "Categorias",
        "icon": "tag",
        "subitems": [
          {
            "text": "Listar",
            "path": "categories",
          },
          {
            "text": "Adicionar",
            "path": "newCategory",
          }
        ]
      },
      {
        "name": "Items",
        "icon": "menu_book",
        "subitems": [
          {
            "text": "Listar",
            "path": "item",
          },
          {
            "text": "Adicionar",
            "path": "newItem",
          }
        ]
      },
    ],
  },
  {
    "group": "Financeiro",
    "items": [],
  },
];
