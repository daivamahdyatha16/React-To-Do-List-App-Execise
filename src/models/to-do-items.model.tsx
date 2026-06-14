export default interface IToDoItem {
	id: number;
	title: string;
	isDone: boolean;
	ownerId?: string;
}

export type TTodoList = IToDoItem[];

export type TToDoFilter = "All" | "Active" | "Completed";