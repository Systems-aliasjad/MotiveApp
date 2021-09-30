import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMessageSection1, IMotiveButton } from '../../constants/types';

@Component({
  selector: 'app-motive-message-feedback',
  templateUrl: './motive-message-feedback.component.html',
  styleUrls: ['./motive-message-feedback.component.scss'],
})
export class MotiveMessageFeedbackComponent implements OnInit {
  formGroup: FormGroup;
  @Input()
  imgSrc: String = '';
  @Input()
  Section1Data: IMessageSection1 = {
    header: '',
    paragraphs: null,
    span: '',
    spanListener: () => {},
  };

  @Input()
  button1: IMotiveButton;
  @Output()
  button1Click = new EventEmitter();

  @Input()
  button2: IMotiveButton;
  @Output()
  button2Click = new EventEmitter();

  @Input()
  button3: IMotiveButton;
  @Output()
  button3Click = new EventEmitter();

  @Output()
  formValue = new EventEmitter();

  myBtnSize;
  ngOnInit() {
    this.myBtnSize = this.button3 ? '6' : '12';
    this.createForm();
  }

  constructor(private formBuilder: FormBuilder) {}
  /*  ngOnInit(): void {} */

  button1Listener() {
    this.formValue.emit(this.formGroup.controls['Feedback'].value);
    this.button1Click.emit();
  }

  button2Listener() {
    this.button2Click.emit();
  }

  button3Listener() {
    this.button3Click.emit();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      Feedback: [''],
    });
  }

  SubmitForm() {}
}
