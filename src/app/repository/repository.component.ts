import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RepositoryService } from '../_service/repository.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit, OnChanges {
  panelOpenState = false;
  @Input() user: string
  repositories:any = ''
  userName: string;

  constructor(private getrepositories: RepositoryService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) { 
    this.userName = changes.user.currentValue
    this.getRepositories(changes.user.currentValue);
 }
 getRepositories(userValue: string){
    this.getrepositories.getRepositories(userValue).subscribe((data)=>{
      // console.log(data)
      this.repositories = data;
    },(err)=>{
      console.log(err)
      if(err.status == 404){
          this._snackBar.open('Usuário não existe', null, {
            duration: 2000,
            panelClass: ['text-white', 'font-weight-bold']
          });
      }
      if(err.status == 403){
        this._snackBar.open('Máximo de requisições feitas', null, {
          duration: 2000,
          panelClass: ['text-white', 'font-weight-bold']
        });
    }
    })
 }


}
