import { Component } from '@angular/core';
import { FilesizePipe } from './filesize.pipe';

interface File {
  name: string,
  size: any,
  type: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FilesizePipe]
})
export class AppComponent {
  files: File[];
  mapped: File[];
  constructor(private filesizePipe: FilesizePipe) {}
  ngOnInit() {
    this.files = [
      { name: 'Logo.svg', size: 2120109, type: 'image/svg' },     
      { name: 'Background.png', size: 1784562, type: 'image/png' }
    ];

    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.filesizePipe.transform(file.size, 'mb')
      };
    });

  }

}
