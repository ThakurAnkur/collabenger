import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { MessageService } from "../services/message.service";

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.css']
})
export class MessagePanelComponent implements OnInit {
  phoneNumber
  constructor(private route: ActivatedRoute, private globalService: GlobalService, private messageService: MessageService) { }

  ngOnInit() {
    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber');
    this.messageService.generateChannelId(this.globalService.userDetail._id, (this.globalService.currentReceiver._id)).subscribe((data) => {
      console.log(data);

    });
  }
}
