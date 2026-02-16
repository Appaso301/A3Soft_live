import { Component, OnInit, OnDestroy } from '@angular/core';

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
}
