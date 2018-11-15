import { Component, OnInit } from '@angular/core';
import { CustomRenderComponent } from './custome-render.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _json: any;
  _ready = false;



  _settings = {
    columns: {
      id: {
        title: 'ID'
      },
      description: {
        title: 'Description'
      },
      help: {
        title: 'Help'
      },
      helpUrl: {
        title: 'Help Url'
      },
      tags: {
        title: 'Tags',
        type: 'custom',
        renderComponent: CustomRenderComponent,
      },
      noes: {
        title: 'Nodes'
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
  };

  file: any;
  onFileChange(e) {
    this.file = e.target.files[0];
    this.read_file(this.file);
  }

  read_file(file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this._json = JSON.parse(fileReader.result.toString());
      console.log('json file content ', this._json);
      this._ready = true;
    };
    fileReader.readAsText(this.file);
  }

  ngOnInit() {

  }
}
