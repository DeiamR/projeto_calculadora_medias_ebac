const form = document.getElementById("form_atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji feliz" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji feliz" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima: "));


let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizaMediaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById("nome_atividade");
    const inputNotaAtividade = document.getElementById("nota_atividade");

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("valor_media_final").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("resultado_media_final").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}