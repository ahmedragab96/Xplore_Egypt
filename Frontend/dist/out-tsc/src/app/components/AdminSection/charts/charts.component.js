import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent(router) {
        this.router = router;
        this.links = [];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
        this.pieChartData = [120, 150, 180, 90];
        this.pieChartType = 'pie';
        this.radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
        this.radarChartData = [
            { data: [120, 130, 180, 70], label: '2017' },
            { data: [90, 150, 200, 45], label: '2018' }
        ];
        this.radarChartType = 'radar';
        this.doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
        this.doughnutChartData = [120, 150, 180, 90];
        this.doughnutChartType = 'doughnut';
    }
    ChartsComponent.prototype.ngOnInit = function () {
        this.links.push({ name: 'Dashboard', link: '/admin', icon: 'book' }, { name: 'Charts', link: '/admin/charts', icon: 'bar_chart' }, { name: 'Statistics', link: 'statistics', icon: 'trending_up' });
    };
    ChartsComponent.prototype.navigateTo = function (link) {
        console.log(link);
        this.router.navigate([link]);
    };
    ChartsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-charts',
            templateUrl: './charts.component.html',
            styleUrls: ['./charts.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ChartsComponent);
    return ChartsComponent;
}());
export { ChartsComponent };
//# sourceMappingURL=charts.component.js.map