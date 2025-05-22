class Servico {
  constructor(nome, descricao, preco) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = parseFloat(preco);
    this.codigo_interno = self.crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2);
  }

  exibirDados() {
    return `Nome: ${this.nome}
Descrição: ${this.descricao}
Preço: R$ ${this.preco.toFixed(2)}
Código interno: ${this.codigo_interno}`;
  }

  aplicarDesconto(percentual) {
    const desconto = (this.preco * percentual) / 100;
    this.preco -= desconto;
  }

  atualizarPreco(novoPreco) {
    this.preco = parseFloat(novoPreco);
  }
}

class ServicoPremium extends Servico {
  constructor(nome, descricao, preco, taxaExtra) {
    super(nome, descricao, preco);
    this.taxaExtra = parseFloat(taxaExtra);
  }

  aplicarTaxaExtra() {
    this.preco += this.taxaExtra;
  }

  exibirDados() {
    return super.exibirDados() + `\nTaxa extra (premium): R$ ${this.taxaExtra.toFixed(2)}`;
  }
}

const form = document.getElementById("formServico");
const premiumCheckbox = document.getElementById("premium");
const taxaExtraContainer = document.getElementById("taxaExtraContainer");
const resultadoDiv = document.getElementById("resultado");

premiumCheckbox.addEventListener("change", () => {
  taxaExtraContainer.style.display = premiumCheckbox.checked ? "block" : "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const preco = document.getElementById("preco").value;
  const premium = premiumCheckbox.checked;
  const taxaExtra = document.getElementById("taxaExtra").value || 0;

  let servico;
  if (premium) {
    servico = new ServicoPremium(nome, descricao, preco, taxaExtra);
    servico.aplicarTaxaExtra();
  } else {
    servico = new Servico(nome, descricao, preco);
  }

  resultadoDiv.textContent = "Serviço cadastrado com sucesso:\n\n" + servico.exibirDados();

  form.reset();
  taxaExtraContainer.style.display = "none";
});
