import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'references', component: ReferencesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    AchievementsComponent,
    ReferencesComponent,
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
