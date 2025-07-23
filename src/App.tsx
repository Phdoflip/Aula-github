import './App.css'
import { somar, dividir } from './utils/math';
import { gerarSaudacao, despedida } from './utils/saudacoes';
import { formatarMoeda, formatarData } from './utils/formatador';
import { ehPar, ehMaiorDeIdade } from './utils/verificacoes';
import { obterHoraAtual, obterDiaSemana } from './utils/tempo';


function App() {
  const nome = 'Lucas';
  const preco = 1234.5;
  const hoje = new Date();
   const idade = 17;
  const numero = 10;


  return (
    <div>
      <h1>Soma: {somar(4, 2)}</h1>
      <h1>Divisão: {dividir(10, 2)}</h1>
      <p>{gerarSaudacao(nome)}</p>
      <p>{despedida(nome)}</p>
      <p>Preço: {formatarMoeda(preco)}</p>
      <p>Hoje é: {formatarData(hoje)}</p>
       <p>{numero} é par? {ehPar(numero) ? 'Sim' : 'Não'}</p>
      <p>{idade} anos → Maior de idade? {ehMaiorDeIdade(idade) ? 'Sim' : 'Não'}</p>
      <p>Hoje é: {obterDiaSemana()}</p>
      <p>Hora atual: {obterHoraAtual()}</p>
    </div>
  );


  
}

export default App