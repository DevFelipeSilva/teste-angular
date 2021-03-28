import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ProfileService } from '../_service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {

  @Input() user: string
  profile:any = {}

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) { 
     this.getProfile(changes.user.currentValue);
  }
  getProfile(userValue){
    this.profileService.getProfile(userValue).subscribe((data)=>{
     // console.log(data)
      this.profile = data
    })
  }

}
