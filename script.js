const servicos = [
  {
    nome: 'Limpeza residencial',
    descricao: 'Limpeza completa de casas e apartamentos',
    preco: 150.00
  },
  {
    nome: 'Manutenção de PC',
    descricao: 'Formatação, limpeza e instalação de softwares',
    preco: 200.00
  },
  {
    nome: 'Passeio com cachorro',
    descricao: 'Passear, alimentar e dar água',
    preco: 30.00
  },
  {
    nome: 'Reparos automotivos',
    descricao: 'Reparos gerais de automóveis',
    preco: 250.00
  },
  {
    nome: 'Limpeza pós-obra (Premium)',
    descricao: 'Limpeza pesada após reforma',
    preco: 300.00,
    taxa_extra: 50.00
  }
];

const container = document.getElementById("servicos-container");
const detalhes = document.getElementById("detalhes-servico");
const detalhesConteudo = document.getElementById("detalhes-conteudo");

// Função para criar os cards dinamicamente
function criarCards() {
  servicos.forEach((servico, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${servico.nome}</h3>
      <p class="preco">R$ ${servico.preco.toFixed(2)}</p>
      <button aria-label="Ver detalhes do serviço ${servico.nome}" onclick="mostrarDetalhes(${index})">Ver detalhes</button>
    `;
    container.appendChild(card);
  });
}

// Mostra detalhes e abre modal
function mostrarDetalhes(index) {
  const s = servicos[index];
  detalhesConteudo.innerHTML = `
    <p><strong>Nome:</strong> ${s.nome}</p>
    <p><strong>Descrição:</strong> ${s.descricao}</p>
    <p><strong>Preço:</strong> R$ ${s.preco.toFixed(2)}</p>
    ${s.taxa_extra ? `<p><strong>Taxa Extra (Premium):</strong> R$ ${s.taxa_extra.toFixed(2)}</p>` : ""}
  `;
  detalhes.classList.remove("hidden");
  detalhes.setAttribute("aria-hidden", "false");
  document.body.style.overflow = 'hidden'; // trava scroll ao abrir modal
}

// Fecha modal
function fecharDetalhes() {
  detalhes.classList.add("hidden");
  detalhes.setAttribute("aria-hidden", "true");
  document.body.style.overflow = 'auto'; // libera scroll ao fechar modal
}

// Fecha modal se clicar fora da caixa de conteúdo
detalhes.addEventListener("click", e => {
  if (e.target === detalhes) fecharDetalhes();
});

// Fecha modal com ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !detalhes.classList.contains("hidden")) {
    fecharDetalhes();
  }
});

// Cria os cards na inicialização
criarCards();
