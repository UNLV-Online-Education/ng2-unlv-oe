import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unlv-oe-footer',
  template: `
    <footer class="unlv-oe-footer">
    	<div class="container">
        <a href="//online.unlv.edu" target="_blank"><img class="oe-logo" src="vendor/ng2-unlv-oe/src/assets/images/Online_Education_500w_trimmed.png" alt="UNLV Online Education Logo"></a>
        <p class="copyright">
    			&copy; {{copyright}} UNLV Online Education
    		</p>
    	</div>
    </footer>
  `,
  styles: [`
    .unlv-oe-footer {
        height: 5.25rem;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        text-align: center;
        display: block;
    }
    .unlv-oe-footer img.oe-logo {
        max-width: 100%;
        width: 300px;
        margin-bottom: .25rem;
    }
    .unlv-oe-footer p.copyright {
        margin: 0;
        font-size: .75rem;
    }
  `]
})
export class UnlvOeFooterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  copyright = new Date().getFullYear();

}
