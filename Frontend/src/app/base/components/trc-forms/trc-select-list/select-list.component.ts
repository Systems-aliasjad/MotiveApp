import { Component, OnInit } from '@angular/core';
import { BaseTRCFormComponent } from '../baseTRCFormComponent';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'trc-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent extends BaseTRCFormComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {

    if (this.field && this.field.dataSource) {
      this.httpClient.get(this.field.dataSource.url).subscribe((res: any) => {
        this.field.options = [];
        //  console.log(res);
        const nameValue = res.map(i => {
          return {
            name: i[this.field.dataSource.nameValue.name],
            value: i[this.field.dataSource.nameValue.value]
          }
        });
        // console.log(nameValue)
        this.field.options = nameValue;

      }, error => {
        alert(this.field.dataSource.url + " error");
      })
    }
  }

}
