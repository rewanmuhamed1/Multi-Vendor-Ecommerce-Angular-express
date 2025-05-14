import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDollarSign , faCartPlus , faUsers , faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule ,BaseChartDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faDollarSign = faDollarSign;
  faCartPlus = faCartPlus;
  faUsers = faUsers;
  faCartShopping = faCartShopping;

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apl',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [23, 34, 45, 56, 76, 34, 23, 76, 87, 78, 34, 45],
        label: 'Orders',
        backgroundColor :'#3b82f6'
      },
      {
        data: [67, 39, 45, 56, 90, 56, 23, 56, 87, 78, 67, 78],
        label: 'Revenue',
       backgroundColor:'#ffce56'
      },
      {
        data: [34, 39, 56, 56, 80, 67, 23, 56, 98, 78, 45, 56],
        label: 'Sellers',
       backgroundColor:'#06b6d4',
      },
    ]
       
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

}
