import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AboutService} from '../../services/about/about.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  messageFromOtherSide: string = '';

  ngOnInit(): void {
    this.fetchMessageFromOtherSide();
  }

  constructor(private aboutService: AboutService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  fetchMessageFromOtherSide() {
    this.aboutService.fetchAbout().subscribe({
      next: (response) => {
        this.messageFromOtherSide = response.body?.toString() ?? 'No message from other side';
        this.changeDetectorRef.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching message from other side:', error);
        this.changeDetectorRef.detectChanges()
      },
    })
  }


}
