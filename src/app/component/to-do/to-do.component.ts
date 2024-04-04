import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  Title:string="To Do List Application";
  imageLink:string="https://cdn-icons-png.flaticon.com/512/4697/4697260.png";

  tasks:string[]=[];
  newTask:string="";
  isAvailable:boolean=false;


  addTask(){
    
    if(this.newTask.trim()!= "" ){
      const uniqueTasks = new Set([...this.tasks, this.newTask]);
      this.tasks = Array.from(uniqueTasks);
      // this.tasks.push(this.newTask);
      this.newTask="";
      this.isAvailable=true;
    }
  }
 
  // editTask(index:number){
  //   let updateTask=prompt("Edit Task",this.tasks[index]);
  //   if(updateTask != null){
  //     this.tasks[index]=updateTask.trim();
  //   }
  // }
  removeTask(index:number){
    this.tasks.splice(index,1);
    this.isAvailable=this.tasks.length > 0;
  }

  editTask(index:number,newTaskEdit:string):string|void{
    const trimedTask=newTaskEdit.trim();
    if(trimedTask != ""){
      this.tasks[index]=trimedTask;
    }
    else{
      newTaskEdit=this.tasks[index];
      return this.newTask=newTaskEdit;
    }
    this.newTask="";
  }

  
}
