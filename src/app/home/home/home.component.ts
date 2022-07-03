import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { IMG_URLS } from './home.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgUrls: any
  cardId: any;
  filterObj: any;
  subs: Subscription[] = [];
  showContact:any
  constructor(private router: Router, private serviceservice:ServiceService) {

  }
  navigatorPage: number = 0;
  active = false;
  allObj = {
    active: true,
  };
  aboutUs =
    {
      title: "Owlearn helps you Become Experienced",
      desc: 'Owlearn provides e-learning solutions for companies, universities and'
        + ' individual professionals. It allows users to create courses, and'
        + 'provides an integrated learning management system. Its offerings'
        + 'include digital course tools, study materials, IT infrastructure and'
        + 'other operations.',
      img: '../../../assets/images/student.png'

    }
  says = {
    title: "What did they say",
    desc: 'Higher education in the era of the industrial revolution 4.0 requires breakthrough learning using digital platforms that answer the challenges of millennial students to study anywhere, anytime and with leading-edge ICT technology. From student recruitment to teaching and learning administration processes,',
    img: '../../../assets/images/kk.png'
  }
  aboutSection = true
  courseCardData: any
  categories = [
    { categoryId: '1', title: "UI/UX Design", active: false }, {
      title: 'Product Management', categoryId: '2', active: false
    }, {
      title: 'Branding Design', categoryId: '3', active: false
    },
    { title: 'Mobile Development', categoryId: '4', active: false }, {
      title: 'Web Development', categoryId: '5', active: false
    }
  ]
  ngOnInit(): void {
    this.subs.push(
      this.serviceservice.showContactUs.subscribe(res=>{
        this.showContact =res
      })
    )
    this.imgUrls = [
      {
        img: '../../../assets/images/clickup logo 1.svg'
      }
      ,
      {
        img: '../../../assets/images/dropbox_blue 1.svg'
      },
      { img: '../../../assets/images/Elastic logo 1.svg' },
      { img: '../../../assets/images/GitHub_Logo 1.svg' },
      { img: '../../../assets/images/freshbooks-logo-1 1.svg' },
      { img: '../../../assets/images/helpscout-logo 1.svg' },
      { img: '../../../assets/images/HubSpot-logo-color 2.svg' },
      { img: '../../../assets/images/intuit.svg' },
      { img: '../../../assets/images/Group 2.svg' },
      { img: '../../../assets/images/Group.svg' },

      { img: '../../../assets/images/Salesforce.svg' },
      { img: '../../../assets/images/SAP.svg' },
      { img: '../../../assets/images/Twilio—Segment—Horizontal—Green 1.svg' },
      { img: '../../../assets/images/ServiceNow.svg' },
      { img: '../../../assets/images/shopify.svg' }

    ]
    this.getallCourses()

  }
  closePopUp(){
    this.serviceservice.showContactUs.next(false)
  }
  addActive(object: any) {
    this.getallCourses()
    this.filterObj = this.courseCardData.filter((e: any) => e.categoryId == object.categoryId);
    this.courseCardData=this.filterObj
    this.allObj.active = false;
    this.categories.forEach((element) => {
      element.active = false;

    });
    object.active = !object.active;
  }
  addAllActive(){
    this.getallCourses()
    if (this.allObj.active == false) {
      this.allObj.active = true;
    }
    this.categories.forEach((element) => {
      element.active = false;
    });
  }
  showAllCourses(){
      this.router.navigate(['/AllCourses']);
  }
  courseDetails(){
    this.router.navigate(['/CourseDetails']);
  }
  getallCourses() {
    this.courseCardData = [
      {
        img: "../../../assets/images/image 20.svg",
        categoryId: '4',
        date: "1 - 28 July 2022", title: "Product Management Basic - Course Basic",
        desc: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
        priceAfter: "$ 500", priceBrfore: '$ 800', members: "120"
      },
      {
        img: "../../../assets/images/image-20-(1).svg",
        categoryId: '5',
        date: "1 - 28 July 2022", title: "Front End Developer - Basic",
        desc: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
        priceAfter: "$ 500", priceBrfore: '$ 800', members: "120"
      },
      {
        img: "../../../assets/images/image 20 (2).svg ",
        categoryId: '5',
        date: "1 - 28 July 2022", title: "Back End Developerr -Basic",
        desc: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
        priceAfter: "$ 500", priceBrfore: '$ 800', members: "120"
      },
      {
        img: "../../../assets/images/image 20 (2).svg",
        categoryId: '1',
        date: "1 - 28 July 2022", title: "UX Design - Branstroming",
        desc: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
        priceAfter: "$ 500", priceBrfore: '$ 800', members: "120"
      },
      {
        img: "../../../assets/images/image 20 (3).svg",
        categoryId: '1',
        date: "1 - 28 July 2022", title: "UI Design - Sketch",
        desc: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
        priceAfter: "$ 500", priceBrfore: '$ 800', members: "120"
      },
      {
        img: "../../../assets/images//image 20 (5).svg",
        categoryId: '1',
        date: "1 - 28 July 2022", title: "Graphic Design - Fundamental Design",
        desc: 'Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.',
        priceAfter: "$ 500", priceBrfore: '$ 800', members: "120"
      }
    ]
  }
  onNavigateCarousel(page: { page: number }): void {
    this.navigatorPage = page.page;
  }

}
