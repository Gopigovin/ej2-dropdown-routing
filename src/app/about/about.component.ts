import { Component, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
    public multidata: { [key: string]: Object }[];
        public multifields: Object;
    //set the placeholder to MultiSelect input
    public multiwatermark: string;
    // set the type of mode for how to visualized the selected items in input element.
    public box : string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.multidata  = [
        { Name: 'Andrew Fuller', Eimg: '7', Job: 'Team Lead', Country: 'England' },
        { Name: 'Anne Dodsworth', Eimg: '1', Job: 'Developer', Country: 'USA' },
        { Name: 'Janet Leverling', Eimg: '3', Job: 'HR', Country: 'USA' },
        { Name: 'Laura Callahan', Eimg: '2', Job: 'Product Manager', Country: 'USA' },
        { Name: 'Margaret Peacock', Eimg: '6', Job: 'Developer', Country: 'USA' },
        { Name: 'Michael Suyama', Eimg: '9', Job: 'Team Lead', Country: 'USA' },
        { Name: 'Nancy Davolio', Eimg: '4', Job: 'Product Manager', Country: 'USA' },
        { Name: 'Robert King', Eimg: '8', Job: 'Developer ', Country: 'England' },
        { Name: 'Steven Buchanan', Eimg: '10', Job: 'CEO', Country: 'England' }
    ];
    this.multifields = { text: 'Name', value: 'Eimg' };
    //set the placeholder to MultiSelect input
    this.multiwatermark = 'Select employees';
    // set the type of mode for how to visualized the selected items in input element.
    this.box = 'box';
  }
  public selectedID: number;
  public data: Object[];
  public fields: Object = { text: 'Game', value: 'Id' };
  ngOnInit(): void {
    this.data = [];
    this.getData();
    this.selectedID = this.route.snapshot.data['selectedID'];
  }
  getData() {
    this.data = [
      { Id: 1, Game: 'Cricket' },
      { Id: 2, Game: 'Football' },
      { Id: 3, Game: 'Golf' },
      { Id: 4, Game: 'Hockey' },
      { Id: 5, Game: 'Snooker' },
      { Id: 6, Game: 'Tennis' }
    ];
  }
  onClick(){
    this.selectedID = 3;
  }
}
