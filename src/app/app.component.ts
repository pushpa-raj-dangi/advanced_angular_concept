import { FileSizePipe } from './pipes/filesize.pipe';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FileSizePipe],
})
export class AppComponent implements OnInit {
  items = [{ name: 'hari' }, { name: 'gopal' }];
  files = [{ name: 'logo.svg', size: 12343434 }];
  mapped!: any[];

  constructor(private fileSizePipe: FileSizePipe) {}

  ngOnInit(): void {
    this.mapped = this.files.map((file) => {
      return {
        name: file.name,
        size: this.fileSizePipe.transform(file.size, 'GB'),
      };
    });
  }
}
