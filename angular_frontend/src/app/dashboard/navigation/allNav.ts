import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGauge ,faCartShopping , faCubes , faUser , faCreditCard , faUserXmark , faCodePullRequest , faComment} from '@fortawesome/free-solid-svg-icons';


export const allNav = [
    {
       
        title : 'Dashboard',
        icon :  faGauge,
        role : 'admin',
        path: '/admin/dashboard'
    },
     {
        
        title : 'Orders',
        icon : faCartShopping,
        role : 'admin',
        path: '/admin/dashboard/orders'
    },
    {
       
        title : 'Category',
        icon : faCubes,
        role : 'admin',
        path: '/admin/dashboard/category'
    },
    {
       
        title : 'Sellers',
        icon : faUser,
        role : 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
       
        title : 'Payment Request',
        icon : faCreditCard,
        role : 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        
        title : 'Deactive Sellers',
        icon : faUserXmark,
        role : 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
       
        title : 'Seller Request',
        icon : faCodePullRequest,
        role : 'admin',
        path: '/admin/dashboard/sellers-request'
    },
    {
       
        title : 'Live Chat',
        icon : faComment,
        role : 'admin',
        path: '/admin/dashboard/chat-seller'
    }
    // seller routes
    ,
    {
        title : 'Pending',
        icon : faGauge,
        path: '/seller/account-pending',
        ability : 'seller' 
    },
    {
        title : 'Pending',
        icon : faGauge,
        path: '/seller/account-deactive',
        ability : 'seller' 
    },
    {
        
        
        title : 'Dashboard',
        icon : faGauge,
        path: '/seller/dashboard',
        status : 'active',
        ability : 'seller' 
    },
    {
        
        title : 'Add Product',
        icon : faGauge,
        role : 'seller',
        path: '/seller/dashboard/add-product',
        status : 'active'
    },     
    {
      
        title : 'All Product',
        icon : faGauge,
        role : 'seller',
        path: '/seller/dashboard/products',
        status : 'active'
    },
    {
        
        title : 'Discount Product',
        icon : faGauge,
        role : 'seller',
        path: '/seller/dashboard/discount-product',
        status : 'active'
    },
    {
       
        title : 'Orders',
        icon : faGauge,
        role : 'seller',
        path: '/seller/dashboard/orders',
        visibility : ['active','deactive']
    },
    {
       
        title : 'Payments',
        icon : faGauge,
        role : 'seller',
        path: '/seller/dashboard/payments',
        status : 'active'
    },
    {
       
        title : 'Chat-Customer',
        icon : faGauge,
        role : 'seller',
        path: '/seller/dashboard/chat-customer',
        status : 'active'
    },
    {
        
        title : 'Chat-Support',
        icon : faGauge,
        role : 'seller',
        path: '/seller/dashboard/chat-support',
        visibility : ['active','deactive','pending']
    },
    {
        
        title : 'Profile',
        icon : faGauge,
        role : 'seller',
        path: '/seller/dashboard/profile',
        status : 'active'
    }
   
   

]