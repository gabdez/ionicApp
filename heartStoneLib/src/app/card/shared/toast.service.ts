import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable()
export class ToastService {

    constructor(private toastCtrl: ToastController) { }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

}