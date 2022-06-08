import { textSpanIntersectsWithPosition } from 'typescript';

export function getPersons(): {
    name: string;
    age: number;
    gender: 'male' | 'female';
}[];

export function personToString(person: {
    age: number;
    gender: string;
    name: string;
    company?: string;
}): string;
