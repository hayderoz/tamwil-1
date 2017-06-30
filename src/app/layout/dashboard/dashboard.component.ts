import { TokRok } from './components/TokRok';
import { Component, OnInit } from '@angular/core';
 import { DatePickerOptions, DateModel } from 'ng2-datepicker';
 
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public _tokrok : any; 
    date: DateModel;
    options: DatePickerOptions;
    constructor() {
        this.date = new DateModel;
         this.options = new DatePickerOptions();
        this._tokrok = new TokRok ;
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'هلو احمد',
            text: 'وين وصلت بكلهن'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'علاوي',
            text: 'انت تكدر'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'حيدر',
            text: 'شوكت تعرف تحجي بشي الناس تفهمة مو عقلك البايض بس يفتهمة'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`,
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`,
        });
    }
    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    Settik(val)
    {
        this._tokrok.TypeLoan = val;
        console.log(this._tokrok);
    }
}
