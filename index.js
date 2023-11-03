const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

const firstProduct = document.querySelector("#product1")
firstProduct.classList.add ("border-primary")

const parentBtn = document.querySelector ("#product2")
const btn = parentBtn.querySelector (".btn")
btn.classList.remove ("btn-primary")

const parentTitle = document.querySelector ("#product3")
const childTitle = parentTitle.querySelector (".card-body")
const cardTitle = childTitle.querySelector (".card-title")
cardTitle.classList.toggle ("text-center")
