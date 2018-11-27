import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId: number;
  user$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.userId = params.id );
  }

  ngOnInit() {
    this.data.getUser(this.userId).subscribe(
      data => this.user$ = data
    );
  }

}
