// Importar funções de outros arquivos JS, se necessário
// import { generateSudokuGrid } from './sudoku-generator.js';
// import { solveSudoku } from './sudoku-solver.js';

// Variável para armazenar a grade do Sudoku
let sudokuGrid = [];

// Função para inicializar o jogo
function initializeGame() {
  // Gerar a grade do Sudoku
  // sudokuGrid = generateSudokuGrid();

  // Renderizar a grade na página
  renderSudokuGrid();
}

// Função para renderizar a grade do Sudoku na página
function renderSudokuGrid() {
  const gridElement = document.getElementById('sudoku-grid');

  // Limpar qualquer conteúdo existente
  gridElement.innerHTML = '';

  // Adicionar cada célula à grade
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('div');
      cell.classList.add('sudoku-cell');
      // cell.textContent = sudokuGrid[i][j];
      gridElement.appendChild(cell);
    }
  }
}

// Inicializar o jogo quando a página for carregada
window.onload = initializeGame;