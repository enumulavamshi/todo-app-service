
type Status = "Completed" | "Pending";

interface StandAloneTask {
    id: string;
    name: string;
    description: string;
    date: Date;
    completedDate: Date;
    labels: string[];
    status: Status;
}

interface Task {
    id: string;
    boardID: string;
    name: string;
    description: string;
    date: Date;
    completedDate: Date;
    labels: string[];
    status: Status;
    subTasks: StandAloneTask[];
    position: number;
}

interface Card  {
    id: string,
    name: string;
    task: Task,
 }; 

interface Board {
    id: string;
    name: string;
    position: number;
}