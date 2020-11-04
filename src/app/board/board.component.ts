import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[];
  crossIsNext: boolean;
  winner: string;

  get player(): string {
    return this.crossIsNext ? 'O' : 'X';
  }
  constructor() { }

  /**
   * Initialize a new game
   */
  ngOnInit(): void {
    this.createNewGame();
  }

  /**
   * Initialise the variables required
   * to start the game
   */
  createNewGame(): void {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.crossIsNext = true;
  }


  /**
   * When the player clicks on a box, the new value
   * 'X' or 'O' is written in the grid. This method
   * is used to achieve the above mentioned feature, and
   * also change the next player's value
   * @param index index of the 9 grid array
   */
  createMove(index: number): void {
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.player);
      this.crossIsNext = !this.crossIsNext;
    }
    this.winner = this.calculateWinner();
  }

  /**
   * Method to find out the winner
   */
  calculateWinner(): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < lines.length; i++) {
      const [col1, col2, col3] = lines[i];
      if (
        this.squares[col1] &&
        this.squares[col1] === this.squares[col2] &&
        this.squares[col1] === this.squares[col3]
      ) {
        return this.squares[col1];
      }
    }
    return null;
  }

}
