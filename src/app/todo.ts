import { FormControl } from '@angular/forms';
export class Todo {
    id: string;
    title: string;
    createDate:Date;
    deadLine: FormControl;
    endDate:Date;
    complete: boolean = false;
    
}
