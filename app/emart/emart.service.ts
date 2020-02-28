import { Injectable } from '@angular/core';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Item } from './item';
import { Cart } from './cart';
import { Bill } from './bill';
import { BillDetails } from './bill-details';
import { Buyer } from './buyer';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class EmartService {

  categories: Category[];
  subCategories: SubCategory[];
  allItems: Item[];
  cartItems: Item[];
  allBills: Bill[];
  allSellers: Seller[];
  allBuyers: Buyer[];

  constructor() {
    this.cartItems = [];
    this.allBills = [];
    this.allBuyers = [{
      id: 1,
      username: 'abc',
      password: '123',
      email: '',
      mobile: 234234234,
      date: '19/02/2020'
    },
    {
      id: 2,
      username: 'xyz',
      password: '456',
      email: '',
      mobile: 234234234,
      date: '19/02/2020'
    }];
    this.allSellers=[{
      id:1,
    username: 'xyz',
    password: '123',
    company: '',
    brief: '',
    gst:21 ,
    address: '',
    email: '',
    website:'',
    contact: 545645454
      },
    {
      id:2,
      username: '',
      password: '',
      company: '',
      brief: '',
      gst:21 ,
      address: '',
      email: '',
      website:'',
      contact: 545645454
    }];


    this.categories = [{
      id: 501,
      name: 'Electronics',
      brief: 'Varieties of electronics like TV,Washing Machine'
    },
    {
      id: 502,
      name: 'Mobiles',
      brief: 'Varieties of SmartPhones'
    },
    {
      id: 503,
      name: 'Clothes',
      brief: 'Varieties of SmartPhones'
    }];
    this.subCategories = [{
      id: 101,
      name: 'TV',
      categoryId: 501,
      brief: 'Led 50 inches',
      gstPercent: 5

    },
    {
      id: 102,
      name: 'Headphones',
      categoryId: 501,
      brief: 'Sony',
      gstPercent: 5

    },
    {
      id: 103,
      name: 'MI',
      categoryId: 502,
      brief: 'iphone',
      gstPercent: 5

    },
    {
      id: 104,
      name: 'Samsumg',
      categoryId: 502,
      brief: 'samsung',
      gstPercent: 5

    },
    {
      id: 104,
      name: 'Western Tops',
      categoryId: 503,
      brief: 'tops',
      gstPercent: 5

    },
    {
      id: 105,
      name: 'jeans',
      categoryId: 503,
      brief: 'Denim',
      gstPercent: 5

    }];
    this.allItems = [{
      id: 201,
      name: 'LG LED',
      categoryId: 501,
      subCategoryId: 101,
      price: 50000,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 202,
      name: 'Samsung ',
      categoryId: 502,
      subCategoryId: 101,
      price: 60000,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1542487354-feaf93476caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 203,
      name: 'sony',
      categoryId: 501,
      subCategoryId: 102,
      price: 2000,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1563626451-b5b36e6e52fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 204,
      name: 'MI',
      categoryId: 501,
      subCategoryId: 102,
      price: 449,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {

      id: 205,
      name: 'MI K20pro',
      categoryId: 502,
      subCategoryId: 103,
      price: 28000,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1561474119-67d44ba3a758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"

    },
    {

      id: 206,
      name: 'MI Note 8 pro',
      categoryId: 502,
      subCategoryId: 103,
      price: 16000,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1575571536958-38aa1227786a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"

    },
    {
      id: 207,
      name: 'iPhone 6',
      categoryId: 502,
      subCategoryId: 104,
      price: 14000,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80https://unsplash.com/photos/1mdV8fuUzZs"
    },
    {
      id: 208,
      name: 'Samsung J7',
      categoryId: 502,
      subCategoryId: 104,
      price: 15000,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 209,
      name: 'floral',
      categoryId: 503,
      subCategoryId: 104,
      price: 694,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1517556268337-1dd41647ffe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80"
    },
    {
      id: 210,
      name: 'Cold Shoulder',
      categoryId: 503,
      subCategoryId: 104,
      price: 694,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://img.faballey.com/Images/Product/TOP02657A/3.jpg"
    },
    {
      id: 211,
      name: 'Denim',
      categoryId: 503,
      subCategoryId: 105,
      price: 2000,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1578825142195-17697a8c41dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    },
    {
      id: 212,
      name: 'Levis',
      categoryId: 503,
      subCategoryId: 105,
      price: 2000,
      description: '',
      stock: 5,
      remarks: 'good product',
      image: "https://images.unsplash.com/photo-1568911167661-32f2b88c19b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
    }
    ];

  }
  getAllItems(): Item[] {
    return [].concat(this.allItems);
  }

  getCategories(): Category[] {
    return [].concat(this.categories);
  }

  getSubCategories(): SubCategory[] {
    return [].concat(this.subCategories);
  }

  getAllBills(): Bill[] {
    return this.allBills;
  }

  getItem(itemId: string): Item {
    let item: Item;
    let size = this.allItems.length;
    for (let i = 0; i < size; i++) {
      if (this.allItems[i].id == +itemId) {
        //item = this.allItems[i];
        item = {
          id: this.allItems[i].id,
          name: this.allItems[i].name,
          categoryId: this.allItems[i].categoryId,
          subCategoryId: this.allItems[i].subCategoryId,
          price: this.allItems[i].price,
          description: this.allItems[i].description,
          stock: this.allItems[i].stock,
          remarks: this.allItems[i].remarks,
          image: this.allItems[i].image
        };
        break;
      }
    }
    return item;
  }

  addToCart(itemId: number) {
    let item: Item = this.getItem(itemId + '');
    this.cartItems.push(item);
  }

  getAllCart() {
    return [].concat(this.cartItems);
  }

  deleteCartItem(itemNo: number) {
    let size = this.cartItems.length;
    for (let i = 0; i < size; i++) {
      if (this.cartItems[i].id == itemNo) {
        this.cartItems.splice(i, 1);
        break;
      }
    }
  }

  addBill(buyerId: string, todayDate: string, total: number) {
    let billSize = this.allBills.length;

    let bill: Bill = {
      id: 200 + ++billSize,
      buyerId: +buyerId,
      type: 'Debit',
      date: todayDate,
      remarks: '',
      items: this.cartItems,
      amount: total
    };

    this.allBills.push(bill);
    this.cartItems = [];
  }
  validateBuyer(username:string, pass:string)
  { 
   
    let buyer:Buyer; 
    let size = this.allBuyers.length;
    for (let i = 0; i < size; i++)
    {
      
      if (this.allBuyers[i].username==username && this.allBuyers[i].password==pass)
      {
       
        buyer=
        {
          id:this.allBuyers[i].id ,
          username:this.allBuyers[i].username,
          password:this.allBuyers[i].password,
          email: this.allBuyers[i].email,
          mobile: this.allBuyers[i].mobile,
          date:this.allBuyers[i].date
        }
       
         
      }
      
      break;
     
    }console.log('1');
    return buyer;
    console.log('2');

  }
  validateSeller(user: string, password: string){
    let seller: Seller;
    let size = this.allSellers.length;
    for(let i=0; i<size; i++){
      if(this.allSellers[i].username==user && this.allSellers[i].password==password){
        seller = {
                    id: this.allSellers[i].id,
                    username: this.allSellers[i].username,
                    password: this.allSellers[i].password,
                    company: this.allSellers[i].company,
                    brief: this.allSellers[i].brief,
                    gst: this.allSellers[i].gst,
                    address: this.allSellers[i].address,
                    email: this.allSellers[i].email,
                    website: this.allSellers[i].website,
                    contact: this.allSellers[i].contact
                }
        break;
      }
    }
    return seller;
  }
}
