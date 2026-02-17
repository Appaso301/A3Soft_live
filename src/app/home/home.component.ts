import { Component, OnInit, OnDestroy } from '@angular/core';

interface Testimonial {
  name: string;
  message: string;
  education: string;
  role: string;
  theme: string;
  avatar: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/image-11.png',
    'assets/images/image-12.png',
  ];

currentIndex: number = 0;
slideIn: boolean = true;
private autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.slideIn = false;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.slideIn = true;
    }, 100);
    this.resetAutoSlide();
  }

  previousSlide(): void {
    this.slideIn = false;
    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.slideIn = true;
    }, 100);
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.slideIn = false;
    setTimeout(() => {
      this.currentIndex = index;
      this.slideIn = true;
    }, 100);
    this.resetAutoSlide();
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private resetAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  onView(courseName: string) {
    alert(courseName + ' View More clicked');
  }

  connectTeam() {
    window.open(
      'https://wa.me/91xxxxxxxxxx?text=Hi%20I%20want%20career%20counseling',
      '_blank',
    );
  }



// review card 




  testimonials: Testimonial[] = [
    {
      name: 'Arun',
      message: `I joined Ashok IT with no prior experience in IT. The trainers and placement support team helped me build confidence, and now I’m working as a Java Developer.`,
      education: 'B.Tech Graduated in 2019',
      role: 'Java Developer at TCS',
      theme: 'yellow',
      avatar: 'assets/avatar1.png'
    },
    {
      name: 'Chandra',
      message: `Ashok IT gave me the right direction in my career. Their real-time project exposure helped me crack interviews with ease.`,
      education: 'MCA Graduated in 2018',
      role: 'Software Engineer at JP Morgan',
      theme: 'blue',
      avatar: 'assets/avatar2.png'
    },
    {
      name: 'Neha',
      message: `Thanks to Ashok IT’s trainers, I was able to switch my career from non-IT to IT. The hands-on training and mock interviews made all the difference.`,
      education: 'MBA Graduated in 2020',
      role: 'Business Analyst at Infosys',
      theme: 'yellow',
      avatar: 'assets/avatar3.png'
    },
    {
      name: 'Ravi Kumar',
      message: `Ashok IT is the best choice for freshers looking to enter the software field. The faculty is supportive, and their placement team helped me secure my first job.`,
      education: 'B.Sc Graduated in 2021',
      role: 'Python Developer at Cognizant',
      theme: 'blue',
      avatar: 'assets/avatar4.png'
    },
    {
      name: 'Priya Sharma',
      message: `Joining Ashok IT was a turning point in my career. The structured training and continuous support helped me land a job as a Data Analyst within 3 months of completing the course.`,
      education: 'B.Com Graduated in 2022',
      role: 'Data Analyst at Wipro',
      theme: 'yellow',
      avatar: 'assets/avatar5.png'
    },
    {
      name: 'Sai Kiran',
      message: `With Ashok IT’s guidance, I was able to upskill in Full Stack Development. Their real-time projects and mock interview sessions made me confident during actual job interviews.`,
      education: 'B.Tech Graduated in 2023',
      role: 'Full Stack Developer at Capgemini',
      theme: 'blue',
      avatar: 'assets/avatar6.png'
    }
  ];


// callback_button


  requestCallBack() {
    alert('Request Call Back clicked!');
    // You can open a modal or navigate here
  }
}
//  callback_button end




 






