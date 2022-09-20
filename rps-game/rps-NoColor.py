import random

# !/usr/bin/env python3

"""This program plays a game of Rock, Paper, Scissors between two Players,
and reports both Player's scores each round."""

moves = ['rock', 'paper', 'scissors', 'lizard', 'spock']
moves2 = ['rock', 'paper', 'scissors']
moves3 = ['lizard', 'spock']

"""The Player class is the parent class for all of the Players
in this game"""


class Player:
    def __init__(self):
        self.their_move = True

    def learn(self, my_move, their_move):
        self.my_move = my_move
        self.their_move = their_move


class RockPlayer(Player):
    def move(self):
        return moves[0]


class RandomPlayer(Player):
    def move(self):
        return random.choice(moves)


class RPS_Player(Player):
    def move(self):
        return random.choice(moves2)


class LS_Player(Player):
    def move(self):
        return random.choice(moves3)


class HumanPlayer(Player):
    def move(self):
        while True:
            ask = input("SELECT YOUR MOVE:\n"
                        "'ROCK'/ 'PAPER'/ 'SCISSORS' / 'LIZARD' / 'SPOCK?\n"
                        "Type 'rule' to check the rule\n"
                        "Type 'exit' to escape >").lower()
            print()
            if ask in moves:
                return ask
                print()
            elif ask == "rule":
                print("RULE:\n"
                      "ROCK beats SCISSORS and LIZARD,\n"
                      "PAPER beats ROCK and SPOCK,\n"
                      "SCISSORS beat PAPER and LIZARD,\n"
                      "LIZARD beats PAPER and SPOCK,\n"
                      "SPOCK beats ROCK and SCISSORS.\n"
                      "First to three wins!\n"
                      "GOOD LUCK!\n")
            elif ask == 'exit':
                exit()

            else:
                print("THAT'S NOT A VALID MOVE! "
                      "PLEASE TRY AGAIN!\n")


class ReflectPlayer(Player):
    def move(self):
        if self.their_move is True:
            return random.choice(moves)
            self.their_move = False
        else:
            return self.their_move


class CyclePlayer(Player):
    def move(self):
        if self.their_move is True:
            return random.choice(moves)
            self.their_move = False
        elif self.my_move == moves[0]:
            return moves[1]
        elif self.my_move == moves[1]:
            return moves[2]
        elif self.my_move == moves[2]:
            return moves[3]
        elif self.my_move == moves[3]:
            return moves[4]
        else:
            return moves[0]


def beats(one, two):
    return ((one == 'rock' and two == 'scissors') or
            (one == 'rock' and two == 'lizard') or
            (one == 'scissors' and two == 'paper') or
            (one == 'scissors' and two == 'lizard') or
            (one == 'paper' and two == 'rock') or
            (one == 'paper' and two == 'spock') or
            (one == 'lizard' and two == 'paper') or
            (one == 'lizard' and two == 'spock') or
            (one == 'spock' and two == 'rock') or
            (one == 'spock' and two == 'scissors'))


class Game:
    def __init__(self, p1, p2):
        self.p1 = p1
        self.p2 = p2
        p1.score = 0
        p2.score = 0

    def play_round(self):
        move1 = self.p1.move()
        move2 = self.p2.move()
        print(f"YOUR MOVE: {move1}", "VS",
              f"OPPONENT MOVE: {move2}")

        if beats(move1, move2) is True:
            print("YOU WIN!")
            p1.score += 1
            print(f"YOUR SCORE: {p1.score} | OPPONENT SCORE: {p2.score}\n")
        elif move1 == move2:
            print("IT'S A TIE!")
            print(f"YOUR SCORE: {p1.score} | OPPONENT SCORE: {p2.score}\n")
        else:
            print("OPPONENT WINS!")
            p2.score += 1
            print(f"YOUR SCORE: {p1.score} | OPPONENT SCORE: {p2.score}\n")

        self.p1.learn(move1, move2)
        self.p2.learn(move2, move1)

    def play_game(self):
        print("Game start!\n")
        for round in range(1, 100):
            print(f"Round {round}:")
            self.play_round()
            if p1.score == 3:
                break
            elif p2.score == 3:
                break
        print("Game over!\n")
        if p1.score > p2.score:
            print("FINAL SCORE:\n")
            print(f"YOU > {p1.score}")
            print(f"OPPONENT > {p2.score}\n")
            print("----YOU WIN THE GAME!----")
        else:
            print("FINAL SCORE:\n")
            print(f"YOU > {p1.score}")
            print(f"OPPONENT > {p2.score}\n")
            print("----YOU LOSE THE GAME----")


if __name__ == '__main__':
    p1 = HumanPlayer()
    p2 = random.choice([RockPlayer(), RandomPlayer(), ReflectPlayer(),
                        CyclePlayer(), RPS_Player(), LS_Player()])
    game = Game(p1, p2)
    game.play_game()
