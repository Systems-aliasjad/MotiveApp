import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-trc-auto-complete',
  templateUrl: './trc-auto-complete.component.html',
  styleUrls: ['./trc-auto-complete.component.scss']
})
export class TrcAutoCompleteComponent implements OnInit, OnChanges {
  fileNameAutoCompleteControl = new FormControl();
  filteredOptions: Observable<any[]>;
  @Input()listLimit = 0;
  @Input() options: any[] = [];
  @Input() searchPlaceholder: string = 'Search...';
  @Input() searchKey: string = ''; // 'Name';
  @Input() searchValue: string = ''; // 'Name';
  @Input() errorMessage: string = '';
  @Input() errorCondition: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() showCrossButton: boolean = true;
  @Input() defaultText;

  @Output() textCleared: EventEmitter<any> = new EventEmitter<any>();
  @Output() valueSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() keyPressed: EventEmitter<any> = new EventEmitter<any>();
  @Output() textChanged: EventEmitter<any> = new EventEmitter<any>();
  isSearchSelected: boolean = false;
  option: any;

  constructor() { }

  ngOnInit() {
    this.setupFilterForAutoComplete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setupFilterForAutoComplete();
  }

  getValueByKey(option) {
    return (this.searchValue && this.searchValue != '') ? option[this.searchValue] : option;
  }

  onTextChange($event) {
    this.textChanged.emit(this.fileNameAutoCompleteControl.value);
  }

  onKey($event) {
    if (this.fileNameAutoCompleteControl.value == null) {
      return;
    } else if (this.fileNameAutoCompleteControl.value.length === 0) {
      this.fileNameAutoCompleteControl.setValue(null);
      this.textCleared.emit(this.isSearchSelected);
      this.isSearchSelected = false;
      // console.log('user cleared search');
    } else if (this.fileNameAutoCompleteControl.value.length > 0) {
      this.keyPressed.emit(this.fileNameAutoCompleteControl.value);
    }
  }

  private setupFilterForAutoComplete() {
    this.filteredOptions = null;

    this.filteredOptions = this.fileNameAutoCompleteControl.valueChanges.pipe(
      startWith<string | any>(''),
      map(value => (typeof value === 'string' ? value : typeof value === 'object' && value == null ? undefined : value.Name)),
      map(name => (name ? this._filter(name) : (this.listLimit && this.listLimit >0) ? this.options.slice(0,this.listLimit) : this.options.slice()))
    );
    if(this.defaultText) {
      this.fileNameAutoCompleteControl.setValue(this.defaultText);
    }
  }

  resetAutoComplete($event: any) {
    this.fileNameAutoCompleteControl.reset();
    this.setupFilterForAutoComplete();
    if (!($event == null)) {
      this.textCleared.emit(this.isSearchSelected);
    }
    this.isSearchSelected = false;
  }

  searchValueSelected(matAutocompleteSelectedEvent: MatAutocompleteSelectedEvent) {
    // ExtendedMatAutoCompleteComponent._value = this.searchValue;
    this.isSearchSelected = true;
    this.valueSelected.emit(matAutocompleteSelectedEvent.option.value);
  }

  displayFn = (fileModel?: any): string | undefined => {
    console.log('fileModel', fileModel);
    return (this.searchValue && this.searchValue != '') ? (fileModel ? fileModel[this.searchValue] : undefined) : (fileModel ? fileModel : undefined);
  };

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    // return this.options.filter(option => option.toLowerCase().includes(filterValue));
    if (this.searchValue && this.searchValue != '') {
      return this.options.filter(option => {
        return (
          option[this.searchValue]
            .toString()
            .toLowerCase()
            .indexOf(filterValue) === 0
        );
      });
    } else {
      return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      // this.options.filter(option => {
      //   return (option.toString()
      //     .toLowerCase()
      //     .indexOf(filterValue) === 0
      //   );
      // });
    }

  }
}
