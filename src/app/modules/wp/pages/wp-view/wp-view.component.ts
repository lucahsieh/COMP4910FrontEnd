import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { MODE } from 'src/app/shared/model/MODE';
import { WpService } from 'src/app/core/service/wp/wp.service';
import { WorkPackage } from 'src/app/shared/model/WorkPackage';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Alert } from 'src/app/shared/model/Alert';

@Component({
  selector: 'app-wp-view',
  templateUrl: './wp-view.component.html',
  styleUrls: ['./wp-view.component.css']
})
export class WpViewComponent implements OnInit {

  @Input() projectId: string = '';
  wp: WorkPackage;
  mode: MODE = MODE.Read;
  alerts = {};
  modalRef: BsModalRef;
  validWpCode: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private wpService: WpService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var code = params.get('wpCode');
      this.wpService.getWpByWpCode(code).subscribe(w => {
        this.wp = w;
        console.log(w);
      });
    })
  }
}
