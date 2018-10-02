import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable()
export class ToastService {

    constructor(private toastCtrl: ToastController) { }

    async presentToast() {
        const toast = await this.toastCtrl.create({
          message: 'Your settings have been saved.',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }

      async presentErrorToast(message: string){
          const toast = await this.toastCtrl.create({
              message,
              position: 'top',
              duration: 3000,
              cssClass: 'toast-error'
          });
          toast.present();
      }

}