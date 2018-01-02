import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CoreService } from 'meepo-core';
import { UuidService } from 'meepo-uuid';

@Directive({
    selector: 'qrcode,[qrcode]'
})
export class QrcodeComponent implements OnInit {
    qrSrc: string = 'https://meepo.com.cn/meepo/libs/qrcode.min.js';
    QRCode: any;
    _qrcode: any;

    @Input() width: number = 328;
    @Input() height: number = 328;
    _url: string = 'https://meepo.com.cn';

    @Input()
    set qrcode(val: string) {
        this._url = val;
        if (this._url) {
            this.createQrcode(this._url, this.width, this.height);
        }
    }
    get qrcode() {
        return this._url;
    }

    constructor(
        public core: CoreService,
        public uuid: UuidService,
        public ele: ElementRef
    ) { }

    ngOnInit() {
        this.createQrcode(this._url, this.width, this.height);
    }

    createQrcode(url: string, width: number, height: number) {
        let qr = this.loadJScript(this.qrSrc, 'QRCode').subscribe(QRCode => {
            this.QRCode = QRCode;
            this.ele.nativeElement.innerHTML = '';
            this._qrcode = new this.QRCode(this.ele.nativeElement, {
                text: url,
                width: width,
                height: height,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: this.QRCode.CorrectLevel.H
            });
            qr.unsubscribe();
        });
    }

    loadJScript(src: string, key: string): Subject<any> {
        const laodSuccess: Subject<any> = new Subject();
        if (window[key]) {
            setTimeout(() => {
                laodSuccess.next(window[key]);
            }, 0);
        } else {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = src;
            script.onload = () => {
                let swiper = window[key];
                laodSuccess.next(swiper);
            };
            script.onerror = () => {
                console.log('加载失败');
            };
            document.body.appendChild(script);
        }
        return laodSuccess;
    }
}