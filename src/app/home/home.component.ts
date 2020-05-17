import { Component, OnInit } from '@angular/core';
import { SearchService } from "../services/search.service";
import { GlobalService } from "../services/global.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText;
  searchResult;
  constructor(private searchService: SearchService, private router: Router, private globalService: GlobalService) { }

  ngOnInit() {
  }
  search() {
    this.searchService.getSearchResult(this.searchText).subscribe(
      (results) => {
        this.searchResult = results;
      }
    )
  }
  sendMessage() {
    this.globalService.currentReceiver = this.searchResult;
    this.router.navigate(['messagePanel', this.searchResult.phoneNumber]);
  }
}
