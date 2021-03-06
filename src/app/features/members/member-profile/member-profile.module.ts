import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberProfileRoutingModule} from './member-profile-routing.module';
import {MemberProfileComponent} from './member-profile.component';
import {SmartadminLayoutModule} from '@app/shared/layout';
import {StatsModule} from '@app/shared/stats/stats.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {SharedModule} from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SmartadminLayoutModule,
        StatsModule,
        MemberProfileRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot()
    ],
    declarations: [MemberProfileComponent]
})
export class MemberProfileModule {
}
