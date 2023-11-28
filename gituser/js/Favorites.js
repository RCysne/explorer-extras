// 2 classes
// 1 classe contendo a lógica e organizando os dados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    //Iniciar com o app rodando a função load para carregar a lista na sequência vai para o FavoritesView rodando o update
    this.load()
  }

  load() {
    const entries = JSON.parse(localStorage.getItem('@github-favorites:') || [])

    console.log(entries)

    // const entries = [
    //   {
    //     login: 'RCysne',
    //     name: 'Ronaldo Cysne',
    //     public_repos: 50,
    //     followers: 20
    //   },
    //   {
    //     login: 'maykbrito',
    //     name: 'Mayk Brito',
    //     public_repos: 76,
    //     followers: 1200
    //   }
    // ]

    // this.entries = entries
  }

  //--- Deletando o usuário e atualizando a tabela com os novos valores

  delete(user) {
    const filteredEntries = this.entries.filter(
      entry => entry.login !== user.login
    )

    // console.log(filteredEntries)

    this.entries = filteredEntries
    this.update()
  }
}

// 1 classe que vai criar a visualização e eventos do HTML

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  //--- Fazendo o update dos dados

  // Depois da remoção, recriar a tabela com os dados atualizados
  // Recriando a linha e depois adicionando no elemento pai com o append
  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `
      https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('tem certeza que deseja deletar essa linha?')
        if (isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  //--- Criando as linhas

  createRow() {
    const tr = document.createElement('tr')

    const content = `
    <td class="user">
    <img
    src="https://github.com/RCysne.png"
    alt="Imagem de Ronaldo Cysne"
    />
    <a href="https://github.com/RCysne" target="_blank">
    <p>Ronaldo Cysne</p>
    <span>RCysne</span>
    </a>
    </td>
    <td class="repositories">50</td>
    <td class="followers">10</td>
    <td>
    <button class="remove">&times;</button>
    </td>
    `

    tr.innerHTML = content

    // console.log(tr)
    return tr
  }

  //---- Removendo as trs

  // ForEach para passar em todos os elemento e a função remove para remover todas as linhas da tabela
  removeAllTr() {
    // const tbody = this.root.querySelector('table tbody')

    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}
