import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    @ViewChild('lineCanvas', null) lineCanvas: ElementRef;
    private lineChart: Chart;

    public items: Array<{ name: string; id: number }> = [{name: 'parag', id : 1},{name: 'avani', id : 1},{name: 'naman', id : 1}];

    constructor(private router: Router) {
    }

    openDetailsWithQueryParams(item) {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                item: JSON.stringify(item),
            }
        };
        this.router.navigate(['detail'], navigationExtras);
    }

    ngOnInit() {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false
                    }
                ]
            }
        });
    }

}
