import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RepositoryService } from '../_service/repository.service';

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
  repository: any = '';

  constructor(private getrepositories: RepositoryService) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) { 
    this.userName =changes.user.currentValue
    this.getRepositories(changes.user.currentValue);
 }
 getRepositories(userValue: string){
    this.getrepositories.getRepositories(userValue).subscribe((data)=>{
      this.repositories = data
    })
 }
 getRepository(repositoryName: string){
   if(this.panelOpenState)
    this.getrepositories.getRepository(this.userName, repositoryName).subscribe((data)=>{
      console.log(data);
      this.repository = data
    })
 }

}
