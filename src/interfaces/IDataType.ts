
export interface Pokedex {
    results: Result[];
}

export interface Result {
    category: string;
    type: Type;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export enum Difficulty {
    Easy = "easy",
}

export enum Type {
    Multiple = "multiple",
}
