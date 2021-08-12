import { Component, OnInit, Input } from '@angular/core';
import { CommonPopupService } from '../../../base/service/common-popup.service';
import { AppConfigService } from '../../../base/service/app-config.service';
import { environment } from '../../../../environments/environment';

enum errorReason {
  type = 'type',
  size = 'size',
  no_multiple = 'no_multiple'
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() accept = 'image/*';
  @Input() multiple = false;
  @Input() maxFileSize: number = undefined;
  @Input() disabled = false;
  @Input() removable = true; // allow use to remove the image

  files: File[] = [];
  fileData: string[] = [];

  constructor(private popupService: CommonPopupService, private appConfig: AppConfigService) { }
  ngOnInit() {
    this.maxFileSize = environment.maxFileSize;
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onFilesAdded(event) {
    console.log(event);
    if (!this.multiple) {
      this.files = [];
    }
    this.files.push(...event.addedFiles);
    if (this.files.length > 0) {
      if (event.rejectedFiles.length > 0) {
        switch (event.rejectedFiles[0]) {
          case errorReason.type:
            this.popupService.notify('error', `Please upload the ${this.accept} files only.`);
            break;
          case errorReason.size:
            this.popupService.notify('error', `The file size should be less than ${this.maxFileSize}.`);
            break;
          case errorReason.no_multiple:
            this.popupService.notify('error', `Please upload the single file only.`);
            break;
          default:
            this.popupService.notify('error', 'Please upload the image file only.');
            break;
        }
      } else if (event.addedFiles.length > 0) {
        event.addedFiles.forEach((item) => {
          this.readFile(item).then((fileContents) => {
            this.fileData.push(fileContents as string);
          });
        });
      }
    }
  }

  private async readFile(file: File): Promise<string | ArrayBuffer | Blob> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        return resolve((e.target as FileReader).result);
      };

      reader.onerror = (e) => {
        console.error(`FileReader failed on file ${file.name}.`);
        return reject(null);
      };

      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }
      console.log(file);
      reader.readAsDataURL(file);
    });
  }
}
